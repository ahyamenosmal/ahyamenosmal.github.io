import React from "react";



export default function App() {
  return (
    <div className="font-sans bg-[#D9F0ED] text-gray-900">
      {/* NAVBAR */}
      <nav className="bg-[#379490] text-white p-4 flex justify-between items-center">
        <div className="font-bold text-xl">LOGO</div>
        <ul className="flex space-x-4 text-sm font-medium">
          <li>Sobre mí</li>
          <li>Habilidades</li>
          <li>Proyectos</li>
          <li>Experiencia</li>
          <li>Educación</li>
        </ul>
      </nav>

      {/* SOBRE MI */}
      <section className="p-8 flex flex-col md:flex-row gap-6">
        <div className="bg-white w-full md:w-1/3 h-64 shadow-md flex items-center justify-center text-gray-500">
          FOTO
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-lg font-bold bg-black text-white inline-block px-2 mb-2">SOBRE MI</h2>
          <p className="mb-2">Aquí mi nombre y apellido</p>
          <p className="mb-2">Aquí mis estudios</p>
          <p>Aquí desarrollo una breve bio sobre mí</p>
        </div>
      </section>

      {/* HABILIDADES */}
      <section className="bg-[#379490] p-8 text-white text-center">
        <h2 className="text-lg font-bold mb-4 bg-white text-[#379490] inline-block px-4 py-1">HABILIDADES</h2>
        <p>
          Aquí recomendame una forma cool aesthetic de mostrar mis habilidades como
          desarrolladora full stack, diseñadora UX/UI y comunicadora audiovisual
        </p>
      </section>

      {/* PROYECTOS */}
      <section className="p-8">
        <h2 className="text-lg font-bold mb-2 bg-black text-white inline-block px-2">PROYECTOS</h2>
        <p className="mb-4 text-sm">
          Aquí pretendo poner en tarjetas mis proyectos de portafolio. Si me das ideas de forma cool
          para estas tarjetas las acepto, recuerda que trabajaremos con Tailwind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 shadow-md text-center font-bold">SCRIPTA</div>
          <div className="bg-white p-6 shadow-md text-center font-bold">UC CHRISTUS</div>
          <div className="bg-white p-6 shadow-md text-center font-bold">UX RESEARCH</div>
        </div>
      </section>

      {/* EDUCACION Y EXPERIENCIA */}
      <section className="bg-[#379490] p-8 text-white">
        <h2 className="text-lg font-bold mb-4 bg-white text-[#379490] inline-block px-4 py-1">
          EDUCACIÓN Y EXPERIENCIA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Educación */}
          <div className="bg-white text-gray-800 p-6 shadow-md space-y-3">
            <div>
              <p className="font-bold">2024</p>
              <p>Desafío Latam - Desarrollo Frontend</p>
            </div>
            <div>
              <p className="font-bold">2021 - 2022</p>
              <p>Duoc UC - Diseño UX/UI</p>
            </div>
            <div>
              <p className="font-bold">2022</p>
              <p>Coder House - UX Research</p>
            </div>
            <div>
              <p className="font-bold">2011 - 2015</p>
              <p>I.P. Santo Tomás - Comunicación Audiovisual</p>
            </div>
          </div>

          {/* Experiencia */}
          <div className="bg-white text-gray-800 p-6 shadow-md space-y-3">
            <div>
              <p className="font-bold">2024</p>
              <p>Upsomedia - Montajista Snapchat</p>
            </div>
            <div>
              <p className="font-bold">2022</p>
              <p>Red UC - Diseño UX/UI</p>
            </div>
            <div>
              <p className="font-bold">2018 - 2019</p>
              <p>Classroom TV - Directora Audiovisual</p>
            </div>
            <div>
              <p className="font-bold">2016 - 2017</p>
              <p>TVN - Realizadora Audiovisual</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#379490] text-white p-6 text-center">
        <p className="underline">LINK LINKEDIN</p>
        <p className="underline">LINK GITHUB</p>
      </footer>
    </div>
  );
}
