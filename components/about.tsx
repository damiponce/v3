import NextLink from "next/link";

type Props = { lang: string };

const Link = ({ url, children }: { url: string; children: string }) => (
  <NextLink
    className="font-medium text-neutral-200 hover:text-highlight focus-visible:text-highlight"
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </NextLink>
);

const About = ({ lang }: Props) => {
  return {
    es: (
      <p className="mb-4">
        Como programador, mi herramienta de elección es el{" "}
        <b>desarrollo frontend</b>. Disfruto el desafío de transformar ideas en
        interfaces interactivas, funcionales y visualmente atractivas,
        apoyándome en mi afinidad por el buen diseño y la UX.
        <br />
        <br />
        Si bien mi fortaleza actual reside en el <i>client-side</i>, estoy en un
        proceso de crecimiento activo, adentrándome con mucho interés en el
        <b>desarrollo backend</b>. Mi objetivo es dominar el ciclo completo del
        desarrollo de aplicaciones.
        <br />
        <br />
        Busco oportunidades que me permitan aplicar mi sólida experiencia en
        frontend mientras desarrollo y pongo en práctica mis crecientes
        habilidades en backend.
      </p>
    ),
    en: (
      <p className="mb-4">
        As a programmer, my tool of choice is <b>frontend development</b>. I
        enjoy the challenge of transforming ideas into interactive, functional,
        and visually appealing interfaces, drawing on my affinity for good
        design and UX.
        <br />
        <br />
        While my current strength lies on the <i>client-side</i>, I am in a
        process of active growth, diving into <b>backend development</b> with
        great interest. My goal is to master the complete application
        development lifecycle.
        <br />
        <br />I am seeking opportunities that allow me to apply my solid
        frontend experience while developing and putting into practice my
        growing backend skills.
      </p>
    ),
  }[lang];
};

export default About;
