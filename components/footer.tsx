import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    // <footer className="bg-neutral-50 border-t border-neutral-200">
    //   <Container>
    //     <div className="py-28 flex flex-col lg:flex-row items-center">
    //       <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
    //         Statically Generated with Next.js.
    //       </h3>
    //       <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
    //         <a
    //           href="https://nextjs.org/docs/basic-features/pages"
    //           className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
    //         >
    //           Read Documentation
    //         </a>
    //         <a
    //           href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
    //           className="mx-3 font-bold hover:underline"
    //         >
    //           View on GitHub
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
    <footer className='max-w-md pb-16 text-sm text-neutral-500 sm:pb-0'>
      <p>
        Loosely designed in{' '}
        <Link
          href='https://www.figma.com/'
          className='font-medium text-neutral-400 hover:text-highlight focus-visible:text-highlight'
          target='_blank'
          rel='noreferrer'
        >
          Figma
        </Link>{' '}
        and coded in{' '}
        <Link
          href='https://code.visualstudio.com/'
          className='font-medium text-neutral-400 hover:text-highlight focus-visible:text-highlight'
          target='_blank'
          rel='noreferrer'
        >
          Visual Studio Code
        </Link>{' '}
        by yours truly. Built with{' '}
        <Link
          href='https://nextjs.org/'
          className='font-medium text-neutral-400 hover:text-highlight focus-visible:text-highlight'
          target='_blank'
          rel='noreferrer'
        >
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href='https://tailwindcss.com/'
          className='font-medium text-neutral-400 hover:text-highlight focus-visible:text-highlight'
          target='_blank'
          rel='noreferrer'
        >
          Tailwind CSS
        </Link>
        , deployed with{' '}
        <Link
          href='https://vercel.com/'
          className='font-medium text-neutral-400 hover:text-highlight focus-visible:text-highlight'
          target='_blank'
          rel='noreferrer'
        >
          Vercel
        </Link>
        . All text is set in the{' '}
        <Link
          href='https://rsms.me/inter/'
          className='font-medium text-neutral-400 hover:text-highlight focus-visible:text-highlight'
          target='_blank'
          rel='noreferrer'
        >
          Inter
        </Link>{' '}
        typeface.
      </p>
    </footer>
  );
};

export default Footer;
