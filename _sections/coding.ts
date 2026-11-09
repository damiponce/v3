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
  // Important projects render a step larger on the home page.
  important?: boolean;
  // Listed only on the /projects page, not on the homepage.
  archived?: boolean;
  es: CardText;
  en: CardText;
};

const CODING: Project[] = [
  {
    _key: 'musictl',
    important: true,
    new: true,
    img: '', // TODO: Music Timeline screenshot (then drop the diagram)
    diagram: 'musictl',
    url: 'https://musictl.damianponce.com',
    // TODO: add { name: 'GitHub', url: '...' } if the repo is public
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Zustand',
      'd3',
      'Motion',
      'IndexedDB',
    ],
    es: {
      date: '',
      title: 'Music Timeline',
      description:
        'Línea de tiempo interactiva de discos. Buscás artistas y sus discos de estudio se ubican por fecha de lanzamiento. Se puede comparar por artista, país o género, y cada vista es un link compartible. Corre 100% en el navegador, sin backend: cola de requests con rate limiting a MusicBrainz, Wikipedia/Wikidata y Cover Art Archive, caché en IndexedDB, y scroll y zoom propios para mouse, trackpad y touch.',
    },
    en: {
      date: '',
      title: 'Music Timeline',
      description:
        'Interactive timeline of music albums. Search for artists and their studio albums are laid out by release date. You can compare by artist, country or genre, and every view is a shareable link. It runs entirely in the browser with no backend: it uses a rate-limited request queue to MusicBrainz, Wikipedia/Wikidata and Cover Art Archive, caches results in IndexedDB, and has custom scroll and zoom for mouse, trackpad and touch.',
    },
  },  {
    _key: 'satview',
    important: true,
    img: '/assets/images/satview-banner.webp',
    url: 'https://satview.damianponce.com/',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/satellite-viewer',
      },
    ],
    technologies: ['React', 'Next.js', 'Three.js', 'SpaceTrack'],
    es: {
      date: '2024',
      title: 'SatView - Visualizador de satélites',
      description:
        'Desarrollé un visualizador 3D para explorar y seguir satélites en órbita terrestre. Integré datos orbitales de la API de Space-Track y rendericé la escena con Three.js.',
    },
    en: {
      date: '2024',
      title: 'SatView - Satellite Visualizer',
      description:
        'I built a 3D viewer for exploring and tracking satellites in Earth orbit. I integrated orbital data from the Space-Track API and rendered the scene with Three.js.',
    },
  },
  {
    _key: 'wpp-stats',
    img: '/assets/images/analyser-banner.webp',
    url: 'https://chatstats.damianponce.com/',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/chat-analyser',
      },
    ],
    technologies: ['React', 'Next.js', 'Python', 'Pandas'],
    es: {
      date: '2022',
      title: 'Estad\u00edsticas de WhatsApp',
      description:
        'Una aplicaci\u00f3n web front-end que calcula y muestra varias estad\u00edsticas de un historial de chat de WhatsApp importado. Dise\u00f1ado pensando en la confianza del usuario, realiza todo el procesamiento en el navegador.',
    },
    en: {
      date: '2022',
      title: 'WhatsApp Stats',
      description:
        'A purely front-end web app that calculates and displays various statistics from an imported WhatsApp chat history. Designed with user trust in mind, it does all of the processing in the browser.',
    },
  },

  {
    _key: 'minesweeper',
    img: '/assets/images/minesweeper-banner.webp',
    url: 'https://minesweeper.damianponce.com/',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/minesweeper',
      },
    ],
    technologies: ['React', 'Next.js'],
    es: {
      date: '2023',
      title: 'Buscaminas',
      description:
        'Una versión online del popular juego, con tableros verdaderamente aleatorios y jugables.',
    },
    en: {
      date: '2023',
      title: 'Minesweeper',
      description:
        'An online version of the popular game, with truly random and playable boards.',
    },
  },
  {
    _key: '3d-noise',
    archived: true,
    img: '/assets/images/3d-noise-banner.webp',
    url: 'https://3dnoise.damianponce.com/',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/3d-noise',
      },
    ],
    technologies: ['React', 'Gatsby', 'three.js'],
    es: {
      date: '2022',
      title: 'Ruido 3D',
      description:
        'Una demostraci\u00f3n gr\u00e1fica de ruidos multidimensionales de una manera elegante.',
    },
    en: {
      date: '2022',
      title: '3D Noise',
      description: 'A showcase of gradient noise shown in a pretty way.',
    },
  },
  // {
  //   _key: 'portfolio-v1',
  //   img: '',
  //   url: 'https://v1.damianponce.com/',
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/damiponce/v1',
  //     },
  //   ],
  //   technologies: ['React', 'Next.js'],
  //   es: {
  //     date: '2021',
  //     title: 'Portfolio v1',
  //     description:
  //       'Mi primer intento de hacer un sitio web personal para mostrar mis capacidades y habilidades.',
  //   },
  //   en: {
  //     date: '2021',
  //     title: 'Portfolio v1',
  //     description:
  //       'My first try at making a personal website to show off my capabilities and skills.',
  //   },
  // },
  // {
  //   _key: 'portfolio-v2',
  //   img: '',
  //   url: 'https://v2.damianponce.com/',
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: 'https://github.com/damiponce/v2',
  //     },
  //   ],
  //   technologies: ['React', 'Next.js'],
  //   es: {
  //     date: '2022',
  //     title: 'Portfolio v2',
  //     description: '',
  //   },
  //   en: {
  //     date: '2022',
  //     title: 'Portfolio v2',
  //     description: '',
  //   },
  // },
  {
    _key: 'weather-web',
    archived: true,
    img: '/assets/images/weather-web-banner.webp',
    url: 'https://weather.damianponce.com/',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damiponce/weather-web',
      },
    ],
    technologies: ['React', 'Next.js'],
    es: {
      date: '',
      title: 'Aplicación del clima',
      description:
        'Un sitio web que muestra el clima con datos de una variedad de APIs meteorológicas que el usuario puede seleccionar.',
    },
    en: {
      date: '',
      title: 'Weather App',
      description:
        'A website that displays the weather with data from a variety of weather APIs the user can select.',
    },
  },
];

export default CODING;
