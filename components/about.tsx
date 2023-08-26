import Link from 'next/link';

type Props = {};

const About = ({}: Props) => {
  return (
    <p className='mb-4'>
      Back in 2012, I decided to try my hand at creating custom Tumblr themes
      and tumbled head first into the rabbit hole of coding and web development.
      Fast-forward to today, and I’ve had the privilege of building software for
      an{' '}
      <Link
        className='font-medium text-slate-200 hover:text-highlight focus-visible:text-highlight'
        href='https://us.mullenlowe.com/'
        target='_blank'
        rel='noreferrer'
      >
        advertising agency
      </Link>
      , a{' '}
      <Link
        className='font-medium text-slate-200 hover:text-highlight focus-visible:text-highlight'
        href='https://starry.com/'
        target='_blank'
        rel='noreferrer'
      >
        start-up
      </Link>
      , a{' '}
      <Link
        className='font-medium text-slate-200 hover:text-highlight focus-visible:text-highlight'
        href='https://scout.camd.northeastern.edu/'
        target='_blank'
        rel='noreferrer'
      >
        student-led design studio
      </Link>
      , and a{' '}
      <Link
        className='font-medium text-slate-200 hover:text-highlight focus-visible:text-highlight'
        href='https://www.apple.com/apple-music/'
        target='_blank'
        rel='noreferrer'
      >
        huge corporation
      </Link>
      .
    </p>
  );
};

export default About;
