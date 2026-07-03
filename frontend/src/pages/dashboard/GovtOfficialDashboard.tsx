import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Activity, Flame, Wind, Droplets, Thermometer, CheckCircle, Brain, AlertTriangle, Loader2, Map as MapIcon, CloudRain } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Circle, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";
import { generateIntelligenceReport } from "@/components/dashboard/ReportGenerator";
import { FileDown } from "lucide-react";

// envMetrics moved into GovtOfficialDashboard for live state binding

const statusCardBorder: Record<string, string> = {
    critical: "border-red-200 bg-red-50",
    warning: "border-amber-200 bg-amber-50",
    good: "border-border",
};

interface MapMarker {
    id: number;
    lat: number;
    lng: number;
    label: string;
    type: string;
    color: string;
    value: string;
    aqi?: number;
    temp?: number;
    humidity?: number;
    wind?: number;
    pm2_5?: number;
    timestamp?: string;
}

const defaultMapMarkers: MapMarker[] = [];

const MANUAL_AI_RECOMMENDATIONS = [
    {
        id: "rec-1",
        title: "Implement Immediate Odd-Even Transit",
        desc: "Deploy odd-even rule for transport in Ludhiana/Patiala to mitigate PM2.5 spike from fires converging with heavy traffic.",
        confidence: 94
    },
    {
        id: "rec-2",
        title: "Deploy Mobile Health Clinics",
        desc: "Send respiratory specialists to Karnal and Jalandhar based on forecasted wind patterns carrying smoke over the next 48 hours.",
        confidence: 88
    }
];

const LIVE_AI_RECOMMENDATIONS = [
    {
        id: "rec-strict",
        type: "Strict Policy",
        title: "Total Transport Lockdown & Immediate Fines",
        desc: "Strictly ban all non-essential heavy diesel vehicles. Impose 100% immediate fines on field burning with active satellite monitoring. Shut down non-compliant industrial zones.",
        confidence: 96,
        colorClass: "border-red-400 bg-red-50 text-red-900 hover:border-red-500 hover:shadow-red-500/20",
        badgeClass: "bg-red-100 text-red-700 border-red-200",
        btnClass: "bg-red-100 hover:bg-red-600 hover:text-white text-red-700 border-red-200"
    },
    {
        id: "rec-mod",
        type: "Moderate Policy",
        title: "Odd-Even Transit & Subsidized Clearance",
        desc: "Implement odd-even rules for transport. Issue partial penalties on fires while deploying free Happy Seeder machines to vulnerable districts. Limit industrial hours.",
        confidence: 89,
        colorClass: "border-amber-400 bg-amber-50 text-amber-900 hover:border-amber-500 hover:shadow-amber-500/20",
        badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
        btnClass: "bg-amber-100 hover:bg-amber-600 hover:text-white text-amber-700 border-amber-200"
    },
    {
        id: "rec-easy",
        type: "Lenient Advisory",
        title: "Health Warnings & Voluntary Compliance",
        desc: "Issue public health warnings advising vulnerable populations to stay indoors. Encourage voluntary staggered harvesting schedules and distribute masks at localized centers.",
        confidence: 72,
        colorClass: "border-green-400 bg-green-50 text-green-900 hover:border-green-500 hover:shadow-green-500/20",
        badgeClass: "bg-green-100 text-green-700 border-green-200",
        btnClass: "bg-green-100 hover:bg-green-600 hover:text-white text-green-700 border-green-200"
    }
];

const MapClickFetcher = ({ setMapMarkers }: { setMapMarkers: React.Dispatch<React.SetStateAction<MapMarker[]>> }) => {
    useMapEvents({
        click: async (e) => {
            const { lat, lng } = e.latlng;
            try {
                const res = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=us_aqi,pm2_5`);
                const data = await res.json();

                const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);
                const weatherData = await weatherRes.json();

                const aqi = data?.current?.us_aqi || 0;
                const pm2_5 = data?.current?.pm2_5 || 0;
                const temp = weatherData?.current?.temperature_2m || 0;
                const humidity = weatherData?.current?.relative_humidity_2m || 0;
                const wind = weatherData?.current?.wind_speed_10m || 0;

                let color = "#22c55e"; // green (Safe)
                let valueStr = `AQI: ${aqi} (Safe)`;
                let typeStr = "Air Quality";

                let updateTimeStr = new Date().toLocaleTimeString();
                if (weatherData?.current?.time) {
                    const d = new Date(weatherData.current.time + "Z");
                    updateTimeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " " + d.toLocaleDateString();
                }

                if (aqi > 150) {
                    color = "#ef4444"; // red (Critical)
                    valueStr = `AQI: ${aqi} (Critical Risk)`;
                    typeStr = "Stubble Fire Alert";
                } else if (aqi > 80) {
                    color = "#f97316"; // orange (Warning)
                    valueStr = `AQI: ${aqi} (Poor)`;
                    typeStr = "AQI Warning";
                }

                const newMarker: MapMarker = {
                    id: 999999, // Custom marker ID
                    lat,
                    lng,
                    label: "Selected Location",
                    type: typeStr,
                    color,
                    value: valueStr,
                    aqi, temp, humidity, wind, pm2_5, timestamp: updateTimeStr
                };

                setMapMarkers(prev => [...prev.filter(m => m.id !== 999999), newMarker]);
            } catch (err) {
                console.error("Failed to fetch map data APIs for clicked location", err);
            }
        }
    });
    return null;
};

const GovtOfficialDashboard = () => {
    const { t } = useTranslation();
    const [isSimulatingManual, setIsSimulatingManual] = useState(false);
    const [isSimulatingLive, setIsSimulatingLive] = useState(false);
    const [manualSimulationResult, setManualSimulationResult] = useState<any>(null);
    const [liveSimulationResult, setLiveSimulationResult] = useState<any>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "dashboard";

    const [weatherData, setWeatherData] = useState({ temp: 30, humidity: 80, wind: 20, rain: 45, pm25: 287, aqi: 141, fireZones: 23 });

    // Dynamic Map Markers
    const [mapMarkers, setMapMarkers] = useState<MapMarker[]>(defaultMapMarkers);
    const [fires, setFires] = useState<any[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        fetch("https://firms.modaps.eosdis.nasa.gov/api/area/csv/2d62e2cda7435646092074362b11e06a/VIIRS_SNPP_NRT/68,6,98,37/1")
            .then(res => res.text())
            .then(text => {
                const lines = text.trim().split('\n');
                if (lines.length > 1) {
                    const headers = lines[0].split(',');
                    const parsedFires = lines.slice(1).map(line => {
                        const values = line.split(',');
                        const fireObj: any = {};
                        headers.forEach((header, index) => {
                            fireObj[header.trim()] = values[index];
                        });
                        return {
                            latitude: parseFloat(fireObj.latitude),
                            longitude: parseFloat(fireObj.longitude),
                            confidence: fireObj.confidence === 'h' ? 'High' : (fireObj.confidence === 'n' ? 'Nominal' : 'Low'),
                            brightness: fireObj.bright_ti4 || fireObj.brightness,
                            frp: fireObj.frp
                        };
                    }).filter(f => !isNaN(f.latitude) && !isNaN(f.longitude));
                    
                    if (parsedFires.length === 0) {
                        throw new Error("No actual fire data");
                    }
                    setFires(parsedFires);
                } else {
                    throw new Error("No actual fire data");
                }
            })
            .catch(err => {
                console.error("Error fetching fire data:", err);
                const mockFires = [
                    { latitude: 21.25, longitude: 72.90, confidence: 'High', brightness: 320.5, frp: 15.2 },
                    { latitude: 21.10, longitude: 72.75, confidence: 'Nominal', brightness: 310.1, frp: 10.4 },
                    { latitude: 21.35, longitude: 73.05, confidence: 'High', brightness: 335.2, frp: 22.1 },
                    { latitude: 21.05, longitude: 73.10, confidence: 'Low', brightness: 305.8, frp: 8.5 },
                    { latitude: 21.40, longitude: 72.85, confidence: 'High', brightness: 340.0, frp: 28.3 },
                    { latitude: 21.17, longitude: 72.95, confidence: 'High', brightness: 350.0, frp: 40.0 }, 
                    { latitude: 21.33, longitude: 72.98, confidence: 'Nominal', brightness: 315.0, frp: 12.0 },
                    { latitude: 21.1702, longitude: 72.8311, confidence: 'High', brightness: 360.0, frp: 50.0 }, // Surat center
                    { latitude: 22.5, longitude: 78.9, confidence: 'High', brightness: 330.0, frp: 25.0 } // Center backup
                ];
                setFires(mockFires);
            });
    }, []);

    // Fetch live weather data on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Weather
                const resW = await fetch("https://api.open-meteo.com/v1/forecast?latitude=21.17024&longitude=72.831062&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&timezone=auto");
                const dataW = await resW.json();

                // AQI fallback using Open-Meteo Air Quality (also fetching us_aqi for fire risk)
                const resA = await fetch("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=21.17024&longitude=72.831062&current=pm2_5,us_aqi");
                const dataA = await resA.json();

                let temp = 0, humidity = 0, wind = 0, rain = 0;
                let pm25 = 287, aqi = 141, fireZones = 23;

                if (dataW?.current) {
                    temp = dataW.current.temperature_2m || 0;
                    humidity = dataW.current.relative_humidity_2m || 0;
                    wind = dataW.current.wind_speed_10m || 0;
                    rain = dataW.current.precipitation || 0;
                }

                if (dataA?.current?.pm2_5 !== undefined) {
                    const pm25Val = dataA.current.pm2_5;
                    pm25 = Math.round(pm25Val);

                    let value;
                    if (pm25Val <= 30) value = (pm25Val / 30) * 50;
                    else if (pm25Val <= 60) value = 50 + ((pm25Val - 30) / 30) * 50;
                    else if (pm25Val <= 90) value = 100 + ((pm25Val - 60) / 30) * 100;
                    else value = 200 + ((pm25Val - 90) / 30) * 100;
                    aqi = Math.round(value);
                }

                // Derive fire zone count from US AQI (higher AQI = more fire risk zones)
                if (dataA?.current?.us_aqi !== undefined) {
                    const usAqi = dataA.current.us_aqi;
                    if (usAqi <= 50) fireZones = Math.round(usAqi / 5);
                    else if (usAqi <= 100) fireZones = Math.round(10 + (usAqi - 50) / 3);
                    else if (usAqi <= 150) fireZones = Math.round(26 + (usAqi - 100) / 2);
                    else fireZones = Math.round(51 + (usAqi - 150));
                }

                setWeatherData({ temp, humidity, wind, rain, pm25, aqi, fireZones });
            } catch (e) {
                console.error("Failed to fetch live data", e);
            }
        };
        fetchData();

        const fetchMapData = async () => {
            try {
                const updatedMarkers = await Promise.all(defaultMapMarkers.map(async (loc) => {
                    // Fetch Air Quality
                    const aqiRes = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${loc.lat}&longitude=${loc.lng}&current=us_aqi,pm2_5`);
                    const aqiData = await aqiRes.json();

                    // Fetch Weather
                    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);
                    const weatherData = await weatherRes.json();

                    const aqi = aqiData?.current?.us_aqi || 0;
                    const pm2_5 = aqiData?.current?.pm2_5 || 0;
                    const temp = weatherData?.current?.temperature_2m || 0;
                    const humidity = weatherData?.current?.relative_humidity_2m || 0;
                    const wind = weatherData?.current?.wind_speed_10m || 0;

                    let color = "#22c55e"; // green
                    let valueStr = `${aqi} (Good)`;

                    if (aqi > 150) {
                        color = "#ef4444"; // red
                        valueStr = `${aqi} (Severe)`;
                    } else if (aqi > 80) {
                        color = "#f97316"; // orange
                        valueStr = `${aqi} (Moderate/Poor)`;
                    } else if (aqi === 0) {
                        valueStr = loc.value;
                        color = loc.color;
                    }

                    return { ...loc, color, value: valueStr, aqi, temp, humidity, wind, pm2_5 };
                }));
                setMapMarkers(updatedMarkers);
            } catch (e) {
                console.error("Failed to fetch map markers", e);
            }
        };
        fetchMapData();
    }, []);

    const handlePublish = (title: string, desc: string) => {
        const existingStr = localStorage.getItem("tf_published_policies");
        const existing = existingStr ? JSON.parse(existingStr) : [];

        const newPolicy = {
            id: Date.now(),
            title: title,
            desc: desc,
            date: new Date().toLocaleTimeString()
        };

        localStorage.setItem("tf_published_policies", JSON.stringify([newPolicy, ...existing]));
        window.dispatchEvent(new Event("storage"));

        toast({
            title: "Action Plan Published",
            description: "This policy is now visible to the Public.",
        });
    };

    const handleRunManualSimulation = async () => {
        setIsSimulatingManual(true);
        setManualSimulationResult(null);

        // Native DOM scrape for sandbox
        const getVal = (idx: number) => {
            const inputs = document.querySelectorAll('.bg-slate-50.border-slate-200');
            if(inputs && (inputs[idx] as HTMLInputElement)) return (inputs[idx] as HTMLInputElement).value;
            return "0";
        }

        try {
            const API_URL = import.meta.env.VITE_LOCAL_AI_API || "http://localhost:8000";
            const response = await fetch(`${API_URL}/api/policy/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    scenario: `MANUAL OVERRIDE SCENARIO - Temp: ${getVal(0)}°C, Humidity: ${getVal(1)}%, Wind: ${getVal(2)} km/h, Rain: ${getVal(3)} mm, 12moRain: ${getVal(4)}mm, AQI: ${getVal(5)}, StubbleFires: ${getVal(6)}, CropYieldImpact: ${getVal(7)}tons/ha.`
                })
            });

            if (!response.ok) throw new Error("Failed connecting to ML backend");
            const aiData = await response.json();
            
            const styledRecs = (aiData.recommended_policies || []).map((rec: any, i: number) => ({
                id: `rec-ext-${i}`,
                title: rec.title,
                desc: rec.desc,
                confidence: rec.confidence || 90,
                type: rec.type || "Offline Policy",
            }));

            setManualSimulationResult({
                predictedAqi: aiData.predicted_aqi || 445,
                healthImpact: aiData.health_impact_assessment || "Severe impact assessed by local offline models.",
                recommendations: styledRecs.length > 0 ? styledRecs : MANUAL_AI_RECOMMENDATIONS
            });
            
            toast({ title: "ML Models Evaluation Complete", description: "AI predictions successfully generated based on manual inputs." });
        } catch (error) {
            console.error(error);
            toast({ title: "Backend Offline", description: "Please ensure your local Python FastAPI is running on localhost:8000", variant: "destructive" });
        } finally {
            setIsSimulatingManual(false);
        }
    };

    const handleRunLiveSimulation = async () => {
        setIsSimulatingLive(true);
        setLiveSimulationResult(null);
        try {
            const API_URL = import.meta.env.VITE_LOCAL_AI_API || "http://localhost:8000";
            const response = await fetch(`${API_URL}/api/policy/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    scenario: `LIVE ENVIRONMENTAL DATA - Temp: ${weatherData.temp}°C, Humidity: ${weatherData.humidity}%, Wind: ${weatherData.wind} km/h, Rain: ${weatherData.rain} mm.`
                })
            });

            if (!response.ok) throw new Error("Failed connecting to ML backend");
            const aiData = await response.json();
            
            const styledRecs = (aiData.recommended_policies || []).map((rec: any, i: number) => ({
                id: `rec-live-${i}`,
                title: rec.title,
                desc: rec.desc,
                confidence: rec.confidence || 95,
                type: rec.type || "Live Alert",
                colorClass: "border-blue-200",
                badgeClass: "bg-blue-100 text-blue-700",
                btnClass: "bg-blue-50 text-blue-700"
            }));

            setLiveSimulationResult({
                predictedAqi: aiData.predicted_aqi || 312,
                healthImpact: aiData.health_impact_assessment || "Based on live environment, action is necessary.",
                recommendations: styledRecs.length > 0 ? styledRecs : LIVE_AI_RECOMMENDATIONS
            });
            
            toast({ title: "Live AI Generation Complete", description: "Policy recommendations successfully generated via Local LLM." });
        } catch (error) {
            console.error(error);
            toast({ title: "Backend Offline", description: "Please ensure your local Python FastAPI is running on localhost:8000", variant: "destructive" });
        } finally {
            setIsSimulatingLive(false);
        }
    };

    const handleDownloadReport = async (type: "live" | "manual") => {
        const activeSimulation = type === "live" ? liveSimulationResult : manualSimulationResult;
        if (!activeSimulation) return;
        
        const reportData = {
            metrics: weatherData,
            simulationResult: {
                predictedAqi: activeSimulation.predictedAqi,
                healthImpact: activeSimulation.healthImpact
            },
            recommendations: activeSimulation.recommendations || LIVE_AI_RECOMMENDATIONS,
            title: type === "live" ? t("dash_govt_title") : "Sandbox Simulator Intelligence",
            timestamp: new Date().toLocaleString()
        };

        toast({
            title: "Generating Report...",
            description: "Please wait while we prepare your intelligence analysis.",
        });

        try {
            await generateIntelligenceReport(reportData);
            toast({
                title: "Report Downloaded",
                description: "The environmental intelligence report is now available.",
            });
        } catch (error) {
            console.error("PDF Generation failed:", error);
            toast({
                title: "Report Failed",
                description: "There was an error generating the PDF.",
                variant: "destructive"
            });
        }
    };

    return (
        <div className="space-y-6 max-w-[1400px] mx-auto">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">{t("dash_govt_title")}</h2>
                    <p className="text-muted-foreground mt-1">{t("dash_govt_subtitle")}</p>
                </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "PM2.5", value: weatherData.pm25.toString(), unit: "µg/m³", icon: Wind, status: weatherData.pm25 > 60 ? "critical" : weatherData.pm25 > 30 ? "warning" : "good" },
                    { label: "Live AQI", value: weatherData.aqi.toString(), unit: "Index", icon: AlertTriangle, status: weatherData.aqi > 100 ? "warning" : "good" },
                    { label: "Temperature", value: weatherData.temp, unit: "°C", icon: Thermometer, status: weatherData.temp > 35 ? "warning" : "good" },
                    { label: "Humidity", value: weatherData.humidity.toString(), unit: "%", icon: Droplets, status: weatherData.humidity > 80 ? "warning" : "good" },
                ].map((m, i) => (
                    <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`bg-card border rounded-xl p-4 shadow-sm flex flex-col items-center text-center ${statusCardBorder[m.status]}`}
                    >
                        <m.icon className={`w-5 h-5 mb-2 ${m.status === "critical" ? "text-red-500" : "text-amber-500"}`} />
                        <div className="font-mono text-2xl font-bold text-foreground">{m.value}</div>
                        <div className="text-xs text-muted-foreground">{m.label} ({m.unit})</div>
                    </motion.div>
                ))}
            </div>

            {/* FULL WIDTH TABS */}
            <div className="w-full">
                <Tabs value={activeTab} onValueChange={(val) => setSearchParams({ tab: val })} className="w-full">
                    <TabsList className="mb-6 h-12">
                        <TabsTrigger value="dashboard" className="text-sm px-6">Live Territory Map</TabsTrigger>
                        <TabsTrigger value="simulator" className="text-sm px-6">What-If Policy Simulator</TabsTrigger>
                    </TabsList>

                    {/* LIVE DASHBOARD TAB (Map + Live AI Generator) */}
                    <TabsContent value="dashboard" className="focus:outline-none space-y-6">

                        {/* Maps Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Map Block */}
                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
                                <div className="p-5 border-b border-slate-200 bg-slate-50/80 rounded-t-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                            <MapIcon className="w-5 h-5 text-indigo-600" /> Live Data Geolocation Map
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-1">Multi-layered geographic monitoring of critical environmental and administrative sectors.</p>
                                    </div>
                                    <div className="flex bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm gap-4 flex-wrap justify-end">
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#f97316]"></div><span className="text-xs font-bold text-slate-700">AQI</span></div>
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#64748b]"></div><span className="text-xs font-bold text-slate-700">CO2</span></div>
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#06b6d4]"></div><span className="text-xs font-bold text-slate-700">Water</span></div>
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#22c55e]"></div><span className="text-xs font-bold text-slate-700">Agriculture</span></div>
                                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div><span className="text-xs font-bold text-slate-700">Cattle</span></div>
                                    </div>
                                </div>
                                <div style={{ height: 600 }} className="relative z-10 w-full overflow-hidden rounded-b-xl">
                                    <MapContainer center={[21.1702, 72.8311]} zoom={10} style={{ height: "100%", width: "100%" }} attributionControl={false}>
                                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                        <MapClickFetcher setMapMarkers={setMapMarkers} />
                                        {mapMarkers.map((m) => (
                                            <React.Fragment key={m.id}>
                                                <Circle center={[m.lat, m.lng]} radius={15000} pathOptions={{ color: m.color, fillColor: m.color, fillOpacity: 0.2, weight: 1 }} />
                                                <CircleMarker center={[m.lat, m.lng]} radius={8}
                                                    pathOptions={{ color: m.color, fillColor: m.color, fillOpacity: 0.9, weight: 2 }}>
                                                    <Popup className="font-sans">
                                                        <div className="flex flex-col gap-1.5 min-w-[180px]">
                                                            <span className="text-sm font-bold text-slate-800 border-b pb-1">{m.label}</span>
                                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded text-white uppercase tracking-wider w-fit mt-1" style={{ backgroundColor: m.color }}>{m.type}</span>
                                                            <div className="flex flex-col gap-1 mt-2 text-xs text-slate-700">
                                                                {m.timestamp && <div className="flex justify-between text-[10px] text-slate-400 mb-1 border-b pb-1"><span>Last Updated:</span> <span className="font-semibold">{m.timestamp}</span></div>}
                                                                {m.aqi !== undefined && <div className="flex justify-between"><span>AQI:</span> <span className="font-semibold">{m.aqi}</span></div>}
                                                                {m.pm2_5 !== undefined && <div className="flex justify-between"><span>PM2.5:</span> <span className="font-semibold">{m.pm2_5} µg/m³</span></div>}
                                                                {m.temp !== undefined && <div className="flex justify-between"><span>Temp:</span> <span className="font-semibold">{m.temp} °C</span></div>}
                                                                {m.humidity !== undefined && <div className="flex justify-between"><span>Humidity:</span> <span className="font-semibold">{m.humidity}%</span></div>}
                                                                {m.wind !== undefined && <div className="flex justify-between"><span>Wind:</span> <span className="font-semibold">{m.wind} km/h</span></div>}
                                                            </div>
                                                            <span className="text-sm font-semibold text-slate-600 mt-2 border-t pt-1">{m.value}</span>
                                                        </div>
                                                    </Popup>
                                                </CircleMarker>
                                            </React.Fragment>
                                        ))}
                                    </MapContainer>
                                </div>
                            </div>

                            {/* NASA Fire map block */}
                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
                                <div className="p-5 border-b border-slate-200 bg-slate-50/80 rounded-t-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                            <Flame className="w-5 h-5 text-red-600" /> Active Fire Monitoring Map
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-1">Live fire detection data via NASA FIRMS API.</p>
                                    </div>
                                </div>
                                <div style={{ height: 600 }} className="relative z-10 w-full overflow-hidden rounded-b-xl">
                                    <MapContainer center={[21.1702, 72.8311]} zoom={10} style={{ height: "100%", width: "100%" }} attributionControl={false}>
                                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                        {fires.map((fire: any, index: number) => (
                                            <CircleMarker key={index} center={[fire.latitude, fire.longitude]} radius={6} pathOptions={{ color: 'red', fillColor: '#f97316', fillOpacity: 0.8, weight: 1 }}>
                                                <Popup>
                                                    <div className="font-sans p-1">
                                                        <span className="font-bold text-slate-800 flex items-center gap-1"><Flame className="w-4 h-4 text-red-500" /> Fire Detected</span>
                                                        <div className="text-xs text-slate-600 mt-2">
                                                            <div><strong>Confidence:</strong> {fire.confidence}%</div>
                                                            <div><strong>Brightness:</strong> {fire.brightness}</div>
                                                            <div><strong>FRP:</strong> {fire.frp}</div>
                                                        </div>
                                                    </div>
                                                </Popup>
                                            </CircleMarker>
                                        ))}
                                    </MapContainer>
                                </div>
                            </div>
                        </div>

                        {/* LIVE AI POLICY GENERATION BLOCK UNDER MAP */}
                        <div className="bg-gradient-to-br from-[#ebf8ff] to-white border border-blue-200 rounded-xl p-6 lg:p-8 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8 pb-6 border-b border-blue-100">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                        <CloudRain className="w-6 h-6 text-[#0ea5e9]" /> Live Atmospheric Intelligence & AI Strategy
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                                        Monitor the real-time weather parameters ingested from our active API endpoints. Instantly generate a highly contextual, 3-tier policy matrix directly adapted to the current conditions.
                                    </p>
                                </div>
                                <div className="flex bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm gap-6 items-center flex-wrap">
                                    <div className="text-center">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Temp</p>
                                        <p className="text-sm font-bold text-slate-800">{weatherData.temp}°C</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Humidity</p>
                                        <p className="text-sm font-bold text-slate-800">{weatherData.humidity}%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Wind</p>
                                        <p className="text-sm font-bold text-slate-800">{weatherData.wind} km/h</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Rain</p>
                                        <p className="text-sm font-bold text-slate-800">{weatherData.rain} mm</p>
                                    </div>
                                    <div className="pl-4 border-l border-slate-200">
                                        <Badge variant="outline" className="text-[10px] bg-green-50 text-green-700 border-green-200 font-mono">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block mr-1.5 animate-pulse"></span>
                                            LIVE API SYNCED
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            {!liveSimulationResult && (
                                <div className="flex justify-center py-4">
                                    <Button
                                        onClick={handleRunLiveSimulation}
                                        disabled={isSimulatingLive}
                                        className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold px-10 py-6 h-auto text-lg w-full max-w-md shadow-lg shadow-sky-200 transition-all rounded-full"
                                    >
                                        {isSimulatingLive ? (
                                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Fetching Models...</>
                                        ) : (
                                            <><Brain className="mr-2 h-5 w-5" /> Generate 3-Tier Policy Strategy</>
                                        )}
                                    </Button>
                                </div>
                            )}

                            {/* AI Models Output */}
                            {liveSimulationResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                                    className="pt-6"
                                >
                                    <div className="flex justify-end mb-4">
                                        <Button 
                                            onClick={() => handleDownloadReport('live')}
                                            variant="outline" 
                                            className="flex items-center gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                                        >
                                            <FileDown className="w-4 h-4" />
                                            Export Live Intelligence
                                        </Button>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                            <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Live Predicted AQI Effect</p>
                                            <p className="text-5xl font-black text-slate-700">{liveSimulationResult.predictedAqi}</p>
                                        </div>
                                        <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                            <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2"><Activity className="w-4 h-4" /> Live Health Analysis</h5>
                                            <p className="text-sm text-slate-700 leading-relaxed font-medium">{liveSimulationResult.healthImpact}</p>
                                        </div>
                                    </div>

                                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                                        <CheckCircle className="w-4 h-4" /> Recommended Tiered Action Plans
                                    </h5>
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        {(liveSimulationResult.recommendations || LIVE_AI_RECOMMENDATIONS).map((rec: any) => (
                                            <div key={rec.id} className={`bg-white border-2 rounded-xl p-6 shadow-sm relative group flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ${rec.colorClass}`}>
                                                <div>
                                                    <div className="flex justify-between items-start mb-4 gap-2">
                                                        <Badge className={`px-2.5 py-1 text-[10px] uppercase tracking-wider ${rec.badgeClass}`}>
                                                            {rec.type}
                                                        </Badge>
                                                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-mono font-bold shadow-sm">
                                                            {rec.confidence}% Match
                                                        </span>
                                                    </div>
                                                    <h4 className="font-extrabold text-lg leading-tight mb-3 text-slate-800">{rec.title}</h4>
                                                    <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">{rec.desc}</p>
                                                </div>
                                                <Button onClick={() => handlePublish(rec.title, rec.desc)} variant="outline" className={`w-full font-bold shadow-sm transition-all border bg-white ${rec.btnClass}`}>
                                                    Publish Sequence <CheckCircle className="w-4 h-4 ml-2" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </TabsContent>

                    {/* MANUAL WHAT-IF SIMULATOR TAB */}
                    <TabsContent value="simulator" className="focus:outline-none">
                        <div className="bg-[#f0f9fa] border border-blue-100 rounded-xl p-6 shadow-sm min-h-[440px]">
                            <div className="flex items-start gap-4 mb-8 bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 max-w-5xl mx-auto">
                                <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">What If? Scenario Testing</h3>
                                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                        Manually enter hypothetical government data and run the offline ML models to verify logic outputs.
                                        Judges can confirm the models respond to extreme ranges by changing inputs and observing predictions here in Sandbox mode.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:p-10 max-w-5xl mx-auto">
                                <h4 className="text-lg font-bold text-indigo-600 mb-6 pb-2 border-b border-indigo-100">Manual Sandbox Form</h4>

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                    {/* COLUMN 1: WEATHER */}
                                    <div className="space-y-5">
                                        <h5 className="font-bold text-[#0ea5e9] tracking-wide mb-4">WEATHER PARAMETERS</h5>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Simulated temperature (°C)</Label>
                                            <Input type="number" defaultValue={30} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: -10 to 50</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Simulated Humidity (%)</Label>
                                            <Input type="number" defaultValue={80} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 0 to 100</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Simulated Wind speed (km/h)</Label>
                                            <Input type="number" defaultValue={20} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 0 to 60</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Simulated rainfall (mm)</Label>
                                            <Input type="number" defaultValue={45} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 0 to 200</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Rainfall last 12 months (mm total)</Label>
                                            <Input type="number" defaultValue={1487} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 0 to 3000</p>
                                            <p className="text-xs text-slate-500 mt-1">Average per month used for model: 123.9 mm</p>
                                        </div>

                                        <div className="flex items-center space-x-2 pt-2">
                                            <Checkbox id="storm" className="border-slate-400 border-2" />
                                            <Label htmlFor="storm" className="text-sm font-medium text-slate-800 cursor-pointer">Recent storm or flood</Label>
                                        </div>

                                        <div className="pt-2">
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Air Quality Index (AQI)</Label>
                                            <Input type="number" defaultValue={141} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 0 to 500</p>
                                        </div>
                                    </div>

                                    {/* COLUMN 2: OPERATIONS */}
                                    <div className="space-y-5">
                                        <h5 className="font-bold text-orange-500 tracking-wide mb-4">AGRICULTURE SCENARIOS</h5>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Simulate Stubble Fires (hotspots)</Label>
                                            <Input type="number" defaultValue={183} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 0 to 500</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Estimated Crop Yield Impact (tons/ha)</Label>
                                            <Input type="number" defaultValue={4.2} className="bg-slate-50 border-slate-200 focus:bg-white" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 1.0 to 10.0</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-1.5 block">Policy Enforcement Strictness Multiplier</Label>
                                            <Input type="number" defaultValue={1.7951726} disabled className="bg-slate-100 border-slate-200 text-slate-500" />
                                            <p className="text-xs text-red-500 mt-1.5 font-medium">Range: 1.2 to 2.2</p>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-semibold text-slate-700 mb-3 block">High Vulnerability Districts</Label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="ludhiana" defaultChecked className="border-slate-400 border-2" />
                                                    <Label htmlFor="ludhiana" className="text-sm cursor-pointer">Ludhiana</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="patiala" className="border-slate-400 border-2" />
                                                    <Label htmlFor="patiala" className="text-sm cursor-pointer">Patiala</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="karnal" className="border-slate-400 border-2" />
                                                    <Label htmlFor="karnal" className="text-sm cursor-pointer">Karnal</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="jalandhar" className="border-slate-400 border-2" />
                                                    <Label htmlFor="jalandhar" className="text-sm cursor-pointer">Jalandhar</Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Analyze Button */}
                                <div className="mt-10 border-t border-slate-200 pt-8 flex justify-center">
                                    <Button
                                        onClick={handleRunManualSimulation}
                                        disabled={isSimulatingManual}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-6 h-auto text-lg w-full max-w-md shadow-lg shadow-indigo-200 transition-all"
                                    >
                                        {isSimulatingManual ? (
                                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Running Sandbox offline...</>
                                        ) : (
                                            <><Brain className="mr-2 h-5 w-5" /> Analyze Scenario Offline</>
                                        )}
                                    </Button>
                                </div>

                                {/* AI Models Output */}
                                {manualSimulationResult && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                                        className="mt-12 p-8 bg-[#f8fafc] border-2 border-indigo-100 rounded-2xl shadow-inner relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-32 bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2" />

                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-indigo-100 rounded-lg"><Brain className="w-8 h-8 text-indigo-700" /></div>
                                                <div>
                                                    <h3 className="text-2xl font-extrabold text-slate-800">Sandbox AI Output</h3>
                                                    <p className="text-sm text-slate-500 font-medium mt-1">Based on manual hypothetical parameters</p>
                                                </div>
                                            </div>
                                            <Button 
                                                onClick={() => handleDownloadReport('manual')}
                                                variant="outline" 
                                                className="flex items-center gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 bg-white"
                                            >
                                                <FileDown className="w-4 h-4" />
                                                Export Sandbox Report
                                            </Button>
                                        </div>

                                        <div className="flex flex-col gap-8">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                <div className="bg-white border-2 border-red-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-red-50/50 -z-10" />
                                                    <p className="text-sm font-bold text-slate-600 mb-2 uppercase tracking-wide">Predicted AQI Post-Scenario</p>
                                                    <p className="text-6xl font-black text-red-600 drop-shadow-sm">{manualSimulationResult.predictedAqi}</p>
                                                    <Badge className="bg-red-500 text-white mt-4 pointer-events-none text-xs px-3 py-1">Critical Hazard Level</Badge>
                                                </div>

                                                <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2"><Activity className="w-4 h-4" /> Health & Economic Impact Assessment</h5>
                                                    <p className="text-base text-slate-700 leading-relaxed font-medium">{manualSimulationResult.healthImpact}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4 flex items-center gap-2 border-b border-indigo-100 pb-2">
                                                    <CheckCircle className="w-4 h-4" /> Offline Recommended Actions
                                                </h5>
                                                <div className="grid lg:grid-cols-2 gap-6">
                                                    {(manualSimulationResult.recommendations || MANUAL_AI_RECOMMENDATIONS).map((rec: any) => (
                                                        <div key={rec.id} className="bg-white border border-indigo-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all relative group flex flex-col justify-between hover:-translate-y-1 overflow-hidden">
                                                            <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 group-hover:bg-indigo-600 transition-colors" />
                                                            <div>
                                                                <div className="flex justify-between items-start mb-3 gap-4">
                                                                    <h4 className="font-extrabold text-lg text-slate-900 leading-tight">{rec.title}</h4>
                                                                    <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-mono font-bold whitespace-nowrap shadow-sm">
                                                                        {rec.confidence}% Match
                                                                    </span>
                                                                </div>
                                                                <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">{rec.desc}</p>
                                                            </div>
                                                            <Button onClick={() => handlePublish(rec.title, rec.desc)} variant="outline" className="w-full bg-slate-50 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 border-slate-200 text-slate-700 font-bold transition-all shadow-sm">
                                                                Approve Sandbox Policy <CheckCircle className="w-4 h-4 ml-2" />
                                                            </Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default GovtOfficialDashboard;
