import { Construction, Columns3, Wrench, Building2 } from "lucide-react";

const services = [
  { icon: Construction, title: "Locação de Andaimes", desc: "Andaimes tubulares e fachadeiros para obras de todos os portes, com montagem inclusa." },
  { icon: Columns3, title: "Locação de Escoras", desc: "Escoras metálicas de alta resistência para lajes, vigas e estruturas diversas." },
  { icon: Wrench, title: "Montagem e Desmontagem", desc: "Equipe técnica especializada para montagem e desmontagem com total segurança." },
  { icon: Building2, title: "Obras Residenciais e Comerciais", desc: "Atendemos desde pequenas reformas até grandes empreendimentos comerciais." },
];

const ServicesSection = () => (
  <section id="servicos" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl tracking-wide mb-4">
          Nossos <span className="text-primary">Serviços</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Soluções completas para a sua obra.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="animate-on-scroll bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all group"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 font-body">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
