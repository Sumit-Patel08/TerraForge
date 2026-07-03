import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Globe2, Loader2, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
      } else if (data.session) {
        const isAdmin = email.toLowerCase() === "admin@gmail.com";
        const role = isAdmin ? "official" : "public";

        const name = data.user?.user_metadata?.first_name || data.user?.email?.split('@')[0] || "User";
        localStorage.setItem("tf_role", role);
        localStorage.setItem("tf_user", name);

        toast.success("Login successful!");
        navigate(`/dashboard/${role}`);
      }
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        background: "linear-gradient(160deg, hsl(210 40% 97%) 0%, hsl(217 40% 95%) 100%)",
        backgroundImage: "radial-gradient(ellipse 70% 60% at 30% 20%, hsl(152 78% 38% / 0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, hsl(217 89% 57% / 0.07) 0%, transparent 60%)",
      }}
    >
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="card-glass rounded-2xl p-8 shadow-xl">
          {/* Logo */}
          <div className="text-center mb-7">
            <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(152 78% 38%), hsl(152 78% 29%))", boxShadow: "0 4px 16px hsl(152 78% 38% / 0.35)" }}>
              <Globe2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-display font-extrabold mb-1">
              <span style={{ color: "hsl(152 78% 36%)" }}>Terra</span>
              <span style={{ color: "hsl(217 89% 55%)" }}>Forge</span>
            </div>
            <p className="text-xs font-medium" style={{ color: "hsl(215 16% 52%)" }}>{t("login_welcome", "Environmental Intelligence Platform")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "hsl(215 16% 44%)" }}>{t("login_email", "Email")}</Label>
              <Input
                id="email" type="email" placeholder="arjun@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 h-10 rounded-xl border bg-white/60 text-sm focus:ring-2 focus:ring-green-500/20"
                style={{ borderColor: "hsl(214 32% 86%)" }}
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "hsl(215 16% 44%)" }}>{t("login_password", "Password")}</Label>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10 h-10 rounded-xl border bg-white/60 text-sm"
                  style={{ borderColor: "hsl(214 32% 86%)" }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "hsl(215 16% 56%)" }}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center h-10 rounded-xl inline-flex items-center text-white border-0"
              style={{ background: "linear-gradient(135deg, hsl(152 78% 38%), hsl(152 78% 30%))" }}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {t("login_button", "Log In")}
            </button>
          </form>

          {/* Access Info */}
          <div className="mt-6 pt-5 border-t" style={{ borderColor: "hsl(214 32% 90%)" }}>
            <Alert className="bg-amber-50/50 border-amber-200 shadow-sm rounded-xl">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-xs text-amber-700 ml-2">
                <strong>Demo credentials removed.</strong> Live Supabase authentication is now active. Please register to enter as Public.
              </AlertDescription>
            </Alert>
            <p className="text-xs text-center mt-3" style={{ color: "hsl(215 16% 56%)" }}>
              Log in with <strong style={{ color: "hsl(215 16% 40%)" }}>admin@gmail.com</strong> to access Government controls.
            </p>
          </div>

          <p className="text-center text-xs mt-5" style={{ color: "hsl(215 16% 56%)" }}>
            {t("login_no_account", "Don't have an account?")}{" "}
            <Link to="/auth/register" className="font-semibold hover:underline" style={{ color: "hsl(152 78% 36%)" }}>{t("register_create", "Register")}</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
