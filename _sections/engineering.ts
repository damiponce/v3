type CardText = {
  date: string; // not used
  title: string;
  description?: string;
  technologies?: string[];
};

type Project = {
  _key: string;
  img: string;
  url: string;
  links?: { name: string; url: string }[];
  technologies?: string[];
  es: CardText;
  en: CardText;
};

const PLACEHOLDER = "/assets/images/placeholder-banner.webp";

const ENGINEERING: Project[] = [
  {
    _key: "homelab",
    img: PLACEHOLDER, // TODO: homelab photo
    url: "",
    technologies: ["Linux", "Docker", "Raspberry Pi", "Grafana", "InfluxDB"],
    es: {
      date: "",
      title: "Homelab",
      description:
        "Una Raspberry Pi con servicios self-hosted (servidor multimedia, Home Assistant y Grafana con InfluxDB) y un NAS armado por mí.",
    },
    en: {
      date: "",
      title: "Homelab",
      description:
        "A Raspberry Pi running self-hosted services (a media server, Home Assistant, and Grafana with InfluxDB), plus a NAS I built.",
    },
  },
  {
    _key: "coffee-scale",
    img: PLACEHOLDER, // TODO: coffee scale photo
    url: "",
    technologies: ["ESP32", "C/C++", "3D printing"],
    es: {
      date: "",
      title: "Balanza para café",
      description:
        "ESP32 con celda de carga y HX711, pantalla OLED y piezas impresas en 3D.",
      technologies: ["ESP32", "C/C++", "Impresión 3D"],
    },
    en: {
      date: "",
      title: "Coffee scale",
      description:
        "ESP32 with an HX711 load cell and an OLED display, in 3D-printed parts.",
    },
  },
  {
    _key: "weather-station",
    img: PLACEHOLDER, // TODO: weather station photo
    url: "",
    technologies: ["ESP-IDF", "MQTT", "InfluxDB", "Grafana"],
    es: {
      date: "2023",
      title: "Estación meteorológica (WIP)",
      description: "",
    },
    en: {
      date: "2023",
      title: "Weather Station (WIP)",
      description: "",
    },
  },
];

export default ENGINEERING;
