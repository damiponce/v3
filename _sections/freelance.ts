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
    url: 'https://etitango.com.ar',
    diagram: 'eti',
    technologies: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Cloud Functions', 'PostHog'],
    es: {
      date: '',
      title: 'ETI · Encuentro Tanguero del Interior',
      description:
        'Diseñé y desarrollé la plataforma de inscripción y gestión del encuentro, con Next.js y Firebase. Más de 2000 usuarios registrados y hasta 1000 usuarios activos por mes en el pico.\n\nEl problema más difícil: amplié el modelo de datos y el flujo de inscripción con la convocatoria abierta. Migré las inscripciones existentes e implementé transacciones para mantener consistentes las aprobaciones, las cancelaciones, la lista de espera y los cupos.',
    },
    en: {
      date: '',
      title: 'ETI · Encuentro Tanguero del Interior',
      description:
        'I designed and built the event registration and management platform with Next.js and Firebase. 2,000+ registered users, up to 1,000 monthly active users at peak.\n\nHardest problem: I expanded the registration data model and workflow while signups stayed open. I migrated existing registrations and introduced transactional updates to keep approvals, cancellations, waitlists and capacity counts consistent.',
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
        'DreamBuilders is a Chilean company specialized in the construction of wood-framed housing.',
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
        'Botaaguas is a Chilean company that is dedicated to the manufacture and sale of water boots for trucks. ',
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
