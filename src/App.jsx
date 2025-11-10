import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";

// 1. Importa el nuevo componente de partículas
import ParticlesBackground from "./components/ParticlesBackground";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import NuestrosPilares from "./components/NuestrosPilares"; // (O como le hayas llamado)
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    // 2. El div principal necesita 'position: relative' para crear un contexto
    <div className="relative bg-gradient-to-r from-green-600 to-cyan-400 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100 min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* 3. Coloca las partículas aquí, en el fondo */}
      <ParticlesBackground />

      {/* 4. Todo tu contenido debe estar 'relative' y con un 'z-index'
             para que se ponga ENCIMA de las partículas */}
      <div className="relative z-10">
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
