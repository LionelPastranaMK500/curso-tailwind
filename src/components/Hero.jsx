import logo from "../assets/logo.png"; // Importamos el logo aquí también

function Hero() {
  return (
    <section id="inicio" className="text-center pt-24 pb-16 px-4 flex-1">
      <img src={logo} alt="Mi Logo" className="h-24 w-auto mx-auto mb-6" />
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Soluciones digitales que transforman
      </h2>
      <p className="text-xl max-w-3xl mx-auto mb-8">
        Soy un programador apasionado que crea sitios web, software
        personalizado y estrategias digitales para llevar tu proyecto al
        siguiente nivel.
      </p>
      <a
        href="#contacto"
        className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg"
      >
        ¡Inicia tu proyecto!
      </a>
    </section>
  );
}

export default Hero;
