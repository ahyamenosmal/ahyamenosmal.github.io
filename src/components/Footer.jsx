import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative text-[#F4F4F4] px-4 py-8 md:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondofondo.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#379490]/40"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-4 text-center">
        
        <div className="text-lg font-semibold">
          Evelyn Flores Caamaño
        </div>

        <div className="flex space-x-6 text-3xl animate-fade-in-up ease-out duration-700">
          
          <a
            href="https://www.linkedin.com/in/evelyn-flores-caamano/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:shadow-lg 
            inline-flex"
          >
            <FaLinkedin className="transition-transform duration-300 hover:scale-110" />
          </a>

          <a
            href="https://github.com/ahyamenosmal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:shadow-lg 
            inline-flex"
          >
            <FaGithub className="transition-transform duration-300 hover:scale-110" />
          </a>

          <a
            href="mailto:evelyn.flores.caa@gmail.com"
            className="transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:shadow-lg 
            inline-flex"
          >
            <FaEnvelope className="transition-transform duration-300 hover:scale-110" />
          </a>

        </div>

        <div className="text-sm text-[#D9F0ED]">
          &copy; {new Date().getFullYear()} Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
}