// 1. Importa los iconos de redes sociales
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer
      className="w-full p-8 bg-white/10 dark:bg-gray-900/80 backdrop-blur-md mt-auto
                 border-t border-white/10 dark:border-gray-700/50
                 font-maven animate-fadeInUp"
      style={{ opacity: 0, animationDelay: "400ms" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* --- COLUMNA 1: LOGO Y COPYRIGHT --- */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Mi Logo"
            className="h-20 w-auto p-1 bg-white/5 rounded-full border-2 border-transparent 
                       hover:border-white/50 hover:scale-105 
                       transition-all duration-300 ease-in-out"
          />
          <p className="text-gray-300 dark:text-gray-400 mt-4 text-sm">
            © 2025 Andriy Lionel Pastrana.
            <br />
            Todos los derechos reservados.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Navegación</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="#inicio"
                className="text-gray-300 hover:text-cyan-300 transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-gray-300 hover:text-cyan-300 transition-colors"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="text-gray-300 hover:text-cyan-300 transition-colors"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-gray-300 hover:text-cyan-300 transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* --- COLUMNA 3: REDES SOCIALES --- */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">
            Conéctate Conmigo
          </h5>
          <div className="flex justify-center md:justify-start space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/LionelPastranaMK500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:scale-125"
            >
              <FaGithub className="text-3xl" />
            </a>

            {/* LinkedIn (¡Asegúrate de poner tu enlace!) */}
            <a
              href="https://www.linkedin.com/in/tu-usuario/" // <-- ¡CAMBIA ESTE ENLACE!
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:scale-125"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
