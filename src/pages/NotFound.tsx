import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-2">Página não encontrada</p>
        <p className="text-muted-foreground mb-8">
          O endereço que você acessou não existe ou foi removido.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
