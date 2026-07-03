import { motion } from "framer-motion";
import { Map, GitBranch, BarChart3, Zap, Eye, Bell } from "lucide-react";

const features = [
  {
    icon: Map,
    iconClass: "icon-agri",
    title: "Geospatial Intelligence",
    description: "Real-time fire monitoring, pollution tracking, and agricultural impact mapping across districts.",
    accent: "hsl(152 78% 38%)",
    tag: "Mapping",
  },
  {
    icon: GitBranch,
    iconClass: "icon-fire",
    title: "Causal Cascade Modeling",
    description: "Trace how a single fire event cascades through air quality, crop yields, livestock, and local economies.",
    accent: "hsl(4 90% 58%)",
    tag: "AI Model",
  },
  {
    icon: BarChart3,
    iconClass: "icon-blue",
    title: "What-If Simulations",
    description: "Model policy interventions and see predicted outcomes before resources are committed.",
    accent: "hsl(217 89% 57%)",
    tag: "Simulation",
  },
  {
    icon: Zap,
    iconClass: "icon-cattle",
    title: "Instant Alerts",
    description: "Get notified the moment wildfire smoke crosses danger AQI thresholds across monitored districts.",
    accent: "hsl(36 95% 52%)",
    tag: "Real-Time",
  },
  {
    icon: Eye,
    iconClass: "icon-econ",
    title: "Multi-Role Dashboards",
    description: "Separate views for the public, government officials, and NGOs — each tuned to what matters most.",
    accent: "hsl(262 84% 60%)",
    tag: "Roles",
  },
  {
    icon: Bell,
    iconClass: "icon-air",
    title: "Predictive Livestock Yield",
    description: "AI engine combines live weather data and breed inputs to forecast daily milk yield in liters.",
    accent: "hsl(188 88% 48%)",
    tag: "AI Forecast",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, hsl(210 40% 97%) 0%, hsl(210 40% 98%) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="section-chip justify-center w-fit mx-auto">
            <Zap className="w-3 h-3" />
            Platform Features
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "hsl(222 47% 10%)" }}>
            Built for <span className="text-gradient">Decision Makers</span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(215 16% 48%)" }}>
            Every feature is designed to turn complex environmental data into clear, actionable intelligence.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/80 rounded-2xl p-6 shadow-sm card-hover border border-white/80"
              style={{
                backdropFilter: "blur(12px)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.7) inset",
              }}
            >
              {/* Tag pill */}
              <span
                className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                style={{
                  background: `${f.accent}15`,
                  color: f.accent,
                  border: `1px solid ${f.accent}30`,
                }}
              >
                {f.tag}
              </span>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.iconClass}`} style={{ boxShadow: `0 3px 10px ${f.accent}20` }}>
                <f.icon className="w-5 h-5" />
              </div>

              <h3 className="text-sm font-bold mb-2" style={{ color: "hsl(222 47% 11%)" }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(215 16% 52%)" }}>{f.description}</p>

              {/* Bottom gradient bar on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
