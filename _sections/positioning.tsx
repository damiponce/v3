import type { ReactNode } from "react";

// Which angle the home page leads with. Change this one value to switch the
// subtitle under the name and the About section together. Earlier variants
// (frontend, engineer-designer, shipper) are in git history at 27a37c9.
export const ACTIVE_POSITIONING: PositioningKey = "fullstack";

type Copy = { subtitle: string; about: ReactNode[] };
type Positioning = { es: Copy; en: Copy };
export type PositioningKey = "fullstack";

export const POSITIONING: Record<PositioningKey, Positioning> = {
  fullstack: {
    en: {
      subtitle: "Full-Stack Developer",
      about: [
        <>
          I'm a <b>full-stack developer</b> with 4+ years of paid client work.
          I ship web and mobile products end to end: the UI, the backend, the
          cloud functions, and sometimes the ESP32 device on the other side.
        </>,
        <>
          I trained as an <b>avionics technician</b> before moving into
          software, and I work in Spanish and English (C2).
        </>,
      ],
    },
    es: {
      subtitle: "Desarrollador Full-Stack",
      about: [
        <>
          Soy <b>desarrollador full-stack</b> con más de 4 años de trabajo pago
          para clientes. Hago productos web y mobile de punta a punta: la
          interfaz, el backend, las cloud functions y, a veces, el dispositivo
          ESP32 del otro lado.
        </>,
        <>
          Me formé como <b>técnico aviónico</b> antes de dedicarme al software,
          y trabajo en español e inglés (nivel C2).
        </>,
      ],
    },
  },
};

export const getPositioning = (lang: string): Copy =>
  POSITIONING[ACTIVE_POSITIONING][lang === "es" ? "es" : "en"];
