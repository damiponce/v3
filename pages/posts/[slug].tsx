import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import type PostType from '../../interfaces/post';
import Meta from '../../components/meta';
import sizeOf from 'image-size';
import { join } from 'path';
import Back from '../../components/back';
import SkeletonBase from '@/components/skeleton-base';
import { Suspense } from 'react';
import React from 'react';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Damián Ponce`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>Damián Ponce</title>
      </Head>
      <Meta />
      <div className=''>
        <div className='mx-auto min-h-screen max-w-screen-xl  px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:py-24 max-w-2xl mx-auto'>
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <Back langSw={false} />
                <article className='mb-32'>
                  <Head>
                    <title>{title}</title>
                    <meta property='og:image' content={post.ogImage.url} />
                  </Head>
                  <PostHeader
                    title={post.title}
                    subtitle={post.subtitle}
                    // coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                  />
                  <PostBody
                    content={post.content}
                    imageSizes={post.imageSizes}
                  />
                </article>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'subtitle',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
  ]);
  // const content = serialize(await markdownToHtml(post.content || ''));
  const content = post.content;

  const imageSizes: Props['post']['imageSizes'] = {};

  // A regular expression to iterate on all images in the post
  const iterator = post.content.matchAll(/\!\[.*]\((.*)\)/g);
  let match: IteratorResult<RegExpMatchArray, any>;
  while (!(match = iterator.next()).done) {
    const [, src] = match.value;
    try {
      const { width, height } = sizeOf(join('public', src));
      imageSizes[src] = { width, height };
    } catch (err) {
      console.error(`Can’t get dimensions for ${src}:`, err);
    }
  }

  return {
    props: {
      post: {
        ...post,
        content,
        imageSizes,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
