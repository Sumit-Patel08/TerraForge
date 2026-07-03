import { Globe2, Mail, Shield, FileText, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Footer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const role = localStorage.getItem("tf_role");
  const [openPolicy, setOpenPolicy] = useState<"privacy" | "terms" | null>(null);

  const policies = {
    privacy: {
      title: "Privacy Policy",
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-slate-600">
          <p>At TerraForge, we prioritize the protection of your environmental and operational data. This policy outlines our commitment to data integrity and localized privacy.</p>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Data Collection</h4>
            <p>We collect geo-coordinates for local AQI and wildfire monitoring. This data is used solely to provide real-time environmental intelligence and threshold alerts.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Information Usage</h4>
            <p>Aggregated data helps our AI models predict disaster cascades. Your specific location is never shared with third parties for commercial use.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Administrative Access</h4>
            <p>Government officials have access to high-level heatmaps to coordinate disaster response, but individual user identity remains anonymous within these reports.</p>
          </section>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-slate-600">
          <p>By using the TerraForge platform, you agree to the following terms governing our environmental monitoring services.</p>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Data Accuracy</h4>
            <p>While we ingest data from high-precision sources like NASA and Open-Meteo, TerraForge provides predictions for advisory purposes. Critical safety decisions should always consult official local authorities.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Acceptable Use</h4>
            <p>Users must not attempt to scrape or reverse-engineer our AI strategy models or API infrastructure without explicit authorization.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Liability</h4>
            <p>TerraForge is not responsible for property damage or physical harm resulting from misinterpreted data or unexpected environmental fluctuations.</p>
          </section>
        </div>
      )
    }
  };

  return (
    <footer className="border-t bg-white pt-16 pb-8 px-6" style={{ borderColor: "hsl(214 32% 90%)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(152 78% 38%), hsl(152 78% 30%))", boxShadow: "0 2px 8px hsl(152 78% 38% / 0.3)" }}>
              <Globe2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight">
              <span style={{ color: "hsl(152 78% 36%)" }}>Terra</span>
              <span style={{ color: "hsl(217 89% 55%)" }}>Forge</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(215 16% 44%)" }}>
            The Environmental Operating System for predicting, tracking, and mitigating disaster cascade effects in real-time.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: "hsl(222 47% 12%)" }}>Platform</h3>
          <ul className="space-y-3">
            <li>
              <button 
                onClick={() => role ? navigate(`/dashboard/official?tab=dashboard`) : navigate("/auth/login")} 
                className="text-sm hover:underline text-left w-full" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                Wildfire Tracking
              </button>
            </li>
            <li>
              <button 
                onClick={() => role ? navigate(`/dashboard/public?tab=weather`) : navigate("/auth/login")} 
                className="text-sm hover:underline text-left w-full" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                AQI Monitoring
              </button>
            </li>
            <li>
              <button 
                onClick={() => role ? navigate(`/dashboard/public?tab=advisory`) : navigate("/auth/login")} 
                className="text-sm hover:underline text-left w-full" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                Agriculture Insights
              </button>
            </li>
            <li>
              <button 
                onClick={() => role ? navigate(`/dashboard/official?tab=dashboard`) : navigate("/auth/login")} 
                className="text-sm hover:underline text-left w-full" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                Economic Impact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: "hsl(222 47% 12%)" }}>Resources</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="https://openaq.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-2" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                OpenAQ API <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a 
                href="https://agmarknet.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-2" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                Mandi API <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a 
                href="https://firms.modaps.eosdis.nasa.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-2" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                NASA FIRMS API <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a 
                href="https://open-meteo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center gap-2" 
                style={{ color: "hsl(215 16% 56%)" }}
              >
                Open-Meteo API <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        <div>
           <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: "hsl(222 47% 12%)" }}>Contact</h3>
           <ul className="space-y-3">
             <li>
               <button onClick={() => setOpenPolicy("privacy")} className="text-sm hover:underline text-left w-full" style={{ color: "hsl(215 16% 56%)" }}>Privacy Policy</button>
             </li>
             <li>
               <a href="mailto:contact@terraforge.io" className="text-sm flex items-center gap-2 hover:underline" style={{ color: "hsl(215 16% 56%)" }}>
                 <Mail className="w-4 h-4" /> contact@terraforge.io
               </a>
             </li>
           </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "hsl(214 32% 90%)" }}>
        <p className="text-xs" style={{ color: "hsl(215 16% 56%)" }}>
          © {new Date().getFullYear()} TerraForge. Environmental Intelligence Platform.
        </p>
        <div className="flex gap-4">
          <button onClick={() => setOpenPolicy("terms")} className="text-xs hover:underline" style={{ color: "hsl(215 16% 56%)" }}>Terms of Service</button>
          <button onClick={() => setOpenPolicy("privacy")} className="text-xs hover:underline" style={{ color: "hsl(215 16% 56%)" }}>Privacy</button>
        </div>

        <Dialog open={openPolicy !== null} onOpenChange={(open) => !open && setOpenPolicy(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  {openPolicy && policies[openPolicy].icon}
                </div>
                <DialogTitle className="text-xl font-display font-bold text-slate-900">
                  {openPolicy && policies[openPolicy].title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-slate-500">
                Last Updated: March 2026
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
              {openPolicy && policies[openPolicy].content}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
};

export default Footer;