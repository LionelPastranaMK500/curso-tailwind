import { useEffect, useState } from "react";
// 1. Importa 'Particles' Y 'initParticlesEngine'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from "../config/particlesConfig";

function ParticlesBackground() {
  // 2. Necesitamos 'useState' de nuevo
  const [init, setInit] = useState(false);

  // 3. Este 'useEffect' es la clave.
  //    Inicializa el motor de partículas una sola vez.
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Carga el paquete 'slim'
      await loadSlim(engine);
    }).then(() => {
      // Una vez cargado, ponemos 'init' en true
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log("Particles loaded", container);
  };

  // 4. Solo renderizamos las partículas si 'init' es true
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesConfig}
        className="fixed top-0 left-0 w-full h-full z-0"
      />
    );
  }

  // No renderiza nada mientras se está inicializando
  return null;
}

export default ParticlesBackground;
