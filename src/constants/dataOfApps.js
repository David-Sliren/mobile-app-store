// Mientras hago la base de datos tendre en este arhivo todos los datos de las aplicaciones

export const dataOfApps = new Map();

const apps = [
  {
    name: "RENPENTAIN",
    slogan: { normal: "Nunca olvides", born: "lo que necesitas" },

    description:
      "Optimiza y maximisa la efectividad de tus compras, con RENPENTAIN ya no tendras problemas con las cosas que olvidaste comprar. Diseñada para la velocidad, enfocada en tu comodidad. Podras realizar tu lista de compras justo antes de ir al supermercado.",
    description_Breve:
      "Una app de lista de tareas para que este bien haciendo lo oportuno",

    description_Extense: "",
    vertion: "1.0.1",
    size: "56 MB",
    date: new Date(),
    stars: 5,
    category: "productividad",
    get share() {
      return window.location.href;
    },
    download:
      "https://github.com/David-Sliren/Renpentain/releases/download/v1.0.1/Instalar_Renpentain_v1.0.1.apk",
    video_presentation:
      "https://res.cloudinary.com/dudiot7uv/video/upload/v1773037868/Serie_Apps_Parte_1-_Renpentain_czpxxm.mp4",
    video_description:
      "https://res.cloudinary.com/dudiot7uv/video/upload/v1773038096/video_3_osnu5t.webm",
  },
];

apps.forEach((s) => dataOfApps.set(s.name, s));
