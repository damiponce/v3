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

const FREELANCE: Project[] = [
  {
    _key: 'spark-arg',
    img: '/assets/images/spark-arg-banner.webp',
    url: 'https://sparkargentina.com.ar',
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
