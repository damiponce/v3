type CardText = {
  date: string;
  title: string;
  place: string;
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

const weirdDash = '→';

const EXPERIENCE: Experience[] = [
  {
    _key: 'lab-assistant',
    url: 'https://frh.utn.edu.ar',
    // technologies: ["SMD", "PCB"],
    es: {
      date: 'Jul 2023 → presente',
      title: 'Ayudante de Laboratorio de Electrónica',
      place: 'UTN FRH',
      position: 'Ingeniería',
      description:
        'Asistencia para los estudiantes que desean utilizar los laboratorios de electrónica.',
      technologies: ['SMD', 'Diseño de PCB', 'Soldadura'],
    },
    en: {
      date: 'Jul 2023 → present',
      title: 'Electronics Lab Assistant',
      place: 'UTN FRH',
      position: 'Engineering',
      description:
        'Assistance for students who want to use the electronics laboratories.',
      technologies: ['SMD', 'PCB design', 'Soldering'],
    },
  },
  {
    _key: 'freelance-webdev',
    url: '#freelance',
    technologies: [
      'React',
      'Node.js',
      'Next.js',
      'Vercel',
      'Express',
      'MongoDB',
    ],
    es: {
      date: 'May 2022 → presente',
      title: 'Desarrollador Web Freelance',
      place: 'Remoto',
      position: 'Freelance',
      description:
        'Desarrollo de sitios web, aplicaciones web y aplicaciones móviles para clientes varios.',
    },
    en: {
      date: 'May 2022 → present',
      title: 'Freelance Web Developer',
      place: 'Remote',
      position: 'Freelance',
      description:
        'Website, web app and mobile app development for various clients.',
    },
  },
  {
    _key: 'interpreter',
    es: {
      date: 'Dic 2022 →\nEne 2023',
      title: 'Intérprete Español-Inglés',
      place: 'Remoto - EEUU',
      description:
        'Interpretación de conversaciones entre un cliente y un proveedor de servicios en tiempo real.',
    },
    en: {
      date: 'Dec 2022 →\nJan 2023',
      title: 'Spanish-English Interpreter',
      place: 'Remote - USA',
      description:
        'Interpretation of conversations between a client and a service provider in real time.',
    },
  },
];

export default EXPERIENCE;
