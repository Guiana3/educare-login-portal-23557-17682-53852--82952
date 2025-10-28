import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import heroImage from "@/assets/hero-static.png";
import logoEducar from "@/assets/logo-educar.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to institution selection after login with username
    navigate("/select-institution", { state: { username } });
  };
  return <div className="flex min-h-screen">
      {/* Hero Section - Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={heroImage} alt="Jovens africanos com tablets em ambiente educacional" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 flex items-end justify-start h-full p-8 pb-12">
          <p className="text-white text-lg leading-relaxed font-light max-w-xl">
            Conectando escolas, professores, alunos e responsáveis em uma única plataforma.
          </p>
        </div>
      </div>

      {/* Login Form - Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Welcome */}
          <div className="text-center space-y-4">
            <img src={logoEducar} alt="Logo Educar" className="h-24 mx-auto" />
            <h1 className="text-xl font-medium text-primary">Bem-vindo ao Educar</h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground font-medium">
                  Utilizador
                </Label>
                <Input id="username" type="text" placeholder="Digite o seu utilizador" value={username} onChange={e => setUsername(e.target.value)} required className="h-12 bg-card border-border focus:border-primary transition-base" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">
                  Palavra-passe
                </Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Digite a sua palavra-passe" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                    className="h-12 bg-card border-border focus:border-primary transition-base pr-10" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Ocultar palavra-passe" : "Mostrar palavra-passe"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => navigate("/recover-account")}
                className="text-sm text-primary hover:text-primary-light transition-base font-medium"
              >
                Activar / recuperar conta
              </button>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold shadow-medium hover:shadow-soft bg-secondary hover:bg-secondary/90 text-secondary-foreground" size="lg">
              Entrar
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Não tem conta?{" "}
              <a 
                href="https://wa.me/5531732750094?text=Olá,%20não%20tenho%20conta%20e%20preciso%20entrar%20em%20contacto%20com%20a%20minha%20instituição" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light font-medium transition-base"
              >
                Entre em contacto com a sua instituição
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Login;