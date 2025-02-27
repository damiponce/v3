import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../lib/utils';
import FlashyTag from './flashy-tag';
import { AnimatedGradientText } from './magicui/animated-gradient-text';
import { motion } from 'framer-motion';

type Props = {
  itemKey: string;
  img: string;
  url: string;
  title: string;
  description?: string;
  links?: { name: string; url: string }[];
  technologies?: string[];
  isNew?: boolean;
};

const GridCard = ({
  itemKey,
  img,
  url,
  title,
  description,
  links,
  technologies,
  isNew,
}: Props) => {
  const isUrlLocal =
    url && !(url === '')
      ? !(url.startsWith('https://') || url.startsWith('http://'))
      : false;

  return (
    <li className='' key={itemKey}>
      <div className='group relative flex flex-col gap-2 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        {/* {isNew && (
          <FlashyTag className='absolute right-0 lg:-right-2 top-0'>
            NEW PROJECT
          </FlashyTag>
        )} */}

        <div
          className={cn(
            'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-3 lg:-inset-y-2.5 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(38,38,38,0.1)] lg:group-hover:drop-shadow-lg',
          )}
        ></div>
        <div className='z-10'>
          <h3>
            <Link
              className='inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-highlight focus-visible:text-highlight  group/link text-base'
              href={url}
              target={isUrlLocal ? null : '_blank'}
              rel={isUrlLocal ? null : 'noreferrer'}
              aria-label={title}
            >
              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
              {/* {isNew && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2.5, ease: 'anticipate' }}
                  className='absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl md:-inset-x-6 md:-inset-y-4 lg:block shadow-[0_0_8px_4px_#7F00FF,_inset_0_0_4px_2px_#7F00FF]'
                ></motion.span>
              )} */}
              <span className='inline-block'>
                {title}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </span>
            </Link>
          </h3>
          {/* {description && (
            <p className='mt-2 text-sm leading-normal'>{description}</p>
          )}
          {links && (
            <ul className='mt-2 flex flex-wrap' aria-label='Related links'>
              {links.map((item) => (
                <li className='mr-4'>
                  <Link
                    className='relative mt-2 inline-flex items-center text-sm font-medium text-neutral-300 hover:text-highlight focus-visible:text-highlight'
                    href={item.url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='mr-1 h-3 w-3'
                      aria-hidden='true'
                    >
                      <path d='M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z'></path>
                      <path d='M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z'></path>
                    </svg>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {technologies && (
            <ul
              className='mt-2 flex flex-wrap'
              // aria-label='Technologies used'
            >
              {technologies.map((item) => (
                <li className='mr-1.5 mt-2'>
                  <div className='flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 '>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          )} */}
        </div>
        <div
          className={cn(
            'w-full h-fit overflow-hidden object-contain',
            'rounded border-2 border-neutral-200/10 transition group-hover:border-neutral-200/30',
          )}
        >
          <Image
            src={img}
            width={200}
            height={150}
            loading='lazy'
            decoding='async'
            data-nimg='1'
            alt='' // !!!!!!!!
            className='w-full h-auto text-transparent object-cover aspect-[3/2] '
          />
        </div>
        {/* <img
          alt=''
          loading='lazy'
          width='200'
          height='48'
          decoding='async'
          data-nimg='1'
          className='rounded border-2 border-neutral-200/10 transition group-hover:border-neutral-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
          srcset='/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x'
          src='/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75'
          style={{ color: 'transparent' }}
        /> */}
      </div>
    </li>
  );
};

export default GridCard;
