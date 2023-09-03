import NextLink from 'next/link';

type Props = { lang: string };

const Link = ({ url, children }: { url: string; children: string }) => (
  <NextLink
    className='font-medium text-neutral-200 hover:text-highlight focus-visible:text-highlight'
    href={url}
    target='_blank'
    rel='noreferrer'
  >
    {children}
  </NextLink>
);

const About = ({ lang }: Props) => {
  return {
    es: (
      <p className='mb-4'>
        Siempre estuve interesado en la programación como mi principal manera de
        ser creativo, arreglando problemas de alguna manera. También disfruto el
        diseño gráfico casualmente, ya sea para un diseño de un poster random o
        hasta buena UX.
        <br />
        <br />
        Otro interes que tengo es la electrónica, probablemente por haber
        estudiado en una escuela secundaria “técnica”. También me gusta meterme
        en proyectos de electrónica a veces. Cuando no estoy con mis proyectos,
        disfruto algunos videojuegos, escuchar música y programar por hobby.
        <br />
        <br />
        Estoy entusiasmado de ver a donde me lleva mi carrera, y siempre estoy
        en búsqueda de oportunidades para aprender y crecer.
      </p>
    ),
    en: (
      <p className='mb-4'>
        I’ve always been interested in programming as my main way to be
        creative, solving problems one way or another. I also enjoy graphic
        design from time to time, be it for random poster design or even for
        good UX. <br />
        <br />
        Another interest of mine is electronics, probably from having gone to a
        “technical” high-school. I also like tinkering with electronics stuff
        ocasionally. When I’m not working on my projects, I enjoy gaming, music,
        and even programming for fun.
        <br />
        <br />I am excited to see where my career takes me in the future, and I
        am always looking for new opportunities to learn and grow.
      </p>
    ),
  }[lang];
};

export default About;
