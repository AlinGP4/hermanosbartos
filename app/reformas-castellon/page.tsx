import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Header } from "../ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Reformas en Castellón: tipos y materiales | Hermanos Bartos",
  description:
    "Guía de reformas en Castellón y provincia: vivienda integral, cocinas, baños, piscinas, exteriores, suelos y materiales adecuados para cada espacio.",
  openGraph: {
    title: "Reformas en Castellón: tipos y materiales | Hermanos Bartos",
    description:
      "Qué puede incluir una reforma, cómo elegimos los materiales y en qué municipios de Castellón trabajamos.",
  },
};

const reformTypes = [
  {
    title: "Reforma integral de vivienda",
    copy: "Cuando la casa necesita una actualización completa, revisamos la distribución y el estado de las instalaciones. La obra puede incluir demoliciones, tabiquería, falsos techos, fontanería, electricidad, climatización, carpintería, suelos, pintura y los remates de entrega.",
  },
  {
    title: "Reformas de cocina",
    copy: "Estudiamos los recorridos, los puntos de agua, la potencia eléctrica, la extracción y el espacio de almacenaje. Coordinamos mobiliario, encimera, iluminación, revestimientos y colocación de electrodomésticos para que la cocina funcione desde el primer día.",
  },
  {
    title: "Baños y zonas húmedas",
    copy: "Antes de colocar el revestimiento comprobamos desagües, pendientes e impermeabilización. Ejecutamos duchas, sanitarios, grifería, mamparas, iluminación y ventilación, con soluciones pensadas para el uso diario y el mantenimiento.",
  },
  {
    title: "Piscinas y terrazas",
    copy: "Revisamos el vaso, posibles pérdidas, impermeabilización, coronación y sistema de filtración. La intervención puede extenderse a la playa de piscina, la ducha exterior, la iluminación, los accesos y los pavimentos antideslizantes.",
  },
  {
    title: "Parquet y renovación de suelos",
    copy: "Instalamos madera multicapa, laminado y parquet, cuidando el nivelado de la base, las juntas, los rodapiés y los encuentros con puertas. Si el suelo de madera existente se puede conservar, valoramos su reparación, lijado y nuevo acabado.",
  },
  {
    title: "Obra exterior",
    copy: "Actuamos en porches, patios, accesos y cerramientos interiores de parcela. La elección de pavimentos, sellados y herrajes tiene en cuenta la exposición al sol, la lluvia y la humedad habitual en las zonas próximas a la costa.",
  },
];

const materials = [
  {
    title: "Porcelánico y piedra",
    copy: "El gres porcelánico funciona bien en cocinas, baños, terrazas y piscinas por su baja absorción y variedad de acabados. La piedra natural aporta una textura distinta, pero exige valorar porosidad, sellado y mantenimiento antes de decidir.",
  },
  {
    title: "Madera y suelos laminados",
    copy: "Para interiores trabajamos con parquet multicapa, tarima de madera y laminados resistentes. La humedad de la base, el sistema de climatización y la continuidad entre estancias determinan qué solución conviene instalar.",
  },
  {
    title: "Encimeras y mobiliario",
    copy: "Cuarzo compacto, piedra sinterizada, granito y laminado compacto ofrecen comportamientos diferentes frente al calor, las manchas y los golpes. En frentes y armarios se puede combinar tablero lacado, chapa de roble y melamina técnica.",
  },
  {
    title: "Aislamiento y acabados",
    copy: "Lanas minerales, trasdosados, morteros impermeables y pinturas lavables resuelven problemas distintos. Se especifican según el soporte, la orientación, la ventilación y la presencia de humedad, no por una elección aislada de catálogo.",
  },
];

const serviceAreas = [
  "Castellón de la Plana",
  "Vila-real",
  "Almassora",
  "Borriana",
  "Benicàssim",
  "Oropesa del Mar",
  "Nules",
  "Moncofa",
  "La Vall d’Uixó",
  "Segorbe",
];

const faqs = [
  {
    question: "¿Cuánto cuesta una reforma integral en Castellón?",
    answer: "Depende de los metros, el estado de las instalaciones, la distribución y los materiales elegidos. Dos viviendas del mismo tamaño pueden necesitar obras muy distintas. Por eso visitamos el inmueble y preparamos el presupuesto por partidas después de conocer el alcance real.",
  },
  {
    question: "¿Cuánto tiempo suele durar una reforma?",
    answer: "Una cocina o un baño requieren menos tiempo que una vivienda completa. También influyen los trabajos previos, las licencias y los plazos de fabricación de carpintería o mobiliario. Antes de empezar dejamos definido un calendario ajustado al proyecto.",
  },
  {
    question: "¿Se puede vivir en casa durante la obra?",
    answer: "En actuaciones parciales puede ser posible si se aísla la zona de trabajo. En una reforma integral suele ser poco práctico porque se cortan suministros, se generan polvo y ruido y varias estancias quedan fuera de uso al mismo tiempo.",
  },
  {
    question: "¿Qué materiales funcionan mejor cerca de la costa?",
    answer: "En exterior conviene elegir pavimentos de baja absorción, acabados antideslizantes y herrajes resistentes a la corrosión. En cada vivienda revisamos la exposición al viento, al sol y al ambiente salino antes de especificar carpinterías, fijaciones o revestimientos.",
  },
  {
    question: "¿Coordináis los distintos oficios de la reforma?",
    answer: "Sí. La planificación reúne albañilería, instalaciones, carpintería, pintura y colocación de acabados. Esto permite ordenar la entrada de cada oficio, controlar los encuentros entre trabajos y mantener un único calendario de obra.",
  },
];

export default function ReformasCastellonPage() {
  return (
    <main className="guide-page">
      <Header />

      <section className="subpage-hero" id="inicio" aria-labelledby="guide-title">
        <Image
          className="subpage-hero__image"
          src="/images/filosofia.jpg"
          alt="Muestras de materiales y planos para preparar una reforma"
          fill
          priority
          sizes="100vw"
        />
        <div className="subpage-hero__veil" />
        <div className="container subpage-hero__content">
          <p className="eyebrow eyebrow--light">Guía de reformas · Castellón y provincia</p>
          <h1 id="guide-title">Qué reformar, con qué materiales y por dónde empezar.</h1>
          <p>
            Cada vivienda pide decisiones distintas. Aquí explicamos los trabajos que solemos
            coordinar, los criterios para elegir acabados y las particularidades de reformar en
            el interior o cerca de la costa de Castellón.
          </p>
        </div>
      </section>

      <section className="section guide-intro">
        <div className="container guide-intro__grid">
          <div>
            <p className="eyebrow">01 / Antes del presupuesto</p>
            <h2>Qué necesita realmente la vivienda.</h2>
          </div>
          <div>
            <p>
              Una visita permite comprobar medidas, accesos, instalaciones, niveles y estado de
              los soportes. Con esa información se puede separar lo imprescindible de lo
              opcional y preparar un presupuesto comprensible, dividido por partidas.
            </p>
            <p>
              También revisamos cómo se usa la casa. No se plantea igual una vivienda habitual
              que un apartamento de verano, ni un piso antiguo del centro que una casa expuesta
              al ambiente marino.
            </p>
          </div>
        </div>
      </section>

      <div className="container guide-image-frame">
        <figure className="guide-image guide-image--work">
          <Image
            src="/images/reforma-en-proceso-castellon.jpg"
            alt="Reforma integral en proceso con acabados de madera, piedra y paredes de cal"
            fill
            sizes="(max-width: 760px) 100vw, 78vw"
          />
          <figcaption>La coordinación de instalaciones, carpintería y acabados evita rehacer trabajos.</figcaption>
        </figure>
      </div>

      <section className="section reform-detail" id="tipos-de-reforma">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Tipos de reforma</p>
              <h2>Qué puede incluir cada obra.</h2>
            </div>
            <p>
              El alcance definitivo se decide después de visitar la vivienda. Estas son las
              partidas más habituales en nuestros trabajos de reforma en Castellón.
            </p>
          </div>
          <div className="reform-detail__grid">
            {reformTypes.map((item, index) => (
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
            <h2>Elegir bien evita problemas después.</h2>
            <p>
              Una muestra no cuenta toda la historia. Valoramos humedad, tránsito, limpieza,
              exposición al sol y mantenimiento antes de proponer un material.
            </p>
          </div>
          <figure className="guide-image guide-image--materials">
            <Image
              src="/images/materiales-reforma-costa-castellon.jpg"
              alt="Muestras de piedra, porcelánico, madera y grifería para una reforma cerca de la costa"
              fill
              sizes="(max-width: 760px) 100vw, 90vw"
            />
            <figcaption>Materiales elegidos según el uso, la humedad y la exposición al ambiente costero.</figcaption>
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

      <section className="section service-area" id="zona">
        <div className="container service-area__grid">
          <div>
            <p className="eyebrow">04 / Zona de trabajo</p>
            <h2>Reformas en Castellón y provincia.</h2>
          </div>
          <div className="service-area__copy">
            <p>
              Trabajamos en viviendas habituales y segundas residencias de Castellón de la Plana
              y otras localidades de la provincia. En la costa prestamos atención al ambiente
              salino, la humedad y la exposición solar. En viviendas antiguas revisamos con más
              detalle las instalaciones, los niveles y los soportes antes de cerrar el alcance.
            </p>
            <div className="service-area__places" aria-label="Localidades de servicio">
              {serviceAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
            <p>
              Si tu municipio no aparece en la lista, indícalo al contactar. Confirmaremos la
              disponibilidad al revisar el proyecto.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq" id="preguntas">
        <div className="container faq__grid">
          <div>
            <p className="eyebrow">05 / Preguntas frecuentes</p>
            <h2>Lo que conviene saber antes de reformar.</h2>
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
            <p className="eyebrow">¿Tienes una reforma en mente?</p>
            <h2>Cuéntanos qué quieres cambiar.</h2>
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
              <p className="footer__statement">Espacios bien pensados. Reformas bien hechas.</p>
            </div>
            <nav className="footer__nav" aria-label="Navegación del pie">
              <a href="/#proyectos">Proyectos</a>
              <a href="/#servicios">Servicios</a>
              <a href="#tipos-de-reforma">Tipos de reforma</a>
              <a href="#materiales">Materiales</a>
              <a href="#zona">Castellón y provincia</a>
              <a href="/#contacto">Contacto</a>
            </nav>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Hermanos Bartos</span>
            <span>Reformas en Castellón y provincia</span>
            <a href="#inicio">Volver arriba ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
