type Project = {
  key: string;
  year: number | string;
  project: string | { en: string; es: string };
  madeAt?: string;
  builtWith: string[];
  links?: {
    name: string;
    url: string;
  }[];
};

export const allProjects: Project[] = [
  {
    key: 'weather-station',
    year: '2023',
    project: {
      es: 'Estación meteorológica (WIP)',
      en: 'Weather Station (WIP)',
    },
    builtWith: ['ESP-IDF', 'Grafana', 'InfluxDB', 'MQTT'],
    // links: [
    //   {
    //     name: '',
    //     url: '',
    //   },
    // ],
  },
  {
    key: 'dreambuilders',
    year: '2023',
    project: 'DreamBuilders',
    madeAt: 'Freelance',
    builtWith: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'TypeScript'],
    links: [
      {
        name: 'dreambuilders.cl',
        url: 'https://dreambuilders.cl/',
      },
    ],
  },
  {
    key: 'botaaguas',
    year: '2023',
    project: 'Botaaguas',
    madeAt: 'Freelance',
    builtWith: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'TypeScript'],
    links: [
      {
        name: 'botaaguas.cl',
        url: 'https://botaaguas.cl/',
      },
    ],
  },
  {
    key: 'minesweeper',
    year: '2023',
    project: { es: 'Buscaminas', en: 'Minesweeper' },
    builtWith: ['React', 'Next.js'],
    links: [
      {
        name: '',
        url: '',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/minesweeper',
      },
    ],
  },
  {
    key: '3d-noise',
    year: '2022',
    project: { es: 'Ruido 3D', en: '3D Noise' },
    madeAt: '',
    builtWith: ['React', 'Gatsby', 'three.js'],
    links: [
      {
        name: '',
        url: '',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/3d-noise',
      },
    ],
  },
  {
    key: 'wpp-stats',
    year: '2022',
    project: { es: 'Estad\u00edsticas de WhatsApp', en: 'WhatsApp Stats' },
    madeAt: '',
    builtWith: ['React', 'Next.js', 'Python', 'Pandas'],
    links: [
      {
        name: '',
        url: '',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/chat-analyser',
      },
    ],
  },
  {
    key: 'portfolio-v2',
    year: '2022',
    project: 'Portfolio v2',
    builtWith: ['React', 'Next.js'],
    links: [
      {
        name: 'Website',
        url: 'https://v2.damianponce.com/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/v2',
      },
    ],
  },
  {
    key: 'weather-web',
    year: '2022',
    project: { es: 'Aplicación del clima', en: 'Weather App' },
    builtWith: ['React', 'Next.js'],
    links: [
      { name: '', url: '' },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/weather-web',
      },
    ],
  },
  {
    key: 'portfolio-v1',
    year: '2021',
    project: 'Portfolio v1',
    builtWith: ['React', 'Next.js'],
    links: [
      {
        name: 'Website',
        url: 'https://v1.damianponce.com/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/v1',
      },
    ],
  },
  {
    key: 'notee',
    year: '2021',
    project: 'Notee',
    builtWith: ['Android Studio', 'Xcode', 'React Native', 'Firebase'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/notee',
      },
    ],
  },
  {
    key: 'penworld',
    year: '2021',
    project: 'PenWorld',
    builtWith: ['Android Studio', 'Xcode', 'React Native', 'Firebase'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/penworld',
      },
    ],
  },
  {
    key: 'simple-calc',
    year: '2019',
    project: { es: 'Calculadora simple', en: 'Simple calculator' },
    madeAt: 'INAC - CIATA',
    builtWith: ['Visual Basic'],
  },
  {
    key: 'minesweeper_old',
    year: '2019',
    project: { es: 'Buscaminas (viejo)', en: 'Minesweeper (old)' },
    madeAt: 'INAC - CIATA',
    builtWith: ['C'],
  },
  {
    key: 'pendulum',
    year: '2019',
    project: { es: 'Péndulo doble', en: 'Double pendulum' },
    builtWith: ['Processing'],
  },
  {
    key: 'book-sorter',
    year: '2019',
    project: { es: 'Ordenador de carpetas', en: 'Notebook sorter' },
    madeAt: 'INAC - CIATA',
    builtWith: ['JavaScript', 'p5.js'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/book-sorting',
      },
    ],
  },
  {
    key: 'morse-code',
    year: '2018',
    project: { es: 'Generador de código morse', en: 'Morse code generator' },
    madeAt: 'INAC - CIATA',
    builtWith: ['Processing', 'Arduino'],
  },
];
