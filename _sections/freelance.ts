import type { DiagramKey } from '../components/arch-diagram';

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
  new?: boolean;
  // Rendered as an inline architecture diagram in place of the image.
  diagram?: DiagramKey;
  // Important projects get bigger tiles on the home page grid.
  important?: boolean;
  es: CardText;
  en: CardText;
};

const FREELANCE: Project[] = [
  {
    _key: 'eti',
    important: true,
    img: '', // TODO: ETI screenshot (then drop the diagram)
    url: '', // TODO: ETI live URL
    diagram: 'eti',
    technologies: ['Next.js', 'React', 'TypeScript', 'Firebase', 'PostHog'],
    es: {
      date: '',
      title: 'ETI: plataforma de eventos',
      description:
        'Plataforma de eventos para el Encuentro Tanguero del Interior. La diseñé y desarrollé de punta a punta: front-end en Next.js, backend en Firebase y acceso por roles con custom claims de Firebase Auth. Más de 2000 usuarios registrados y hasta 1000 usuarios activos por mes en el pico.\n\nEl problema más difícil: encontré y resolví en producción un bug de refresco de tokens en el flujo de custom claims que define quién puede acceder a qué.',
    },
    en: {
      date: '',
      title: 'ETI: event platform',
      description:
        'Event platform for Encuentro Tanguero del Interior. I designed and built it end to end: Next.js front end, Firebase backend, and role-based access with Firebase Auth custom claims. 2,000+ registered users, up to 1,000 monthly active users at peak.\n\nHardest problem: I tracked down and fixed a token-refresh bug in production, in the custom claims flow that controls who can access what.',
    },
  },  {
    _key: 'iot-grill',
    important: true,
    img: '',
    url: '',
    diagram: 'iot',
    technologies: [
      'Expo',
      'React Native',
      'ESP32',
      'Firebase',
      'Cloud Functions',
    ],
    es: {
      date: '',
      title: 'Monitor de parrilla IoT: dispositivo + app',
      description:
        'Trabajo freelance para una startup de hardware. App en Expo / React Native para iOS y Android que configura el Wi-Fi del dispositivo ESP32 por SoftAP, gestiona la propiedad del dispositivo y se conecta a un backend en Firebase Cloud Functions.',
    },
    en: {
      date: '',
      title: 'IoT grill monitor: device + companion app',
      description:
        "Freelance work for a hardware startup. An Expo / React Native app for iOS and Android that sets up the ESP32 device's Wi-Fi over SoftAP, handles device ownership, and connects to a Firebase Cloud Functions backend.",
    },
  },  {
    _key: 'spark-arg',
    img: '/assets/images/spark-arg-banner.webp',
    url: 'https://spark-argentina.vercel.app',
    technologies: [
      'React',
      'Next.js',
      'Vercel',
      'Tailwind CSS',
      'TypeScript',
      'Formspree',
    ],
    es: {
      date: '',
      title: 'Spark Argentina',
      description:
        'Spark Argentina ofrece servicios de mantenimiento industrial electrónico, electromecánico, y logístico.',
    },
    en: {
      date: '',
      title: 'Spark Argentina',
      description:
        'Spark Argentina offers electronic, electromechanical, and logistic industrial maintenance services.',
    },
  },
  {
    _key: 'dreambuilders',
    img: '/assets/images/dreambuilders-banner.webp',
    url: 'https://dreambuilders.cl',
    technologies: [
      'React',
      'Next.js',
      'Vercel',
      'Tailwind CSS',
      'TypeScript',
      'Formcarry',
    ],
    es: {
      date: '',
      title: 'DreamBuilders',
      description:
        'DreamBuilders es una empresa chilena especializada en la construcci\u00f3n de viviendas con estructura de madera.',
    },
    en: {
      date: '',
      title: 'DreamBuilders',
      description:
        'DreamBuilders is a chilean company specialized in the construction of wood-framed housing.',
    },
  },
  {
    _key: 'botaaguas',
    img: '/assets/images/botaaguas-banner.webp',
    url: 'https://botaaguas.cl',
    technologies: [
      'React',
      'Next.js',
      'Vercel',
      'Tailwind CSS',
      'TypeScript',
      'Formcarry',
    ],
    es: {
      date: '',
      title: 'Botaaguas',
      description:
        'Botaaguas es una empresa chilena que se dedica a la fabricaci\u00f3n y venta de bota aguas para camiones. ',
    },
    en: {
      date: '',
      title: 'Botaaguas',
      description:
        'Botaaguas is a chilean company that is dedicated to the manufacture and sale of water boots for trucks. ',
    },
  },
  {
    _key: 'vssete',
    img: '/assets/images/vssete-banner.webp',
    url: 'https://vssete.com',
    technologies: [],
    es: {
      date: '',
      title: 'Vssete',
      description: '',
    },
    en: {
      date: '',
      title: 'Vssete',
      description: '',
    },
  },
  {
    _key: 'italtechnics',
    img: '/assets/images/italtechnics-banner.webp',
    url: 'https://italtechnics.com.ar',
    technologies: [],
    es: {
      date: '',
      title: 'ItalTechnics',
      description: '',
    },
    en: {
      date: '',
      title: 'ItalTechnics',
      description: '',
    },
  },
  {
    _key: 'circulomistico',
    img: '/assets/images/circulomistico-banner.webp',
    url: 'https://circulo-mistico.vercel.app',
    technologies: [],
    es: {
      date: '',
      title: 'Círculo Místico',
      description: '',
    },
    en: {
      date: '',
      title: 'Círculo Místico',
      description: '',
    },
  },
];

export default FREELANCE;
