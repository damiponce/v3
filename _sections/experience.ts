type CardText = {
  date: string;
  title: string;
  place?: string;
  position?: string;
  description?: string;
  technologies?: string[];
};

type Experience = {
  _key: string;
  url?: string;
  links?: { name: string; url: string }[];
  technologies?: string[];
  es: CardText;
  en: CardText;
};

const weirdDash = "→";

const EXPERIENCE: Experience[] = [
  {
    _key: "eti-tango-fullstack",
    url: "",
    technologies: ["React", "Next.js", "Firebase"],
    es: {
      date: "Jun 2025 → presente",
      title: "Desarrollador Web Full-Stack",
      position: "Encuentro Tanguero del Interior",
      description:
        "Desarrollo completo con diseño de sistema de gestión de eventos con +1000 usuarios mensuales.",
    },
    en: {
      date: "Jun 2025 → present",
      title: "Full-Stack Web Developer",
      position: "Encuentro Tanguero del Interior",
      description:
        "Full-stack development with event management system design for +1000 monthly users.",
    },
  },
  {
    _key: "gmf-layf-front",
    url: "https://frh.utn.edu.ar",
    technologies: ["React", "Next.js", "Trame"],
    es: {
      date: "Ago 2024 → presente",
      title: "Desarrollador Web Front-end",
      position: "GMF - LAyF - UTN FRH",
      description:
        "Liderando el desarrollo front-end de una nueva Suite de simulación de sistemas de baterías VFR.",
    },
    en: {
      date: "Aug 2024 → present",
      title: "Front-end Web Developer",
      position: "GMF - LAyF - UTN FRH",
      description:
        "Leading the front-end development of a new simulation Suite related to VFR battery systems.",
    },
  },
  {
    _key: "freelance-webdev",
    url: "#freelance",
    technologies: ["Next.js", "Vercel", "Sanity"],
    es: {
      date: "May 2022 → presente",
      title: "Desarrollador Web Freelance",
      position: "Remoto · Freelance",
      description:
        "Desarrollo de sitios web, aplicaciones web y aplicaciones móviles para clientes varios.",
    },
    en: {
      date: "May 2022 → present",
      title: "Freelance Web Developer",
      position: "Remote · Freelance",
      description:
        "Website, web app and mobile app development for various clients.",
    },
  },
  // {
  //   _key: 'lab-assistant',
  //   url: 'https://frh.utn.edu.ar',
  //   // technologies: ["SMD", "PCB"],
  //   es: {
  //     date: 'Jul 2023 → Dic 2023',
  //     title: 'Ayudante de Laboratorio de Electrónica',
  //     place: 'UTN FRH',
  //     position: 'Ingeniería',
  //     description:
  //       'Asistencia para los estudiantes que desean utilizar los laboratorios de electrónica.',
  //     technologies: ['SMD', 'Diseño de PCB', 'Soldadura'],
  //   },
  //   en: {
  //     date: 'Jul 2023 → Dec 2023',
  //     title: 'Electronics Lab Assistant',
  //     place: 'UTN FRH',
  //     position: 'Engineering',
  //     description:
  //       'Assistance for students who want to use the electronics laboratories.',
  //     technologies: ['SMD', 'PCB design', 'Soldering'],
  //   },
  // },
  {
    _key: "interpreter",
    es: {
      date: "Dic 2022 →\nEne 2023",
      title: "Intérprete Español-Inglés",
      position: "Remoto · EEUU",
      description:
        "Interpretación de conversaciones entre un cliente y un proveedor de servicios en tiempo real.",
    },
    en: {
      date: "Dec 2022 →\nJan 2023",
      title: "Spanish-English Interpreter",
      position: "Remote · USA",
      description:
        "Interpretation of conversations between a client and a service provider in real time.",
    },
  },
];

export default EXPERIENCE;
