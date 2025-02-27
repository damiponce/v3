import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface FlashyTagProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export default function FlashyTag({
  children,
  className,
  ...props
}: FlashyTagProps) {
  return (
    <div
      className={cn(
        // 'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-[#1a1a1a] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40 saturate-200 z-[50]',
        'relative px-2 py-[2px] rounded-full bg-[#601ba5] shadow-[inset_0_0_8px_0_#aa56ff] text-[0.7rem] font-semibold text-white z-[10]',
        className,
      )}
      {...props}
    >
      <div className='absolute inset-0 rounded-full shadow-[inset_0_0_8px_4px_#7F00FF77] z-[9] mix-blend-saturation animate-ping' />
      {children}
    </div>
  );
}
