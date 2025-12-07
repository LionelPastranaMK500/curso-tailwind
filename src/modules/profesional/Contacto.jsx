import ParallaxTilt from "react-parallax-tilt";
// 1. Importamos los iconos
import { FaUser, FaEnvelope, FaPencilAlt } from "react-icons/fa";

// Opciones de configuración para la animación 3D
const tiltOptions = {
  tiltMaxAngleX: 10,
  tiltMaxAngleY: 10,
  scale: 1.02,
  speed: 1000,
  glareEnable: true,
  glareMaxOpacity: 0.3,
  perspective: 1000,
};

function Contacto() {
  return (
    <section id="contacto" className="py-16 px-4 font-maven">
      {/* --- TÍTULO CON EFECTOS --- */}
      <div
        className="group animate-fadeInUp transition-all duration-300 ease-in-out hover:-translate-y-1"
        style={{ opacity: 0 }}
      >
        <h3
          className="text-4xl font-bold text-center mb-12 font-maven 
                     transition-colors duration-300 ease-in-out
                     group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-green-300"
        >
          Contáctame para tu proyecto
        </h3>
      </div>

      {/* --- CONTENEDOR 3D DEL FORMULARIO --- */}
      <ParallaxTilt
        tiltOptions={tiltOptions}
        className="max-w-lg mx-auto animate-fadeInUp"
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        <form
          action="https://formspree.io/f/xgvkyyaj"
          method="POST"
          className="bg-white/10 dark:bg-gray-800/50 p-8 rounded-2xl shadow-2xl
                     space-y-8 border border-transparent hover:border-cyan-400/30
                     transition-all duration-300"
        >
          <p className="text-lg text-center text-gray-200 dark:text-gray-300 -mt-2">
            ¿Listo para empezar? Hablemos.
          </p>

          {/* --- CAMPO 1: NOMBRE (CON ICONO) --- */}
          <div className="relative z-0">
            {/* 2. El Icono */}
            <FaUser
              className="absolute top-4 left-0 text-gray-400 
                         peer-focus:text-cyan-300 transition-colors duration-300"
            />
            <input
              type="text"
              name="name"
              id="name"
              className="peer block w-full pt-4 pb-1 pl-8 bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-600 
                         focus:outline-none focus:ring-0 focus:border-cyan-300 dark:focus:border-cyan-400 
                         transition-colors duration-300"
              placeholder=" "
              required
            />
            {/* 3. La Etiqueta (con 'left-8') */}
            <label
              htmlFor="name"
              className="absolute left-8 top-4 text-gray-300 dark:text-gray-400 
                         transition-all duration-300 ease-in-out
                         transform -translate-y-4 scale-75 origin-[0]
                         peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
                         peer-focus:-translate-y-4 peer-focus:scale-75
                         peer-focus:text-cyan-300 dark:peer-focus:text-cyan-400"
            >
              Tu nombre
            </label>
          </div>

          {/* --- CAMPO 2: CORREO (CON ICONO) --- */}
          <div className="relative z-0">
            <FaEnvelope
              className="absolute top-4 left-0 text-gray-400 
                         peer-focus:text-cyan-300 transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full pt-4 pb-1 pl-8 bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-600
                         focus:outline-none focus:ring-0 focus:border-cyan-300 dark:focus:border-cyan-400 
                         transition-colors duration-300"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-8 top-4 text-gray-300 dark:text-gray-400 
                         transition-all duration-300 ease-in-out
                         transform -translate-y-4 scale-75 origin-[0]
                         peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
                         peer-focus:-translate-y-4 peer-focus:scale-75
                         peer-focus:text-cyan-300 dark:peer-focus:text-cyan-400"
            >
              Tu correo
            </label>
          </div>

          {/* --- CAMPO 3: MENSAJE (CON ICONO) --- */}
          <div className="relative z-0">
            <FaPencilAlt
              className="absolute top-4 left-0 text-gray-400 
                         peer-focus:text-cyan-300 transition-colors duration-300"
            />
            <textarea
              name="message"
              id="message"
              className="peer block w-full pt-4 pb-1 pl-8 bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-600 
                         focus:outline-none focus:ring-0 focus:border-cyan-300 dark:focus:border-cyan-400 
                         transition-colors duration-300 resize-none"
              placeholder=" "
              rows="4"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-8 top-4 text-gray-300 dark:text-gray-400 
                         transition-all duration-300 ease-in-out
                         transform -translate-y-4 scale-75 origin-[0]
                         peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
                         peer-focus:-translate-y-4 peer-focus:scale-75
                         peer-focus:text-cyan-300 dark:peer-focus:text-cyan-400"
            >
              Describe tu proyecto
            </label>
          </div>

          {/* Inputs ocultos de Formspree */}
          <input
            type="hidden"
            name="_subject"
            value="Nueva solicitud de Portafolio"
          />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {/* --- BOTÓN APOTEÓSICO --- */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-green-500 dark:from-cyan-400 dark:to-green-400
                       text-white dark:text-gray-900 
                       px-8 py-3 rounded-full text-lg font-semibold
                       shadow-lg hover:shadow-xl hover:shadow-cyan-400/40 dark:hover:shadow-cyan-300/30 
                       transition-all duration-300 ease-in-out 
                       hover:scale-105 hover:-translate-y-1"
          >
            Enviar Solicitud
          </button>
        </form>
      </ParallaxTilt>
    </section>
  );
}

export default Contacto;
