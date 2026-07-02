import React, { useState } from "react";
import logo from "../assets/image/LOGO.png";

export default function Navbar({ logoTarget = "#sobre-mi" }) {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "relative py-2 md:py-0 inline-block text-white/90 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#D9F0ED] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav
      className="relative text-white p-4 sticky top-0 z-50 shadow-md bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondofondo.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#379490]/40 backdrop-blur-sm"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        
        <a href={logoTarget} className="transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            src={logo}
            alt="Evelyn Flores logo"
            className="h-10 md:h-12 drop-shadow-lg"
          />
        </a>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-sm font-medium">
            <li><a href="#sobre-mi" className={linkClass}>Sobre mí</a></li>
            <li><a href="#camino" className={linkClass}>Mi camino profesional</a></li>
            <li><a href="#proyectos" className={linkClass}>Proyectos</a></li>
            <li><a href="#educacion" className={linkClass}>Educación y experiencia</a></li>
            <li><a href="#contacto" className={linkClass}>Contacto</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}