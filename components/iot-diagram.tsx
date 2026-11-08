type Props = {
  lang: string;
  // 'stack': tall column for the ImgCard thumbnail (about 100px wide).
  // 'tile': 3:2 loop for GridCard and BigImgCard image slots.
  layout?: 'stack' | 'tile';
};

const LABEL = {
  en: 'Architecture: an ESP32 device gets its Wi-Fi credentials over SoftAP provisioning, reports to a Firebase Cloud Functions backend, and the iOS and Android app reads from it.',
  es: 'Arquitectura: un dispositivo ESP32 recibe sus credenciales de Wi-Fi por SoftAP, reporta a un backend en Firebase Cloud Functions, y la app de iOS y Android lee desde ahí.',
};

const NODE_H = 22;
const STROKE = {
  fill: 'none',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'stroke-neutral-500',
};

type Node = { name: string; x: number; y: number; w: number };

const Box = ({ name, x, y, w }: Node) => (
  <g>
    <rect x={x} y={y} width={w} height={NODE_H} rx={5} className='fill-neutral-400/10' />
    <text
      x={x + w / 2}
      y={y + 15}
      textAnchor='middle'
      fontSize={12}
      className='fill-neutral-200 font-medium'
    >
      {name}
    </text>
  </g>
);

// Arrow from (x1,y1) to (x2,y2) along one axis, head at the end.
const Arrow = ({ x1, y1, x2, y2 }: Record<'x1' | 'y1' | 'x2' | 'y2', number>) => {
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
  const nodes: Node[] = ['ESP32', 'SoftAP', 'Firebase', 'App'].map((name, i) => ({
    name,
    x: 6,
    y: 6 + i * step,
    w,
  }));
  const arrows = nodes.slice(0, -1).map((n) => ({
    x1: 56,
    y1: n.y + NODE_H + 2,
    x2: 56,
    y2: n.y + step - 2,
  }));
  return { viewBox: '0 0 112 136', nodes, arrows };
})();

// ESP32 -> SoftAP
//            |
// App  <- Firebase
const TILE = (() => {
  const w = 60;
  const [l, r] = [22, 98];
  const [t, b] = [33, 65];
  const nodes: Node[] = [
    { name: 'ESP32', x: l, y: t, w },
    { name: 'SoftAP', x: r, y: t, w },
    { name: 'Firebase', x: r, y: b, w },
    { name: 'App', x: l, y: b, w },
  ];
  const arrows = [
    { x1: l + w + 3, y1: t + 11, x2: r - 3, y2: t + 11 },
    { x1: r + w / 2, y1: t + NODE_H + 2, x2: r + w / 2, y2: b - 2 },
    { x1: r - 3, y1: b + 11, x2: l + w + 3, y2: b + 11 },
  ];
  return { viewBox: '0 0 180 120', nodes, arrows };
})();

const IotDiagram = ({ lang, layout = 'stack' }: Props) => {
  const { viewBox, nodes, arrows } = layout === 'tile' ? TILE : STACK;
  return (
    <svg
      viewBox={viewBox}
      className='block w-full h-auto bg-neutral-900'
      role='img'
      aria-label={LABEL[lang === 'es' ? 'es' : 'en']}
    >
      {nodes.map((n) => (
        <Box key={n.name} {...n} />
      ))}
      {arrows.map((a, i) => (
        <Arrow key={i} {...a} />
      ))}
    </svg>
  );
};

export default IotDiagram;
