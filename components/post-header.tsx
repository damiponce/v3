import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../interfaces/author';
import PostSubtitle from './post-subtitle';

type Props = {
  title: string;
  subtitle: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, subtitle, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostSubtitle>{subtitle}</PostSubtitle>
      <div className='mb-12 text-lg'>
        <DateFormatter dateString={date} />
        {/*      THIS IS HIDDEN      */}
        <span className='hidden text-sm font-medium text-neutral-500 whitespace-pre-wrap'>
          {`  ·  ${author.name}`}
        </span>
        <div className='h-px w-full mt-1 bg-neutral-800' />
      </div>
    </>
  );
};

export default PostHeader;
