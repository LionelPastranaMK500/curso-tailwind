import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Compromiso from "./components/Compromiso";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-cyan-400 text-white min-h-screen flex flex-col font-sans">
      <Header />

      {/* Es una buena práctica envolver el contenido principal en <main> */}
      <main>
        <Hero />
        <Servicios />
        <Compromiso />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;
