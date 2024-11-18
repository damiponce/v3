import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import Meta from '../components/meta';
import Header from '../components/header';
import Section from '../components/section';
import TextCard from '../components/text-card';
import About from '../components/about';
import ImgCard from '../components/img-card';

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import EXPERIENCE from '../_sections/experience';
import EDUCATION from '../_sections/education';
import FREELANCE from '../_sections/freelance';
import CODING from '../_sections/coding';
import ENGINEERING from '../_sections/engineering';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import ViewFull from '../components/view-full';

import Footer from '../components/footer';

import ThreeD from '../components/3d';
import { useEffect, useState } from 'react';
import PostCard from '../components/post-card-v2';

export default function Index(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    // window.addEventListener('scroll', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      // window.removeEventListener('scroll', handleWindowMouseMove);
    };
  }, []);

  function isTouchDevice() {
    return (
      'ontouchstart' in window || navigator.maxTouchPoints > 0
      // || (navigator.msMaxTouchPoints > 0)
    );
  }

  return (
    <>
      <Head>
        <title>Damián Ponce</title>
      </Head>
      <Meta />
      <div className='relative'>
        {/* <div
          className='pointer-events-none fixed inset-0 z-[-30] lg:absolute '
          style={
            typeof window !== 'undefined' && !isTouchDevice()
              ? // window.innerWidth > 1024
                {
                  backgroundColor: 'transparent',
                  backgroundImage: `radial-gradient(transparent 1px, rgba(30,30,30), #ffffff)`,
                  backgroundSize: '6px 6px',
                  mask: `radial-gradient(${600}px at ${
                    cursor.x + window.scrollX
                  }px ${cursor.y + window.scrollY}px, #0002 00%, #0000 100%)`,
                }
              : null
          }
        /> */}

        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <Header t={t} />
            <main className=' pt-24 lg:w-1/2 lg:py-24'>
              {/* <Section id='3d' name='3D' className='h-[600px]'>
                <ThreeD />
              </Section> */}
              <Section id='about' name={t('toc.about')}>
                <About lang={lang} />
              </Section>
              <Section id='experience' name={t('toc.experience')} darker>
                <ol className='group/list'>
                  {EXPERIENCE.map((item) => (
                    <TextCard
                      itemKey={`experience-${item._key}`}
                      url={item.url}
                      date={item[lang].date}
                      title={item[lang].title}
                      place={item[lang].place}
                      position={item[lang].position}
                      description={item[lang].description}
                      links={item.links}
                      technologies={
                        item[lang].technologies ?? item.technologies
                      }
                    />
                  ))}
                </ol>
                <ViewFull text={t('viewResume')} url='' />
              </Section>
              <Section id='education' name={t('toc.education')}>
                <ol className='group/list'>
                  {EDUCATION.map((item) => (
                    <TextCard
                      itemKey={`education-${item._key}`}
                      url={item.url}
                      date={item[lang].date}
                      title={item[lang].title}
                      place={item[lang].place}
                      position={item[lang].position}
                      description={item[lang].description}
                      links={item.links}
                      technologies={
                        item[lang].technologies ?? item.technologies
                      }
                    />
                  ))}
                </ol>
              </Section>
              <Section
                id='freelance'
                name={t('toc.projects') + ' ‣ ' + t('toc.freelance')}
                darker
              >
                <ul className='group/list'>
                  {FREELANCE.map((item) => (
                    <ImgCard
                      itemKey={`freelance-${item._key}`}
                      img={item.img}
                      url={item.url}
                      title={item[lang].title}
                      description={item[lang].description}
                      links={item.links}
                      technologies={
                        item[lang].technologies ?? item.technologies
                      }
                    />
                  ))}
                </ul>
                <ViewFull text={t('viewFreelance')} url='freelance' />
              </Section>
              <Section
                id='coding'
                name={t('toc.projects') + ' ‣ ' + t('toc.coding')}
              >
                <ul className='group/list'>
                  {CODING.map((item) => (
                    <ImgCard
                      itemKey={`coding-${item._key}`}
                      img={item.img}
                      url={item.url}
                      title={item[lang].title}
                      description={item[lang].description}
                      links={item.links}
                      technologies={
                        item[lang].technologies ?? item.technologies
                      }
                    />
                  ))}
                </ul>
              </Section>

              <Section
                id='engineering'
                name={t('toc.projects') + ' ‣ ' + t('toc.engineering')}
                darker
              >
                <ul className='group/list'>
                  {ENGINEERING.map((item) => (
                    <ImgCard
                      itemKey={`engineering-${item._key}`}
                      img={item.img}
                      url={item.url}
                      title={item[lang].title}
                      description={item[lang].description}
                      links={item.links}
                      technologies={
                        item[lang].technologies ?? item.technologies
                      }
                    />
                  ))}
                </ul>
                <ViewFull text={t('viewProjects')} url='projects' />
              </Section>
              <Section
                id='design'
                name={t('toc.projects') + ' ‣ ' + t('toc.design')}
              >
                {/* <h1 className='text-[5rem] text-red-600 font-black leading-10'>
                  DO THIS
                </h1>
                <h2 className='text-[3rem] text-red-900 font-black'>
                  (DESIGN)
                </h2> */}
                <ul className='group/list'>
                  <ImgCard
                    itemKey={`design-card`}
                    img={
                      '/assets/design/general-designs/remera-doomsday-clock.webp'
                    }
                    url={'/design'}
                    title={
                      {
                        es: 'Sección de diseño gráfico',
                        en: 'Graphic design section',
                      }[lang]
                    }
                    description={
                      {
                        es: 'Esta página muestra todos mis proyectos de diseño visual a lo largo de los años.',
                        en: 'This page showcases all of my visual design projects along the years.',
                      }[lang]
                    }
                    technologies={['Illustrator', 'Photoshop', 'Figma']}
                  />
                </ul>
              </Section>
              <Section id='blog' name='Blog' darker>
                <ol className='group/list'>
                  {_props.allPosts.map(
                    (post) =>
                      !post.unlisted && (
                        <PostCard
                          itemKey={`post-${post.slug}`}
                          url={`/posts/${post.slug}`}
                          date={post.date}
                          title={post.title}
                          category={post.category}
                          excerpt={post.excerpt}
                        />
                      ),
                  )}
                </ol>
              </Section>
              <Footer lang={lang} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'category',
    'author',
    'coverImage',
    'excerpt',
    'unlisted',
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      allPosts,
    },
  };
};
