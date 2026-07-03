import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "What is TerraForge Environmental OS?",
    answer: "TerraForge is a comprehensive Environmental Operating System designed to track, predict, and mitigate disaster cascade effects. It uses real-time API integrations to show how events like wildfires impact air quality, regional agriculture, and local economies simultaneously."
  },
  {
    question: "How accurate are the predictive models?",
    answer: "Our AI models ingest high-precision data from NASA satellites (FIRMS) and the Open-Meteo atmospheric network. While environmental variables can fluctuate, our 3-tier policy strategies are designed to provide the most probable mitigation paths based on current historical and real-time trends."
  },
  {
    question: "Who can use the Government Command Center?",
    answer: "The Command Center is a specialized interface for verified administrative and disaster response officials. It provides advanced tools like the What-If Policy Simulator and active zone management, while the Public Dashboard offers transparent data for all citizens."
  },
  {
    question: "Is my location data private?",
    answer: "Yes. TerraForge uses geolocation solely to provide localized environmental threshold alerts and market price insights. We do not store personally identifiable location history, and our analytics are aggregated to coordinate macro-level government responses."
  },
  {
    question: "How are Mandi (Market) prices calculated?",
    answer: "We fetch live agricultural commodity data directly from government open data portals. The 'Top Crops' view highlights national trends, while selecting a specific Mandi provides localized real-time pricing for regional farmers and traders."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
            <HelpCircle className="w-3.5 h-3.5" /> Support Center
          </div>
          <h2 className="text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the TerraForge platform and our environmental intelligence infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white border border-slate-200/60 rounded-3xl p-4 md:p-8 shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none px-4 rounded-2xl transition-all data-[state=open]:bg-slate-50/80">
                <AccordionTrigger className="text-left font-bold text-slate-800 hover:no-underline text-lg py-5 group">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-xs text-indigo-500 group-data-[state=open]:bg-indigo-600 group-data-[state=open]:text-white transition-colors">
                      {i + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6 pl-11 pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
      </div>
    </section>
  );
};

export default FAQSection;
