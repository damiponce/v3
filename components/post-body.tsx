import { useEffect, useState } from 'react';
import markdownStyles from './markdown-styles.module.css';
// import githubMarkdownStyles from './github-markdown.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import 'katex/dist/katex.min.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { qtcreator_dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Grammar, common, createStarryNight } from '@wooorm/starry-night';
import { Root } from 'hast';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';

import { deserialize } from 'react-serialize';
import { toHtml } from 'hast-util-to-html';

type Props = {
  content: string;
};

type StarryNightType = {
  flagToScope: (flag: string) => string;
  highlight: (value: string, scope: string) => Root;
  missingScopes: () => string[];
  register: (grammars: Grammar[]) => Promise<undefined>;
  scopes: () => string[];
};

const PostBody = ({ content }: Props) => {
  const [starryNight, setStarryNight] = useState<StarryNightType>();

  function starryNightInstance(flag: string, content) {
    if (!starryNight) return null;
    const scope = starryNight.flagToScope(flag);
    const tree = starryNight.highlight(content.toString(), scope);
    const reactNode = toJsxRuntime(tree, { Fragment, jsx, jsxs });
    console.log(reactNode);
    return reactNode;
  }

  useEffect(() => {
    createStarryNight(common).then((sn) => setStarryNight(sn));
  }, []);

  return (
    <div className='max-w-2xl mx-auto'>
      <div
        // className={markdownStyles['markdown']}
        // className={githubMarkdownStyles['markdown-body']}
        className='markdown-body'
        // dangerouslySetInnerHTML={{ __html: content }}
      >
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          // components={{
          //   code({ node, inline, className, children, ...props }) {
          //     const match = /language-(\w+)/.exec(className || '');
          //     return !inline && match ? (
          //       <SyntaxHighlighter
          //         {...props}
          //         children={String(children).replace(/\n$/, '')}
          //         style={qtcreator_dark}
          //         language={match[1]}
          //         PreTag='div'
          //       />
          //     ) : (
          //       <code {...props} className={className}>
          //         {children}
          //       </code>
          //     );
          //   },
          // }}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <code {...props} className={className}>
                  {starryNightInstance(match[1], children)}
                </code>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default PostBody;
