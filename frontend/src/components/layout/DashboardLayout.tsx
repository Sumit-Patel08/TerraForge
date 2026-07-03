import { useTranslation } from "react-i18next";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Bell, Globe2, LogOut, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Footer from "../landing/Footer";

const roleConfig: Record<string, { label: string; accent: string; bg: string; border: string }> = {
  public: {
    label: "Public",
    accent: "hsl(152 78% 36%)",
    bg: "hsl(152 78% 38% / 0.1)",
    border: "hsl(152 78% 38% / 0.25)",
  },
  official: {
    label: "Govt Official",
    accent: "hsl(217 89% 55%)",
    bg: "hsl(217 89% 57% / 0.1)",
    border: "hsl(217 89% 57% / 0.25)",
  },
};

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [role, setRole] = useState("public");

  useEffect(() => {
    const r = localStorage.getItem("tf_role");
    if (!r) {
      navigate("/auth/login");
    } else {
      setRole(r);
    }
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("tf_role");
    localStorage.removeItem("tf_user");
    navigate("/");
  };

  const rc = roleConfig[role] || roleConfig.public;

  return (
    <div className="min-h-screen" style={{ background: "hsl(210 40% 97%)" }}>
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 card-glass border-b border-white/60">
        <div className="flex items-center justify-between px-4 md:px-6 h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(152 78% 38%), hsl(152 78% 30%))", boxShadow: "0 2px 6px hsl(152 78% 38% / 0.35)" }}>
              <Globe2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-base font-display font-extrabold tracking-tight">
              <span style={{ color: "hsl(152 78% 36%)" }}>Terra</span>
              <span style={{ color: "hsl(217 89% 55%)" }}>Forge</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Role badge */}
            <span
              className="hidden sm:inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full border"
              style={{ background: rc.bg, color: rc.accent, borderColor: rc.border }}
            >
              {role === "public" ? t("dash_public", "Public") : role === "official" ? t("dash_official", "Govt Official") : rc.label}
            </span>

            {/* Language switcher */}
            <LanguageSelector />

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="h-8 w-8 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: "hsl(4 90% 58%)" }} />
            </Button>

            {/* User avatar dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-xl transition-colors hover:bg-black/5">
                  <Avatar className="h-7 w-7 border-2" style={{ borderColor: rc.border }}>
                    <AvatarFallback className="text-[10px] font-bold" style={{ background: rc.bg, color: rc.accent }}>DU</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-3 h-3" style={{ color: "hsl(215 16% 56%)" }} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 font-medium cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" /> {t("dash_logout", "Log out")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="p-4 md:p-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
