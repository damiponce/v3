import type { ReactNode } from "react";

// Which angle the home page leads with. Change this one value to switch the
// subtitle under the name and the About section together.
export const ACTIVE_POSITIONING: PositioningKey = "frontend";

type Copy = { subtitle: string; about: ReactNode[] };
type Positioning = { es: Copy; en: Copy };
export type PositioningKey = "frontend" | "engineer-designer" | "shipper";

export const POSITIONING: Record<PositioningKey, Positioning> = {
  // Design-minded frontend developer growing into full-stack.
  frontend: {
    en: {
      subtitle: "Frontend developer with a designer's eye",
      about: [
        <>
          I'm a <b>frontend developer</b>. I like turning ideas into interfaces
          that work well and look right, and my graphic design work shapes how
          I approach UX.
        </>,
        <>
          I currently lead the front-end of a battery system simulation suite
          at GMF - LAyF (UTN FRH), and I build the event management system for
          Encuentro Tanguero del Interior, used by more than 1000 people every
          month.
        </>,
        <>
          I'm looking for a developer role where frontend is the core and
          there's room to keep growing on the <b>backend</b>.
        </>,
      ],
    },
    es: {
      subtitle: "Desarrollador frontend con mirada de diseñador",
      about: [
        <>
          Soy <b>desarrollador frontend</b>. Me gusta transformar ideas en
          interfaces que funcionen bien y se vean bien, y mi trabajo en diseño
          gráfico influye en cómo encaro la UX.
        </>,
        <>
          Hoy lidero el desarrollo front-end de una suite de simulación de
          sistemas de baterías en GMF - LAyF (UTN FRH), y desarrollo el sistema
          de gestión de eventos del Encuentro Tanguero del Interior, con más de
          1000 usuarios por mes.
        </>,
        <>
          Busco un puesto como desarrollador donde el frontend sea el centro y
          haya lugar para seguir creciendo en <b>backend</b>.
        </>,
      ],
    },
  },

  // Engineering background plus a real design practice.
  "engineer-designer": {
    en: {
      subtitle: "Developer with an engineering background and a design practice",
      about: [
        <>
          I came to software through hardware. I trained as an{" "}
          <b>avionics technician</b>, studied <b>electronic engineering</b> at
          UTN FRH, and I'm now studying Computer Science at UBA.
        </>,
        <>
          I also do <b>graphic design</b>: logos, ads and print work. So when I
          build an interface, I'm responsible for how it works and for how it
          looks.
        </>,
        <>
          Today I lead the front-end of a battery system simulation suite at
          GMF - LAyF and build the event management system for Encuentro
          Tanguero del Interior. I'm looking for a developer role where both
          sides of that background are useful.
        </>,
      ],
    },
    es: {
      subtitle: "Desarrollador con formación en ingeniería y práctica en diseño",
      about: [
        <>
          Llegué al software desde el hardware. Me formé como{" "}
          <b>técnico aviónico</b>, estudié <b>ingeniería electrónica</b> en la
          UTN FRH y hoy estudio Ciencias de la Computación en la UBA.
        </>,
        <>
          También hago <b>diseño gráfico</b>: logos, publicidades y piezas
          impresas. Cuando construyo una interfaz, me ocupo de cómo funciona y
          de cómo se ve.
        </>,
        <>
          Hoy lidero el front-end de una suite de simulación de sistemas de
          baterías en GMF - LAyF y desarrollo el sistema de gestión de eventos
          del Encuentro Tanguero del Interior. Busco un puesto como
          desarrollador donde las dos partes de esa formación sumen.
        </>,
      ],
    },
  },

  // Track record of live products with real users.
  shipper: {
    en: {
      subtitle: "Web developer. Live products, real users.",
      about: [
        <>
          Most of what I build is live and in use. The{" "}
          <b>event management system</b> I built for Encuentro Tanguero del
          Interior serves more than 1000 users every month, and I lead the
          front-end of a battery system simulation suite at GMF - LAyF (UTN
          FRH).
        </>,
        <>
          Since 2022 I've also built and shipped websites for{" "}
          <b>freelance clients</b> in Argentina and Chile.
        </>,
        <>
          My strongest side is frontend, and the full-stack work above is
          where I'm growing into backend. I'm looking for a developer role on
          a team that ships.
        </>,
      ],
    },
    es: {
      subtitle: "Desarrollador web. Productos en vivo, usuarios reales.",
      about: [
        <>
          Casi todo lo que construyo está en producción. El{" "}
          <b>sistema de gestión de eventos</b> que desarrollé para el Encuentro
          Tanguero del Interior tiene más de 1000 usuarios por mes, y lidero el
          front-end de una suite de simulación de sistemas de baterías en GMF -
          LAyF (UTN FRH).
        </>,
        <>
          Desde 2022 también desarrollo y publico sitios web para{" "}
          <b>clientes freelance</b> de Argentina y Chile.
        </>,
        <>
          Mi fuerte es el frontend, y el trabajo full-stack de arriba es donde
          estoy creciendo en backend. Busco un puesto como desarrollador en un
          equipo que lance producto.
        </>,
      ],
    },
  },
};

export const getPositioning = (lang: string): Copy =>
  POSITIONING[ACTIVE_POSITIONING][lang === "es" ? "es" : "en"];
