import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-foreground">Página não encontrada</p>
        <p className="text-muted-foreground max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild size="lg">
          <a href="/">Voltar ao início</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
