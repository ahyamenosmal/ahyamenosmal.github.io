import React from "react";
import fotoperfil from "../assets/image/fotoperfilverylow.jpg";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-[#D9F0ED] py-6 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Móvil: orden HTML → Desktop: foto a la izquierda */}
        <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-4 sm:gap-6 md:gap-10">
          
          {/* Texto */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold shadow-md mb-6 bg-[#379490] text-[#F4F4F4] inline-block px-4 py-1">
              SOBRE MÍ
            </h2>

            {/* Foto en móvil, justo después del título */}
            <div className="w-full flex justify-center mb-4 md:hidden">
              <img
                src={fotoperfil}
                alt="Evelyn Flores Caamaño"
                width={300}
                className="shadow-md"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            <p className="font-semibold text-xl text-[#2B3237]">
              Evelyn Flores Caamaño
            </p>
            <p className="mb-3 font-semibold text-[#379490]">
              Desarrolladora Web Full Stack | UX/UI | Audiovisual
            </p>
            <p className="leading-relaxed mb-5">
              Soy Desarrolladora Full Stack con formación en UX/UI y base audiovisual.
              Tras más de 10 años creando contenidos y dirigiendo proyectos, encontré en el desarrollo web un espacio donde
              convergen tecnología, diseño y experiencia humana. Me especializo en soluciones creativas, centradas en el usuario
              y con mirada estética y narrativa.
            </p>

            {/* Botón CV */}
            <div className="mt-1 flex md:justify-start justify-center">
              <a
                href="/CV_EFLORESDEV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#379490] text-white font-bold py-2 px-6 shadow hover:bg-[#246967] transition-all duration-200"
                download
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Foto en desktop */}
          <div className="hidden md:flex w-full md:w-1/3 md:max-w-sm justify-center">
            <img
              src={fotoperfil}
              alt="Evelyn Flores Caamaño"
              width={300}
              className="shadow-md"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
