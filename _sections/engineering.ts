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

const ENGINEERING: Project[] = [
  {
    key: 'weather-station',
    img: '/assets/images/wip-banner.webp',
    url: '',
    technologies: ['ESP-IDF', 'Grafana', 'InfluxDB', 'MQTT'],
    es: {
      date: '2023',
      title: 'Estación meteorológica (WIP)',
      description: '',
    },
    en: {
      date: '2023',
      title: 'Weather Station (WIP)',
      description: '',
    },
  },
];

export default ENGINEERING;
