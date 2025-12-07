function Servicios() {
  return (
    <section
      id="servicios"
      className="py-16 px-4 bg-white/5 dark:bg-gray-800/20"
    >
      <div
        className="group animate-fadeInUp transition-all duration-300 ease-in-out hover:-translate-y-1"
        style={{ opacity: 0 }}
      >
        <h3
          className="text-4xl font-bold text-center mb-12 font-maven 
                     transition-colors duration-300 ease-in-out
                     group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-green-300"
        >
          Mis Servicios
        </h3>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto 
                      font-maven animate-fadeInUp"
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        {/* SERVICIO 1: FRONTEND (Sin cambios) */}
        <div
          className="group bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
                        transition-all duration-300 ease-in-out hover:scale-105 hover:!opacity-100"
        >
          <h4
            className="text-2xl font-semibold mb-3 
                         transition-colors duration-300 
                         group-hover:text-cyan-300"
          >
            Desarrollo Frontend Interactivo
          </h4>
          <p className="text-gray-200 dark:text-gray-300">
            Construyo interfaces de usuario fluidas y atractivas. Utilizo{" "}
            <strong>React</strong> para crear aplicaciones web dinámicas (SPAs)
            y <strong>TailwindCSS</strong> para un diseño moderno y 100%
            responsivo. Me especializo en conectar aplicaciones a APIs y
            servicios como <strong>Firebase</strong> para crear dashboards y
            tiendas virtuales.
          </p>
        </div>

        {/* SERVICIO 2: BACKEND (ACTUALIZADO) */}
        <div
          className="group bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
                        transition-all duration-300 ease-in-out hover:scale-105 hover:!opacity-100"
        >
          <h4
            className="text-2xl font-semibold mb-3 
                         transition-colors duration-300 
                         group-hover:text-cyan-300"
          >
            Desarrollo Backend y APIs
          </h4>
          <p className="text-gray-200 dark:text-gray-300">
            Diseño y desarrollo el "cerebro" detrás de las aplicaciones. Creo
            APIs RESTful eficientes con <strong>Node.js</strong> y{" "}
            <strong>Express</strong>, y desarrollo servicios robustos a nivel
            empresarial con <strong>Java</strong> y <strong>Spring Boot</strong>
            . Integro bases de datos relacionales como <strong>MySQL</strong>.
          </p>
        </div>

        {/* SERVICIO 3: FULL-STACK & DESKTOP (Sin cambios) */}
        <div
          className="group bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
                        transition-all duration-300 ease-in-out hover:scale-105 hover:!opacity-100"
        >
          <h4
            className="text-2xl font-semibold mb-3 
                         transition-colors duration-300 
                         group-hover:text-cyan-300"
          >
            Soluciones Full-Stack y Software
          </h4>
          <p className="text-gray-200 dark:text-gray-300">
            Uno ambas disciplinas para entregar proyectos completos. Además de
            aplicaciones web, desarrollo software de escritorio a medida con{" "}
            <strong>C#</strong> y la plataforma <strong>.NET</strong>, creando
            soluciones empresariales como sistemas de punto de venta y
            herramientas de administración de clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
