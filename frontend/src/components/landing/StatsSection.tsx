import { motion } from "framer-motion";
import { Flame, Wind, Wheat, Beef, TrendingUp, Database } from "lucide-react";

const stats = [
  {
    value: "2.4M",
    label: "Data Points Processed",
    icon: Database,
    iconClass: "icon-blue",
    accent: "hsl(217 89% 57%)",
  },
  {
    value: "147",
    label: "Districts Monitored",
    icon: Flame,
    iconClass: "icon-fire",
    accent: "hsl(4 90% 58%)",
  },
  {
    value: "12",
    label: "Cascade Variables",
    icon: Wind,
    iconClass: "icon-air",
    accent: "hsl(188 88% 48%)",
  },
  {
    value: "98.3%",
    label: "Prediction Accuracy",
    icon: TrendingUp,
    iconClass: "icon-agri",
    accent: "hsl(152 78% 38%)",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6 border-t" style={{ borderColor: "hsl(214 32% 90%)", background: "linear-gradient(180deg, hsl(210 40% 98%) 0%, hsl(217 40% 97%) 100%)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-bold uppercase tracking-widest mb-10"
          style={{ color: "hsl(215 16% 56%)" }}
        >
          Platform at a glance
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white/75 rounded-2xl p-5 text-center card-hover border"
              style={{
                borderColor: "hsl(214 32% 90%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center ${s.iconClass}`}>
                <s.icon className="w-4.5 h-4.5 w-5 h-5" />
              </div>

              {/* Value */}
              <div
                className="text-2xl md:text-3xl font-display font-extrabold mb-1"
                style={{ color: s.accent }}
              >
                {s.value}
              </div>

              {/* Label */}
              <div className="text-[11px] font-medium leading-snug" style={{ color: "hsl(215 16% 52%)" }}>
                {s.label}
              </div>

              {/* Subtle accent bar */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                style={{ width: "40%", background: `${s.accent}` , opacity: 0.25 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
