import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import FamilyCarousel from "@/components/FamilyCarousel";

const institutions = [
  { id: "1", name: "Escola Primária de Maputo" },
  { id: "2", name: "Escola Secundária Josina Machel" },
  { id: "3", name: "Colégio São Paulo" },
  { id: "4", name: "Instituto Industrial de Maputo" },
  { id: "5", name: "Escola Portuguesa de Moçambique" },
];

const provinces = [
  { id: "1", name: "Maputo Cidade" },
  { id: "2", name: "Maputo Província" },
  { id: "3", name: "Gaza" },
  { id: "4", name: "Inhambane" },
  { id: "5", name: "Sofala" },
  { id: "6", name: "Manica" },
  { id: "7", name: "Tete" },
  { id: "8", name: "Zambézia" },
  { id: "9", name: "Nampula" },
  { id: "10", name: "Niassa" },
  { id: "11", name: "Cabo Delgado" },
];

const RecoverAccount = () => {
  const [nuit, setNuit] = useState("");
  const [institution, setInstitution] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend validation API
    console.log({ nuit, institution, lastName, birthDate, province });
  };

  return (
    <div className="flex min-h-screen">
      {/* Family Carousel - Left Side */}
      <div className="hidden lg:flex lg:w-1/2">
        <FamilyCarousel />
      </div>

      {/* Recovery Form - Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center space-y-4">
            <img
              src={logoEducar}
              alt="Logo Educar"
              className="h-24 mx-auto"
            />
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-semibold text-primary">
              Activar / Recuperar Conta
            </h1>
            <p className="text-muted-foreground">
              Preencha os dados abaixo para activar ou recuperar a sua conta
            </p>
          </div>

          {/* Recovery Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* NUIT */}
              <div className="space-y-2">
                <Label htmlFor="nuit" className="text-foreground font-medium">
                  NUIT
                </Label>
                <Input
                  id="nuit"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Digite o seu NUIT"
                  value={nuit}
                  onChange={(e) => setNuit(e.target.value.replace(/\D/g, ""))}
                  required
                  className="h-12 bg-card border-border focus:border-primary transition-base"
                />
              </div>

              {/* Institution Code */}
              <div className="space-y-2">
                <Label htmlFor="institution" className="text-foreground font-medium">
                  Código da Instituição
                </Label>
                <Select value={institution} onValueChange={setInstitution} required>
                  <SelectTrigger className="h-12 bg-card border-border focus:border-primary transition-base">
                    <SelectValue placeholder="Seleccione a instituição" />
                  </SelectTrigger>
                  <SelectContent>
                    {institutions.map((inst) => (
                      <SelectItem key={inst.id} value={inst.id}>
                        {inst.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground font-medium">
                  Apelido
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Digite o seu apelido"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="h-12 bg-card border-border focus:border-primary transition-base"
                />
              </div>

              {/* Birth Date */}
              <div className="space-y-2">
                <Label htmlFor="birthDate" className="text-foreground font-medium">
                  Data de Nascimento
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                  className="h-12 bg-card border-border focus:border-primary transition-base"
                />
              </div>

              {/* Province of Birth */}
              <div className="space-y-2">
                <Label htmlFor="province" className="text-foreground font-medium">
                  Província de Nascimento
                </Label>
                <Select value={province} onValueChange={setProvince} required>
                  <SelectTrigger className="h-12 bg-card border-border focus:border-primary transition-base">
                    <SelectValue placeholder="Seleccione a província" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((prov) => (
                      <SelectItem key={prov.id} value={prov.id}>
                        {prov.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold shadow-medium hover:shadow-soft bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              size="lg"
            >
              Validar
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Digite as credenciais para entrar no sistema.{" "}
              <a
                href="/"
                className="text-primary hover:text-primary-light font-medium transition-base"
              >
                Sair
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverAccount;
