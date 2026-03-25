import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contacto" className="py-8 md:py-12 bg-[#F1FFFD] text-center">
      <h2 className="text-2xl font-bold mb-6 bg-[#379490] text-[#F4F4F4] shadow-md inline-block px-5 py-1 animate-fade-in-up ease-out duration-700">
        ¿Te gustaría trabajar conmigo?
      </h2>

      <p className="mb-4 font-semibold text-[#2B3237] animate-fade-in-up ease-out duration-700 delay-100">
        Escríbe directamente:
      </p>

      {/* BOTONES CONTACTO */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 animate-fade-in-up delay-200">
        
        {/* EMAIL */}
        <a
          href="mailto:evelyn.flores.caa@gmail.com"
          className="inline-flex items-center gap-2 bg-[#379490] shadow-md text-white px-6 py-2 rounded-2xl font-medium hover:scale-105 transition-transform duration-500 ease-out"
        >
          <FaEnvelope /> evelyn.flores.caa@gmail.com
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/56961696418"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] shadow-md text-white px-6 py-2 rounded-2xl font-medium hover:scale-105 transition-transform duration-500 ease-out"
        >
          <FaWhatsapp /> Escríbeme al WhatsApp
        </a>

      </div>

      <p className="mt-4 text-[#2B3237] animate-fade-in-up ease-out duration-700 delay-300">
        O si prefieres, visita mis redes de contacto disponibles
      </p>
    </section>
  );
}