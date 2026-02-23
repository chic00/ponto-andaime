import { CheckCircle2, Truck, Headphones, DollarSign, ShieldCheck } from "lucide-react";

const diffs = [
  { icon: CheckCircle2, label: "Equipamentos revisados" },
  { icon: Truck, label: "Entrega rápida" },
  { icon: Headphones, label: "Atendimento especializado" },
  { icon: DollarSign, label: "Melhor custo-benefício" },
  { icon: ShieldCheck, label: "Segurança em primeiro lugar" },
];

const DifferentialsSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl tracking-wide mb-4">
          Nossos <span className="text-primary">Diferenciais</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {diffs.map((d, i) => (
          <div
            key={d.label}
            className="animate-on-scroll flex flex-col items-center text-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <d.icon className="text-primary" size={36} />
            <span className="text-sm font-medium">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
