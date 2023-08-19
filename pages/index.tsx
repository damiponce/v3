import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import Meta from '../components/meta';
import Header from '../components/header';
import Section from '../components/section';
import TextCard from '../components/text-card';
import About from '../components/about';
import ImgCard from '../components/img-card';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Damián Ponce</title>
      </Head>
      <Meta />
      <div className=''>
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <Header />
            <main className=' pt-24 lg:w-1/2 lg:py-24'>
              <Section id='about' name='About'>
                <About />
              </Section>
              <Section id='experience' name='Experience'>
                <ol className='group/list'>
                  <TextCard
                    url='https://x.com'
                    date='2019 — present'
                    title={t('experience.title')}
                    place='Downstatement'
                    position='Engineer'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliqua aliquam, nunc.'
                    links={[{ name: 'Youtube', url: 'youtube.com' }]}
                    technologies={['Yo', 'Mama']}
                  />
                </ol>
              </Section>
              <Section id='education' name='Education'>
                <p className='h-[400px]'></p>
              </Section>
              <Section id='freelance' name='Freelance'>
                <ul className='group/list'>
                  <ImgCard
                    img='/images/projects/course-card.png'
                    url='https://x.com'
                    title='Lead Engineer'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliqua aliquam, nunc.'
                    links={[{ name: 'Youtube', url: 'youtube.com' }]}
                    technologies={['Yo', 'Mama']}
                  />
                  <ImgCard
                    img='/images/projects/course-card.png'
                    url='https://x.com'
                    title='Lead Engineer'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliqua aliquam, nunc.'
                    links={[{ name: 'Youtube', url: 'youtube.com' }]}
                    technologies={['Yo', 'Mama']}
                  />
                </ul>
              </Section>
              <Section id='coding' name='Coding'>
                <p className='h-[400px]'></p>
              </Section>
              <Section id='engineering' name='Engineering'>
                <p className='h-[400px]'></p>
              </Section>
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
    props: { allPosts },
    ...(await serverSideTranslations(locale ?? 'es', ['common'])),
  };
};
