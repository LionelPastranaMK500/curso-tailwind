import { useState, useEffect } from "react";
import { useThemeStore } from "./store/themeStore";

// Componentes
import Loader from "./components/Loader"; // <-- 1. Importa el Loader
import ParticlesBackground from "./components/ParticlesBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import NuestrosPilares from "./components/NuestrosPilares";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const theme = useThemeStore((state) => state.theme);

  // 2. Estado para manejar la carga
  const [isLoading, setIsLoading] = useState(true);

  // 3. Sincroniza el tema (esto ya lo tenías)
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  // 4. Simula la carga de la página
  useEffect(() => {
    // Escondemos el scrollbar mientras carga
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto"; // Devolvemos el scroll
    }, 4000); // 4 segundos para que se aprecie la animación

    return () => {
      clearTimeout(timer); // Limpieza
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    // El 'relative' es clave para el z-index
    <div className="relative bg-gradient-to-r from-green-600 to-cyan-400 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* 5. LOADER (z-50, al frente de todo) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0f0f0f] z-[9999]
                    flex items-center justify-center
                    transition-opacity duration-1000 ease-in-out
                    ${
                      isLoading
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`} // <-- Lógica de fade-out
      >
        <Loader />
      </div>

      {/* 6. PARTÍCULAS (z-0, al fondo) */}
      <ParticlesBackground />

      {/* 7. CONTENIDO PRINCIPAL (z-10, en medio) */}
      <div
        className={`relative z-10 
                    transition-opacity duration-700 ease-in
                    ${isLoading ? "opacity-0" : "opacity-100"}`} // <-- Lógica de fade-in
      >
        <Header />
        <main>
          <Hero />
          <Servicios />
          <Proyectos />
          <NuestrosPilares />
          <Contacto />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
