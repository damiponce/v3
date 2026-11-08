import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { EMAIL, resumeFor } from '../lib/contact';

// The last thing on the home page: how to reach me and the résumé, so the
// page ends on a next step instead of on the credits.
const Closing = () => {
  const { t, i18n } = useTranslation();
  const resume = resumeFor(i18n.language);

  const linkClass =
    'font-semibold text-neutral-200 underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-200 focus-visible:decoration-neutral-200';

  return (
    <section
      id='contact'
      className='pb-16 md:pb-24'
      aria-labelledby='contact-title'
    >
      <h2
        id='contact-title'
        className='mb-4 py-5 text-sm font-bold uppercase tracking-widest text-neutral-200 lg:py-0'
      >
        {t('closing.title')}
      </h2>
      <p className='max-w-prose'>
        {t('closing.bodyBefore')}
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          {EMAIL}
        </a>
        {t('closing.bodyAfter')}
      </p>
      <ul className='mt-6 flex flex-wrap gap-x-6 gap-y-3 text-base'>
        <li>
          <Link href='/contact' className={linkClass}>
            {t('closing.form')}
          </Link>
        </li>
        <li>
          <a
            href={resume.main}
            target='_blank'
            rel='noreferrer'
            className={linkClass}
          >
            {t('resume')}
          </a>
        </li>
        <li>
          <a
            href={resume.other}
            target='_blank'
            rel='noreferrer'
            className={linkClass}
          >
            {t('resumeOther')}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Closing;
