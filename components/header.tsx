import Link from "next/link";
import { memo, useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import Socials from "./socials";
import { TFunction } from "i18next";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LangSwitcher from "./lang-switcher";
import {
  motion,
  useAnimate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import FlashyTag from "./flashy-tag";
import { ArrowRight } from "lucide-react";
import { getPositioning } from "../_sections/positioning";
import { SHOW_BLOG } from "../lib/flags";
import { EMAIL, resumeFor } from "../lib/contact";

// Entrance for the header items: a CSS animation, so the rail is visible
// even before (or without) hydration, and skipped under reduced motion.
function inProps(n = 0) {
  return {
    className: "motion-safe:animate-enter",
    style: { animationDelay: `${40 * n}ms` },
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
            getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-5px 0px -20% 0px",
    });

    const headingElements = Array.from(
      document.querySelectorAll("section[data-heading]")
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
  hasNew,
}: {
  // A group of sections (e.g. all project lists) links to the first one and
  // stays active while any of them is on screen.
  id: string | string[];
  name: string;
  activeId: string;
  order: number;
  hasNew?: boolean;
}) => {
  const ids = Array.isArray(id) ? id : [id];
  const active = ids.includes(activeId);
  const target = ids[0];

  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <li
      className={inProps(order + 1).className}
      style={{ order, ...inProps(order + 1).style }}
    >
      <Link
        className={cn("group flex items-center py-3 h-[40px] relative")}
        href={`#${target}`}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <span
          data-active={active ? "true" : "false"}
          className={cn(
            "mr-4 h-px w-11 bg-neutral-500 transition-all motion-reduce:transition-none z-[5]",
            "data-[active=true]:lg:w-[5rem] data-[active=true]:lg:bg-neutral-200",
            "group-hover:w-[5rem] group-hover:bg-neutral-200 group-focus-visible:w-[5rem] group-focus-visible:bg-neutral-200"
          )}
        />
        <span
          data-active={active ? "true" : "false"}
          className={cn(
            "text-xs font-bold uppercase tracking-widest text-neutral-400 h-4",
            "data-[active=true]:lg:text-neutral-200",
            "group-hover:text-neutral-200 group-focus-visible:text-neutral-200"
          )}
        >
          {name}
        </span>
        {hasNew && (
          <FlashyTag className="ml-4">
            {
              {
                en: "NEW",
                es: "NUEVO",
              }[lang]
            }
          </FlashyTag>
        )}
      </Link>
    </li>
  );
};

type Props = {
  t: TFunction<"translation", undefined>;
};

const Header = ({ t }: Props) => {
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);
  const { i18n } = useTranslation();
  const resume = resumeFor(i18n.language);

  // useEffect(() => {
  //    console.error(activeId);
  // }, [activeId]);

  const [scope, animate] = useAnimate();

  const shimmerX = useMotionValue(10);

  useEffect(() => {}, []);

  return (
    <header className=" lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className={cn("flex-1 flex flex-col justify-between")}>
        <div className="mb-8">
          <h1
            className={cn(
              "text-5xl font-bold tracking-tight text-neutral-200 sm:text-[48px] leading-none",
              inProps().className
            )}
            style={inProps().style}
          >
            <Link href="/" className="relative -ml-[1.5px]">
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
                className="p-32 -m-32 absolute inset-0 z-[-10] pointer-events-none text-transparent"
                style={{
                  textShadow: `#00ffdd 0px 0px 8px`,
                  mask: useMotionTemplate`linear-gradient(90deg, #0000 calc(${shimmerX}% - 10%), #000f calc(${shimmerX}%), #0000 calc(${shimmerX}% + 10%))`,
                }}
              >
                Damián Ponce
              </motion.span>
              <motion.span
                className="p-32 -m-32 absolute inset-0 z-[-10] pointer-events-none text-transparent translate-y-1"
                style={{
                  textShadow: `#ff00ff 0px 0px 8px`,
                  mask: useMotionTemplate`linear-gradient(90deg, #0000 calc(${shimmerX}% - 10%), #000f calc(${shimmerX}%), #0000 calc(${shimmerX}% + 10%))`,
                }}
              >
                Damián Ponce
              </motion.span>
              <motion.span
                className="p-32 -m-32 absolute inset-0 z-[-10] pointer-events-none text-transparent translate-y-2"
                style={{
                  textShadow: `#00aaff 0px 0px 8px`,
                  mask: useMotionTemplate`linear-gradient(90deg, #0000 calc(${shimmerX}% - 10%), #000f calc(${shimmerX}%), #0000 calc(${shimmerX}% + 10%))`,
                }}
              >
                Damián Ponce
              </motion.span>
            </Link>
          </h1>

          <h2
            className={cn(
              "mt-3 text-lg font-[400] tracking-[-0.02rem] text-neutral-300 sm:text-xl text-balance mr-6",
              inProps(1).className
            )}
            style={inProps(1).style}
          >
            {getPositioning(i18n.language).subtitle}
          </h2>
          {/* <p className='mt-4 max-w-xs leading-normal'>{t('description')}</p> */}
        </div>

        <div className="fill flex flex-[1] max-h-6 " />
        <nav className="hidden_lg:block">
          <ul className="_mt-2 w-max flex flex-col relative">
            <ToCItem
              name={t("toc.about")}
              id="about"
              activeId={activeId}
              order={1}
            />
            <ToCItem
              name={t("toc.featured")}
              id="featured"
              activeId={activeId}
              order={2}
              hasNew
            />
            <ToCItem
              name={t("toc.experience")}
              id="experience"
              activeId={activeId}
              order={3}
            />
            <ToCItem
              name={t("toc.projects")}
              id={["freelance", "coding", "engineering", "design"]}
              activeId={activeId}
              order={4}
            />
            <ToCItem
              name={t("toc.education")}
              id="education"
              activeId={activeId}
              order={5}
            />
            {SHOW_BLOG && (
              <ToCItem
                name={t("toc.blog")}
                id="blog"
                activeId={activeId}
                order={6}
              />
            )}
          </ul>
        </nav>
        <div className="fill flex flex-[3] min-h-6" />
        <div
          className={cn("flex flex-col gap-3 mb-8", inProps(7).className)}
          style={inProps(7).style}
        >
          <div className="text-base font-medium text-left text-neutral-300 h-5 leading-5">
            {t("toc.contactQ")}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/contact">
            <div
              className={cn(
                "group py-2 px-4 rounded-full bg-green-800 text-lg font-semibold text-left text-transparent w-fit leading-5 flex items-center hover:bg-green-600 transition-all duration-150 cursor-pointer hover:shadow-[0_2px_10px_0_#2cd76c66] hover:pr-5"
              )}
            >
              {/* #3b65de66 */}
              <span
                className="group-hover:drop-shadow-[0_1.5px_3px_#0004] group-hover:!text-white transition-all duration-150 bg-clip-text animate-shine motion-reduce:animate-none motion-reduce:!text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.7) 60%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  animationDuration: "3s",
                }}
              >
                {t("toc.contactCtA")}{" "}
              </span>
              <ArrowRight className="w-4 h-4 ml-1 -mr-1 text-white group-hover:translate-x-1 transition-transform duration-150" />
            </div>
          </Link>
          <a
            href={resume.main}
            target="_blank"
            rel="noreferrer"
            className="text-base font-semibold text-neutral-200 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-200 focus-visible:decoration-neutral-200"
          >
            {t("resume")}
          </a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="w-fit text-sm text-neutral-400 transition-colors hover:text-neutral-200 focus-visible:text-neutral-200"
          >
            {EMAIL}
          </a>
        </div>
        <div {...inProps(8)}>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
