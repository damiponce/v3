import type Author from './author';

type PostType = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  imageSizes: { [key: string]: { width: number; height: number } };
};

export default PostType;
