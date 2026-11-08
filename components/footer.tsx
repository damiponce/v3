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

const Footer = ({ lang }: Props) => {
  return {
    es: (
      <footer className='max-w-md pb-16 text-sm text-neutral-400 sm:pb-0'>
        <p>
          Layout basado en el diseño de{' '}
          <Link url='https://brittanychiang.com/'>Brittany Chiang</Link>. Hecho
          con Next.js y Tailwind CSS, desplegado en Vercel.
        </p>
      </footer>
    ),
    en: (
      <footer className='max-w-md pb-16 text-sm text-neutral-400 sm:pb-0'>
        <p>
          Layout based on{' '}
          <Link url='https://brittanychiang.com/'>Brittany Chiang</Link>
          &apos;s design. Built with Next.js and Tailwind CSS, deployed on
          Vercel.
        </p>
      </footer>
    ),
  }[lang];
};

export default Footer;
