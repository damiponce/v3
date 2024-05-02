import Head from 'next/head';
import Meta from '../components/meta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { allProjects } from '../_sections/allProjects';
import Link from 'next/link';
import Back from '../components/back';
import LangSwitcher from '../components/lang-switcher';
import FREELANCE from '@/_sections/freelance';
import BigImgCard from '@/components/big-img-card';

export default function Freelance(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { t, i18n } = useTranslation('freelance');
  const lang = i18n.language;

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Meta />
      <div className=''>
        <div className='mx-auto min-h-screen max-w-screen-xl  px-6 py-8 font-sans md:px-12 md:py-14 lg:px-24 lg:py-20'>
          <div className=' max-w-screen-xl mx-auto'>
            <div className=''>
              <Back />
              <h1 className='text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl mt-4'>
                {t('bigTitle')}
              </h1>
              <h2 className='text-xl font-medium tracking-[-0.02em] text-neutral-400 sm:text-xl text-pretty mt-2'>
                {t('subtitle')}
              </h2>
              <ul className='group/list mt-12'>
                {FREELANCE.map((item) => (
                  <BigImgCard
                    itemKey={`freelance-${item._key}`}
                    img={item.img}
                    url={item.url}
                    title={item[lang].title}
                    description={item[lang].description}
                    links={item.links}
                    technologies={item[lang].technologies ?? item.technologies}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['freelance'])),
    },
  };
};
