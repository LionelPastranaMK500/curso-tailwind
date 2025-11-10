import { useState } from "react";
import logo from "../assets/logo.png"; // Asegúrate de mover 'logo.png' a 'src/assets/'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el menú (la usaremos en varios sitios)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-md sticky top-0 z-20">
        <img src={logo} alt="Mi Logo" className="h-16 w-auto" />

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex gap-8">
          <a
            href="#inicio"
            className="hover:text-cyan-200 hover:underline transition duration-200"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-cyan-200 hover:underline transition duration-200"
          >
            Servicios
          </a>
          <a
            href="#vision-mision"
            className="hover:text-cyan-200 hover:underline transition duration-200"
          >
            Visión y Misión
          </a>
          <a
            href="#contacto"
            className="hover:text-cyan-200 hover:underline transition duration-200"
          >
            Contacto
          </a>
        </nav>

        {/* Botón de hamburguesa en móviles */}
        <button
          id="menu-toggle"
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* Menú desplegable en móviles (Renderizado Condicional) */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/10 backdrop-blur-md fixed top-0 left-0 w-full h-full z-30 flex flex-col items-center justify-center space-y-6"
        >
          <button
            id="menu-close"
            className="absolute top-6 right-6 text-3xl focus:outline-none"
            onClick={closeMenu}
          >
            ✕
          </button>

          {/* Al hacer clic en un enlace, cerramos el menú */}
          <a
            href="#inicio"
            className="text-2xl hover:text-cyan-200 transition duration-200"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="text-2xl hover:text-cyan-200 transition duration-200"
            onClick={closeMenu}
          >
            Servicios
          </a>
          <a
            href="#vision-mision"
            className="text-2xl hover:text-cyan-200 transition duration-200"
            onClick={closeMenu}
          >
            Visión y Misión
          </a>
          <a
            href="#contacto"
            className="text-2xl hover:text-cyan-200 transition duration-200"
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
