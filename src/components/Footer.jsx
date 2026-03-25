import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#379490] text-[#F4F4F4] px-4 py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-4 text-center">
        
        <div className="text-lg font-semibold">
          Evelyn Flores Caamaño
        </div>

        <div className="flex space-x-6 text-3xl animate-fade-in-up ease-out duration-700">
          
          <a
            href="https://www.linkedin.com/in/evelyn-flores-caamano/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/ahyamenosmal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:evelyn.flores.caa@gmail.com"
            className="transition-all duration-300 hover:scale-125 hover:text-white"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="text-sm text-[#D9F0ED]">
          &copy; {new Date().getFullYear()} Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
}