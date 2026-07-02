import React from "react";
import { FaVideo, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const SkillLine = ({ skills }) => {
  return (
    <div className="mt-5 pt-4 border-t border-[#F4F4F4]/25 max-w-[290px]">
      <p className="text-xs md:text-sm tracking-wide text-[#F1FFFD]/90 leading-relaxed">
        {skills.join(" / ")}
      </p>
    </div>
  );
};

export default function CaminoProfesional() {
  return (
    <section
      id="camino"
      className="relative py-8 md:py-12 text-[#D9F0ED] text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondofondo.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#379490]/30"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10 bg-[#F4F4F4] shadow-md text-[#379490] inline-block px-4 py-1">
          MI CAMINO PROFESIONAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* FRONTEND */}
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-out hover:-translate-y-1 group">
            <FaLaptopCode className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110" />

            <h3 className="font-bold text-[#F4F4F4] mb-2">
              Frontend Developer
            </h3>

            <p className="text-sm max-w-[260px] leading-relaxed">
              Desarrollo <strong>interfaces web funcionales</strong>,
              responsivas y bien estructuradas, con foco en{" "}
              <strong>experiencia de usuario</strong>.
            </p>

            <SkillLine
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Tailwind",
              ]}
            />
          </div>

          {/* UX/UI */}
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-out hover:-translate-y-1 group">
            <FaPaintBrush className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110" />

            <h3 className="font-bold text-[#F4F4F4] mb-2">
              UX/UI Designer
            </h3>

            <p className="text-sm max-w-[260px] leading-relaxed">
              Diseño <strong>experiencias digitales claras</strong>,
              integrando usabilidad, estructura, flujos y{" "}
              <strong>consistencia visual</strong>.
            </p>

            <SkillLine
              skills={[
                "Figma",
                "Wireframes",
                "Prototipos",
                "UX Research",
                "Usabilidad",
                "Handoff",
              ]}
            />
          </div>

          {/* AUDIOVISUAL */}
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-out hover:-translate-y-1 group">
            <FaVideo className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110" />

            <h3 className="font-bold text-[#F4F4F4] mb-2">
              Comunicación Audiovisual
            </h3>

            <p className="text-sm max-w-[260px] leading-relaxed">
              Más de <strong>10 años creando contenidos</strong> y liderando
              proyectos, aportando{" "}
              <strong>criterio visual y narrativa digital</strong>.
            </p>

            <SkillLine
              skills={[
                "Premiere",
                "After Effects",
                "Edición",
                "Dirección",
                "Producción",
                "Narrativa visual",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}