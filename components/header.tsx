import Link from 'next/link';
import { memo, useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import Contact from './contact';
import { TFunction } from 'i18next';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LangSwitcher from './lang-switcher';
import {
  motion,
  useAnimate,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import FlashyTag from './flashy-tag';

function inProps(n = 0) {
  return {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.18, delay: 0.04 * n },
  };
}

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});

  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      // console.warn(visibleHeadings);
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) =>
            // !!!!!!!!!!!!!!!!
            // @ts-ignore
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-5px 0px -20% 0px',
    });

    const headingElements = Array.from(
      document.querySelectorAll('section[data-heading]'),
    );
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

const ToCItem = ({
  id,
  name,
  activeId,
  order,
  indent = false,
  hasNew,
}: {
  id: string | string[];
  name: string;
  activeId: string;
  order: number;
  indent?: boolean;
  hasNew?: boolean;
}) => {
  let active = false;

  if (Array.isArray(id)) {
    active = id.includes(activeId);
  } else {
    active = id === activeId;
  }

  return (
    <motion.li
      className={cn(
        indent ? 'ml-5 peer' : '',
        Array.isArray(id)
          ? 'peer-hover:[&>a>span:first-child]:w-[5rem] peer-hover:[&>a>span:first-child]:bg-neutral-200 peer-hover:[&>a>span:last-child]:text-neutral-200 '
          : '',
      )}
      style={{ order }}
      {...inProps(order + 1)}
    >
      <Link
        className={cn('group flex items-center py-3 h-[40px] relative')}
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(`#${id}`).scrollIntoView({
            behavior: 'smooth',
          });
        }}
      >
        <span
          data-active={active ? 'true' : 'false'}
          className={cn(
            'mr-4 h-px w-11 bg-neutral-500 transition-all motion-reduce:transition-none z-[5]',
            'data-[active=true]:lg:w-[5rem] data-[active=true]:lg:bg-neutral-200',
            !Array.isArray(id) || true
              ? 'group-hover:w-[5rem] group-hover:bg-neutral-200 group-focus-visible:w-[5rem] group-focus-visible:bg-neutral-200'
              : '',
            indent
              ? 'ml-2 w-4 data-[active=true]:lg:w-[3.25rem] group-hover:w-[3.25rem]  group-focus-visible:w-12'
              : '',
          )}
        />
        {/* <span
          data-active={active ? "true" : "false"}
          className={cn(
            indent
              ? cn(
                  "transition-all absolute w-5 h-6 border-neutral-500 border-r-[2px] border-t-[2px] rounded-tr-lg border-solid top-[-0.5px] left-[0px] z-[4]",
                  "data-[active=true]:border-neutral-200 data-[active=true]:z-[5]",
                  "group-hover:border-neutral-200 group-hover:z-[5]",
                  "group-focus-visible:border-neutral-200 group-focus-visible:z-[5]"
                )
              : ""
          )}
          style={{
            transform: `translateY(${
              indent ? `-${1.25 + (order - 5) * 2.5}rem` : "0"
            }) translateX(${indent ? "-1.25rem" : "0"})`,
            height: indent ? `${1.5 + (order - 5) * 2.5}rem` : "0",
          }}
        />
        <span
          data-active={active ? "true" : "false"}
          className={cn(
            indent
              ? cn(
                  "transition-all absolute w-5 h-5 border-neutral-500 border-l-[2px] border-b-[2px] rounded-bl-lg border-solid top-[0.5px] left-[-1.0px] z-[4]",
                  "data-[active=true]:border-neutral-200 data-[active=true]:z-[5]",
                  "group-hover:border-neutral-200 group-hover:z-[5]",
                  "group-focus-visible:border-neutral-200 group-focus-visible:z-[5]"
                )
              : ""
          )}
        /> */}
        <span
          data-active={active ? 'true' : 'false'}
          className={cn(
            'text-xs font-bold uppercase tracking-widest text-neutral-500 h-4',
            'data-[active=true]:lg:text-neutral-200',
            !Array.isArray(id) || true
              ? 'group-hover:text-neutral-200 group-focus-visible:text-neutral-200'
              : '',
          )}
        >
          {name}
        </span>
        {hasNew && <FlashyTag className='ml-4'>NEW</FlashyTag>}
      </Link>
    </motion.li>
  );
};

type Props = {
  t: TFunction<'translation', undefined>;
};

const Header = ({ t }: Props) => {
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);

  // useEffect(() => {
  //    console.error(activeId);
  // }, [activeId]);

  const [scope, animate] = useAnimate();

  const shimmerX = useMotionValue(10);

  useEffect(() => {}, []);

  return (
    <header className=' lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      <div className={cn('flex-1 flex flex-col justify-between')}>
        <div className='mb-8'>
          <motion.h1
            className='text-5xl font-bold tracking-tight text-neutral-200 sm:text-[48px] leading-none '
            {...inProps()}
          >
            <Link href='/' className='relative -ml-[1.5px]'>
              <span
                onPointerOver={() => {
                  shimmerX.set(10);
                  animate(shimmerX, 100, {
                    duration: 1.5,
                    // ease: 'backInOut',
                    ease: [0.7, 0, 0.3, 1],
                    // repeat: Infinity,
                  });
                }}
              >
                Damián Ponce
              </span>
              <motion.span
                className='p-32 -m-32 absolute inset-0 z-[-10] pointer-events-none text-transparent'
                style={{
                  textShadow: `#00ffdd 0px 0px 8px`,
                  mask: useMotionTemplate`linear-gradient(90deg, #0000 calc(${shimmerX}% - 10%), #000f calc(${shimmerX}%), #0000 calc(${shimmerX}% + 10%))`,
                }}
              >
                Damián Ponce
              </motion.span>
              <motion.span
                className='p-32 -m-32 absolute inset-0 z-[-10] pointer-events-none text-transparent translate-y-1'
                style={{
                  textShadow: `#ff00ff 0px 0px 8px`,
                  mask: useMotionTemplate`linear-gradient(90deg, #0000 calc(${shimmerX}% - 10%), #000f calc(${shimmerX}%), #0000 calc(${shimmerX}% + 10%))`,
                }}
              >
                Damián Ponce
              </motion.span>
              <motion.span
                className='p-32 -m-32 absolute inset-0 z-[-10] pointer-events-none text-transparent translate-y-2'
                style={{
                  textShadow: `#00aaff 0px 0px 8px`,
                  mask: useMotionTemplate`linear-gradient(90deg, #0000 calc(${shimmerX}% - 10%), #000f calc(${shimmerX}%), #0000 calc(${shimmerX}% + 10%))`,
                }}
              >
                Damián Ponce
              </motion.span>
            </Link>
          </motion.h1>

          <motion.h2
            className='mt-3 text-lg font-medium tracking-tight text-neutral-200 sm:text-xl'
            {...inProps(1)}
          >
            {t('subtitle')}
          </motion.h2>
          {/* <p className='mt-4 max-w-xs leading-normal'>{t('description')}</p> */}
        </div>

        <div className='fill flex flex-[1] max-h-6 ' />
        <nav className='hidden_lg:block'>
          <ul className='_mt-2 w-max flex flex-col relative'>
            <ToCItem
              name={t('toc.about')}
              id='about'
              activeId={activeId}
              order={1}
            />
            <ToCItem
              name={t('toc.experience')}
              id='experience'
              activeId={activeId}
              order={2}
            />
            <ToCItem
              name={t('toc.education')}
              id='education'
              activeId={activeId}
              order={3}
            />
            <ToCItem
              name={t('toc.freelance')}
              id='freelance'
              activeId={activeId}
              indent
              order={5}
            />
            <ToCItem
              name={t('toc.coding')}
              id={'coding'}
              activeId={activeId}
              indent
              order={6}
              hasNew
            />
            <ToCItem
              name={t('toc.engineering')}
              id='engineering'
              activeId={activeId}
              indent
              order={7}
            />
            <ToCItem
              name={t('toc.design')}
              id='design'
              activeId={activeId}
              indent
              order={8}
            />
            <ToCItem
              name={t('toc.blog')}
              id='blog'
              activeId={activeId}
              order={9}
            />
            {/* <ToCItem
              name="Projects"
              id={["freelance", "coding", "engineering"]}
              activeId={activeId}
              order={4}
            /> */}
            <motion.span {...inProps(8)}>
              <span
                className={cn(
                  'absolute left-0 -translate-x-[10rem] origin-top-right -rotate-90 top-[7.35rem] w-[10rem]',
                  'text-xs font-bold text-center uppercase tracking-[0.6em] text-neutral-500 h-5 leading-5',
                )}
              >
                {t('toc.projects')}
              </span>
            </motion.span>
          </ul>
        </nav>
        <div className='fill flex flex-[3] min-h-6' />
        <motion.div {...inProps(9)}>
          <Contact />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
