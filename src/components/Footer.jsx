import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#379490] text-[#F4F4F4] px-4 py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-4 text-center">
        <div className="text-lg font-semibold">Evelyn Flores Caamaño</div>
        <div className="flex space-x-4 text-xl animate-fade-in-up ease-out duration-700">
          <a
            href="https://www.linkedin.com/in/evelyn-flores-caamano/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform duration-300 hover:scale-110 hover:text-[#D9F0ED]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ahyamenosmal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform duration-300 hover:scale-110 hover:text-[#D9F0ED]"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:evelyn.flores.caa@gmail.com"
            className="transition-transform transform duration-300 hover:scale-110 hover:text-[#D9F0ED]"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="text-sm text-[#D9F0ED]">&copy; {new Date().getFullYear()} Todos los derechos reservados</div>
      </div>
    </footer>
  );
}

/*
NOTA: Para hacer que TODA la web respete los mismos márgenes laterales y sea 100% responsiva, usa la clase `container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` en las secciones principales de cada componente. Esto garantiza que todos los bloques tengan la misma anchura máxima y aire a los lados.

Aplica el mismo contenedor a:
- Navbar
- SobreMi
- CaminoProfesional
- Proyectos
- EducacionYExperiencia
- Contacto

Puedo editar los demás archivos y entregarte el código listo si lo deseas.
*/
