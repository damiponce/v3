import React, { Suspense, useEffect, useState } from 'react';
import markdownStyles from './markdown-styles.module.css';
// import githubMarkdownStyles from './github-markdown.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

import { getHighlighterCore, HighlighterCore } from 'shiki/core';

import parse from 'html-react-parser';

import Image from 'next/image';

import 'katex/dist/katex.min.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { qtcreator_dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Grammar, common, createStarryNight } from '@wooorm/starry-night';
import { Root } from 'hast';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
// @ts-ignore
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';

import { deserialize } from 'react-serialize';
import { toHtml } from 'hast-util-to-html';
import { Nodes } from 'hast-util-to-jsx-runtime/lib';
import remarkImages from 'remark-images';
import PostType from '../interfaces/post';
import SkeletonBase from './skeleton-base';
import { be } from 'date-fns/locale';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';

type Props = {
  content: string;
  imageSizes: PostType['imageSizes'];
};

function PostBody({ content, imageSizes }: Props) {
  const [highlighter, setHighlighter] = React.useState<HighlighterCore>(null);

  React.useEffect(() => {
    const f = async () => {
      const highlighter = await getHighlighterCore({
        themes: [import('shiki/themes/vesper.mjs')],
        langs: [
          import('shiki/langs/javascript.mjs'),
          import('shiki/langs/c.mjs'),
          import('shiki/langs/python.mjs'),
        ],
        loadWasm: import('shiki/wasm'),
      });
      setHighlighter(highlighter);
    };
    f();
  }, []);

  const random = (start: number, end: number) =>
    Math.floor(Math.random() * (end - start + 1) + start);

  if (!highlighter)
    return (
      <div className='flex flex-col w-full max-h-screen'>
        <SkeletonBase className={`h-8 w-[100%] mb-5`} />
        <SkeletonBase className={`h-8 w-[97%] mb-5`} />
        <SkeletonBase className={`h-8 w-[98%] mb-5`} />
        <SkeletonBase className={`h-8 w-[55%] mb-10`} />
        <SkeletonBase className={`h-40 w-[100%] mb-10`} />
        <SkeletonBase className={`h-8 w-[97%] mb-5`} />
        <SkeletonBase className={`h-8 w-[100%] mb-5`} />
        <SkeletonBase className={`h-8 !w-[39%] _mb-10`} />
      </div>
    );

  return (
    <div className='max-w-2xl mx-auto'>
      <div className='markdown-body'>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[
            rehypeKatex,
            // rehypeSlug,
            // [
            //   rehypeAutolinkHeadings,
            //   {
            //     content: fromHtmlIsomorphic('🔗', { fragment: true }).children,
            //   },
            // ],
          ]}
          components={{
            pre({ node, className, children, ...props }) {
              return <>{children}</>;
            },
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline ? (
                (parse(
                  highlighter.codeToHtml(children[0] as string, {
                    lang: match ? match[1] : 'text',
                    theme: 'vesper',
                  }),
                  {},
                ) as React.JSX.Element)
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
            img(props) {
              if (imageSizes[props.src]) {
                const { src, alt } = props;
                const { width, height } = imageSizes[props.src];
                return (
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes='(max-width: 760px) 100vw, 760px'
                    className='object-cover w-full h-auto max-h-[calc(42rem_/_16*9)]'
                  />
                );
              } else {
                return <img {...props} />;
              }
            },
          }}
        />
      </div>
    </div>
  );
}

export default PostBody;
