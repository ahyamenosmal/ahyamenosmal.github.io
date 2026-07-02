import React from "react";
import fotoperfil from "../assets/image/fotoperfilverylow.jpg";

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="relative py-10 md:py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondotextura.png')" }}
    >
      <div className="absolute inset-0 bg-[#D9F0ED]/70"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8 md:gap-14">
          
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold shadow-md mb-6 bg-[#379490] text-[#F4F4F4] inline-block px-4 py-1">
              SOBRE MÍ
            </h2>

            <div className="w-full flex justify-center mb-6 md:hidden">
              <img
                src={fotoperfil}
                alt="Evelyn Flores Caamaño"
                width={300}
                className="shadow-md"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            <p className="font-bold text-xl text-[#2B3237] mb-1">
              Evelyn Flores Caamaño
            </p>

         <p className="mb-4 font-semibold text-[#379490]">
  Frontend Developer | UX/UI Designer | Comunicación Visual
</p>

<div className="max-w-2xl mx-auto md:mx-0 mb-6">
  <h3 className="text-2xl md:text-3xl font-bold text-[#2B3237] leading-snug tracking-tight">
    Creo interfaces web que{" "}
    <span className="text-[#379490] font-bold">
      funcionan, se entienden y están bien construidas.
    </span>
  </h3>
</div>

            <div className="leading-relaxed text-[#2B3237] space-y-4 max-w-2xl mx-auto md:mx-0">
              <p>
                Soy <strong>Frontend Developer</strong> y{" "}
                <strong>Diseñadora UX/UI</strong>. Construyo aplicaciones web
                entendiendo tanto la <strong>experiencia del usuario</strong>{" "}
                como la <strong>lógica técnica</strong> que las hace funcionar.
              </p>

              <p>
                Mi valor está en unir <strong>diseño, usabilidad y código</strong>{" "}
                para crear interfaces{" "}
                <strong>
                  claras, responsivas, coherentes y bien implementadas
                </strong>
                . No solo hago que una pantalla funcione:{" "}
                <strong>hago que tenga sentido</strong>.
              </p>

              <p>
                Vengo del mundo <strong>audiovisual</strong>, donde trabajé más de{" "}
                <strong>10 años creando contenidos y liderando proyectos</strong>.
                Esa experiencia potencia mi <strong>criterio visual</strong>, mi forma
                de comunicar ideas y mi capacidad para transformar necesidades en{" "}
                <strong>experiencias digitales claras y funcionales</strong>.
              </p>
            </div>

            <div className="mt-7 flex md:justify-start justify-center">
              <a
                href="/CV_EFLORESDEV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#379490] text-white font-bold py-2 px-6 shadow transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-[#246967]"
                download
              >
                Descargar CV
              </a>
            </div>
          </div>

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