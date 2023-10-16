import { getAllPosts } from '../../lib/api';
import Head from 'next/head';
import Post from '../../interfaces/post';
import Meta from '../../components/meta';
import HeaderDesign from '../../components/header-design';
import SectionDesign from '../../components/section-design';
import TextCard from '../../components/text-card';
import About from '../../components/about';
import ImgCard from '../../components/img-card';

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DESIGNS, { DesignSrc } from '../../_sections/designs';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ViewFull from '../../components/view-full';

import Footer from '../../components/footer';

import ThreeD from '../../components/3d';
import { useEffect, useRef, useState } from 'react';
import PostCard from '../../components/post-card-v2';
import Modal from '@/components/gallery/modal';
import { useLastViewedPhoto } from '@/lib/utils';
import { useRouter } from 'next/router';
import { is } from 'date-fns/locale';

export function findDesign(number: number, designItems: DesignSrc) {
  let currDesign = '';
  for (const [design, images] of Object.entries(designItems)) {
    if (images.find((image) => image.design_id === number)) {
      currDesign = design;
    }
  }
  return designItems[currDesign];
}

export default function Index(
  _props: InferGetStaticPropsType<typeof getStaticProps> & DesignSrc,
) {
  const { t, i18n } = useTranslation('design');
  const lang = i18n.language;

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const GRAD_COLOR = 80;
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  function isTouchDevice() {
    return (
      'ontouchstart' in window || navigator.maxTouchPoints > 0
      // || (navigator.msMaxTouchPoints > 0)
    );
  }

  const router = useRouter();
  const { designId, photoId } = router.query;

  // const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  // const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  // useEffect(() => {
  //   if (lastViewedPhoto && (!photoId || !designId)) {
  //     lastViewedPhotoRef.current.scrollIntoView({ block: 'center' });
  //     setLastViewedPhoto(null);
  //   }
  // }, [designId, photoId, lastViewedPhoto, setLastViewedPhoto]);

  useEffect(() => {
    function update() {
      const isSticky = (element: Element): boolean => {
        const rect = element.getBoundingClientRect();
        return rect.top === 0;
      };

      const titles = document.querySelectorAll('div[data-design-title]');
      titles.forEach((div) => {
        if (isSticky(div)) {
          div.classList.add('activeDesignTitle');
        } else {
          div.classList.remove('activeDesignTitle');
        }
      });
    }

    document.addEventListener('scroll', update);
    update();
  }, []);

  return (
    <>
      <Head>
        <title>Damián Ponce</title>
      </Head>
      <Meta />
      <div className='relative'>
        <div
          className='pointer-events-none fixed inset-0 z-1 transition duration-300 lg:absolute'
          style={
            typeof window !== 'undefined' &&
            !isTouchDevice() &&
            window.innerWidth > 1024
              ? {
                  background: `radial-gradient(600px at ${
                    cursor.x + window.scrollX
                  }px ${
                    cursor.y + window.scrollY
                  }px, rgba(${GRAD_COLOR},${GRAD_COLOR},${GRAD_COLOR}, 0.15), #171717 100%)`,
                  zIndex: -5,
                }
              : null
          }
        ></div>
        <div className='mx-auto min-h-screen max-w-screen-xl  px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <HeaderDesign t={t} designs={DESIGNS} />
            <main className=' pt-24 lg:w-1/2 lg:py-24 flex-[2]'>
              {designId && photoId && (
                <Modal
                  designIndex={Number(designId)}
                  images={findDesign(Number(designId), _props.designItems)}
                  onClose={() => {
                    // setLastViewedPhoto({ designId, photoId });
                  }}
                />
              )}
              {DESIGNS.map((design) => (
                <SectionDesign
                  t={t}
                  design={design}
                  items={_props.designItems[design.id]}
                  // lvp={lastViewedPhoto}
                  // ref={lastViewedPhotoRef}
                />
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  var designItems: DesignSrc = {};
  var fs = require('fs');
  const path = require('path');
  var sizeOf = require('image-size');

  // iterate over DESIGNS, for each design get the list of files at assets/design/{design.id} and add the list to the designItems object
  let i = 0;
  for (const design of DESIGNS) {
    const dir = path.join(process.cwd(), 'public/assets/design', design.id);
    const files = fs
      .readdirSync(dir)
      .filter((file: any) => file.substr(-5) === '.webp');
    designItems[design.id] = [];
    let j = 0;
    files.forEach((file: any) => {
      const width = sizeOf(path.join(dir, file)).width;
      const height = sizeOf(path.join(dir, file)).height;
      designItems[design.id].push({
        design_id: i,
        id: j,
        design: design.id,
        public_id: file.substr(0, file.length - 5),
        format: sizeOf(path.join(dir, file)).type,
        width: width,
        height: height,
        ar: width / height,
      });
      j++;
    });
    i++;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['design'])),
      designItems,
    },
  };
};
