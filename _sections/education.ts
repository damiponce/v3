type CardText = {
  date: string;
  title: string;
  place: string;
  position?: string;
  description?: string;
  technologies?: string[];
};

type Education = {
  _key: string;
  url?: string;
  links?: { name: string; url: string }[];
  technologies?: string[];
  es: CardText;
  en: CardText;
};

const EDUCATION: Education[] = [
  {
    _key: "university",
    url: "https://computacion.dc.uba.ar/",
    es: {
      date: "2026 → ...",
      title: "Lic. en Ciencias de la Computación",
      place: "UBA",
      position: "Licenciatura",
    },
    en: {
      date: "2026 → ...",
      title: " MSc in Computer Science",
      place: "UBA",
      position: "Master's",
      // description: '-------------',
    },
  },
  {
    _key: "university",
    url: "https://frh.utn.edu.ar/",
    es: {
      date: "2021 → 2025",
      title: "Ingeniería Electrónica",
      place: "UTN FRH",
      position: "Ingeniería",
    },
    en: {
      date: "2021 → 2025",
      title: "Electronic Engineering",
      place: "UTN FRH",
      position: "Engineering",
    },
  },
  {
    _key: "highschool",
    url: "http://www.inac.edu.ar/",
    es: {
      date: "2014 → 2020",
      title: "Técnico Aviónico",
      place: "INAC - CIATA",
      position: "Secundario",
      // description: '-------------',
    },
    en: {
      date: "2014 → 2020",
      title: "Avionics Technician",
      place: "INAC - CIATA",
      position: "High School",
      // description: '-------------',
    },
  },
];

export default EDUCATION;
