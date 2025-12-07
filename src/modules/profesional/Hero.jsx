import logo from "../../assets/logo.png";

function Hero() {
  return (
    <section id="inicio" className="text-center pt-24 pb-16 px-4 flex-1">
      {/* Logo (Sin cambios) */}
      <img
        src={logo}
        alt="Mi Logo"
        className="h-40 w-auto mx-auto mb-8 p-2 bg-white/10 dark:bg-gray-800/20 rounded-full 
                   border-4 border-white/20 dark:border-gray-700/50 
                   hover:border-cyan-300 dark:hover:border-cyan-400 
                   hover:scale-105 transition-all duration-300 ease-in-out
                   animate-fadeInUp"
      />

      {/* --- TÍTULO (AHORA CON 'GROUP') --- */}
      {/* 1. Contenedor: Recibe el 'group', la animación de alzado y el fadeIn */}
      <div
        className="group animate-fadeInUp 
                   transition-all duration-300 ease-in-out 
                   hover:-translate-y-1" // <-- EFECTO ALZADO
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight 
                     font-maven 
                     transition-colors duration-300 ease-in-out /* Transición solo para el color */
                     /* 2. Texto: Recibe el color usando 'group-hover:' */
                     group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-green-300" // <-- EFECTO COLOR
        >
          Desarrollador Full-Stack Creativo
        </h2>
      </div>

      {/* --- PÁRRAFO (AHORA CON 'GROUP') --- */}
      {/* 1. Contenedor: Recibe el 'group', la animación de alzado y el fadeIn */}
      <div
        className="group animate-fadeInUp
                   transition-all duration-300 ease-in-out
                   hover:-translate-y-1" // <-- EFECTO ALZADO
        style={{ animationDelay: "400ms", opacity: 0 }}
      >
        <p
          className="text-xl max-w-3xl mx-auto mb-8 text-gray-200 dark:text-gray-300
                     font-maven 
                     transition-colors duration-300 ease-in-out
                     /* 2. Texto: Recibe el color usando 'group-hover:' */
                     group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-green-300" // <-- EFECTO COLOR
        >
          Convierto ideas en código. Desde APIs robustas con Node.js hasta
          interfaces fluidas en React, construyo experiencias digitales
          completas de inicio a fin.
        </p>
      </div>

      {/* Botón (Sin cambios) */}
      <a
        href="#contacto"
        className="inline-block bg-cyan-500 text-white dark:bg-cyan-400 dark:text-gray-900 
                   px-10 py-4 rounded-full text-lg font-semibold
                   font-maven
                   shadow-lg hover:shadow-xl hover:shadow-cyan-400/40 dark:hover:shadow-cyan-300/30 
                   transition-all duration-300 ease-in-out 
                   hover:scale-105 hover:-translate-y-1
                   animate-fadeInUp"
        style={{ animationDelay: "600ms", opacity: 0 }}
      >
        ¡Inicia tu proyecto!
      </a>
    </section>
  );
}

export default Hero;
