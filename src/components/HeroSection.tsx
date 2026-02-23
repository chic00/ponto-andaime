import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle, FileText } from "lucide-react";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Andaimes em obra" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/75" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl py-32">
      <h1 className="text-4xl sm:text-5xl md:text-7xl leading-tight tracking-wide mb-6 animate-fade-up">
        Locação de Andaimes e Escoras com{" "}
        <span className="text-primary">Segurança e Qualidade</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Soluções práticas e seguras para sua obra.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <a
          href="https://wa.me/5565996411042?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20andaimes."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <MessageCircle size={20} />
          Falar no WhatsApp
        </a>
        <a
          href="#contato"
          className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 rounded-md text-lg font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          <FileText size={20} />
          Solicitar Orçamento
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
