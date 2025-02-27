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
  es: CardText;
  en: CardText;
};

const CODING: Project[] = [
  {
    new: true,
    _key: 'satview',
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
        'Diseñada desde cero, esta aplicación web te permite ver y rastrear satélites terrestres en tiempo real. Utiliza la API de Space-Track para obtener los últimos datos de satélites y three.js para renderizar la escena 3D.',
    },
    en: {
      date: '2024',
      title: 'SatView - Satellite Visualizer',
      description:
        'Designed from the ground up, this web app allows you to view and track Earth satellites in real-time. It uses the Space-Track API to get the latest satellite data and three.js to render the 3D scene.',
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
