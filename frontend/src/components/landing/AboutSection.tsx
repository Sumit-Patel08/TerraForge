import { motion } from "framer-motion";
import { ShieldCheck, Target, Globe2 } from "lucide-react";

const goals = [
  {
    title: "Proactive Defense",
    description: "Shifting from reactive damage control to proactive disaster mitigation with real-time early warnings.",
    icon: ShieldCheck,
  },
  {
    title: "Precision Accuracy",
    description: "Powered by AI leveraging millions of environmental data points to deliver unparalleled prediction accuracy.",
    icon: Target,
  },
  {
    title: "Holistic Ecosystem",
    description: "A centralized platform tracking fires, weather, livestock health, and economic indicators seamlessly.",
    icon: Globe2,
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-8 border-t bg-white" style={{ borderColor: "hsl(214 32% 90%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest mb-4 block" style={{ color: "hsl(152 78% 36%)" }}>
            About TerraForge
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "hsl(222 47% 12%)" }}>
            Pioneering the Future of Environmental Intelligence
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6" style={{ color: "hsl(215 16% 44%)" }}>
            TerraForge is an advanced Environmental Operating System designed to predict, track, and mitigate the complex cascade effects of natural disasters like wildfires. By harnessing real-time satellite data, AI-driven predictive modeling, and ground-level metrics, we provide actionable insights to protect ecosystems and local economies.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground" style={{ color: "hsl(215 16% 44%)" }}>
            Our mission is to bridge the gap between raw data and critical decision-making, empowering government officials, NGOs, and the public to stay one step ahead of environmental threats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-6 rounded-2xl border"
              style={{
                borderColor: "hsl(214 32% 90%)",
                background: "linear-gradient(180deg, hsl(210 40% 98%) 0%, hsl(0 0% 100%) 100%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "hsl(152 78% 38% / 0.1)" }}
              >
                <goal.icon className="w-6 h-6" style={{ color: "hsl(152 78% 36%)" }} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "hsl(222 47% 12%)" }}>
                {goal.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(215 16% 44%)" }}>
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;