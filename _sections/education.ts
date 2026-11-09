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
  highlight?: boolean;
  es: CardText;
  en: CardText;
};

const EDUCATION: Education[] = [
  {
    _key: "university",
    highlight: true,
    url: "https://computacion.dc.uba.ar/",
    es: {
      date: "2026 → ...",
      title: "Lic. en Ciencias de la Computación",
      place: "UBA - FCEyN",
      position: "Licenciatura",
    },
    en: {
      date: "2026 → ...",
      title: "Computer Science (Licenciatura)",
      place: "UBA - FCEyN",
      position: "Undergraduate degree",
      // description: '-------------',
    },
  },
  {
    _key: "engineering",
    url: "https://frh.utn.edu.ar/",
    es: {
      date: "2021 → 2025",
      title: "Ingeniería Electrónica (estudios parciales, sin título)",
      place: "UTN FRH",
      position: "Ingeniería",
    },
    en: {
      date: "2021 → 2025",
      title: "Electronic Engineering (coursework, degree not completed)",
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
