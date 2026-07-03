import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !firstName || !mobile) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: mobile,
          }
        }
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Account created successfully. Please log in.");
        navigate("/auth/login");
      }
    } catch (err: any) {
      toast.error(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4 relative">
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-md"
      >
        <div className="text-center mb-6">
          <div className="text-2xl font-bold mb-1">
            <span className="text-terra-green">{t("app_name_terra")}</span>
            <span className="text-terra-blue">{t("app_name_forge")}</span>
          </div>
          <p className="text-sm text-muted-foreground">{t("register_create")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="first">{t("register_first")}</Label>
              <Input
                id="first"
                placeholder="Arjun"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1.5"
                required
              />
            </div>
            <div>
              <Label htmlFor="last">{t("register_last")}</Label>
              <Input
                id="last"
                placeholder="Mehta"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1.5"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="+91 9876543210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-1.5"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">{t("login_email")}</Label>
            <Input
              id="email"
              type="email"
              placeholder="arjun@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">{t("login_password")}</Label>
            <div className="relative mt-1.5">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-terra-green hover:bg-terra-green/90 text-primary-foreground mt-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            {t("register_button")}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {t("register_has_account")}{" "}
          <Link to="/auth/login" className="text-terra-green hover:underline">{t("login_button")}</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
