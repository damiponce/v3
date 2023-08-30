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

type Props = {
  allPosts: Post[];
};

export default function Index(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <Head>
        <title>Damián Ponce</title>
      </Head>
      <Meta />
      <div className=''>
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <Header subtitle={t('subtitle')} description={t('description')} />
            <main className=' pt-24 lg:w-1/2 lg:py-24'>
              {/* <Section id='3d' name='3D' className='h-[600px]'>
                <ThreeD />
              </Section> */}
              <Section id='about' name='About'>
                <About />
              </Section>

              <Section id='experience' name='Experience'>
                <ol className='group/list'>
                  {EXPERIENCE.map((item, index) => (
                    <TextCard
                      key={`experience-${index}`}
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
              <Section id='education' name='Education'>
                <ol className='group/list'>
                  {EDUCATION.map((item, index) => (
                    <TextCard
                      key={item.key}
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
              <Section id='freelance' name='Freelance'>
                <ul className='group/list'>
                  {FREELANCE.map((item) => (
                    <ImgCard
                      key={item.key}
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
              <Section id='coding' name='Coding'>
                <ul className='group/list'>
                  {CODING.map((item) => (
                    <ImgCard
                      key={item.key}
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
              <Section id='engineering' name='Engineering'>
                <ul className='group/list'>
                  {ENGINEERING.map((item) => (
                    <ImgCard
                      key={item.key}
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
              <Footer />
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
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      allPosts,
    },
  };
};
