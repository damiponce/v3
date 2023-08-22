import markdownStyles from './markdown-styles.module.css';
import githubMarkdownStyles from './github-markdown.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import 'katex/dist/katex.min.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <div
        // className={markdownStyles['markdown']}
        className={githubMarkdownStyles['markdown-body']}
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
          //         style={ghcolors}
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
        />
      </div>
    </div>
  );
};

export default PostBody;
