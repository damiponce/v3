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
  highlight?: boolean;
  // Kept for the résumé but left off the home page.
  hideOnHome?: boolean;
  es: CardText;
  en: CardText;
};

const weirdDash = "→";

const EXPERIENCE: Experience[] = [
  {
    _key: "eti-tango-fullstack",
    highlight: true,
    url: "https://etitango.com.ar",
    technologies: ["Next.js", "React", "TypeScript", "Firebase", "Cloud Functions", "PostHog"],
    es: {
      date: "Jun 2025 → presente",
      title: "Desarrollador Full-Stack",
      position: "Encuentro Tanguero del Interior (ETI)",
      description:
        "Diseñé y desarrollé la plataforma de eventos de punta a punta: más de 2000 usuarios registrados y hasta 1000 usuarios activos por mes en el pico. Gestión de inscripciones, aprobaciones y cupos.",
    },
    en: {
      date: "Jun 2025 → present",
      title: "Full-Stack Developer",
      position: "Encuentro Tanguero del Interior (ETI)",
      description:
        "Designed and built the event platform end to end: 2,000+ registered users, up to 1,000 monthly active users at peak. Registration, approval and capacity management.",
    },
  },
  {
    _key: "freelance-webdev",
    highlight: true,
    url: "#freelance",
    technologies: ["Next.js", "Vercel", "Sanity"],
    es: {
      date: "May 2022 → presente",
      title: "Desarrollador Full-Stack (freelance)",
      position: "Remoto · Freelance",
      description: "Proyectos web, mobile e IoT para clientes de Argentina y Chile.",
    },
    en: {
      date: "May 2022 → present",
      title: "Full-Stack Developer (freelance)",
      position: "Remote · Freelance",
      description: "Web, mobile and IoT projects for clients in Argentina and Chile.",
    },
  },
  {
    _key: "gmf-layf-front",
    url: "https://frh.utn.edu.ar",
    technologies: ["React", "Next.js", "Trame"],
    es: {
      date: "2024",
      title: "Líder Front-End",
      position: "GMF - LAyF - UTN FRH",
      description:
        "Lideré el desarrollo front-end de una nueva suite de simulación de sistemas de baterías VFR.",
    },
    en: {
      date: "2024",
      title: "Front-End Lead",
      position: "GMF - LAyF - UTN FRH",
      description:
        "Led the front-end development of a new simulation suite for VFR battery systems.",
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
    // Short role; About already covers the bilingual point.
    hideOnHome: true,
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
