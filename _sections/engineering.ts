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
        "key": "weather-station",
        "img": "",
        "url": "",
        "links": [
            {
                "name": "",
                "url": ""
            }
        ],
        "technologies": [
            ""
        ],
        "es": {
            "date": "2023",
            "title": "",
            "description": ""
        }, 
        "en": {
            "date": "2023",
            "title": "",
            "description": ""
        }
    }
];

export default ENGINEERING;