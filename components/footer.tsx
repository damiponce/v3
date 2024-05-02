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
      <footer className='max-w-md pb-16 text-sm text-neutral-500 sm:pb-0'>
        <p>
          Diseñado por{' '}
          <Link url='https://brittanychiang.com/'>Brittany Chiang</Link> y
          programado por mí en{' '}
          <Link url='https://code.visualstudio.com/'>Visual Studio Code</Link>.
          Hecho con <Link url='https://nextjs.org/'>Next.js</Link> y{' '}
          <Link url='https://tailwindcss.com/'>Tailwind CSS</Link>. Desplegado
          en <Link url='https://vercel.com/'>Vercel</Link>. Toda la tipografía
          usa la tipografía <Link url='https://vercel.com/font'>Geist</Link>.
        </p>
      </footer>
    ),
    en: (
      <footer className='max-w-md pb-16 text-sm text-neutral-500 sm:pb-0'>
        <p>
          Designed by{' '}
          <Link url='https://brittanychiang.com/'>Brittany Chiang</Link> and
          coded in{' '}
          <Link url='https://code.visualstudio.com/'>Visual Studio Code</Link>{' '}
          by me. Built with <Link url='https://nextjs.org/'>Next.js</Link> and{' '}
          <Link url='https://tailwindcss.com/'>Tailwind CSS</Link>, deployed in{' '}
          <Link url='https://vercel.com/'>Vercel</Link>. All text uses the{' '}
          <Link url='https://vercel.com/font/'>Geist</Link> font.
        </p>
      </footer>
    ),
  }[lang];
};

export default Footer;
