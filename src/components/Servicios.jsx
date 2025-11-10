function Servicios() {
  return (
    <section id="servicios" className="py-16 px-4 bg-white/5">
      <h3 className="text-4xl font-bold text-center mb-12">Mis Servicios</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h4 className="text-2xl font-semibold mb-3">Diseño Web</h4>
          <p className="text-gray-200">
            Creo sitios web modernos, responsivos y optimizados, utilizando
            HTML, CSS, JavaScript y frameworks como Tailwind CSS. Desde landing
            pages hasta plataformas complejas, garantizo una experiencia de
            usuario excepcional.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h4 className="text-2xl font-semibold mb-3">
            Desarrollo de Software Personalizado
          </h4>
          <p className="text-gray-200">
            Diseño y desarrollo soluciones de software a medida, incluyendo
            aplicaciones web, sistemas de gestión y herramientas internas,
            adaptadas a las necesidades específicas de tu negocio.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h4 className="text-2xl font-semibold mb-3">Consultoría Técnica</h4>
          <p className="text-gray-200">
            Ofrezco asesoría para optimizar procesos digitales, seleccionar
            tecnologías adecuadas y planificar proyectos tecnológicos,
            asegurando resultados eficientes y sostenibles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
