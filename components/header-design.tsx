import Link from 'next/link';
import { memo, useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import Contact from './contact';
import { TFunction } from 'i18next';
import Back from '../components/back';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LangSwitcher from './lang-switcher';

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
}: {
  id: string | string[];
  name: string;
  activeId: string;
  order: number;
  indent?: boolean;
}) => {
  let active = false;

  if (Array.isArray(id)) {
    active = id.includes(activeId);
  } else {
    active = id === activeId;
  }

  return (
    <li
      key={Array.isArray(id) ? id[0] : id}
      className={cn(
        indent ? 'ml-5 peer' : '',
        Array.isArray(id)
          ? 'peer-hover:[&>a>span:first-child]:w-[5rem] peer-hover:[&>a>span:first-child]:bg-neutral-200 peer-hover:[&>a>span:last-child]:text-neutral-200 '
          : '',
      )}
      style={{ order }}
    >
      <Link
        className={cn('group flex items-center py-3  relative')}
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
            'data-[active=true]:w-[5rem] data-[active=true]:bg-neutral-200',
            !Array.isArray(id) || true
              ? 'group-hover:w-[5rem] group-hover:bg-neutral-200 group-focus-visible:w-[5rem] group-focus-visible:bg-neutral-200'
              : '',
            indent
              ? 'ml-2 w-4 data-[active=true]:w-[3.25rem] group-hover:w-[3.25rem] group-focus-visible:w-12'
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
            'data-[active=true]:text-neutral-200',
            !Array.isArray(id) || true
              ? 'group-hover:text-neutral-200 group-focus-visible:text-neutral-200'
              : '',
          )}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};

type Props = {
  t: TFunction<'translation', undefined>;
  designs: any[];
};

const HeaderDesign = ({ t, designs }: Props) => {
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);

  // useEffect(() => {
  //    console.error(activeId);
  // }, [activeId]);

  return (
    <header className=' lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex-[1]'>
      <div className={cn('flex-1 flex flex-col justify-between')}>
        <div className='mb-8'>
          <Back langSw={false} />
          <h1 className='text-5xl font-bold tracking-tight text-neutral-200 sm:text-[48px] leading-none'>
            {t('bigTitle')}
          </h1>
          <h2 className='mt-3 text-lg font-medium tracking-tight text-neutral-200 sm:text-xl'>
            {/* {t('subtitle')} */}
          </h2>
          {/* <p className='mt-4 max-w-xs leading-normal'>{t('description')}</p> */}
        </div>

        <div className='fill flex flex-[1] max-h-6 ' />
        <nav className='hidden lg:block'>
          <ul className='_mt-2 w-max flex flex-col relative'>
            {designs.map((design, index) => (
              <ToCItem
                name={t(`name.${design.name}`)}
                id={design.id}
                activeId={activeId}
                order={index}
              />
            ))}
            {/* <ToCItem
              name="Projects"
              id={["freelance", "coding", "engineering"]}
              activeId={activeId}
              order={4}
            /> */}
          </ul>
        </nav>
        <div className='fill flex flex-[3]' />
        <Contact />
      </div>
    </header>
  );
};

export default HeaderDesign;
