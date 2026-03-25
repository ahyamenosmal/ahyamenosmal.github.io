import React, { useState } from "react";
import logo from "../assets/image/LOGO.png"; // Adjust the path as necessary

export default function Navbar({ logoTarget = "#sobre-mi" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#379490] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
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
            <li><a href="#sobre-mi" className="py-2 md:py-0 hover:scale-105 inline-block transition-transform duration-300">Sobre mí</a></li>
            <li><a href="#camino" className="py-2 md:py-0 hover:scale-105 inline-block transition-transform duration-300">Mi camino profesional</a></li>
            <li><a href="#proyectos" className="py-2 md:py-0 hover:scale-105 inline-block transition-transform duration-300">Proyectos</a></li>
            <li><a href="#educacion" className="py-2 md:py-0 hover:scale-105 inline-block transition-transform duration-300">Educación y experiencia</a></li>
            <li><a href="#contacto" className="py-2 md:py-0 hover:scale-105 inline-block transition-transform duration-300">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
