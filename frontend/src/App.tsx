import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DashboardLayout from "./components/layout/DashboardLayout";
import PublicDashboard from "./pages/dashboard/PublicDashboard";
import GovtOfficialDashboard from "./pages/dashboard/GovtOfficialDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detect location on new sessions
    const detectLocationAndSetLanguage = async () => {
      try {
        // Respect existing language in this session
        const sessionLang = sessionStorage.getItem("tf_lang");
        if (sessionLang) {
          i18n.changeLanguage(sessionLang);
          return;
        }

        let region = null;
        try {
          const response = await fetch("https://ipapi.co/json/");
          if (response.ok) {
            const data = await response.json();
            region = data.region;
          }
        } catch (e) {
          console.warn("Primary IP API failed", e);
        }

        if (!region) {
          try {
            const fallbackResponse = await fetch("https://ipinfo.io/json");
            if (fallbackResponse.ok) {
              const data = await fallbackResponse.json();
              region = data.region;
            }
          } catch (e) {
            console.warn("Fallback IP API failed", e);
          }
        }

        let targetLang = "en";
        if (region) {
          const r = region.toLowerCase();
          if (r.includes("gujarat")) targetLang = "gu";
          else if (r.includes("maharashtra")) targetLang = "mr";
          else if (r.includes("west bengal")) targetLang = "bn";
          else if (r.includes("uttar pradesh") || r.includes("bihar") || r.includes("madhya pradesh") || r.includes("rajasthan") || r.includes("haryana") || r.includes("delhi") || r.includes("punjab")) targetLang = "hi";
        }

        sessionStorage.setItem("tf_lang", targetLang);
        i18n.changeLanguage(targetLang);
      } catch (error) {
        console.error("Failed to detect location for i18n", error);
      }
    };

    detectLocationAndSetLanguage();
  }, [i18n]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="public" element={<PublicDashboard />} />
              <Route path="official" element={<GovtOfficialDashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
