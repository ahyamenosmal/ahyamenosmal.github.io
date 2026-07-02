import React from "react";

// Importa tus imágenes locales
import SCRIPTA from "../assets/image/SCRIPTA.jpg";
import UC from "../assets/image/UC.jpg";
import UXRESEARCH from "../assets/image/UXRESEARCH.jpg";
import SIGO from "../assets/image/SIGO.jpg";
import ESTUDIO from "../assets/image/ESTUDIO.jpg";

const TagLine = ({ tags }) => {
  return (
    <div className="mt-4 pt-3 border-t border-[#379490]/20">
      <p className="text-xs md:text-sm tracking-wide text-[#379490] leading-relaxed">
        {tags.join(" / ")}
      </p>
    </div>
  );
};

export default function Proyectos() {
  const projectList = [
    {
      title: "SIGO INDUSTRIAL",
      image: SIGO,
      desc: (
        <>
          <strong>Proyecto profesional en entorno productivo.</strong>
          <br />
          Desarrollo frontend y diseño UX/UI de módulos analíticos para
          plataforma industrial, creando dashboards interactivos, estructuras
          jerárquicas de indicadores, formularios operacionales complejos y
          visualización de datos para toma de decisiones, utilizando{" "}
          <strong>React, JavaScript y enfoque centrado en el usuario.</strong>
        </>
      ),
      tags: [
        "React",
        "JavaScript",
        "UX/UI",
        "Data Visualization",
        "Frontend",
        "Dashboards",
      ],
      link: "/pdfs/sigo.pdf",
    },
    {
      title: "ESTUDIO JURÍDICO",
      image: ESTUDIO,
      desc: (
        <>
          <strong>Desarrollo frontend y diseño UX/UI.</strong>
          <br />
          Sitio web corporativo para estudio jurídico con arquitectura de
          información, layout global navegable, páginas de servicios y contacto,
          diseño responsive y optimización de interacción para captación de
          clientes usando <strong>Next.js, React y Tailwind.</strong>
        </>
      ),
      tags: [
        "Next.js",
        "React",
        "Tailwind",
        "UX/UI",
        "Responsive",
        "Arquitectura Web",
        "Frontend",
      ],
      link: "https://web-estudio-juridico.vercel.app/",
    },
    {
      title: "SCRIPTA BOOKSTORE",
      image: SCRIPTA,
      desc: (
        <>
          <strong>Proyecto final Bootcamp Full Stack.</strong>
          <br />
          Tienda e-commerce para librería. Desarrollé una plataforma completa
          con autenticación JWT, carrito, favoritos, filtros y panel admin,
          integrando{" "}
          <strong>
            React, Node, Express y PostgreSQL con diseño UX/UI centrado en el
            usuario.
          </strong>
          <br />
          <em>(El servidor puede tardar unos segundos en cargar).</em>
        </>
      ),
      tags: [
        "UX/UI",
        "JavaScript",
        "React",
        "Express",
        "Node.js",
        "SQL",
        "Tailwind",
      ],
      link: "https://bookstore-owzt.onrender.com/",
    },
    {
      title: "UC CHRISTUS",
      image: UC,
      desc: (
        <>
          <strong>Diseño de plataforma interna para salud mental.</strong>
          <br />
          Proyecto realizado como pasantía en Red UC: diseño de flujos para
          pacientes y mejora de la experiencia de usuario en la app
          institucional, creando una herramienta digital para la prevención y
          autocuidado de colaboradores, con foco en{" "}
          <strong>
            UX Research, prototipado y diseño centrado en el bienestar laboral.
          </strong>
        </>
      ),
      tags: [
        "UX",
        "UX Research",
        "Entrevistas",
        "Flujo de usuario",
        "UI",
        "Figma",
        "Prototipado",
      ],
      link: "/pdfs/ucchristus.pdf",
    },
    {
      title: "UX RESEARCH",
      image: UXRESEARCH,
      desc: (
        <>
          <strong>Investigación de login en banca digital.</strong>
          <br />
          Investigación de experiencia de usuario en banca digital: realicé{" "}
          <strong>
            entrevistas, análisis de usabilidad y propuestas de mejora para el
            login de la app,
          </strong>{" "}
          con foco en seguridad, accesibilidad y confianza del usuario.
        </>
      ),
      tags: [
        "Metodologías ágiles",
        "UX",
        "UX Research",
        "Investigación",
        "Entrevistas",
      ],
      link: "/pdfs/uxresearch.pdf",
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative py-10 md:py-14 text-[#2B3237] text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondotextura.png')" }}
    >
      {/* Overlay claro para mantener estética */}
      <div className="absolute inset-0 bg-[#D9F0ED]/80"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-10 bg-[#379490] shadow-md text-[#F4F4F4] inline-block px-4 py-1">
          PROYECTOS
        </h2>

        <div className="flex flex-wrap justify-center gap-7">
          {projectList.map(({ title, image, desc, tags, link }) => (
            <a
              href={link || "#"}
              key={title}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label={`Abrir proyecto ${title}`}
              className="w-full sm:max-w-[24rem] flex group"
              style={{ textDecoration: "none" }}
            >
              <article
                className="bg-[#F1FFFD]/95 overflow-hidden transition-all duration-300 ease-out 
                hover:-translate-y-1 hover:shadow-xl shadow-md flex flex-col w-full"
                style={{ minHeight: 430 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={`Proyecto ${title}`}
                    className="w-full h-44 md:h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="px-6 py-5 grid grid-rows-[auto,1fr,auto] gap-3 flex-1">
                  <header>
                    <h3 className="font-extrabold tracking-tight text-lg text-[#2B3237] mb-2">
                      {title}
                    </h3>

                    <div className="w-10 h-[2px] bg-[#379490] mx-auto"></div>
                  </header>

                  <div className="flex items-start justify-center">
                    <p className="text-sm leading-relaxed mx-auto text-center whitespace-normal break-words">
                      {desc}
                    </p>
                  </div>

                  <footer>
                    <TagLine tags={tags} />

                    <span className="mt-4 text-[#379490] font-bold text-sm block text-right pr-1 transition-colors duration-300 group-hover:text-[#246967]">
                      Ir al proyecto →
                    </span>
                  </footer>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}