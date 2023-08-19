import { cn } from '../lib/utils';

type Props = {
  children?: React.ReactNode;
  id: string;
  name: string;
};

const Section = ({ children, id, name }: Props) => {
  return (
    <section
      id={id}
      data-heading
      className={cn(
        'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24',
        false ? 'border-dashed border-red-600 border-2' : '',
      )}
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-neutral-200 lg:sr-only'>
          {name}
        </h2>
      </div>
      {/* <h3 className='p-4 -m-4 text-xl'>{name}</h3> */}
      {children}
    </section>
  );
};

export default Section;
