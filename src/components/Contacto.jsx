import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative py-10 md:py-14 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondotextura.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D9F0ED]/80"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-5 bg-[#379490] text-[#F4F4F4] shadow-md inline-block px-5 py-1">
          ¿Trabajamos juntos?
        </h2>

        <p className="max-w-xl mx-auto mb-7 text-[#2B3237] leading-relaxed">
          Si buscas una profesional que combine{" "}
          <strong>Frontend, UX/UI y comunicación visual</strong> para construir
          experiencias digitales claras, funcionales y bien resueltas,
          conversemos.
        </p>

        {/* BOTONES CONTACTO */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          {/* EMAIL */}
          <a
            href="mailto:evelyn.flores.caa@gmail.com"
            className="group inline-flex items-center justify-center gap-2 bg-[#379490] shadow-md text-white px-6 py-2 rounded-xl font-bold min-w-[260px]
            transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:shadow-lg hover:bg-[#246967]"
          >
            <FaEnvelope className="transition-transform duration-300 group-hover:scale-110" />
            Enviar correo
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/56961696418"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-[#F1FFFD] border border-[#379490]/30 shadow-md text-[#379490] px-6 py-2 rounded-xl font-bold min-w-[260px]
            transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:shadow-lg hover:bg-[#D9F0ED]"
          >
            <FaWhatsapp className="transition-transform duration-300 group-hover:scale-110" />
            Escribirme por WhatsApp
          </a>
        </div>

        <p className="mt-5 text-sm text-[#2B3237]/80">
          También puedes visitar mis redes y proyectos disponibles en el sitio.
        </p>
      </div>
    </section>
  );
}