import FREELANCE from './freelance';
import CODING from './coding';
import ENGINEERING from './engineering';
import EXPERIENCE from './experience';
import EDUCATION from './education';
import FEATURED from './featured';
import { allProjects } from './allProjects';

// Content for the datasheet home page. Facts come from the other _sections
// files; this file only adds the datasheet's own framing (features list,
// stack layers) in both languages.

type L = { en: string; es: string };
export const pickL = (lang: string) => (l: L) => (lang === 'es' ? l.es : l.en);

export type Layer = 'ui' | 'backend' | 'cloud' | 'device';

export const LAYERS: { id: Layer; name: L; parts: string; usedIn: L }[] = [
  {
    id: 'ui',
    name: { en: 'UI', es: 'Interfaz' },
    parts: 'Next.js, React, React Native (Expo)',
    usedIn: { en: 'ETI, Music Timeline, IoT app', es: 'ETI, Music Timeline, app IoT' },
  },
  {
    id: 'backend',
    name: { en: 'Backend', es: 'Backend' },
    parts: 'Firebase, Auth custom claims',
    usedIn: { en: 'ETI, IoT app', es: 'ETI, app IoT' },
  },
  {
    id: 'cloud',
    name: { en: 'Cloud functions', es: 'Cloud functions' },
    parts: 'Firebase Cloud Functions',
    usedIn: { en: 'IoT app', es: 'App IoT' },
  },
  {
    id: 'device',
    name: { en: 'Device', es: 'Dispositivo' },
    parts: 'ESP32, C/C++',
    usedIn: { en: 'IoT grill monitor, coffee scale', es: 'Monitor de parrilla IoT, balanza para café' },
  },
];

// Which layers each featured project uses, for the block diagram's
// cross-reference highlight.
export const FEATURED_LAYERS: Record<string, Layer[]> = {
  eti: ['ui', 'backend'],
  'iot-grill': ['ui', 'backend', 'cloud', 'device'],
  musictl: ['ui'],
};

export const FEATURES: L[] = [
  { en: '4+ years of paid client work', es: 'Más de 4 años de trabajo pago para clientes' },
  { en: 'Web and mobile products, end to end', es: 'Productos web y mobile, de punta a punta' },
  { en: 'UI, backend and cloud functions', es: 'Interfaz, backend y cloud functions' },
  { en: 'ESP32 devices, Wi-Fi set up over SoftAP', es: 'Dispositivos ESP32, Wi-Fi configurado por SoftAP' },
  { en: 'iOS and Android with Expo / React Native', es: 'iOS y Android con Expo / React Native' },
  { en: 'Trained as an avionics technician', es: 'Formado como técnico aviónico' },
  { en: 'Works in Spanish and English (C2)', es: 'Trabaja en español e inglés (C2)' },
];

export const APPLICATIONS: L[] = [
  { en: 'Event platform with 2,000+ registered users', es: 'Plataforma de eventos con más de 2000 usuarios' },
  { en: 'Connected device plus companion app', es: 'Dispositivo conectado con su app' },
  { en: 'Data-heavy apps that run in the browser', es: 'Apps con muchos datos que corren en el navegador' },
  { en: 'Business websites in Argentina and Chile', es: 'Sitios para empresas de Argentina y Chile' },
];

export { FEATURED, EXPERIENCE, EDUCATION };

const yearOf = (key: string) => {
  const p = allProjects.find((x) => x._key === key);
  return p ? String(p.year) : '';
};

const featuredKeys = new Set(FEATURED.map((f) => f._key));

// Everything else that ships on the home page, as one table.
export function otherProjects(lang: string) {
  const lk = lang === 'es' ? 'es' : 'en';
  const type = {
    freelance: { en: 'Client website', es: 'Sitio de cliente' },
    coding: { en: 'Personal project', es: 'Proyecto personal' },
    engineering: { en: 'Hardware', es: 'Hardware' },
  };
  const rows = [
    ...FREELANCE.filter((p) => !featuredKeys.has(p._key)).map((p) => ({ p, k: 'freelance' as const })),
    ...CODING.filter((p) => !featuredKeys.has(p._key) && !p.archived).map((p) => ({ p, k: 'coding' as const })),
    ...ENGINEERING.filter((p) => !p.archived).map((p) => ({ p, k: 'engineering' as const })),
  ].map(({ p, k }) => ({
    key: p._key,
    title: p[lk].title,
    year: yearOf(p._key),
    type: type[k][lk],
    url: p.url || undefined,
    links: p.links,
  }));
  return rows.sort((a, b) => b.year.localeCompare(a.year));
}

// "Jun 2025 → present" reads "since Jun 2025"; "2021 → 2025" reads "2021 to 2025".
export function formatDate(date: string, lang: string) {
  const es = lang === 'es';
  const [from, to] = date.split('→').map((x) => x.trim());
  if (to === undefined) return from;
  if (!to || to === '...') return es ? `desde ${from}` : `since ${from}`;
  if (/^present(e)?$/i.test(to)) return `${es ? 'desde' : 'since'} ${from}`;
  return `${from} ${es ? 'a' : 'to'} ${to}`;
}
