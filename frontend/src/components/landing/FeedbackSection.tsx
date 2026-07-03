import { useState } from "react";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating before submitting.");
      return;
    }
    // Simulate sending feedback
    console.log("Feedback submitted:", { rating, message });
    toast.success("Thank you! Your feedback has been received.");
    setRating(0);
    setMessage("");
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4 tracking-tight">
            How was your <span className="text-gradient">Experience?</span>
          </h2>
          <p className="text-slate-500 mb-10 text-lg leading-relaxed">
            Your insights help us refine the Environmental Operating System. Share your thoughts on TerraForge.
          </p>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200 p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 relative z-10"
        >
          <div className="flex justify-center gap-3 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
                className="transition-all duration-200 transform hover:scale-125 focus:outline-none"
              >
                <Star 
                  className={`w-10 h-10 ${
                    (hover || rating) >= star 
                      ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" 
                      : "text-slate-200"
                  }`} 
                />
              </button>
            ))}
          </div>
          
          <div className="relative mb-6">
            <Textarea 
              placeholder="Tell us what you think about our predictive models or dashboards..." 
              className="min-h-[140px] rounded-2xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500/20 text-slate-700 bg-slate-50/50 p-5 placeholder:text-slate-400 transition-all text-base"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          
          <Button 
            type="submit" 
            className="btn-primary w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 active:scale-[0.98] transition-all"
          >
            <Send className="w-5 h-5 mr-3" /> Submit Feedback
          </Button>
          
          <p className="mt-6 text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
            Anonymous submission synced with real-time analytics
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default FeedbackSection;
