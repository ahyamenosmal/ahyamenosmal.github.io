import React from "react";

// Importa tus imágenes locales
import SCRIPTA from "../assets/image/SCRIPTA.jpg";
import UC from "../assets/image/UC.jpg";
import UXRESEARCH from "../assets/image/UXRESEARCH.jpg";
import SIGO from "../assets/image/SIGO.jpg";
import ESTUDIO from "../assets/image/ESTUDIO.jpg";

export default function Proyectos() {
  const projectList = [
    {
      title: "WEB - SIGO INDUSTRIAL",
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
        "Next.js",
        "Data Visualization",
        "Frontend",
        "Dashboards",
      ],
      link: "/pdfs/sigo.pdf",
    },
    {
      title: "WEB – ESTUDIO JURÍDICO",
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
      title: "SCRIPTA - BOOKSTORE",
      image: SCRIPTA,
      desc: (
        <>
          <strong>
            Proyecto final Bootcamp Full Stack:
            <br />
            Tienda E-commerce para librería.
          </strong>
          <br />
          Desarrollé una plataforma completa con autenticación JWT, carrito,
          favoritos, filtros y panel admin, integrando{" "}
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
        "Javascript",
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
          <strong>
            Diseño de plataforma interna
            <br />
            UC Christus – Salud mental
          </strong>
          <br />
          Proyecto realizado como pasantía en Red UC: diseño de flujos para
          pacientes y mejora de la experiencia de usuario en la app
          institucional, creando una herramienta digital para la prevención y
          autocuidado de los colaboradores, con foco en{" "}
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
          <strong>Investigación de login en banca digital (BancoEstado)</strong>
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
      className="bg-[#D9F0ED] py-8 md:py-12 text-[#2B3237] text-center"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 bg-[#379490] shadow-md text-[#F4F4F4] inline-block px-4 py-1">
          PROYECTOS
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projectList.map(({ title, image, desc, tags, link }) => (
            <a
              href={link || "#"}
              key={title}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label={`Abrir proyecto ${title}`}
              className="w-full sm:max-w-[24rem] flex"
              style={{ textDecoration: "none" }}
            >
              <div
                className="bg-[#F1FFFD] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md flex flex-col w-full"
                style={{ minHeight: 420 }}
              >
                <img
                  src={image}
                  alt={`Proyecto ${title}`}
                  className="w-full h-44 md:h-48 object-cover object-center"
                />

                <div className="px-6 py-4 grid grid-rows-[auto,1fr,auto] gap-2 flex-1">
                  <div>
                    <h3 className="font-bold tracking-wide text-lg mb-3 bg-[#379490] text-[#fafafa] shadow-sm inline-block px-4 py-1 whitespace-normal break-words max-w-full">
                      {title}
                    </h3>
                  </div>

                  <div className="flex items-start justify-center">
                    <p className="text-sm leading-relaxed mx-auto text-center whitespace-normal break-words">
                      {desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap justify-center gap-1 text-xs text-[#379490] mb-3">
                      {tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-[#D9F0ED] px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="self-end text-[#379490] font-semibold text-sm block text-right pr-1 hover:text-[#246967]">
                      Ir al proyecto
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}