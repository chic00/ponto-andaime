import { Phone, MessageCircle, Instagram, Shield } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <span className="font-display text-2xl tracking-wide">
            PONTO DO <span className="text-primary">ANDAIME</span>
          </span>
          <p className="text-muted-foreground mt-3 text-sm">
            Locação de andaimes e escoras com segurança e qualidade para sua obra.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold font-body mb-4 text-sm uppercase tracking-wider text-muted-foreground">Links Rápidos</h4>
          <ul className="space-y-2 text-sm">
            {["Início", "Sobre", "Serviços", "Galeria", "Contato"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/privacidade"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Shield size={14} /> Política de Privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold font-body mb-4 text-sm uppercase tracking-wider text-muted-foreground">Contato</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+5565996411042" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={16} /> (65) 99641-1042
            </a>
            <a
              href="https://wa.me/5565996411042?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20andaimes."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
            href="https://www.instagram.com/pontodoandaime/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Ponto do Andaime — Todos os direitos reservados</span>
        <span className="hidden md:inline">·</span>
        <a href="/privacidade" className="hover:text-primary transition-colors underline underline-offset-2">
          Política de Privacidade e Cookies
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
