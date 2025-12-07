import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Importamos componentes globales
import Loader from "../../components/Loader";
import ParticlesBackground from "../../components/ParticlesBackground";

// Importamos componentes locales
import Hero from "./Hero";
import About from "./About";
import Hobbies from "./Hobbies";
// Puedes reutilizar el Footer profesional o crear uno nuevo si quieres
import Footer from "../profesional/Footer";

function PersonalView() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2500); // Un poco más rápido que el pro
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Loader Portal */}
      {isLoading &&
        createPortal(
          <div className="fixed inset-0 bg-[#0f0f0f] z-[99999] flex items-center justify-center transition-opacity duration-1000">
            <Loader />
          </div>,
          document.body
        )}

      {/* Fondo de Partículas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Contenido Principal */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
        <About />
        <Hobbies />
        <Footer />
      </div>
    </>
  );
}

export default PersonalView;
