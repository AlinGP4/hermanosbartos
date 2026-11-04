import Image from "next/image";
import { ArrowUpRight, CompareSlider, ContactForm, Header, ProjectGallery } from "./ui";

export const dynamic = "force-dynamic";

const services = [
  {
    number: "01",
    title: "Piscinas y exterior",
    copy: "Renovación de piscinas, terrazas y zonas exteriores pensadas para disfrutarlas.",
    image: "/images/piscina.jpg",
  },
  {
    number: "02",
    title: "Cocinas a medida",
    copy: "Distribución, mobiliario e instalaciones coordinadas hasta el último acabado.",
    image: "/images/cocina.jpg",
  },
  {
    number: "03",
    title: "Reformas integrales",
    copy: "Rediseñamos la vivienda completa con un único equipo y una planificación clara.",
    image: "/images/hero.jpg",
  },
  {
    number: "04",
    title: "Parquet y suelos",
    copy: "Instalación y renovación de madera y superficies resistentes para cada espacio.",
    image: "/images/parquet.jpg",
  },
];

export default function Page() {
  return (
    <main>
      <Header />

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <Image
          className="hero__image"
          src="/images/hero.jpg"
          alt="Salón mediterráneo reformado con materiales naturales"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__veil" />
        <div className="container hero__content">
          <p className="eyebrow eyebrow--light">Reformas integrales · Interiorismo · Exterior</p>
          <h1 id="hero-title">
            Espacios para <em>vivirlos.</em>
          </h1>
          <div className="hero__intro">
            <p>
              Transformamos viviendas con una visión clara: buen diseño, materiales honestos y
              una ejecución cuidada.
            </p>
            <a className="button" href="#proyectos">
              Ver proyectos <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="container hero__footer">
          <span>Diseñamos · Reformamos · Transformamos</span>
          <a href="#filosofia">Explorar ↓</a>
        </div>
      </section>

      <section className="section intro" id="filosofia">
        <div className="container intro__grid">
          <div>
            <p className="eyebrow">01 / Nuestra filosofía</p>
            <h2>No hacemos solo reformas. Creamos lugares que importan.</h2>
          </div>
          <div className="intro__copy">
            <div className="intro__image">
              <Image
                src="/images/filosofia.jpg"
                alt="Planificación de una reforma con planos y muestras de materiales"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
              />
            </div>
            <p>
              Cada espacio tiene una nueva historia por contar. Desde una cocina que reúne a toda
              la familia hasta una piscina que cambia el verano: cuidamos el recorrido completo,
              del primer boceto al último acabado.
            </p>
            <a className="text-link" href="#proceso">
              Nuestra forma de trabajar <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="proyectos">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Espacios seleccionados</p>
              <h2>Una idea distinta para cada casa.</h2>
            </div>
            <p>
              Una muestra visual de cómo entendemos los materiales, la luz y el uso cotidiano de
              cada estancia.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="container">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="eyebrow eyebrow--light">03 / Lo que hacemos</p>
              <h2>Todo lo necesario para transformar tu vivienda.</h2>
            </div>
            <p>Un proceso coordinado para que cada decisión encaje con la siguiente.</p>
          </div>
          <div className="services__grid">
            {services.map((service) => (
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
        </div>
      </section>

      <section className="manifesto" id="nosotros">
        <div className="manifesto__image">
          <Image
            src="/images/parquet.jpg"
            alt="Interior reformado con parquet natural en espiga"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="manifesto__copy">
          <p className="eyebrow">04 / El valor de cada detalle</p>
          <h2>Un buen resultado empieza mucho antes de la obra.</h2>
          <p>
            Escuchamos, medimos y planificamos pensando en cómo quieres vivir. Combinamos la
            sensibilidad por el diseño con el oficio de quienes saben construir.
          </p>
          <a className="text-link" href="#contacto">
            Cuéntanos tu idea <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="section transformation" aria-labelledby="transformation-title">
        <div className="container transformation__grid">
          <div className="transformation__copy">
            <p className="eyebrow">05 / Transformación</p>
            <h2 id="transformation-title">El cambio se nota.</h2>
            <p>
              Desliza la línea para ver cómo una misma estancia puede ganar luz, calma y una nueva
              forma de vivirse.
            </p>
          </div>
          <CompareSlider />
        </div>
      </section>

      <section className="section process" id="proceso">
        <div className="container">
          <p className="eyebrow">06 / Nuestro proceso</p>
          <h2>Claro desde el primer día.</h2>
          <div className="process__grid">
            <article>
              <span>01 / Escuchamos</span>
              <h3>Tu idea, nuestro punto de partida.</h3>
              <p>Hablamos de lo que necesitas, visitamos el espacio y ordenamos las prioridades.</p>
            </article>
            <article>
              <span>02 / Planificamos</span>
              <h3>Un plan sin sorpresas.</h3>
              <p>Definimos propuesta, materiales, presupuesto y calendario antes de comenzar.</p>
            </article>
            <article>
              <span>03 / Transformamos</span>
              <h3>Cuidamos cada acabado.</h3>
              <p>Coordinamos los trabajos hasta entregar un espacio preparado para disfrutar.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="container contact__grid">
          <div>
            <p className="eyebrow">07 / Hablemos de tu proyecto</p>
            <h2>Tu próxima reforma empieza aquí.</h2>
            <p>
              ¿Una cocina nueva, una piscina renovada o una reforma completa? Cuéntanos qué tienes
              en mente y damos forma a la idea.
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
                HERMANOS <span>BARTOS</span>
              </a>
              <p className="footer__statement">Espacios bien pensados. Reformas bien hechas.</p>
            </div>
            <nav className="footer__nav" aria-label="Navegación del pie">
              <a href="#proyectos">Proyectos</a>
              <a href="#servicios">Servicios</a>
              <a href="#proceso">Proceso</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Hermanos Bartos</span>
            <span>Reformas · Interiorismo · Exterior</span>
            <a href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
