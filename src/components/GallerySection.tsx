import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Andaime fachadeiro em edifício comercial" },
  { src: gallery2, alt: "Montagem de andaimes por equipe técnica" },
  { src: gallery3, alt: "Equipamentos organizados no depósito" },
  { src: gallery4, alt: "Andaime em obra residencial" },
  { src: gallery5, alt: "Detalhe de conexão de andaime" },
  { src: gallery6, alt: "Andaime em prédio de grande porte" },
];

const GallerySection = () => (
  <section id="galeria" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl tracking-wide mb-4">
          <span className="text-primary">Galeria</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Confira alguns dos nossos trabalhos e equipamentos.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="animate-on-scroll overflow-hidden rounded-lg group"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
