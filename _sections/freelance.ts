type CardText = {
  date: string; // not used
  title: string;
  description?: string;
  technologies?: string[];
};

type Project = {
  key: string;
  img: string;
  url: string;
  links?: { name: string; url: string }[];
  technologies?: string[];
  es: CardText;
  en: CardText;
};

const FREELANCE: Project[] = [
  {
    key: 'dreambuilders',
    img: '/assets/images/dreambuilders-banner.webp',
    url: 'https://dreambuilders.cl',
    technologies: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'TypeScript'],
    es: {
      date: '',
      title: 'DreamBuilders',
      description:
        'DreamBuilders es una empresa especializada en la construcci\u00f3n de casas de madera. El sitio web fue creado para mostrar informaci\u00f3n sobre la empresa, demostrar sus capacidades y proyectos, y para que los clientes puedan contactarlos.',
    },
    en: {
      date: '',
      title: 'DreamBuilders',
      description:
        'DreamBuilders is a company specialized in the construction of wooden houses. The website was created to show information about the company, demonstrate its capabilities and projects, and for customers to contact them.',
    },
  },
  {
    key: 'botaaguas',
    img: '/assets/images/botaaguas-banner.webp',
    url: 'https://botaaguas.cl',
    technologies: ['React', 'Next.js', 'Vercel', 'Tailwind CSS', 'TypeScript'],
    es: {
      date: '',
      title: 'Botaaguas',
      description:
        'Botaaguas es una empresa que se dedica a la fabricaci\u00f3n y venta de bota aguas para camiones. El sitio web fue creado para mostrar informaci\u00f3n sobre los productos que venden, y para que los clientes puedan comprarlos.',
    },
    en: {
      date: '',
      title: 'Botaaguas',
      description:
        'Botaaguas is a company that is dedicated to the manufacture and sale of water boots for trucks. The website was created to show information about the products they sell, and for customers to buy them.',
    },
  },
];

export default FREELANCE;
