import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, CircleMarker, Circle, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Mic, MicOff, AlertTriangle, TrendingUp, TrendingDown, Beef, Wind,
  Map as MapIcon, CloudRain, Droplets, ThermometerSun, Send, Brain, Loader2, CheckCircle, Activity, Info
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import MandiPrices from "../../components/dashboard/MandiPrices";

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

const defaultPublicMapMarkers: MapMarker[] = [];

const farmerAlerts = [
  { severity: "critical", text: "AQI exceeds 400 in Sangrur — respiratory advisory issued", time: "12 min ago" },
  { severity: "warning", text: "Stubble fires detected in 3 adjacent blocks", time: "1h ago" },
  { severity: "info", text: "Wheat procurement price updated for Q4", time: "3h ago" },
];

const prices = [
  { crop: "🌾", name: "Wheat", price: "₹2,275", trend: "up" },
  { crop: "🌽", name: "Maize", price: "₹1,962", trend: "down" },
  { crop: "🫘", name: "Pulses", price: "₹6,800", trend: "up" },
  { crop: "🍅", name: "Tomato", price: "₹1,200", trend: "down" },
  { crop: "🧅", name: "Onion", price: "₹1,850", trend: "up" },
  { crop: "🥔", name: "Potato", price: "₹950", trend: "up" },
];

const yieldData = [
  { month: "Jan", milk: 18.2, aqi: 120 },
  { month: "Feb", milk: 18.5, aqi: 95 },
  { month: "Mar", milk: 18.8, aqi: 80 },
  { month: "Apr", milk: 17.9, aqi: 150 },
  { month: "May", milk: 17.4, aqi: 200 },
  { month: "Jun", milk: 16.8, aqi: 280 },
  { month: "Jul", milk: 17.1, aqi: 220 },
  { month: "Aug", milk: 17.6, aqi: 180 },
  { month: "Sep", milk: 16.5, aqi: 340 },
  { month: "Oct", milk: 15.8, aqi: 420 },
  { month: "Nov", milk: 16.2, aqi: 380 },
  { month: "Dec", milk: 17.2, aqi: 160 },
];

const severityDot: Record<string, string> = {
  critical: "bg-red-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
};

const tooltipStyle = { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 12 };

const dummyPolicies = [
  { id: 1, title: "Emergency Respiratory Aid", desc: "Free N95 masks available at local panchayats. Stay indoors during peak afternoon hours.", date: "Just now" },
  { id: 2, title: "Livestock Evacuation Plan", desc: "Safe zones identified for cattle in high AQI areas. Transport ready on request.", date: "1h ago" }
];

interface PredictionResult {
  yield: string;
  insight: string;
}

interface Policy {
  id: number;
  title: string;
  desc: string;
  date: string;
}

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
           const d = new Date(weatherData.current.time + "Z"); // OpenMeteo returns time in UTC or local depending on params, but usually timezone=GMT. We append Z to ensure it parses as UTC correctly if it's returning GMT time. Alternatively just keep localized. Let's make a readable date format.
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

const PublicDashboard = () => {
  const { t } = useTranslation();
  const [recording, setRecording] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "weather";
  const [policies, setPolicies] = useState(dummyPolicies);
  const [textQuery, setTextQuery] = useState("");

  // AI Milk Yield Variables
  const [liveLivestockData, setLiveLivestockData] = useState({ rain: 45, aqi: 141 });
  const [weatherCardData, setWeatherCardData] = useState({ temp: 28, humidity: 65, wind: 12, rain: 0 });
  const [cattleBreed, setCattleBreed] = useState("Murrah");
  const [cattleWeight, setCattleWeight] = useState<number>(550);
  const [feedPerDay, setFeedPerDay] = useState<number>(18);
  const [isPredicting, setIsPredicting] = useState(false);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  // Dynamic Map Markers
  const [mapMarkers, setMapMarkers] = useState<MapMarker[]>(defaultPublicMapMarkers);
  const [chatMessages, setChatMessages] = useState([
    { sender: "ai", text: "Namaste! You can ask me questions like: \"Is this season good for planting wheat?\" or \"How to protect crops from frost?\"" }
  ]);
  const API_URL = import.meta.env.VITE_LOCAL_AI_API || "http://localhost:8000";

  useEffect(() => {
    const fetchWeatherAndAQI = async () => {
      try {
        const resWeather = await fetch("https://api.open-meteo.com/v1/forecast?latitude=21.17024&longitude=72.831062&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&timezone=auto");
        const weatherData = await resWeather.json();
        
        let newRain = 0;
        if (weatherData?.current) {
          setWeatherCardData({
            temp: weatherData.current.temperature_2m || 0,
            humidity: weatherData.current.relative_humidity_2m || 0,
            wind: weatherData.current.wind_speed_10m || 0,
            rain: weatherData.current.precipitation || 0
          });
          newRain = weatherData.current.precipitation || 0;
        }

        // OpenAQ v2 is deprecated and returns 410 Gone, using Open-Meteo Air Quality as a fallback
        const resAQI = await fetch("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=21.17024&longitude=72.831062&current=pm2_5");
        const aqiData = await resAQI.json();
        let newAqi = 141;

        if (aqiData?.current?.pm2_5 !== undefined) {
          const pm25 = aqiData.current.pm2_5;
          let value;
          if (pm25 <= 30) value = (pm25 / 30) * 50;
          else if (pm25 <= 60) value = 50 + ((pm25 - 30) / 30) * 50;
          else if (pm25 <= 90) value = 100 + ((pm25 - 60) / 30) * 100;
          else value = 200 + ((pm25 - 90) / 30) * 100;
          newAqi = Math.round(value);
        }

        setLiveLivestockData({ rain: newRain, aqi: newAqi });

      } catch (e) {
        console.error("Failed to fetch live data", e);
      }
    };
    fetchWeatherAndAQI();

    const fetchMapData = async () => {
      try {
        const updatedMarkers = await Promise.all(defaultPublicMapMarkers.map(async (loc) => {
          const res = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${loc.lat}&longitude=${loc.lng}&current=us_aqi,pm2_5`);
          const data = await res.json();
          
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);
          const weatherData = await weatherRes.json();

          const aqi = data?.current?.us_aqi || 0;
          const pm2_5 = data?.current?.pm2_5 || 0;
          const temp = weatherData?.current?.temperature_2m || 0;
          const humidity = weatherData?.current?.relative_humidity_2m || 0;
          const wind = weatherData?.current?.wind_speed_10m || 0;

          let color = "#22c55e"; // green (Safe)
          let valueStr = `AQI: ${aqi} (Safe)`;
          let typeStr = "Air Quality";

          if (aqi > 150) {
             color = "#ef4444"; // red (Critical)
             valueStr = `AQI: ${aqi} (Critical Risk)`;
             typeStr = "Stubble Fire Alert";
          } else if (aqi > 80) {
             color = "#f97316"; // orange (Warning)
             valueStr = `AQI: ${aqi} (Poor)`;
             typeStr = "AQI Warning";
          } else if (aqi === 0) {
             // fallback
             valueStr = loc.value;
             typeStr = loc.type;
             color = loc.color;
          }

          return { ...loc, type: typeStr, color, value: valueStr, aqi, temp, humidity, wind, pm2_5 };
        }));
        setMapMarkers(updatedMarkers);
      } catch (e) {
        console.error("Failed to fetch map data APIs", e);
      }
    };
    fetchMapData();

    const handleStorageChange = () => {
      const stored = localStorage.getItem("tf_published_policies");
      if (stored) {
        setPolicies(JSON.parse(stored));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!textQuery.trim()) return;
    
    const userText = textQuery.trim();
    setTextQuery("");
    
    setChatMessages(prev => [...prev, { sender: "user", text: userText }]);
    setChatMessages(prev => [...prev, { sender: "ai", text: "Thinking..." }]);

    try {
      const response = await fetch(`${API_URL}/api/agriculture/consult`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ query: userText, target_language: "hin_Deva" }) // We translate to Hindi by default for the farmer UI
      });

      if (!response.ok) throw new Error("API failed");
      const data = await response.json();

      setChatMessages(prev => {
         const newChat = [...prev];
         newChat[newChat.length - 1] = { sender: "ai", text: data.translated_response || data.response };
         
         if (data.audio_base64) {
             const audio = new Audio(data.audio_base64);
             audio.play().catch(e => console.error("Audio playback error:", e));
         }
         return newChat;
      });
    } catch (error) {
      setChatMessages(prev => {
         const newChat = [...prev];
         newChat[newChat.length - 1] = { sender: "ai", text: "Error connecting to AI Server. Please ensure 'python run_local_api.py' is running." };
         return newChat;
      });
    }
  };

  const handlePredictYield = async () => {
    setIsPredicting(true);
    setPredictionResult(null);

    try {
      const response = await fetch(`${API_URL}/api/yield/forecast`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          features: {
            aqi: liveLivestockData.aqi,
            rain: liveLivestockData.rain,
            weight: cattleWeight,
            feed: feedPerDay
          }
        })
      });

      if (!response.ok) throw new Error("Backend connection failed");
      const data = await response.json();

      setPredictionResult({
        yield: data.predicted_yield.toFixed(1),
        insight: data.insight
      });
    } catch (error) {
       console.error(error);
       setPredictionResult({
         yield: "ERR",
         insight: "Could not reach the Python ML backend. Check terminal."
       });
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-16 px-4 md:px-8 mt-6">
      <div className="flex flex-col mb-2">
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight" style={{ color: "hsl(222 47% 12%)" }}>{t("dash_title")}</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2 font-medium" style={{ color: "hsl(215 16% 56%)" }}>{t("dash_subtitle")}</p>
      </div>

      <Tabs value={activeTab} onValueChange={(val) => setSearchParams({ tab: val })} className="w-full">
        <TabsList className="flex w-full mb-8 bg-slate-100/60 backdrop-blur-sm p-2 rounded-2xl border border-slate-200 shadow-inner relative z-10">
          <TabsTrigger
            value="weather"
            className="flex-1 text-[15px] font-semibold py-3.5 rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-[0_8px_16px_-6px_rgba(16,185,129,0.6)] transition-all duration-300 transform data-[state=active]:scale-[1.02] z-20"
          >
            {t("tab_weather")}
          </TabsTrigger>
          <TabsTrigger
            value="advisory"
            className="flex-1 text-[15px] font-semibold py-3.5 rounded-xl text-slate-600 hover:text-blue-700 hover:bg-blue-50/50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-[0_8px_16px_-6px_rgba(59,130,246,0.6)] transition-all duration-300 transform data-[state=active]:scale-[1.02] z-20 mx-1"
          >
            {t("tab_advisory")}
          </TabsTrigger>
          <TabsTrigger
            value="livestock"
            className="flex-1 text-[15px] font-semibold py-3.5 rounded-xl text-slate-600 hover:text-amber-700 hover:bg-amber-50/50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-[0_8px_16px_-6px_rgba(245,158,11,0.6)] transition-all duration-300 transform data-[state=active]:scale-[1.02] z-20"
          >
            {t("tab_livestock")}
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: WEATHER & ALERTS */}
        <TabsContent value="weather" className="space-y-6 focus:outline-none">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-1 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 shadow-md text-white flex flex-col justify-between h-[300px]">
              <div>
                <p className="text-blue-100 font-medium whitespace-nowrap overflow-hidden text-ellipsis">Current Location</p>
                <h3 className="text-2xl font-semibold">Surat, Gujarat</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 flex-grow">
                <div className="flex items-center gap-4">
                  <CloudRain className="w-16 h-16 text-blue-100" />
                  <span className="text-6xl font-light">{Math.round(weatherCardData.temp)}°</span>
                </div>
                <p className="text-blue-100 font-medium">Active API Sync</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-blue-400/30 pt-4 mt-2">
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-blue-200" />
                  <span className="text-sm">{weatherCardData.wind} km/h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-200" />
                  <span className="text-sm">{weatherCardData.humidity}%</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="md:col-span-2 bg-card border border-border rounded-xl shadow-sm relative overflow-hidden h-[300px] flex items-center justify-center group flex-col">
              <div className="absolute inset-0 z-10 w-full h-full">
                <MapContainer center={[21.1702, 72.8311]} zoom={11} style={{ height: '100%', width: '100%' }} attributionControl={false}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <MapClickFetcher setMapMarkers={setMapMarkers} />
                  {mapMarkers.map((m) => (
                      <React.Fragment key={m.id}>
                          <Circle center={[m.lat, m.lng]} radius={15000} pathOptions={{ color: m.color, fillColor: m.color, fillOpacity: 0.2, weight: 1 }} />
                          <CircleMarker center={[m.lat, m.lng]} radius={12}
                              pathOptions={{ color: m.color, fillColor: m.color, fillOpacity: 0.7, weight: 2 }}>
                              <Popup className="font-sans">
                                  <div className="flex flex-col gap-1 min-w-[180px]">
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
                                      <span className="text-xs font-semibold text-slate-600 mt-2 border-t pt-1">{m.value}</span>
                                  </div>
                              </Popup>
                          </CircleMarker>
                      </React.Fragment>
                  ))}
                </MapContainer>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="w-full bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-6">
            <div className="p-4 border-b border-border bg-gradient-to-r from-emerald-50 to-blue-50 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-600" /> Live Agricultural Data Feed</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Real-time sensor & API data • Auto-refreshes every 30s</p>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block mr-1.5 animate-pulse"></span>
                LIVE STREAM
              </Badge>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4">
              {[
                { label: "Temperature", value: `${liveLivestockData.rain > 0 ? "26" : "30"}°C`, icon: "🌡️", color: "text-red-600", bg: "bg-red-50" },
                { label: "Humidity", value: "72%", icon: "💧", color: "text-blue-600", bg: "bg-blue-50" },
                { label: "PM2.5 AQI", value: `${liveLivestockData.aqi}`, icon: "🌫️", color: liveLivestockData.aqi > 200 ? "text-red-600" : "text-amber-600", bg: liveLivestockData.aqi > 200 ? "bg-red-50" : "bg-amber-50" },
                { label: "Rainfall", value: `${liveLivestockData.rain}mm`, icon: "🌧️", color: "text-cyan-600", bg: "bg-cyan-50" },
                { label: "Soil Moisture", value: "34%", icon: "🌱", color: "text-green-600", bg: "bg-green-50" },
                { label: "Wind Speed", value: "14 km/h", icon: "💨", color: "text-slate-600", bg: "bg-slate-50" },
                { label: "UV Index", value: "6.2", icon: "☀️", color: "text-orange-600", bg: "bg-orange-50" },
                { label: "Crop Stress", value: liveLivestockData.aqi > 200 ? "High" : "Low", icon: "🌾", color: liveLivestockData.aqi > 200 ? "text-red-600" : "text-green-600", bg: liveLivestockData.aqi > 200 ? "bg-red-50" : "bg-green-50" },
              ].map((metric, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className={`${metric.bg} rounded-lg p-3 border border-border/50 flex flex-col items-center text-center`}>
                  <span className="text-xl mb-1">{metric.icon}</span>
                  <span className={`text-lg font-bold ${metric.color}`}>{metric.value}</span>
                  <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</span>
                </motion.div>
              ))}
              </div>
            </motion.div>

          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Agricultural Alerts
              </h3>
              <div className="grid gap-3">
                {farmerAlerts.map((a, i) => (
                  <div key={i} className={`bg-card border rounded-xl p-4 flex items-start gap-3 shadow-sm ${a.severity === "critical" ? "border-red-500/30" : "border-border"}`}>
                    <span className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${severityDot[a.severity] || "bg-green-500"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{a.text}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-500" /> Govt. Action Plans & Policies
              </h3>
              <div className="space-y-3">
                {policies.length > 0 ? (
                  policies.map((pol: Policy, idx: number) => (
                    <div key={idx} className="bg-card border border-border border-l-4 border-l-blue-500 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-sm font-bold text-foreground">{pol.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{pol.desc}</p>
                      <p className="text-xs text-muted-foreground font-medium mt-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" /> {pol.date || "Recently published"}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-secondary/50 border border-border border-dashed rounded-xl p-6 text-center">
                    <p className="text-sm text-muted-foreground italic">No official action plans active at the moment.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </TabsContent>

        {/* TAB 2: AI ADVISORY & MARKETS */}
        <TabsContent value="advisory" className="space-y-8 focus:outline-none">
          <div className="flex flex-col gap-8">
            {/* AI Assistant - Upper Section */}
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col bg-card border border-border rounded-xl p-6 shadow-sm min-h-[600px] relative overflow-hidden max-w-5xl mx-auto w-full">
              <div className="mb-6 flex justify-between items-center z-10">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Kisan AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Expert advice on crops, weather & best practices</p>
                </div>
                <Badge variant="secondary" className="bg-terra-green/10 text-terra-green font-medium">Online</Badge>
              </div>

              <div className="flex-1 bg-secondary/30 rounded-lg border border-border/50 mb-6 p-4 flex flex-col justify-end overflow-y-auto space-y-4 z-10 min-h-[350px]">
                 <div className="flex-1 overflow-y-auto space-y-4 px-2 mb-2">
                   {chatMessages.map((msg, i) => (
                     <div key={i} className={`flex items-start gap-4 ${msg.sender === "user" ? "flex-row-reverse" : "w-11/12 lg:w-5/6"}`}>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-slate-200" : "bg-terra-green/20"}`}>
                         {msg.sender === "user" ? <span className="text-xs text-slate-500 font-bold">You</span> : <Mic className="w-4 h-4 text-terra-green" />}
                       </div>
                       <div className={`border p-3 rounded-2xl shadow-sm text-sm ${msg.sender === "user" ? "bg-primary text-primary-foreground border-primary rounded-tr-sm" : "bg-card border-border text-foreground rounded-tl-sm"}`}>
                         {msg.text}
                       </div>
                     </div>
                   ))}
                 </div>
                 <AnimatePresence>
                   {recording && (
                     <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex justify-center py-2">
                       <span className="flex items-center gap-2 text-sm font-medium text-red-500 bg-red-500/10 px-4 py-1.5 rounded-full">
                         <span className="relative flex h-2.5 w-2.5">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                         </span>
                         Listening...
                       </span>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>

              <div className="z-10 space-y-4">
                <form onSubmit={handleQuerySubmit} className="flex gap-2">
                  <Input
                    placeholder="Type your question here..."
                    value={textQuery}
                    onChange={(e) => setTextQuery(e.target.value)}
                    className="bg-secondary/50 border-border"
                  />
                  <Button type="submit" size="icon" className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground whitespace-nowrap">Or use voice</span></div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setRecording(!recording)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${recording
                        ? "bg-red-500 shadow-red-500/30 scale-105"
                        : "bg-background border border-border hover:border-terra-green hover:shadow-lg hover:bg-secondary/50"
                      }`}
                  >
                    {recording ? <MicOff className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6 text-terra-green" />}
                  </button>
                </div>
              </div>
              <Mic className="absolute -bottom-8 -right-8 w-48 h-48 text-primary/5 pointer-events-none" />
            </motion.div>

            {/* Live Mandi Prices - Lower Section (Full Width Desktop) */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full">
               <MandiPrices />
            </motion.div>
          </div>
        </TabsContent>

        {/* TAB 3: LIVESTOCK YIELD & AI PREDICTOR */}
        <TabsContent value="livestock" className="space-y-8 focus:outline-none">

          {/* Main Chart Full Width */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="w-full bg-card border border-border rounded-xl p-6 lg:p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Beef className="w-7 h-7 text-purple-600" /> Historical Milk Yield vs Air Quality Control
              </h3>
              <p className="text-base text-muted-foreground mt-2">Observe the historical correlation between falling AQI and reduced average milk yield in your registered district over the last 12 months.</p>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={yieldData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis yAxisId="left" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dx={-10} domain={['dataMin - 2', 'dataMax + 2']} />
                  <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dx={10} />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }}
                    labelStyle={{ fontWeight: 600, color: '#0f172a', marginBottom: 4 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 13, paddingTop: 20 }} iconType="circle" />
                  <Area yAxisId="right" dataKey="aqi" name="AQI Level (Avg)" fill="#fecaca" fillOpacity={0.4} stroke="#ef4444" strokeWidth={2} activeDot={{ r: 6, strokeWidth: 0 }} />
                  <Line yAxisId="left" type="monotone" dataKey="milk" name="Milk Yield (Litres/Day)" stroke="#8b5cf6" strokeWidth={3} dot={{ strokeWidth: 2, r: 4, fill: '#fff' }} activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* AI Milk Yield Predictor Matrix */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-50 to-white px-8 py-6 border-b border-purple-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-xl border border-purple-200">
                  <Brain className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">AI Milk Yield Predictor</h3>
                  <p className="text-sm text-slate-500 mt-1">Forecast daily liters using Live API Environmental Data combined with localized Biological Inputs.</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">

                {/* COLUMN 1: LIVE API ENVIRONMENTAL DATA */}
                <div className="space-y-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
                      <h4 className="font-bold text-[#0ea5e9] tracking-wide flex items-center gap-2">
                        <CloudRain className="w-4 h-4" /> ENVIRONMENTAL VARIABLES
                      </h4>
                      <Badge variant="outline" className="text-[10px] border-blue-200 bg-blue-50 text-blue-700 font-mono">
                        LIVE API SYNCED
                      </Badge>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center group hover:bg-slate-100 transition-colors">
                        <div>
                          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Current API Rainfall</Label>
                          <div className="flex items-end gap-1">
                            <span className="text-2xl font-extrabold text-slate-800">{liveLivestockData.rain}</span>
                            <span className="text-sm font-bold text-slate-400 mb-1">mm</span>
                          </div>
                        </div>
                        <Droplets className="w-8 h-8 text-blue-300 group-hover:text-blue-500 transition-colors" />
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center group hover:bg-slate-100 transition-colors">
                        <div>
                          <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Current Live AQI</Label>
                          <div className="flex items-end gap-1">
                            <span className="text-2xl font-extrabold text-slate-800">{liveLivestockData.aqi}</span>
                            <span className="text-sm font-bold text-slate-400 mb-1">Index</span>
                          </div>
                        </div>
                        <Wind className="w-8 h-8 text-orange-300 group-hover:text-amber-500 transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 flex items-start gap-2 bg-slate-50 p-3 rounded-lg">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    These metrics are actively fetched over HTTP from the regional API and cannot be manually overridden.
                  </div>
                </div>

                {/* COLUMN 2: BIOLOGICAL INPUTS */}
                <div className="space-y-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
                      <h4 className="font-bold text-purple-600 tracking-wide flex items-center gap-2">
                        <Beef className="w-4 h-4" /> BIOLOGICAL INPUTS
                      </h4>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <Label className="text-sm font-semibold text-slate-700 mb-2 block">Cattle Breed / Lineage</Label>
                        <select
                          value={cattleBreed}
                          onChange={(e) => setCattleBreed(e.target.value)}
                          className="flex h-11 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
                        >
                          <option value="Murrah">Murrah (Buffalo)</option>
                          <option value="Sahiwal">Sahiwal (Cow)</option>
                          <option value="Holstein Friesian">Holstein Friesian (Cow)</option>
                          <option value="Gir">Gir (Cow)</option>
                        </select>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-slate-700 mb-2 block">Current Weight (kg)</Label>
                        <Input
                          type="number"
                          value={cattleWeight}
                          onChange={(e) => setCattleWeight(Number(e.target.value))}
                          className="h-11 bg-white border-slate-200 shadow-sm"
                        />
                        <p className="text-[11px] font-medium text-slate-400 mt-1.5 ml-1">Expected range: 300 to 800 kg</p>
                      </div>

                      <div>
                        <Label className="text-sm font-semibold text-slate-700 mb-2 block">Average Feed Intaken Per Day (kg)</Label>
                        <Input
                          type="number"
                          value={feedPerDay}
                          onChange={(e) => setFeedPerDay(Number(e.target.value))}
                          className="h-11 bg-white border-slate-200 shadow-sm"
                        />
                        <p className="text-[11px] font-medium text-slate-400 mt-1.5 ml-1">Total Dry Matter Intake (DMI)</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handlePredictYield}
                    disabled={isPredicting}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold h-12 text-base w-full shadow-lg shadow-purple-200 transition-all rounded-lg"
                  >
                    {isPredicting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Simulating Deep Models...</>
                    ) : (
                      <><Activity className="mr-2 h-5 w-5" /> Predict Daily Milk Yield</>
                    )}
                  </Button>
                </div>
              </div>

              {/* OUTPUT SECTION */}
              <AnimatePresence>
                {predictionResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-purple-50 border border-purple-200/60 rounded-xl p-6 relative overflow-hidden">
                      {/* Decor */}
                      <div className="absolute right-0 top-0 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                      <h5 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> AI Yield Synthesis Forecast
                      </h5>

                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="bg-white border-2 border-purple-200 rounded-xl p-6 text-center shadow-sm min-w-[200px]">
                          <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Predicted Production</p>
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-5xl font-black text-purple-700 tracking-tighter">{predictionResult.yield}</span>
                            <span className="text-sm font-bold text-slate-500 mt-1 uppercase">Liters / Day</span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {predictionResult.insight}
                          </p>
                          <div className="mt-4 pt-4 border-t border-purple-200/60 flex items-center gap-4 text-xs font-bold text-slate-500">
                            <span className="flex items-center gap-1.5"><Brain className="w-3.5 h-3.5 text-purple-400" /> Offline Model: `YieldMod-V3-11B`</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="flex items-center gap-1.5"><CloudRain className="w-3.5 h-3.5 text-blue-400" /> Env Weight: 42%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </TabsContent>

      </Tabs>
    </div>
  );
};

export default PublicDashboard;
