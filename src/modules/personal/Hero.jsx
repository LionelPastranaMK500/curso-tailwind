import { personalHero } from "../data/personalData";
import logo from "../../assets/logo.png"; // Asegúrate de la ruta del logo

function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <img
          src={logo}
          alt="Avatar Personal"
          className="relative h-48 w-48 rounded-full object-cover border-4 border-gray-900 bg-gray-900"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-4 font-maven text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {personalHero.title}
      </h1>

      <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6 font-cursive">
        {personalHero.subtitle}
      </h2>

      <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
        {personalHero.description}
      </p>
    </section>
  );
}

export default Hero;
