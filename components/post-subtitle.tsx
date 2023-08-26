import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostSubtitle = ({ children }: Props) => {
  return (
    <h2 className='text-xl md:text-2xl lg:text-2xl font-normal tracking-tight leading-tight md:leading-none mb-8 text-center md:text-left text-neutral-500'>
      {children}
    </h2>
  );
};

export default PostSubtitle;
