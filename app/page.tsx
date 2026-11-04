import Image from "next/image";
import { ArrowUpRight, CompareSlider, ContactForm, Header, ProjectGallery } from "./ui";

export const dynamic = "force-dynamic";

const poolServices = [
  {
    number: "01",
    title: "Construcción y diseño",
    copy: "Definimos forma, medidas, accesos, profundidad, instalaciones y relación con la terraza antes de empezar la obra.",
    image: "/images/construccion-piscina-mediterranea.jpg",
  },
  {
    number: "02",
    title: "Reforma y rehabilitación",
    copy: "Renovamos piscinas antiguas, corregimos daños y actualizamos el vaso, la coronación, los accesos y el sistema de filtración.",
    image: "/images/rehabilitacion-piscina-despues.jpg",
  },
  {
    number: "03",
    title: "Revestimientos y acabados",
    copy: "Elegimos soluciones adecuadas para el agua, el sol y el uso diario: revestimiento, piezas de borde y pavimento antideslizante.",
    image: "/images/detalle-acabados-piscina-castellon.jpg",
  },
  {
    number: "04",
    title: "Piscina y zona exterior",
    copy: "Resolvemos la piscina junto con la terraza, la iluminación, la ducha, los recorridos y el encuentro con el jardín.",
    image: "/images/piscina-iluminacion-alicante.jpg",
  },
];

const serviceAreas = [
  "Valencia",
  "Sagunto",
  "Torrent",
  "Gandía",
  "Alicante",
  "Elche",
  "Dénia",
  "Torrevieja",
  "Castellón de la Plana",
  "Vila-real",
  "Benicàssim",
  "Oropesa del Mar",
];

export default function Page() {
  return (
    <main>
      <Header />

      <section className="hero hero--pool" id="inicio" aria-labelledby="hero-title">
        <Image
          className="hero__image"
          src="/images/piscinas-comunidad-valenciana-hero.jpg"
          alt="Piscina contemporánea integrada en una vivienda y jardín mediterráneos"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__veil" />
        <div className="container hero__content">
          <p className="eyebrow eyebrow--light">Especialistas en piscinas · Comunidad Valenciana</p>
          <h1 id="hero-title">
            Piscinas hechas para <em>tu casa.</em>
          </h1>
          <div className="hero__intro">
            <p>
              Construimos y renovamos piscinas en Valencia, Alicante y Castellón. Cada proyecto
              se adapta al espacio, al uso y al presupuesto disponible.
            </p>
            <a className="button" href="#contacto">
              Hablemos de tu piscina <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="container hero__footer">
          <span>Construcción y reforma de piscinas</span>
          <a href="#piscinas">Explorar ↓</a>
        </div>
      </section>

      <section className="section intro pool-intro" id="piscinas">
        <div className="container intro__grid">
          <div>
            <p className="eyebrow">01 / Piscinas a medida</p>
            <h2>El proyecto empieza en el terreno.</h2>
          </div>
          <div className="intro__copy">
            <div className="intro__image intro__image--pool">
              <Image
                src="/images/construccion-piscina-mediterranea.jpg"
                alt="Construcción de una piscina residencial con estructura e instalaciones preparadas"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
              />
            </div>
            <p>
              Revisamos accesos, orientación, desniveles y espacio de uso alrededor del agua.
              Después concretamos medidas, sistema constructivo, instalaciones y acabados. Así
              la piscina se integra en la vivienda y su mantenimiento resulta razonable.
            </p>
            <a className="text-link" href="/piscinas-comunidad-valenciana">
              Ver servicios de piscinas <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="container">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="eyebrow eyebrow--light">02 / Servicios de piscinas</p>
              <h2>Construcción, renovación y acabados.</h2>
            </div>
            <p>
              Podemos intervenir en una piscina nueva o trabajar sobre una existente. El alcance
              se define después de revisar el espacio y el estado de cada elemento.
            </p>
          </div>
          <div className="services__grid">
            {poolServices.map((service) => (
              <a className="service-card" href="#contacto" key={service.number}>
                <div className="service-card__image">
                  <Image src={service.image} alt="" fill sizes="(max-width: 700px) 100vw, 25vw" />
                </div>
                <span className="service-card__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ArrowUpRight />
              </a>
            ))}
          </div>
          <a className="services__more" href="/piscinas-comunidad-valenciana">
            Construcción y reforma de piscinas <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="section projects-section" id="proyectos">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Posibilidades de diseño</p>
              <h2>Una piscina distinta para cada espacio.</h2>
            </div>
            <p>
              Piscinas amplias, patios compactos, rehabilitaciones e iluminación para el uso al
              anochecer. Estas imágenes ayudan a visualizar soluciones posibles.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>

      <section className="section transformation" aria-labelledby="transformation-title">
        <div className="container transformation__grid">
          <div className="transformation__copy">
            <p className="eyebrow">04 / Rehabilitación</p>
            <h2 id="transformation-title">Una piscina antigua puede cambiar por completo.</h2>
            <p>
              Desliza la línea para comparar una renovación de revestimiento, coronación,
              pavimento y acceso al agua. Es una visualización conceptual del tipo de intervención.
            </p>
          </div>
          <CompareSlider />
        </div>
      </section>

      <section className="manifesto interior-service" id="interiores">
        <div className="manifesto__image">
          <Image
            src="/images/reforma-interior-comunidad-valenciana.jpg"
            alt="Cocina y salón reformados con madera, piedra e iluminación natural"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="manifesto__copy">
          <p className="eyebrow">05 / Reformas de interior</p>
          <h2>También reformamos el interior de la vivienda.</h2>
          <p>
            Realizamos reformas integrales, cocinas, baños, suelos e instalaciones. Es una línea
            complementaria para clientes que quieren renovar la casa junto con la piscina o
            abordar un proyecto interior independiente.
          </p>
          <a className="text-link" href="#contacto">
            Cuéntanos qué quieres reformar <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="section service-area" id="zona">
        <div className="container service-area__grid">
          <div>
            <p className="eyebrow">06 / Zona de trabajo</p>
            <h2>Trabajamos en toda la Comunidad Valenciana.</h2>
          </div>
          <div className="service-area__copy">
            <p>
              Atendemos proyectos de piscinas y reformas en las provincias de Valencia, Alicante
              y Castellón. Nos desplazamos a distintos municipios para visitar el espacio y valorar
              el trabajo antes de preparar el presupuesto.
            </p>
            <div className="service-area__places" aria-label="Municipios y zonas de servicio">
              {serviceAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
            <p>
              La lista es orientativa. Si tu municipio no aparece, indícalo en el formulario y
              confirmaremos la disponibilidad para la visita.
            </p>
          </div>
        </div>
      </section>

      <section className="section process" id="proceso">
        <div className="container">
          <p className="eyebrow">07 / Cómo trabajamos</p>
          <h2>Decisiones claras antes de construir.</h2>
          <div className="process__grid">
            <article>
              <span>01 / Visita</span>
              <h3>Vemos el espacio y escuchamos lo que necesitas.</h3>
              <p>Revisamos el terreno o la piscina existente, los accesos y el uso previsto.</p>
            </article>
            <article>
              <span>02 / Propuesta</span>
              <h3>Definimos el alcance con partidas comprensibles.</h3>
              <p>Concretamos medidas, instalaciones, materiales, presupuesto y orden de trabajo.</p>
            </article>
            <article>
              <span>03 / Obra</span>
              <h3>Coordinamos la ejecución y los acabados.</h3>
              <p>Organizamos los trabajos hasta completar la piscina y su encuentro con el exterior.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="container contact__grid">
          <div>
            <p className="eyebrow">08 / Solicita presupuesto</p>
            <h2>Hablemos de tu piscina.</h2>
            <p>
              Cuéntanos dónde se encuentra el proyecto y si buscas construir una piscina nueva o
              renovar la que ya tienes. También puedes consultarnos una reforma de interior.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <a className="brand brand--footer" href="#inicio" aria-label="Hermanos Bartos, inicio">
                <Image className="brand__mark" src="/brand/logo-mark.svg" alt="" width={38} height={38} />
                <span className="brand__wordmark">HERMANOS <strong>BARTOS</strong></span>
              </a>
              <p className="footer__statement">Piscinas para cada espacio y cada forma de vivirlo.</p>
            </div>
            <nav className="footer__nav" aria-label="Navegación del pie">
              <a href="#piscinas">Piscinas</a>
              <a href="#servicios">Servicios</a>
              <a href="#proyectos">Proyectos</a>
              <a href="/piscinas-comunidad-valenciana">Piscinas en la Comunidad Valenciana</a>
              <a href="#interiores">Reformas de interior</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Hermanos Bartos</span>
            <span>Valencia · Alicante · Castellón</span>
            <a href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
