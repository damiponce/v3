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
    en: (
      <p className='mb-4'>
        Another temp text and a <Link url='https://www.google.com/'>link</Link>{' '}
        and another <Link url='https://x.com/'>link</Link>.
      </p>
    ),
    es: (
      <p className='mb-4'>
        Otro texto temporal y un <Link url='https://www.google.com/'>link</Link>{' '}
        y otro <Link url='https://x.com/'>link</Link>.
      </p>
    ),
  }[lang];
};

export default About;
