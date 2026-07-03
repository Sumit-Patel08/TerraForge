import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  ArrowLeft,
  TrendingDown,
  TrendingUp,
  Minus,
  Calendar,
  ChevronDown,
  Loader2,
  ListFilter,
  Building2,
  Home
} from "lucide-react";
import { fetchLiveMandiPrices, AGMARKNETRecord } from "../../api/mandi";
import {
  getAllStates,
  getDistrictsForState,
  getMarketsForDistrict,
} from "../../api/indian-markets-data";
import {
  LANGUAGES,
  translateStateName,
  translateDistrictName,
  translateMarketName,
  translateCropName,
  getCropEmoji,
  t,
} from "../../api/translation";


// Fallback Mock Data in case API fails or returns no records for the selected location
const MOCK_CROPS = [
  { id: "guar", name: "Guar", subName: "Guar", icon: "🫘", min: 4000, modal: 5500, max: 6000, trend: "up", aiForecast: "+5.2% (High demand)" },
  { id: "green-chilli", name: "Green Chilli", subName: "Green Chilli", icon: "🌶️", min: 4000, modal: 5000, max: 5000, trend: "down", aiForecast: "-2.1% (Market correction)" },
  { id: "bhindi", name: "Bhindi(Ladies Finger)", subName: "Bhindi(Ladies Finger)", icon: "🥒", min: 3500, modal: 3800, max: 4000, trend: "up", aiForecast: "+1.5% (Stable)" },
  { id: "methi", name: "Methi(Leaves)", subName: "Methi(Leaves)", icon: "🌿", min: 2000, modal: 2200, max: 2500, trend: "down", aiForecast: "-4.0% (Over-supply limit)" },
  { id: "bottle-gourd", name: "Bottle gourd", subName: "Bottle gourd", icon: "🍐", min: 1200, modal: 1500, max: 1800, trend: "up", aiForecast: "+2.0% (Seasonal avg)" },
  { id: "brinjal", name: "Brinjal", subName: "Brinjal", icon: "🍆", min: 1800, modal: 2000, max: 2400, trend: "up", aiForecast: "+3.4% (Upward trend)" },
  { id: "cabbage", name: "Cabbage", subName: "Cabbage", icon: "🥬", min: 800, modal: 1000, max: 1200, trend: "down", aiForecast: "-1.2% (Slight drop)" },
  { id: "cauliflower", name: "Cauliflower", subName: "Cauliflower", icon: "🥦", min: 1500, modal: 1800, max: 2000, trend: "stable", aiForecast: "0.0% (Price stable)" },
  { id: "lemon", name: "Lemon", subName: "Lemon", icon: "🍋", min: 3000, modal: 3500, max: 4000, trend: "up", aiForecast: "+8.5% (Summer peak expected)" },
  { id: "spinach", name: "Spinach", subName: "Spinach", icon: "🥬", min: 900, modal: 1100, max: 1300, trend: "down", aiForecast: "-3.1% (Post-harvest dip)" },
];

interface ProcessedCrop {
  id: string;
  name: string;
  subName: string;
  icon: string;
  min: number;
  modal: number;
  max: number;
  trend: "up" | "down" | "stable";
  aiForecast: string;
  date?: string;
  isApiData: boolean;
  market?: string;
  district?: string;
  state?: string;
}

export default function MandiPrices() {
  const [selectedCrop, setSelectedCrop] = useState<ProcessedCrop | null>(null);
  
  // States for API & DB
  const [apiData, setApiData] = useState<AGMARKNETRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dropdown states — start empty so user picks from scratch
  const [language, setLanguage] = useState("en");
  const allStates = getAllStates();
  const [stateFilter, setStateFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [marketFilter, setMarketFilter] = useState("");
  const [availableMarkets, setAvailableMarkets] = useState<string[]>([]);

  // Derived lists based on current selection
  const districts = stateFilter ? getDistrictsForState(stateFilter) : [];
  const markets = stateFilter && districtFilter ? getMarketsForDistrict(stateFilter, districtFilter) : [];

  const handleStateChange = (newState: string) => {
    setStateFilter(newState);
    setDistrictFilter("");
    setMarketFilter("");
    setAvailableMarkets([]);
    setApiData([]);
    setSelectedCrop(null);
  };

  const handleDistrictChange = (newDistrict: string) => {
    setDistrictFilter(newDistrict);
    const staticMkts = getMarketsForDistrict(stateFilter, newDistrict);
    setAvailableMarkets(staticMkts);
    setMarketFilter("");
    setSelectedCrop(null);
  };

  const handleMarketChange = (newMarket: string) => {
    setMarketFilter(newMarket);
    setSelectedCrop(null);
  };

  // Fetch API data — broad fetch on mount, specific fetch only when Mandi is selected
  useEffect(() => {
    async function loadData() {
      // Logic: Only fetch if NO filters are set (initial load) OR if the Market is selected (specific load)
      // This prevents the "all crops" flicker when the user is just midway through selection.
      const isInitial = !stateFilter && !districtFilter && !marketFilter;
      const isMarketSelected = !!marketFilter;

      if (!isInitial && !isMarketSelected) {
        // If they've picked state/district, we just ensure markets are listed from static data
        if (stateFilter && districtFilter) {
          const staticMkts = getMarketsForDistrict(stateFilter, districtFilter);
          setAvailableMarkets(staticMkts);
        }
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const res = await fetchLiveMandiPrices(
          stateFilter || undefined, 
          districtFilter || undefined,
          marketFilter || undefined
        );

        if (res.records && res.records.length > 0) {
          setApiData(res.records);
          // If we have state/district, ensure available markets are updated
          if (stateFilter && districtFilter) {
            const staticMkts = getMarketsForDistrict(stateFilter, districtFilter);
            const apiMarkets = Array.from(new Set(res.records.map(r => r.market))).sort();
            const allMarkets = Array.from(new Set([...staticMkts, ...apiMarkets])).sort();
            setAvailableMarkets(allMarkets.length > 0 ? allMarkets : staticMkts);
          }
        } else {
          // If a specific market was chosen but returned nothing, show empty
          if (marketFilter) {
            setApiData([]);
          } 
          // If broad fetch failed, we keep whatever we had or set empty
          else if (isInitial) {
            setApiData([]);
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [stateFilter, districtFilter, marketFilter]);

  // Process mapping API data -> UI cards
  const cropsToShow = useMemo<ProcessedCrop[]>(() => {
    if (isLoading) return [];

    // If API returned no data
    if (apiData.length === 0) {
       // Only show empty state if all filters are set
       if (stateFilter && districtFilter && marketFilter) {
         return [];
       }
       // Fallback to mock if broad fetch failed or is still pending
       return MOCK_CROPS.map(c => ({ ...c, trend: c.trend as "up" | "down" | "stable", isApiData: false }));
    }

    // Process distinct commodities from API
    const uniqueCommodities = new Map<string, AGMARKNETRecord>();
    const filterKeyword = marketFilter ? marketFilter.split(" ")[0].toLowerCase() : "";

    apiData.forEach(r => {
      // If commodity not yet added AND (no market filter OR market matches)
      if (!uniqueCommodities.has(r.commodity)) {
        if (!filterKeyword || r.market.toLowerCase().includes(filterKeyword)) {
          uniqueCommodities.set(r.commodity, r);
        }
      }
    });

    const parsed: ProcessedCrop[] = Array.from(uniqueCommodities.values()).map((r, i) => {
      const min = parseInt(r.min_price) || 0;
      const max = parseInt(r.max_price) || 0;
      const modal = parseInt(r.modal_price) || Math.round((min + max) / 2);
      
      const icon = getCropEmoji(r.commodity);
      
      return {
        id: r.commodity + i,
        name: r.commodity,
        subName: r.variety || r.commodity,
        icon,
        min, modal, max,
        trend: "stable",
        aiForecast: "",
        date: r.arrival_date,
        isApiData: true,
        market: r.market,
        district: r.district,
        state: r.state
      };
    });

    // If no market is selected, limit to 10 crops for a cleaner home view
    if (!marketFilter) {
       return parsed.slice(0, 10);
    }

    return parsed;
  }, [apiData, stateFilter, districtFilter, marketFilter, isLoading]);

  const carouselItems = [...cropsToShow, ...cropsToShow]; // Duplicate for infinite scroll

  return (
    <div className="bg-[#fcfdfa] border border-slate-200 rounded-2xl w-full flex flex-col overflow-hidden shadow-sm relative min-h-[700px]">
      
      {/* Top Selectors Bar */}
      <div className="p-6 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100/50 bg-white/50 backdrop-blur-sm z-10 relative">
        <div className="flex flex-wrap items-center gap-3">
          
          {/* State Selector — always visible */}
          <div className="relative group">
            <select
              value={stateFilter}
              onChange={(e) => handleStateChange(e.target.value)}
              className="appearance-none bg-[#166534] text-white pl-10 pr-8 py-2.5 rounded-full font-medium hover:bg-[#14532d] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#166534]/50 focus:ring-offset-2 border-none text-sm shadow-sm"
            >
              <option value="">{t('selectState', language)}</option>
              {allStates.map(state => (
                <option key={state} value={state} className="text-gray-900 bg-white">
                  {translateStateName(state, language)}
                </option>
              ))}
            </select>
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-200 pointer-events-none" />
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
          </div>

          {/* District Selector — only visible when state is selected */}
          {stateFilter && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <select
                value={districtFilter}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="appearance-none bg-[#166534] text-white pl-10 pr-8 py-2.5 rounded-full font-medium hover:bg-[#14532d] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#166534]/50 focus:ring-offset-2 border-none text-sm shadow-sm"
              >
                <option value="">{t('selectDistrict', language)}</option>
                {districts.map(district => (
                  <option key={district} value={district} className="text-gray-900 bg-white">
                    {translateDistrictName(district, language)}
                  </option>
                ))}
              </select>
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-200 pointer-events-none" />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
            </motion.div>
          )}

          {/* Market Selector — only visible when district is selected */}
          {districtFilter && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <select
                value={marketFilter}
                onChange={(e) => handleMarketChange(e.target.value)}
                className="appearance-none bg-[#166534] text-white pl-10 pr-8 py-2.5 rounded-full font-medium border-2 border-[#86efac] hover:bg-[#14532d] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#166534]/50 focus:ring-offset-2 text-sm shadow-sm"
              >
                <option value="">{t('selectMarket', language)}</option>
                {availableMarkets.map(m => (
                  <option key={m} value={m} className="text-gray-900 bg-white">
                    {translateMarketName(m, language)}
                  </option>
                ))}
              </select>
              <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-200 pointer-events-none" />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
            </motion.div>
          )}

        </div>

        {/* Language selector */}
        <div className="relative group">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="appearance-none bg-white border border-slate-200 text-slate-700 font-medium pl-4 pr-10 py-2 rounded-full text-sm hover:bg-slate-50 transition-colors cursor-pointer outline-none focus:border-emerald-300 shadow-sm"
          >
            {LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.code === 'en' ? lang.name : `${lang.nativeName} (${lang.name})`}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80 group-hover:opacity-100" />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col relative z-10 w-full">
        {isLoading && (
          <div className="absolute top-4 right-6 flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full text-sm font-medium">
            <Loader2 className="w-4 h-4 animate-spin" /> Fetching Live APMC Data...
          </div>
        )}

        {error && !isLoading && (
          <div className="mb-4 bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 border border-amber-200">
            <ListFilter className="w-4 h-4" /> {error}
          </div>
        )}

        {/* Market title */}
        {marketFilter && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 text-[#166534] font-semibold text-lg"
          >
            <MapPin className="w-5 h-5 fill-current" />
            {marketFilter}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!selectedCrop ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              {cropsToShow.length > 0 ? (
                <>
                  {/* Infinite Scrolling Carousel */}
                  <div className="mb-8 w-full overflow-hidden relative">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">{t('topMarketPrices', language)}</h3>
                    </div>

                    <motion.div 
                       animate={{ x: ["0%", "-50%"] }}
                       transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
                       className="flex gap-4 w-max px-1"
                    >
                      {carouselItems.map((crop, idx) => (
                        <div 
                          key={`${crop.id}-${idx}`} 
                          onClick={() => setSelectedCrop(crop)}
                          className="bg-white border-[1.5px] border-[#22c55e] rounded-xl p-5 w-[320px] h-[160px] flex flex-col justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow group relative overflow-visible"
                        >
                          {/* Floating Predictive AI badge */}

                          <div className="flex justify-between items-start pt-1 gap-3">
                            <div className="flex flex-col min-w-0">
                              <span className="text-4xl mb-2 filter drop-shadow-sm group-hover:-translate-y-1 transition-transform origin-left">{crop.icon}</span>
                              <span className="font-extrabold text-[#1f2937] text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">{translateCropName(crop.name, language)}</span>
                              <span className="text-[11px] text-slate-500 font-medium truncate">{crop.market ? translateMarketName(crop.market, language) : (crop.subName !== crop.name ? crop.subName : '')}</span>
                            </div>
                            <div className="flex flex-col items-end mt-10 shrink-0">
                              <div className="flex items-center gap-1 text-[#166534]">
                                <span className="text-sm font-bold">₹</span>
                                <span className="text-xl sm:text-2xl font-black tracking-tight">{crop.max.toLocaleString()}</span>
                              </div>
                              <span className="text-[10px] text-slate-400 font-semibold tracking-wide whitespace-nowrap">per Quintal</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                    
                  </div>

                  {/* Crop Grid */}
                  <h3 className="font-bold text-slate-800 text-lg mb-4">{t('selectCrop', language)}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-8">
                    {cropsToShow.map((crop) => (
                      <div 
                        key={crop.id}
                        onClick={() => setSelectedCrop(crop)}
                        className="bg-white border border-slate-100/80 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-emerald-200 cursor-pointer transition-all hover:-translate-y-0.5"
                      >
                        <span className="text-5xl drop-shadow-sm">{crop.icon}</span>
                        <span className="text-[13px] font-bold text-slate-700 text-center">{translateCropName(crop.name, language)}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center pb-20 pt-10">
                  <div className="w-32 h-32 bg-[#f0fdf4] rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-50">
                    <span className="text-[72px] drop-shadow-md">📉</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{t('noDataAvailable', language)}</h3>
                  <p className="text-slate-500 font-medium">{t('tryAgain', language)}</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col"
            >
               {/* Detail Header */}
               <div className="flex items-center gap-4 mb-10">
                 <button 
                  onClick={() => setSelectedCrop(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#166534] hover:bg-emerald-50 transition-colors"
                 >
                   <ArrowLeft className="w-6 h-6" />
                 </button>
                 <div className="flex items-center gap-4">
                   <span className="text-4xl drop-shadow-md">{selectedCrop.icon}</span>
                   <div>
                     <h2 className="text-2xl font-bold text-slate-800 leading-tight">{translateCropName(selectedCrop.name, language)}</h2>
                     <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                       <MapPin className="w-3.5 h-3.5" /> {selectedCrop.isApiData 
                          ? `${translateMarketName(selectedCrop.market || '', language)} (${translateDistrictName(selectedCrop.district || '', language)})` 
                          : "Sample Data"}
                     </p>
                   </div>
                 </div>
               </div>

               {/* Price Cards */}
               <div className="space-y-4 max-w-4xl w-full mx-auto">
                 {/* Minimum Price */}
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.1 }}
                   className="bg-[#fff1f2] border border-[#ffe4e6] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
                 >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <TrendingDown className="w-6 h-6 text-red-600" />
                      </div>
                      <span className="text-lg font-bold text-slate-800">{t('minimumPrice', language)}</span>
                    </div>
                    <div className="text-right sm:text-right w-full sm:w-auto">
                      <div className="text-3xl font-black text-red-700 tracking-tight">₹ {selectedCrop.min.toLocaleString('en-IN')}</div>
                      <div className="text-xs font-semibold text-red-400 mt-0.5">/ {t('quintal', language)}</div>
                    </div>
                 </motion.div>

                 {/* Modal Price */}
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 }}
                   className="bg-[#fffbeb] border border-[#fef3c7] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
                 >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <Minus className="w-6 h-6 text-amber-600" />
                      </div>
                      <span className="text-lg font-bold text-slate-800">{t('averagePrice', language)}</span>
                    </div>
                    <div className="text-right sm:text-right w-full sm:w-auto">
                      <div className="text-3xl font-black text-amber-700 tracking-tight">₹ {selectedCrop.modal.toLocaleString('en-IN')}</div>
                      <div className="text-xs font-semibold text-amber-500 mt-0.5">/ {t('quintal', language)}</div>
                    </div>
                 </motion.div>

                 {/* Maximum Price */}
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.3 }}
                   className="bg-[#f0fdf4] border border-[#dcfce3] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
                 >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#16a34a]" />
                      </div>
                      <span className="text-lg font-bold text-slate-800">{t('maximumPrice', language)}</span>
                    </div>
                    <div className="text-right sm:text-right w-full sm:w-auto">
                      <div className="text-3xl font-black text-[#16a34a] tracking-tight">₹ {selectedCrop.max.toLocaleString('en-IN')}</div>
                      <div className="text-xs font-semibold text-[#4ade80] mt-0.5">/ {t('quintal', language)}</div>
                    </div>
                 </motion.div>
               </div>

               <div className="mt-8 pt-8 flex flex-wrap justify-between items-center text-xs text-slate-400 font-medium pb-4 border-t border-slate-100 max-w-4xl mx-auto w-full">
                 <div className="flex items-center gap-2">
                   <Calendar className="w-4 h-4" />
                   {t('priceDate', language)}: {selectedCrop.date ? selectedCrop.date : new Date().toLocaleDateString('en-GB')}
                 </div>
                 <div>
                   {t('source', language)}: <span className="text-slate-500">Government of India (AGMARKNET) {selectedCrop.isApiData ? "(Live API)" : ""}</span>
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
