import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Meta from '../components/meta';
import Datasheet from '../components/datasheet';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { InferGetStaticPropsType } from 'next';

export default function Index(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  return (
    <>
      <Head>
        <title>Damián Ponce</title>
      </Head>
      <Meta />
      {/* The home page is a white datasheet; other routes keep the dark ground. */}
      <style jsx global>{`
        body {
          background: #ffffff;
        }
      `}</style>
      <Datasheet />
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
