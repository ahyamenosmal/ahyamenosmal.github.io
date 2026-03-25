import { FaVideo, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

export default function EducacionExperiencia() {
  const educacion = [
    {
      icon: <FaLaptopCode className="text-[#379490]" />,
      year: "2025",
      title: "AIEP",
      desc: "Diplomado Diseño y Programación Web",
    },
    {
      icon: <FaLaptopCode className="text-[#379490]" />,
      year: "2024 - 2025",
      title: "Desafío Latam",
      desc: "Desarrollo Full Stack JavaScript",
    },
    {
      icon: <FaPaintBrush className="text-[#379490]" />,
      year: "2022",
      title: "Coder House",
      desc: "UX Research",
    },
    {
      icon: <FaPaintBrush className="text-[#379490]" />,
      year: "2021 - 2022",
      title: "Duoc UC",
      desc: "Diseño UX/UI",
    },
    {
      icon: <FaVideo className="text-[#379490]" />,
      year: "2011 - 2015",
      title: "I.P. Santo Tomás",
      desc: "Comunicación Audiovisual",
    },
  ];

  const experiencia = [
    {
      icon: <FaLaptopCode className="text-[#379490]" />,
      year: "2025 - Actualidad",
      title: "SIGO Industrial",
      desc: "Desarrolladora Frontend - UX/UI",
    },
    {
      icon: <FaVideo className="text-[#379490]" />,
      year: "2022 - 2025",
      title: "Upsomedia",
      desc: "Montajista Snapchat",
    },
    {
      icon: <FaPaintBrush className="text-[#379490]" />,
      year: "2022",
      title: "Red UC",
      desc: "Diseño UX/UI - Pasantía",
    },
    {
      icon: <FaVideo className="text-[#379490]" />,
      year: "2020 - 2022",
      title: "Freelance",
      desc: "Realización Audiovisual",
    },
    {
      icon: <FaVideo className="text-[#379490]" />,
      year: "2018 - 2019",
      title: "Classroom TV",
      desc: "Directora Audiovisual",
    },
  ];

  return (
    <section
      id="educacion"
      className="bg-[#379490] py-8 md:py-12 text-[#D9F0ED] text-center"
    >
      <h2 className="text-2xl font-bold mb-12 bg-[#F4F4F4] shadow-md text-[#379490] inline-block px-4 py-1">
        EDUCACIÓN Y EXPERIENCIA
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 px-5 text-left">
        
        {/* EDUCACIÓN */}
        <div className="w-full md:w-1/2 bg-[#F1FFFD] text-[#2B3237] shadow-md rounded-lg p-6 space-y-6 transition-transform duration-300 hover:scale-105">
          {educacion.map(({ icon, year, title, desc }, idx) => (
            <div key={idx} className="space-y-1">
              <p className="flex items-center text-sm font-medium gap-2 text-[#379490]">
                {icon} <span>{year}</span>
              </p>
              <h3 className="font-semibold text-[#2B3237]">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* EXPERIENCIA */}
        <div className="w-full md:w-1/2 bg-[#F1FFFD] text-[#2B3237] shadow-md rounded-lg p-6 space-y-6 transition-transform duration-300 hover:scale-105">
          {experiencia.map(({ icon, year, title, desc }, idx) => (
            <div key={idx} className="space-y-1">
              <p className="flex items-center text-sm font-medium gap-2 text-[#379490]">
                {icon} <span>{year}</span>
              </p>
              <h3 className="font-semibold text-[#2B3237]">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}