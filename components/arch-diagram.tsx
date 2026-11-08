// Small architecture diagrams that stand in for a project screenshot.
// Each one is a four-step flow; the nodes and the spoken label come only
// from what the project's own description says.

export type DiagramKey = 'iot' | 'eti' | 'musictl';

type Props = {
  name: DiagramKey;
  lang: string;
  // 'stack': tall column for the ImgCard thumbnail (about 100px wide).
  // 'tile': 3:2 loop for GridCard and BigImgCard image slots.
  layout?: 'stack' | 'tile';
};

type Diagram = {
  nodes: [string, string, string, string];
  label: { en: string; es: string };
};

const DIAGRAMS: Record<DiagramKey, Diagram> = {
  iot: {
    nodes: ['ESP32', 'SoftAP', 'Firebase', 'App'],
    label: {
      en: 'Architecture: an ESP32 device gets its Wi-Fi credentials over SoftAP provisioning, reports to a Firebase Cloud Functions backend, and the iOS and Android app reads from it.',
      es: 'Arquitectura: un dispositivo ESP32 recibe sus credenciales de Wi-Fi por SoftAP, reporta a un backend en Firebase Cloud Functions, y la app de iOS y Android lee desde ahí.',
    },
  },
  eti: {
    nodes: ['Next.js', 'Auth', 'Claims', 'Roles'],
    label: {
      en: 'Architecture: the Next.js front end signs users in with Firebase Auth, and custom claims on each account set the role that controls who can access what.',
      es: 'Arquitectura: el front-end en Next.js inicia sesión con Firebase Auth, y los custom claims de cada cuenta definen el rol que controla quién puede acceder a qué.',
    },
  },
  musictl: {
    nodes: ['APIs', 'Queue', 'IndexedDB', 'd3'],
    label: {
      en: 'Architecture: album data from MusicBrainz, Wikipedia/Wikidata and Cover Art Archive goes through a rate-limited request queue, is cached in IndexedDB, and is drawn as a d3 timeline, all in the browser.',
      es: 'Arquitectura: los datos de MusicBrainz, Wikipedia/Wikidata y Cover Art Archive pasan por una cola de requests con rate limiting, se guardan en IndexedDB y se dibujan como línea de tiempo con d3, todo en el navegador.',
    },
  },
};

const NODE_H = 22;
const STROKE = {
  fill: 'none',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'stroke-neutral-500',
};

type Box = { x: number; y: number; w: number };
type Line = Record<'x1' | 'y1' | 'x2' | 'y2', number>;

const Node = ({ name, x, y, w }: Box & { name: string }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={NODE_H}
      rx={5}
      className='fill-neutral-400/10'
    />
    <text
      x={x + w / 2}
      y={y + 15}
      textAnchor='middle'
      fontSize={11.5}
      className='fill-neutral-200 font-medium'
    >
      {name}
    </text>
  </g>
);

// Arrow from (x1,y1) to (x2,y2) along one axis, head at the end.
const Arrow = ({ x1, y1, x2, y2 }: Line) => {
  const dx = Math.sign(x2 - x1);
  const dy = Math.sign(y2 - y1);
  const h = 3.5;
  const head = dx
    ? `M${x2 - dx * h} ${y2 - h} L${x2} ${y2} L${x2 - dx * h} ${y2 + h}`
    : `M${x2 - h} ${y2 - dy * h} L${x2} ${y2} L${x2 + h} ${y2 - dy * h}`;
  return <path d={`M${x1} ${y1} L${x2} ${y2} ${head}`} {...STROKE} />;
};

const STACK = (() => {
  const w = 100;
  const step = 34;
  const boxes: Box[] = [0, 1, 2, 3].map((i) => ({ x: 6, y: 6 + i * step, w }));
  const arrows: Line[] = boxes.slice(0, -1).map((b) => ({
    x1: 56,
    y1: b.y + NODE_H + 2,
    x2: 56,
    y2: b.y + step - 2,
  }));
  return { viewBox: '0 0 112 136', boxes, arrows };
})();

// 1 -> 2
//      |
// 4 <- 3
const TILE = (() => {
  const w = 66;
  const [l, r] = [16, 98];
  const [t, b] = [33, 65];
  const boxes: Box[] = [
    { x: l, y: t, w },
    { x: r, y: t, w },
    { x: r, y: b, w },
    { x: l, y: b, w },
  ];
  const arrows: Line[] = [
    { x1: l + w + 3, y1: t + 11, x2: r - 3, y2: t + 11 },
    { x1: r + w / 2, y1: t + NODE_H + 2, x2: r + w / 2, y2: b - 2 },
    { x1: r - 3, y1: b + 11, x2: l + w + 3, y2: b + 11 },
  ];
  return { viewBox: '0 0 180 120', boxes, arrows };
})();

const ArchDiagram = ({ name, lang, layout = 'stack' }: Props) => {
  const { nodes, label } = DIAGRAMS[name];
  const { viewBox, boxes, arrows } = layout === 'tile' ? TILE : STACK;
  return (
    <svg
      viewBox={viewBox}
      className='block w-full h-auto bg-neutral-900'
      role='img'
      aria-label={label[lang === 'es' ? 'es' : 'en']}
    >
      {boxes.map((b, i) => (
        <Node key={nodes[i]} name={nodes[i]} {...b} />
      ))}
      {arrows.map((a, i) => (
        <Arrow key={i} {...a} />
      ))}
    </svg>
  );
};

export default ArchDiagram;
