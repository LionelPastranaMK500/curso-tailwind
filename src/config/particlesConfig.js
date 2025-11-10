// Esta es una configuración que imita el demo de particles.js
// pero con un fondo transparente para que se vea tu degradado.
export const particlesConfig = {
  background: {
    color: {
      value: "transparent", // ¡Importante!
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab", // "grab" crea el efecto de líneas que siguen al cursor
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      grab: {
        distance: 200,
        links: {
          opacity: 0.5,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff", // Color de las partículas
    },
    links: {
      color: "#ffffff", // Color de las líneas
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2, // Velocidad de movimiento
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80, // Número de partículas
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
