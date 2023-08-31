type CardText = {
  date: string;
  title: string;
  place: string;
  position?: string;
  description?: string;
  technologies?: string[];
};

type Education = {
  key: string;
  url?: string;
  links?: { name: string; url: string }[];
  technologies?: string[];
  es: CardText;
  en: CardText;
};

const EDUCATION: Education[] = [
  {
    key: 'university',
    url: 'https://frh.utn.edu.ar',
    es: {
      date: '2021 → presente',
      title: 'Ingeniería Electrónica',
      place: 'UTN FRH',
      position: 'Ingeniería',
      // description: '-------------',
    },
    en: {
      date: '2021 → present',
      title: 'Electronic Engineering',
      place: 'UTN FRH',
      position: 'Engineering',
      // description: '-------------',
    },
  },
  {
    key: 'highschool',
    url: 'http://www.inac.edu.ar',
    es: {
      date: '2014 → 2020',
      title: 'Técnico Aviónico',
      place: 'INAC - CIATA',
      position: 'Secundario',
      // description: '-------------',
    },
    en: {
      date: '2014 → 2020',
      title: 'Avionics Technician',
      place: 'INAC - CIATA',
      position: 'High School',
      // description: '-------------',
    },
  },
];

export default EDUCATION;
