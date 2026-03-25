import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SobreMi from "./components/SobreMi";
import CaminoProfesional from "./components/CaminoProfesional";
import Contacto from "./components/Contacto";
import Proyectos from "./components/Proyectos";
import EducacionYExperiencia from "./components/EducacionYExperiencia";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-[#D9F0ED] text-[#2B3237] scroll-smooth">
        <Navbar logoTarget="#sobre-mi" />

        <main className="animate-fade-in-up">
          {/* En la ruta / (home) debes renderizar todas las secciones de tu one page */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SobreMi />
                  <CaminoProfesional />
                  <Proyectos />
                  <EducacionYExperiencia />
                  <Contacto />
                </>
              }
            />

            {/* Si en algún momento quieres que cada sección tenga su propia ruta también puedes dejarlas así */}
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/educacion" element={<EducacionYExperiencia />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
