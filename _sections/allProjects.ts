type Project = {
  _key: string;
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
    _key: 'musictl',
    year: '2026',
    project: 'Music Timeline',
    builtWith: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Zustand',
      'd3',
      'Motion',
      'IndexedDB',
    ],
    links: [
      {
        name: 'musictl.damianponce.com',
        url: 'https://musictl.damianponce.com/',
      },
    ],
  },
  {
    _key: 'iot-grill',
    year: '2026',
    project: { es: 'Monitor de parrilla IoT', en: 'IoT grill monitor' },
    madeAt: 'Freelance',
    builtWith: ['Expo', 'React Native', 'ESP32', 'Firebase', 'Cloud Functions'],
  },
  {
    _key: 'homelab',
    year: '2026',
    project: 'Homelab',
    builtWith: ['Linux', 'Docker', 'Raspberry Pi', 'Grafana', 'InfluxDB'],
  },
  {
    _key: 'coffee-scale',
    year: '2026',
    project: { es: 'Balanza para café', en: 'Coffee scale' },
    builtWith: ['ESP32', 'C/C++', '3D printing'],
  },
  {
    _key: 'eti',
    year: '2025',
    project: { es: 'ETI: plataforma de eventos', en: 'ETI: event platform' },
    madeAt: 'ETI',
    builtWith: ['Next.js', 'React', 'TypeScript', 'Firebase', 'PostHog'],
  },
  {
    _key: 'vssete',
    year: '2025',
    project: 'Vssete',
    madeAt: 'Freelance',
    builtWith: [],
    links: [{ name: 'vssete.vercel.app', url: 'https://vssete.vercel.app/' }],
  },
  {
    _key: 'montajes-industriales-aed',
    year: '2025',
    project: 'Montajes Industriales AED',
    madeAt: 'Freelance',
    builtWith: [],
    links: [
      { name: 'montajes-industriales-aed.vercel.app', url: 'https://montajes-industriales-aed.vercel.app/' },
    ],
  },
  {
    _key: 'italtechnics',
    year: '2025',
    project: 'ItalTechnics',
    madeAt: 'Freelance',
    builtWith: [],
    links: [
      { name: 'servicio-tecnico-omar.vercel.app', url: 'https://servicio-tecnico-omar.vercel.app/' },
    ],
  },
  {
    _key: 'circulomistico',
    year: '2025',
    project: 'Círculo Místico',
    madeAt: 'Freelance',
    builtWith: [],
    links: [
      {
        name: 'circulo-mistico.vercel.app',
        url: 'https://circulo-mistico.vercel.app/',
      },
    ],
  },
  {
    _key: 'spark-arg',
    year: '2024',
    project: 'Spark Argentina',
    madeAt: 'Freelance',
    builtWith: [
      'React',
      'Next.js',
      'Vercel',
      'Tailwind CSS',
      'TypeScript',
      'Formspree',
    ],
    links: [
      {
        name: 'Website',
        url: 'https://spark-argentina.vercel.app/',
      },
    ],
  },
  {
    _key: 'satview',
    year: '2024',
    project: { es: 'SatView - Visualizador de satélites', en: 'SatView - Satellite Visualizer' },
    builtWith: ['React', 'Next.js', 'Three.js', 'SpaceTrack'],
    links: [
      { name: 'Website', url: 'https://satview.damianponce.com/' },
      { name: 'GitHub', url: 'https://github.com/damiponce/satellite-viewer' },
    ],
  },
  {
    _key: 'weather-station',
    year: '2023',
    project: {
      es: 'Estación meteorológica (WIP)',
      en: 'Weather Station (WIP)',
    },
    builtWith: ['ESP-IDF', 'Grafana', 'InfluxDB', 'MQTT'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/weather-station-esp32',
      },
    ],
    // links: [
    //   {
    //     name: '',
    //     url: '',
    //   },
    // ],
  },
  {
    _key: 'dreambuilders',
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
    _key: 'botaaguas',
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
    _key: 'minesweeper',
    year: '2023',
    project: { es: 'Buscaminas', en: 'Minesweeper' },
    builtWith: ['React', 'Next.js'],
    links: [
      {
        name: 'Website',
        url: 'https://minesweeper.damianponce.com/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/minesweeper',
      },
    ],
  },
  {
    _key: '3d-noise',
    year: '2022',
    project: { es: 'Ruido 3D', en: '3D Noise' },
    madeAt: '',
    builtWith: ['React', 'Gatsby', 'three.js'],
    links: [
      {
        name: 'Website',
        url: 'https://3dnoise.damianponce.com/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/3d-noise',
      },
    ],
  },
  {
    _key: 'wpp-stats',
    year: '2022',
    project: { es: 'Estad\u00edsticas de WhatsApp', en: 'WhatsApp Stats' },
    madeAt: '',
    builtWith: ['React', 'Next.js', 'Python', 'Pandas'],
    links: [
      {
        name: 'Website',
        url: 'https://chatstats.damianponce.com/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/chat-analyser',
      },
    ],
  },
  {
    _key: 'portfolio-v2',
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
    _key: 'weather-web',
    year: '2022',
    project: { es: 'Aplicación del clima', en: 'Weather App' },
    builtWith: ['React', 'Next.js'],
    links: [
      { name: 'Website', url: 'https://weather.damianponce.com' },
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/weather-web',
      },
    ],
  },
  {
    _key: 'portfolio-v1',
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
    _key: 'notee',
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
    _key: 'penworld',
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
    _key: 'simple-calc',
    year: '2019',
    project: { es: 'Calculadora simple', en: 'Simple calculator' },
    madeAt: 'INAC - CIATA',
    builtWith: ['Visual Basic'],
  },
  {
    _key: 'minesweeper-old',
    year: '2019',
    project: { es: 'Buscaminas (viejo)', en: 'Minesweeper (old)' },
    madeAt: 'INAC - CIATA',
    builtWith: ['C'],
  },
  {
    _key: 'pendulum',
    year: '2019',
    project: { es: 'Péndulo doble', en: 'Double pendulum' },
    builtWith: ['Processing'],
  },
  {
    _key: 'book-sorter',
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
    _key: 'morse-code',
    year: '2018',
    project: { es: 'Generador de código morse', en: 'Morse code generator' },
    madeAt: 'INAC - CIATA',
    builtWith: ['Processing', 'Arduino'],
  },
];
