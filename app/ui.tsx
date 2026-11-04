"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export function ArrowUpRight() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 19 19 5M10 5h9v9" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="/" aria-label="Hermanos Bartos, inicio">
          <Image className="brand__mark" src="/brand/logo-mark.svg" alt="" width={36} height={36} priority />
          <span className="brand__wordmark">HERMANOS <strong>BARTOS</strong></span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Abrir navegación</span>
          <i />
          <i />
        </button>
        <nav
          className={`header__nav ${open ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Navegación principal"
        >
          {[
            ["Piscinas", "/#piscinas"],
            ["Servicios", "/#servicios"],
            ["Proyectos", "/#proyectos"],
            ["Interiores", "/#interiores"],
            ["Zona", "/#zona"],
          ].map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header__cta" href="/#contacto">
          Solicita presupuesto <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}

const projects = [
  {
    title: "Piscina integrada en el jardín",
    meta: "Diseño de piscina · Exterior mediterráneo",
    category: "nuevas",
    image: "/images/piscinas-comunidad-valenciana-hero.jpg",
    alt: "Piscina contemporánea integrada en el jardín de una vivienda mediterránea",
    wide: true,
  },
  {
    title: "Una piscina para un patio estrecho",
    meta: "Piscina compacta · Diseño a medida",
    category: "nuevas",
    image: "/images/piscina-compacta-valencia.jpg",
    alt: "Piscina compacta diseñada para un patio urbano estrecho",
  },
  {
    title: "Rehabilitación completa",
    meta: "Renovación de vaso · Nuevos acabados",
    category: "reformas",
    image: "/images/rehabilitacion-piscina-despues.jpg",
    alt: "Piscina rehabilitada con nuevos revestimientos, coronación y escalera integrada",
  },
  {
    title: "Iluminación para alargar la tarde",
    meta: "Iluminación · Piscina y jardín",
    category: "acabados",
    image: "/images/piscina-iluminacion-alicante.jpg",
    alt: "Piscina contemporánea con iluminación subacuática al anochecer",
    wide: true,
  },
];

const filters = [
  ["todos", "Todos"],
  ["nuevas", "Piscinas nuevas"],
  ["reformas", "Rehabilitación"],
  ["acabados", "Acabados"],
];

export function ProjectGallery() {
  const [filter, setFilter] = useState("todos");
  const visible = projects.filter((project) => filter === "todos" || project.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar espacios por categoría">
        {filters.map(([value, label]) => (
          <button
            className={filter === value ? "is-active" : ""}
            type="button"
            key={value}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="projects-grid" aria-live="polite">
        {visible.map((project, index) => (
          <article className={`project-card ${project.wide ? "project-card--wide" : ""}`} key={project.title}>
            <div className="project-card__image">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 80vw" />
              <span className="project-card__arrow" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </div>
            <div className="project-card__copy">
              <div>
                <h3>{project.title}</h3>
                <p>{project.meta}</p>
              </div>
              <span>0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note">
        Imágenes conceptuales creadas para mostrar tipos de piscina, acabados y posibilidades de diseño.
      </p>
    </>
  );
}

export function CompareSlider() {
  const [split, setSplit] = useState(50);

  return (
    <div className="compare" style={{ "--split": `${split}%` } as React.CSSProperties}>
      <Image className="compare__before" src="/images/rehabilitacion-piscina-antes.jpg" alt="Piscina antigua antes de la rehabilitación" fill sizes="(max-width: 800px) 100vw, 60vw" />
      <Image className="compare__after" src="/images/rehabilitacion-piscina-despues.jpg" alt="La misma piscina renovada con nuevos revestimientos y escalera integrada" fill sizes="(max-width: 800px) 100vw, 60vw" />
      <span className="compare__label compare__label--before">Antes</span>
      <span className="compare__label compare__label--after">Después</span>
      <div className="compare__handle"><span>↔</span></div>
      <input
        type="range"
        min="0"
        max="100"
        value={split}
        aria-label="Comparar el antes y el después"
        onChange={(event) => setSplit(Number(event.target.value))}
      />
    </div>
  );
}

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Formulario de demostración: todavía no enviamos datos. Lo conectaremos con Resend en la siguiente fase.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Nombre</span>
        <input name="nombre" autoComplete="name" placeholder="Tu nombre *" required />
      </label>
      <label>
        <span>Correo electrónico</span>
        <input name="email" type="email" autoComplete="email" placeholder="Correo electrónico *" required />
      </label>
      <label>
        <span>Tipo de reforma</span>
        <select name="tipo" defaultValue="" required>
          <option value="" disabled>¿Qué proyecto tienes? *</option>
          <option>Construcción de piscina</option>
          <option>Reforma o rehabilitación de piscina</option>
          <option>Revestimientos y acabados</option>
          <option>Zona exterior o terraza</option>
          <option>Cocina</option>
          <option>Baño</option>
          <option>Reforma integral</option>
          <option>Otro</option>
        </select>
      </label>
      <label>
        <span>Descripción del proyecto</span>
        <textarea name="mensaje" rows={4} placeholder="Cuéntanos brevemente tu proyecto *" required />
      </label>
      <button className="button button--dark" type="submit">
        Preparar consulta <ArrowUpRight />
      </button>
      <p className="contact-form__note">
        El formulario aún no envía información. La integración con Resend se añadirá más adelante.
      </p>
      {message && <p className="contact-form__status" role="status">{message}</p>}
    </form>
  );
}
