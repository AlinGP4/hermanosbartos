"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#inicio" aria-label="Hermanos Bartos, inicio">
          HERMANOS <span>BARTOS</span>
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
            ["Proyectos", "#proyectos"],
            ["Servicios", "#servicios"],
            ["Nosotros", "#nosotros"],
            ["Proceso", "#proceso"],
          ].map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header__cta" href="#contacto">
          Solicita presupuesto <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}

const projects = [
  {
    title: "Casa de la luz",
    meta: "Reforma integral · Interiorismo",
    category: "interiores",
    image: "/images/hero.jpg",
    alt: "Salón mediterráneo reformado con acabados cálidos",
    wide: true,
  },
  {
    title: "La cocina, el corazón",
    meta: "Cocina a medida · Acabados",
    category: "cocinas",
    image: "/images/cocina.jpg",
    alt: "Cocina abierta reformada con mobiliario de roble",
  },
  {
    title: "Un verano diferente",
    meta: "Piscina · Exterior",
    category: "piscinas",
    image: "/images/piscina.jpg",
    alt: "Piscina reformada en una vivienda mediterránea",
  },
  {
    title: "Texturas naturales",
    meta: "Parquet · Interiorismo",
    category: "suelos",
    image: "/images/parquet.jpg",
    alt: "Salón con parquet natural colocado en espiga",
    wide: true,
  },
];

const filters = [
  ["todos", "Todos"],
  ["interiores", "Interiores"],
  ["cocinas", "Cocinas"],
  ["piscinas", "Piscinas"],
  ["suelos", "Suelos"],
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
              <span className="project-card__arrow" aria-hidden="true">↗</span>
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
    </>
  );
}

export function CompareSlider() {
  const [split, setSplit] = useState(50);

  return (
    <div className="compare" style={{ "--split": `${split}%` } as React.CSSProperties}>
      <Image className="compare__before" src="/images/antes.jpg" alt="Salón antes de la reforma" fill sizes="(max-width: 800px) 100vw, 60vw" />
      <Image className="compare__after" src="/images/despues.jpg" alt="El mismo salón después de la reforma" fill sizes="(max-width: 800px) 100vw, 60vw" />
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
          <option value="" disabled>¿Qué quieres reformar? *</option>
          <option>Piscina o exterior</option>
          <option>Cocina</option>
          <option>Reforma integral</option>
          <option>Parquet o suelos</option>
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
