import { useState } from "react";
import logo from "../assets/logo.png";
import { useThemeStore } from "../store/themeStore";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 md:p-6 bg-white/10 backdrop-blur-md sticky top-0 z-20 dark:bg-gray-900/80 transition-colors duration-300">
        <img
          src={logo}
          alt="Mi Logo"
          className="h-16 w-auto p-1 bg-white/5 rounded-full border-2 border-transparent 
                    hover:border-white/50 hover:scale-105 
                      transition-all duration-300 ease-in-out"
        />

        <nav className="hidden md:flex items-center gap-8 font-cursive text-xl">
          <a
            href="#inicio"
            className="hover:text-cyan-200 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-cyan-200 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            className="hover:text-cyan-200 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            Proyectos
          </a>
          <a
            href="#vision-mision"
            className="hover:text-cyan-200 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            Sobre Mí
          </a>
          <a
            href="#contacto"
            className="hover:text-cyan-200 dark:hover:text-cyan-400 transition-colors duration-200"
          >
            Contacto
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-800 hover:bg-white/30 dark:hover:bg-gray-700
                       transition-all duration-300 ease-in-out 
                       hover:scale-110 active:scale-90"
            aria-label="Alternar modo oscuro"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-2xl focus:outline-none 
                       transition-transform duration-300 ease-in-out 
                       hover:scale-110 active:scale-90"
            aria-label="Alternar modo oscuro"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="md:hidden bg-white/10 dark:bg-gray-900/95 backdrop-blur-md fixed inset-0 z-30 
                      flex flex-col items-center justify-center space-y-8 
                      font-cursive transition-colors duration-300"
        >
          <button
            className="absolute top-6 right-6 text-3xl focus:outline-none"
            onClick={closeMenu}
          >
            ✕
          </button>
          <a
            href="#inicio"
            className="text-3xl hover:text-cyan-200 dark:hover:text-cyan-400 transition duration-200"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="text-3xl hover:text-cyan-200 dark:hover:text-cyan-400 transition duration-200"
            onClick={closeMenu}
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            className="text-3xl hover:text-cyan-200 dark:hover:text-cyan-400 transition duration-200"
            onClick={closeMenu}
          >
            Proyectos
          </a>
          <a
            href="#vision-mision"
            className="text-3xl hover:text-cyan-200 dark:hover:text-cyan-400 transition duration-200"
            onClick={closeMenu}
          >
            Sobre Mí
          </a>
          <a
            href="#contacto"
            className="text-3xl hover:text-cyan-200 dark:hover:text-cyan-400 transition duration-200"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
