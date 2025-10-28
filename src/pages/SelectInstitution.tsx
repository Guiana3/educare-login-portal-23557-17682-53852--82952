import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap } from "lucide-react";
import logoEducar from "@/assets/logo-educar.png";
import { HeroCarousel } from "@/components/HeroCarousel";

const SelectInstitution = () => {
  const location = useLocation();
  const username = location.state?.username || "Utilizador";
  const [institution, setInstitution] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (institution) {
      const selectedInstitution = institutions.find(i => i.id === institution);
      const message = encodeURIComponent(
        `Olá, seleccionei a instituição ${selectedInstitution?.name} e gostaria de prosseguir`
      );
      window.open(
        `https://wa.me/5531732750094?text=${message}`,
        '_blank'
      );
    }
  };

  // Mock institutions data
  const institutions = [
    { id: "1", name: "Colégio Santo Agostinho" },
    { id: "2", name: "Escola Municipal João XXIII" },
    { id: "3", name: "Centro Educacional Dom Bosco" },
    { id: "4", name: "Instituto de Educação São José" },
    { id: "5", name: "Colégio Estadual Machado de Assis" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Hero Carousel - Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative min-h-screen">
        <HeroCarousel />
      </div>

      {/* Institution Selection - Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Welcome */}
          <div className="text-center space-y-4">
            <img
              src={logoEducar}
              alt="Logo Educar"
              className="h-24 mx-auto"
            />
            <h1 className="text-xl font-medium text-primary">Bem-vindo {username}</h1>
          </div>

          {/* Icon and Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              Seleccione a sua instituição
            </h2>
            <p className="text-muted-foreground">
              Escolha a instituição de ensino para continuar
            </p>
          </div>

          {/* Selection Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="institution" className="text-foreground font-medium">
                Instituição de Ensino
              </Label>
              <Select value={institution} onValueChange={setInstitution} required>
                <SelectTrigger 
                  id="institution"
                  className="h-12 bg-card border-border focus:border-primary transition-base"
                >
                  <SelectValue placeholder="Seleccione uma instituição" />
                </SelectTrigger>
                <SelectContent>
                  {institutions.map((inst) => (
                    <SelectItem 
                      key={inst.id} 
                      value={inst.id}
                    >
                      {inst.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Não encontra a sua instituição?{" "}
                <a 
                  href="https://wa.me/5531732750094?text=Olá,%20não%20encontro%20a%20minha%20instituição%20e%20preciso%20de%20suporte" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light font-medium transition-base"
                >
                  Entre em contacto com o suporte
                </a>.
              </p>
            </div>

            <Button
              type="submit"
              disabled={!institution}
              className="w-full h-12 text-base font-semibold shadow-medium hover:shadow-soft bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              size="lg"
            >
              Prosseguir
            </Button>
          </form>

          {/* Back Link */}
          <div className="text-center pt-6 border-t border-border">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-base"
            >
              ← Voltar ao início de sessão
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInstitution;
