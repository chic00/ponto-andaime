import { Phone, MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5565996411042?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20andaimes.";

const ContactSection = () => (
  <section id="contato" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-3xl text-center">
      <div className="animate-on-scroll">
        <h2 className="text-4xl md:text-5xl tracking-wide mb-4">
          Fale <span className="text-primary">Conosco</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Entre em contato e solicite seu orçamento agora mesmo.
        </p>
      </div>

      <div className="animate-on-scroll space-y-6">
        <div className="flex items-center justify-center gap-3 text-xl">
          <Phone className="text-primary" size={24} />
          <a href="tel:+5565996411042" className="hover:text-primary transition-colors">
            (65) 99641-1042
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-md text-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          <MessageCircle size={24} />
          Chamar no WhatsApp
        </a>

        <div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-md font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram size={20} />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
