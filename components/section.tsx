import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  id: string;
  name: string;
  className?: string;
  darker?: boolean;
  index?: number;
};

function inProps(n = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.18, delay: 0.3 * n },
  };
}
const Section = ({ children, id, name, className, darker, index }: Props) => {
  return (
    <motion.section
      id={id}
      data-heading
      className={cn(
        'pb-16 scroll-mt-16 md:pb-24 lg:pb-36 lg:scroll-mt-24 relative',
        false ? 'border-dashed border-red-600 border-2' : '',
        // darker &&
        //   'mlg:bg-[#121212] mmd:px-6 mmd:-mx-6 mlg:px-12 mlg:-mx-12 mlg:pb-6 mlg:mb-10',
        className,
      )}
      {...inProps(index)}
    >
      {darker && (
        <div className='absolute inset-0 mlg:bg-[#050505] mix-blend-difference mmd:px-6 mmd:-mx-6 mlg:px-12 mlg:-mx-12 mlg:pb-6-mlg:mb-10 _[mask-image:linear-gradient(to_bottom,black_calc(100%-32px),transparent_100%)] pointer-events-none' />
      )}
      <div
        className={cn(
          'sticky top-0 z-20 -mx-6 mb-4 w-[calc(100vw_-_3rem))] bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ',
          // 'lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'
          'lg:bg-transparent lg:backdrop-blur-none lg:relative lg:top-auto lg:w-full',
          darker && 'mlg:bg-[#121212]/75',
        )}
      >
        <h2 className='text-sm font-bold uppercase tracking-widest text-neutral-200 lg:sr-only-'>
          {name}
        </h2>
      </div>
      {/* <h3 className='p-4 -m-4 text-xl'>{name}</h3> */}
      {children}
    </motion.section>
  );
};

export default Section;
