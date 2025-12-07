import { useState } from "react";
import logo from "../assets/logo.png";
import { useThemeStore } from "../store/themeStore";
import ProfileSwitcher from "./ProfileSwitcher"; // Importamos el componente anterior

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, currentProfile } = useThemeStore();

  const closeMenu = () => setIsMenuOpen(false);

  // CONFIGURACIÓN DE NAVEGACIÓN SEGÚN EL PERFIL
  const navLinks = {
    professional: [
      { name: "Inicio", href: "#inicio" },
      { name: "Servicios", href: "#servicios" },
      { name: "Proyectos", href: "#proyectos" },
      { name: "Sobre Mí", href: "#vision-mision" },
      { name: "Contacto", href: "#contacto" },
    ],
    personal: [
      { name: "Mis Hobbies", href: "#hobbies" },
      { name: "Setup", href: "#setup" },
      { name: "Galería", href: "#galeria" },
      { name: "Blog", href: "#blog" },
    ],
    couple: [
      { name: "Nuestra Historia", href: "#historia" },
      { name: "Momentos", href: "#momentos" },
      { name: "Metas", href: "#metas" },
    ],
  };

  // Seleccionamos los enlaces actuales basados en el perfil (o profesional por defecto)
  const currentLinks = navLinks[currentProfile] || navLinks.professional;

  // Estilo dinámico para el borde/fondo según el modo (Opcional: para darle un toque visual)
  const headerStyleClass =
    currentProfile === "personal"
      ? "border-pink-500/30 bg-purple-900/80" // Estilo Personal
      : "border-white/10 bg-white/10 dark:bg-gray-900/80"; // Estilo Profesional/Default

  return (
    <>
      <header
        className={`flex justify-between items-center p-4 md:p-6 backdrop-blur-md sticky top-0 z-50 
                    transition-colors duration-500 border-b ${headerStyleClass}`}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-16 w-auto p-1 bg-white/5 rounded-full border-2 border-transparent 
                      hover:border-white/50 hover:scale-105 transition-all duration-300"
          />

          {/* AQUÍ ESTÁ EL SWITCHER INTEGRADO */}
          <ProfileSwitcher />
        </div>

        {/* --- MENÚ DE NAVEGACIÓN DESKTOP (Dinámico) --- */}
        <nav className="hidden md:flex items-center gap-8 font-cursive text-xl">
          {currentLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-200 dark:hover:text-cyan-400 transition-colors duration-200 relative group"
            >
              {link.name}
              {/* Efecto de subrayado al hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-800 hover:bg-white/30 dark:hover:bg-gray-700
                       transition-all duration-300 hover:scale-110 active:scale-90"
            aria-label="Alternar tema"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* --- MENÚ MOBILE (Hamburguesa) --- */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-2xl focus:outline-none transition-transform hover:scale-110"
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

      {/* --- OVERLAY DEL MENÚ MOBILE --- */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white/10 dark:bg-gray-900/95 backdrop-blur-xl fixed inset-0 z-[60] 
                        flex flex-col items-center justify-center space-y-8 font-cursive transition-all duration-300"
        >
          <button
            className="absolute top-6 right-6 text-3xl focus:outline-none hover:rotate-90 transition-transform duration-300"
            onClick={closeMenu}
          >
            ✕
          </button>

          {/* Mapeo de enlaces dinámicos en Mobile */}
          {currentLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl hover:text-cyan-200 dark:hover:text-cyan-400 transition duration-200"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
