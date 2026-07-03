import { motion } from "framer-motion";
import { ArrowRight, Flame, Wind, Wheat, Beef, TrendingUp, ChevronDown, Satellite, Activity, Globe2, Sparkles, Shield, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AboutSection from "@/components/landing/AboutSection";
import StatsSection from "@/components/landing/StatsSection";
import Footer from "@/components/landing/Footer";
import FeedbackSection from "@/components/landing/FeedbackSection";
import FAQSection from "@/components/landing/FAQSection";

const cascadeSteps = [
  {
    label: "Fires",
    icon: Flame,
    iconClass: "icon-fire",
    accent: "#ef4444",
    accentLight: "hsl(4 90% 96%)",
    desc: "Wildfire ignition detected",
  },
  {
    label: "Air Quality",
    icon: Wind,
    iconClass: "icon-air",
    accent: "#06b6d4",
    accentLight: "hsl(188 88% 96%)",
    desc: "AQI index impacted",
  },
  {
    label: "Agriculture",
    icon: Wheat,
    iconClass: "icon-agri",
    accent: "#10b981",
    accentLight: "hsl(152 78% 95%)",
    desc: "Crop yield affected",
  },
  {
    label: "Livestock",
    icon: Beef,
    iconClass: "icon-cattle",
    accent: "#f59e0b",
    accentLight: "hsl(36 95% 95%)",
    desc: "Livestock health risk",
  },
  {
    label: "Economy",
    icon: TrendingUp,
    iconClass: "icon-econ",
    accent: "#8b5cf6",
    accentLight: "hsl(262 84% 96%)",
    desc: "Economic impact",
  },
];

const Landing = () => {
  const { t } = useTranslation();
  const role = localStorage.getItem("tf_role");

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, hsl(210 40% 98%) 0%, hsl(210 40% 97%) 50%, hsl(217 40% 96%) 100%)" }}>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 card-glass border-b border-white/60 w-full">
        <div className="flex items-center justify-between px-8 py-3.5">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(152 78% 38%), hsl(152 78% 30%))", boxShadow: "0 3px 10px hsl(152 78% 38% / 0.4)" }}>
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-display tracking-tight">
              <span style={{ color: "hsl(152 78% 36%)" }}>Terra</span>
              <span style={{ color: "hsl(217 89% 55%)" }}>Forge</span>
            </div>
            <span className="hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "hsl(152 78% 38% / 0.1)", color: "hsl(152 78% 36%)", border: "1px solid hsl(152 78% 38% / 0.2)" }}>
              Environmental OS
            </span>
          </div>

          {/* Nav actions */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            {role ? (
              <Link to={`/dashboard/${role}`}>
                <Button size="sm" className="btn-primary text-white border-0 h-8">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth/login">
                  <Button variant="ghost" size="sm" className="text-sm font-medium">{t("nav_login", "Log in")}</Button>
                </Link>
                <Link to="/auth/register">
                  <Button size="sm" className="btn-primary text-white border-0 h-8">
                    {t("nav_register", "Get Started")} <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="w-full px-6 md:px-12 pt-16 pb-16 flex items-center justify-center min-h-[88vh]">
        <div className="max-w-[85rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Live badge */}
            <div className="badge-live mb-8 px-3 py-1.5 text-sm inline-flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Live Environmental Intelligence
            </div>

            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] leading-[1.02] tracking-tight mb-7" style={{ color: "hsl(222 47% 10%)" }}>
              See the Invisible{" "}
              <span className="text-gradient block mt-1">Connections</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "hsl(215 16% 44%)" }}>
              Trace how wildfires cascade through air quality, agriculture, livestock health, and local economies — in real time.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4 mb-12">
              {role ? (
                <Link to={`/dashboard/${role}`}>
                  <button className="btn-primary text-base px-7 py-3.5 h-auto rounded-xl shadow-lg inline-flex items-center gap-2 text-white border-0">
                    Enter Dashboard <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              ) : (
                <>
                  <Link to="/auth/register">
                    <button className="btn-primary text-base px-7 py-3.5 h-auto rounded-xl shadow-lg inline-flex items-center gap-2 text-white border-0">
                      Start Monitoring <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                  <Link to="/auth/login">
                    <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold border transition-all duration-200 hover:shadow-md h-auto" style={{ borderColor: "hsl(214 32% 84%)", color: "hsl(222 47% 15%)", background: "rgba(255,255,255,0.8)" }}>
                      View Demo
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, label: "Government Certified" },
                { icon: Satellite, label: "Real-Time Data" },
                { icon: Sparkles, label: "AI-Powered" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm lg:text-base font-medium" style={{ color: "hsl(215 16% 52%)" }}>
                  <Icon className="w-5 h-5" style={{ color: "hsl(152 78% 38%)" }} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Cascade Effect Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="card-glass rounded-2xl p-6 shadow-lg"
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mb-0.5">The Cascade Effect</p>
                <p className="text-sm font-semibold" style={{ color: "hsl(222 47% 12%)" }}>Wildfire → Economic Impact</p>
              </div>
              <span className="badge-live text-[10px]">
                Live
              </span>
            </div>

            {/* Cascade steps */}
            <div className="space-y-0">
              {cascadeSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  {/* Step row */}
                  <div className="flex items-center gap-3 p-2.5 rounded-xl transition-colors hover:bg-white/60">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${step.iconClass}`} style={{ boxShadow: `0 2px 6px ${step.accent}22` }}>
                      <step.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold" style={{ color: "hsl(222 47% 12%)" }}>{step.label}</span>
                      </div>
                      <p className="text-[11px] truncate" style={{ color: "hsl(215 16% 56%)" }}>{step.desc}</p>
                    </div>
                  </div>

                  {/* Connector */}
                  {i < cascadeSteps.length - 1 && (
                    <div className="ml-7 flex items-center gap-1 py-0.5" style={{ color: "hsl(215 16% 70%)" }}>
                      <div className="w-px h-4" style={{ background: "linear-gradient(to bottom, hsl(214 32% 85%), hsl(214 32% 91%))" }} />
                      <ChevronDown className="w-2.5 h-2.5 -ml-px" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturesSection />
      <AboutSection />
      <StatsSection />

      <FAQSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Landing;
