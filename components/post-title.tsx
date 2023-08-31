import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-neutral-200 leading-tight md:leading-none mb-3 mt-4 md:mt-0 text-center md:text-left'>
      {children}
    </h1>
  );
};

export default PostTitle;
