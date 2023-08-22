import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { Fragment, createElement } from 'react';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeParse, { fragment: false })
    .use(rehypeReact, { createElement, Fragment })
    // .use(remarkHtml)
    // .use(rehypeStringify)
    .process(markdown)
    .then((file) => {
      return file;
    });
  return result;
}

// import { remark } from 'remark';
// import html from 'remark-html';

// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html).process(markdown);
//   return result.toString();
// }
