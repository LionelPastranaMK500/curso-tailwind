// 1. Importa la NUEVA librería de tilt (no 'react-tilt')
import ParallaxTilt from "react-parallax-tilt";
// 2. Importa los ÍCONOS que usaremos
import { FaShieldAlt, FaBolt, FaUsers } from "react-icons/fa";

// 3. Las opciones son un poco diferentes para esta librería
const tiltOptions = {
  tiltMaxAngleX: 20, // Inclinación máxima eje X
  tiltMaxAngleY: 20, // Inclinación máxima eje Y
  scale: 1.05, // Escala al hacer hover
  speed: 1000, // Velocidad
  glareEnable: true, // Habilita el reflejo
  glareMaxOpacity: 0.5, // Opacidad del reflejo
  perspective: 1000, // Efecto 3D
};

function NuestrosPilares() {
  return (
    <section id="pilares" className="py-16 px-4 font-maven">
      {/* Título (sin cambios) */}
      <div
        className="group animate-fadeInUp transition-all duration-300 ease-in-out hover:-translate-y-1"
        style={{ opacity: 0 }}
      >
        <h3
          className="text-4xl font-bold text-center mb-12 font-maven 
                     transition-colors duration-300 ease-in-out
                     group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-green-300"
        >
          Nuestros Pilares
        </h3>
      </div>

      {/* --- GRID DE TARJETAS 3D (CON NUEVO COMPONENTE) --- */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto 
                      animate-fadeInUp"
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        {/* TARJETA 1: SEGURIDAD */}
        <ParallaxTilt tiltOptions={tiltOptions} className="h-full">
          <div
            className="group bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
                          h-full border border-transparent hover:border-cyan-400/30"
          >
            {/* 4. ICONO PROFESIONAL */}
            <FaShieldAlt className="text-5xl text-cyan-300 mb-4" />

            <h4
              className="text-2xl font-semibold my-3 
                           transition-colors duration-300 
                           group-hover:text-cyan-300"
            >
              Seguridad Primero
            </h4>
            <p className="text-gray-200 dark:text-gray-300">
              Construyo aplicaciones con la seguridad como pilar. Implemento
              autenticación robusta, protección de APIs y sigo las mejores
              prácticas para asegurar que tus datos y los de tus usuarios estén
              siempre protegidos.
            </p>
          </div>
        </ParallaxTilt>

        {/* TARJETA 2: RENDIMIENTO */}
        <ParallaxTilt tiltOptions={tiltOptions} className="h-full">
          <div
            className="group bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
                          h-full border border-transparent hover:border-cyan-400/30"
          >
            {/* 4. ICONO PROFESIONAL */}
            <FaBolt className="text-5xl text-cyan-300 mb-4" />

            <h4
              className="text-2xl font-semibold my-3 
                           transition-colors duration-300 
                           group-hover:text-cyan-300"
            >
              Rendimiento y Calidad
            </h4>
            <p className="text-gray-200 dark:text-gray-300">
              El código no solo debe funcionar, debe ser rápido y eficiente.
              Optimizo el rendimiento del frontend con React/Vite y diseño
              backends escalables con Node.js y Java, garantizando una
              experiencia de usuario fluida.
            </p>
          </div>
        </ParallaxTilt>

        {/* TARJETA 3: CONFIANZA */}
        <ParallaxTilt tiltOptions={tiltOptions} className="h-full">
          <div
            className="group bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
                          h-full border border-transparent hover:border-cyan-400/30"
          >
            {/* 4. ICONO PROFESIONAL */}
            <FaUsers className="text-5xl text-cyan-300 mb-4" />

            <h4
              className="text-2xl font-semibold my-3 
                           transition-colors duration-300 
                           group-hover:text-cyan-300"
            >
              Transparencia y Confianza
            </h4>
            <p className="text-gray-200 dark:text-gray-300">
              Creo en la comunicación clara. Te mantendré informado en cada paso
              del desarrollo. Mi objetivo es construir una relación a largo
              plazo basada en la confianza y en entregar un producto que supere
              tus expectativas.
            </p>
          </div>
        </ParallaxTilt>
      </div>
    </section>
  );
}

export default NuestrosPilares;
