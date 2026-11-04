import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Header } from "../ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Construcción y reforma de piscinas | Comunidad Valenciana",
  description:
    "Construcción, diseño y reforma de piscinas en Valencia, Alicante y Castellón. Rehabilitación, revestimientos, accesos y renovación de zonas exteriores.",
  openGraph: {
    title: "Piscinas en Valencia, Alicante y Castellón | Hermanos Bartos",
    description:
      "Construimos y renovamos piscinas adaptadas a cada vivienda en toda la Comunidad Valenciana.",
  },
};

const poolWork = [
  {
    title: "Diseño y construcción de piscinas",
    copy: "La forma y las medidas se deciden según la parcela, los accesos y el uso previsto. El proyecto también contempla profundidad, entrada al agua, ubicación de equipos y espacio libre alrededor del vaso.",
  },
  {
    title: "Reforma de piscinas antiguas",
    copy: "Una renovación puede afectar al revestimiento, la coronación, las escaleras, el pavimento exterior o las instalaciones. Antes de proponer acabados revisamos el estado del vaso y el origen de los problemas existentes.",
  },
  {
    title: "Impermeabilización y revestimiento",
    copy: "El soporte y las juntas deben estar preparados antes de colocar el acabado. Trabajamos con soluciones compatibles con la inmersión continua y escogemos el revestimiento por comportamiento, mantenimiento y aspecto final.",
  },
  {
    title: "Accesos y modernización",
    copy: "Podemos sustituir una escalera metálica por peldaños integrados, incorporar una zona de descanso dentro del agua o mejorar la iluminación. Cada cambio se estudia con las dimensiones reales de la piscina.",
  },
  {
    title: "Coronación y pavimento exterior",
    copy: "Las piezas de borde y el suelo próximo al agua necesitan buen agarre, baja absorción y encuentros bien resueltos. También comprobamos pendientes y evacuación para evitar agua estancada en la terraza.",
  },
  {
    title: "Piscina, terraza y jardín",
    copy: "Cuando el proyecto incluye el entorno, coordinamos recorridos, ducha, iluminación y transición hacia el jardín. La piscina funciona mejor cuando el exterior se plantea como un conjunto.",
  },
];

const materials = [
  {
    title: "Revestimiento del vaso",
    copy: "El acabado condiciona el color del agua, el tacto y el mantenimiento. La elección depende del soporte existente, el sistema de impermeabilización y el resultado que se busca.",
  },
  {
    title: "Coronación",
    copy: "Piedra, porcelánico y piezas prefabricadas tienen comportamientos distintos. Revisamos absorción, geometría del borde, juntas y comodidad al entrar o salir del agua.",
  },
  {
    title: "Pavimento antideslizante",
    copy: "En la zona exterior importan el agarre con los pies mojados, la temperatura superficial y la facilidad de limpieza. El formato también afecta a pendientes y despieces.",
  },
  {
    title: "Iluminación y elementos metálicos",
    copy: "Los focos, pasamanos y fijaciones deben ser adecuados para un ambiente húmedo y, en la costa, para una exposición más exigente. Su posición se define antes de cerrar los acabados.",
  },
];

const provinces = [
  {
    name: "Valencia",
    places: "Valencia, Torrent, Sagunto, Gandía y otros municipios de la provincia.",
  },
  {
    name: "Alicante",
    places: "Alicante, Elche, Dénia, Torrevieja y distintas localidades de interior y costa.",
  },
  {
    name: "Castellón",
    places: "Castellón de la Plana, Vila-real, Benicàssim, Oropesa del Mar y alrededores.",
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta construir una piscina?",
    answer: "El presupuesto depende de las medidas, el terreno, los accesos, el sistema constructivo, las instalaciones y los acabados. Visitamos la parcela antes de concretar partidas porque una misma piscina puede requerir medios de obra muy distintos según la vivienda.",
  },
  {
    question: "¿Se puede renovar una piscina sin cambiar su forma?",
    answer: "Sí, cuando la estructura está en condiciones puede mantenerse la geometría y actuar sobre impermeabilización, revestimiento, coronación, accesos o instalaciones. La revisión previa determina qué elementos conviene conservar.",
  },
  {
    question: "¿Qué se revisa antes de rehabilitar una piscina?",
    answer: "Comprobamos el estado visible del vaso, juntas, pérdidas de agua, revestimiento, piezas de borde, desagües, impulsión y zona técnica. También valoramos el pavimento exterior y la seguridad de los accesos.",
  },
  {
    question: "¿Trabajáis en Valencia, Alicante y Castellón?",
    answer: "Sí. Trabajamos en toda la Comunidad Valenciana y valoramos proyectos en municipios de las tres provincias. La disponibilidad de visita se confirma al conocer la ubicación y el alcance del trabajo.",
  },
  {
    question: "¿También realizáis reformas de interior?",
    answer: "Sí. Además de piscinas y espacios exteriores, realizamos reformas integrales de viviendas, cocinas, baños, instalaciones y suelos.",
  },
];

export default function PiscinasComunidadValencianaPage() {
  return (
    <main className="guide-page pool-guide">
      <Header />

      <section className="subpage-hero subpage-hero--pool" id="inicio" aria-labelledby="guide-title">
        <Image
          className="subpage-hero__image"
          src="/images/piscina-iluminacion-alicante.jpg"
          alt="Piscina residencial iluminada al anochecer en un jardín mediterráneo"
          fill
          priority
          sizes="100vw"
        />
        <div className="subpage-hero__veil" />
        <div className="container subpage-hero__content">
          <p className="eyebrow eyebrow--light">Valencia · Alicante · Castellón</p>
          <h1 id="guide-title">Construcción y reforma de piscinas en la Comunidad Valenciana.</h1>
          <p>
            Diseñamos piscinas nuevas y renovamos vasos existentes. Trabajamos el proyecto desde
            la distribución y las instalaciones hasta el revestimiento y la zona exterior.
          </p>
        </div>
      </section>

      <section className="section guide-intro">
        <div className="container guide-intro__grid">
          <div>
            <p className="eyebrow">01 / El punto de partida</p>
            <h2>Una piscina tiene que encajar en el espacio disponible.</h2>
          </div>
          <div>
            <p>
              En una obra nueva revisamos el terreno, los accesos y la relación con la vivienda.
              En una rehabilitación empezamos por el estado del vaso, las instalaciones y los
              acabados existentes. Esa primera visita permite definir el trabajo con criterio.
            </p>
            <p>
              La solución cambia según el contexto. Una parcela urbana, una vivienda en la costa
              y una piscina antigua plantean decisiones diferentes.
            </p>
          </div>
        </div>
      </section>

      <div className="container guide-image-frame">
        <figure className="guide-image guide-image--work">
          <Image
            src="/images/construccion-piscina-mediterranea.jpg"
            alt="Estructura e instalaciones durante la construcción de una piscina residencial"
            fill
            sizes="(max-width: 760px) 100vw, 78vw"
          />
          <figcaption>Imagen conceptual de una piscina durante la fase de estructura e instalaciones.</figcaption>
        </figure>
      </div>

      <section className="section reform-detail" id="trabajos">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Trabajos de piscina</p>
              <h2>Qué podemos plantear en cada proyecto.</h2>
            </div>
            <p>
              La intervención se concreta después de la visita. Estas son las actuaciones más
              habituales en construcción, reforma y modernización de piscinas.
            </p>
          </div>
          <div className="reform-detail__grid">
            {poolWork.map((item, index) => (
              <article className="reform-detail__card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section materials" id="materiales">
        <div className="container">
          <div className="materials__heading">
            <p className="eyebrow eyebrow--light">03 / Materiales y acabados</p>
            <h2>El agua exige elegir con cuidado.</h2>
            <p>
              El aspecto importa, pero también cuentan el agarre, la absorción, las juntas y la
              resistencia a la exposición continua al agua y al sol.
            </p>
          </div>
          <figure className="guide-image guide-image--materials">
            <Image
              src="/images/detalle-acabados-piscina-castellon.jpg"
              alt="Detalle de coronación, pavimento antideslizante y escalón integrado de piscina"
              fill
              sizes="(max-width: 760px) 100vw, 90vw"
            />
            <figcaption>Imagen conceptual de coronación, pavimento y acceso integrado.</figcaption>
          </figure>
          <div className="materials__grid">
            {materials.map((material) => (
              <article key={material.title}>
                <h3>{material.title}</h3>
                <p>{material.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section province-section" id="zona">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / Área de servicio</p>
              <h2>Piscinas en las tres provincias.</h2>
            </div>
            <p>
              Trabajamos en toda la Comunidad Valenciana. La ubicación, los accesos y el alcance
              sirven para organizar la visita y la ejecución.
            </p>
          </div>
          <div className="province-grid">
            {provinces.map((province) => (
              <article key={province.name}>
                <h3>{province.name}</h3>
                <p>{province.places}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" id="preguntas">
        <div className="container faq__grid">
          <div>
            <p className="eyebrow">05 / Preguntas frecuentes</p>
            <h2>Antes de pedir presupuesto.</h2>
          </div>
          <div className="faq__list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-cta">
        <div className="container guide-cta__inner">
          <div>
            <p className="eyebrow">¿Tienes un proyecto de piscina?</p>
            <h2>Cuéntanos dónde está y qué necesitas.</h2>
          </div>
          <a className="button button--dark" href="/#contacto">
            Solicita presupuesto <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <a className="brand brand--footer" href="/" aria-label="Hermanos Bartos, inicio">
                <Image className="brand__mark" src="/brand/logo-mark.svg" alt="" width={38} height={38} />
                <span className="brand__wordmark">HERMANOS <strong>BARTOS</strong></span>
              </a>
              <p className="footer__statement">Construcción y reforma de piscinas.</p>
            </div>
            <nav className="footer__nav" aria-label="Navegación del pie">
              <a href="/#piscinas">Piscinas</a>
              <a href="#trabajos">Servicios</a>
              <a href="#materiales">Materiales</a>
              <a href="#zona">Valencia, Alicante y Castellón</a>
              <a href="/#interiores">Reformas de interior</a>
              <a href="/#contacto">Contacto</a>
            </nav>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Hermanos Bartos</span>
            <span>Comunidad Valenciana</span>
            <a href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
