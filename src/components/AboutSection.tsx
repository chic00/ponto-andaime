import { ShieldCheck, Zap, Users, Award } from "lucide-react";

const items = [
  { icon: Award, title: "Experiência", text: "Anos de atuação no mercado de construção civil, com milhares de obras atendidas." },
  { icon: ShieldCheck, title: "Segurança", text: "Equipamentos revisados e certificados, garantindo total segurança na sua obra." },
  { icon: Zap, title: "Agilidade", text: "Entrega e montagem rápidas para que sua obra não pare." },
  { icon: Users, title: "Compromisso", text: "Atendimento personalizado e suporte técnico do início ao fim." },
];

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl tracking-wide mb-4">
          Sobre a <span className="text-primary">Ponto do Andaime</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Somos especialistas em locação de andaimes e escoras, oferecendo soluções completas para obras residenciais e comerciais com foco em segurança, qualidade e agilidade.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="animate-on-scroll bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={36} />
            <h3 className="text-xl font-semibold mb-2 font-body">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
