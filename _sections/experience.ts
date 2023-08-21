type CardText = {
  date: string;
  title: string;
  place: string;
  position?: string;
  description?: string;
  technologies?: string[];
};

type Experience = {
  key: string;
  url: string;
  links?: { name: string; url: string }[];
  technologies?: string[];
  es: CardText;
  en: CardText;
};

const EXPERIENCE: Experience[] = [
  {
    key: "lab-assistant",
    url: "https://frh.utn.edu.ar",
    technologies: ["SMD", "PCB"],
    es: {
      date: "Jul 2023 — presente",
      title: "Ayudante de Laboratorio de Electrónica",
      place: "UTN FRH",
      position: "Estudiante",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliqua aliquam, nunc.",
      technologies: ["SMD", "PCB", "Soldadura"],
    },
    en: {
      date: "Jul 2023 — present",
      title: "Electronics Lab Assistant",
      place: "UTN FRH",
      // position: "Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliqua aliquam, nunc.",
    },
  },
];

export default EXPERIENCE;
