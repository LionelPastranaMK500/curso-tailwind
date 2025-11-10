function Contacto() {
  return (
    <section id="contacto" className="py-16 px-4">
      <h3 className="text-4xl font-bold text-center mb-12">
        Contáctame para tu proyecto
      </h3>

      <form
        id="contact-form"
        action="https://formspree.io/f/xgvkyyaj"
        method="POST"
        className="max-w-lg mx-auto space-y-6"
      >
        <p className="text-lg text-center text-gray-200 mb-4">
          Si ya enviaste tu mensaje, ¡muchas gracias! Te contactaré pronto.
        </p>

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea
          name="message"
          placeholder="Describe tu proyecto"
          className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          rows="6"
          required
        ></textarea>

        <input
          type="hidden"
          name="_subject"
          value="Nueva solicitud de servicios de programación"
        />
        {/* Así se maneja el 'style' en React (con doble llave) */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button
          type="submit"
          className="w-full bg-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-600 transition duration-300"
        >
          Enviar solicitud
        </button>
      </form>
    </section>
  );
}

export default Contacto;
