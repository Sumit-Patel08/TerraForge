export interface AGMARKNETRecord {
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  arrival_date: string;
  min_price: string;
  max_price: string;
  modal_price: string;
}

export interface MandiPriceResult {
  records: AGMARKNETRecord[];
  total: number;
}

// Removed local CROP_MAPPINGS in favor of CROP_ICONS from crop-icon.ts

export async function fetchLiveMandiPrices(state?: string, district?: string, market?: string): Promise<MandiPriceResult> {
  // Use env var first, fallback to the known public data.gov key if Vite hasn't restarted yet
  const apiKey = import.meta.env.VITE_DATA_GOV_API_KEY || "579b464db66ec23bdd000001e3798da5146742927fc50d56cce568cd";
  if (!apiKey) {
    console.warn("VITE_DATA_GOV_API_KEY is not set in environment variables.");
    return { records: [], total: 0 };
  }

  try {
    const datasetId = "9ef84268-d588-465a-a308-a864a43d0070";
    let url = `https://api.data.gov.in/resource/${datasetId}?api-key=${apiKey}&format=json&limit=1000`;

    // AGMARKNET data queries via data.gov filter format
    if (state) {
      url += `&filters[state]=${encodeURIComponent(state)}`;
    }
    if (district) {
      url += `&filters[district]=${encodeURIComponent(district)}`;
    }
    if (market) {
      url += `&filters[market]=${encodeURIComponent(market)}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Data.gov API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      records: data.records || [],
      total: data.total || 0,
    };
  } catch (error) {
    console.error("Failed to fetch Mandi prices:", error);
    return { records: [], total: 0 };
  }
}
