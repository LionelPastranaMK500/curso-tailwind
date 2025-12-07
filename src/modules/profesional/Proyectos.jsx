import { projects } from "../../data/projects";

function Proyectos() {
  return (
    <section
      id="proyectos"
      className="py-16 px-4 bg-white/5 dark:bg-gray-800/20"
    >
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
          Mis Proyectos
        </h3>
      </div>

      {/* --- GRID DE PROYECTOS --- */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto 
                      font-maven animate-fadeInUp"
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        {/* Mapeamos los proyectos aquí */}
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white/10 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg 
                       transition-all duration-300 ease-in-out hover:scale-105 
                       flex flex-col" // flex-col para alinear el botón abajo
          >
            <h4
              className="text-2xl font-semibold mb-3 
                         transition-colors duration-300 
                         group-hover:text-cyan-300"
            >
              {project.title}
            </h4>

            <p className="text-gray-200 dark:text-gray-300 mb-4 flex-1">
              {" "}
              {/* flex-1 para empujar el botón */}
              {project.description}
            </p>

            {/* Etiquetas de Tecnología */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((techName) => (
                <span
                  key={techName}
                  className="bg-cyan-600/50 text-cyan-200 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {techName}
                </span>
              ))}
            </div>

            {/* Enlace a GitHub (alineado abajo) */}
            <div className="mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white dark:text-gray-100
                           transition-colors duration-300 
                           group-hover:text-cyan-300"
              >
                Ver Código en GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
