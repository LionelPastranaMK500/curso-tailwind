import { useState, useEffect } from "react";
// 1. IMPORTA createPortal DE REACT-DOM
import { createPortal } from "react-dom";

import Loader from "./Loader";
import ParticlesBackground from "./ParticlesBackground";

import Hero from "./Hero";
import Servicios from "./Servicios";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import Footer from "./Footer";
import NuestrosPilares from "./NuestrosPilares";

function ProfessionalView() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* --- SOLUCIÓN MÁGICA (PORTAL) --- */}
      {/* Esto renderiza el loader directamente en el body, ignorando el Header */}
      {isLoading &&
        createPortal(
          <div className="fixed inset-0 bg-[#0f0f0f] z-[99999] flex items-center justify-center transition-opacity duration-1000">
            <Loader />
          </div>,
          document.body
        )}

      {/* Fondo local */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Contenido */}
      <div
        className={`relative z-10 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
        <Servicios />
        <Proyectos />
        <NuestrosPilares />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default ProfessionalView;
