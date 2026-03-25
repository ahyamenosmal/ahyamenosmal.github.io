import React from "react";
import { FaVideo, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

export default function CaminoProfesional() {
  return (
    <section
      id="camino"
      className="bg-[#379490] py-8 md:py-12 text-[#D9F0ED] text-center"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10 bg-[#F4F4F4] shadow-md text-[#379490] inline-block px-4 py-1">
          MI CAMINO PROFESIONAL
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Desarrolladora Full Stack */}
          <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            <FaLaptopCode className="text-4xl mb-2" />
            <h3 className="font-bold text-[#F4F4F4] mb-1">
              Desarrolladora Full Stack
            </h3>
            <p className="text-sm mb-2 max-w-[250px]">
              Programo soluciones web completas con tecnologías modernas,
              buscando desafíos que me hagan crecer.
            </p>
            <div className="grid grid-cols-4 gap-1 text-xs text-[#379490] mt-2">
              {["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Express", "SQL"].map((tech, i) => (
                <span key={i} className="bg-[#F1FFFD] px-2 py-1 rounded-full shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Diseñadora UX/UI */}
          <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            <FaPaintBrush className="text-4xl mb-2" />
            <h3 className="font-bold text-[#F4F4F4] mb-1">Diseñadora UX/UI</h3>
            <p className="text-sm mb-2 max-w-[250px]">
              Enfocada en diseñar experiencias centradas en el usuario,
              investigación y prototipado.
            </p>
            <div className="grid grid-cols-3 gap-1 text-xs text-[#379490] mt-2">
              {["Figma", "Wireframes", "Prototipos", "UX Research", "Illustrator", "M. ágiles"].map((tool, i) => (
                <span key={i} className="bg-[#F1FFFD] px-2 py-1 rounded-full shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Comunicadora Audiovisual */}
          <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            <FaVideo className="text-4xl mb-2" />
            <h3 className="font-bold text-[#F4F4F4] mb-1">
              Comunicadora Audiovisual
            </h3>
            <p className="text-sm mb-2 max-w-[250px]">
              Más de una década liderando contenidos visuales, dirección de
              equipos y narrativa digital.
            </p>
            <div className="grid grid-cols-3 gap-1 text-xs text-[#379490] mt-2">
              {["Premiere", "After Effects", "Final Cut", "Montaje", "Dirección", "Producción"].map((skill, i) => (
                <span key={i} className="bg-[#F1FFFD] px-2 py-1 rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
