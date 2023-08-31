import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../interfaces/author';
import PostSubtitle from './post-subtitle';

type Props = {
  title: string;
  subtitle: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, subtitle, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostSubtitle>{subtitle}</PostSubtitle>
      {/* <div className='hidden md:block md:mb-1'>
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      {/* <div className='block md:hidden mb-1'>
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
      <div className='mb-12 text-lg'>
        <DateFormatter dateString={date} />
        <span className='text-sm font-medium text-neutral-500 whitespace-pre-wrap'>
          {`  ·  Damián Ponce`}
        </span>
        <div className='h-px w-full mt-1 bg-neutral-800' />
      </div>
    </>
  );
};

export default PostHeader;
