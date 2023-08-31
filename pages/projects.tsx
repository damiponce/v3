import Head from 'next/head';
import Meta from '../components/meta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { allProjects } from '../_sections/allProjects';
import Link from 'next/link';
import Back from '../components/back';
import LangSwitcher from '../components/lang-switcher';

export default function Post(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { t, i18n } = useTranslation('projects');
  const lang = i18n.language;

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Meta />
      <div className=''>
        <div className='mx-auto min-h-screen max-w-screen-xl  px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:py-24 max-w-screen-xl mx-auto'>
            <div>
              <Back />
              <h1 className='text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl'>
                {t('bigTitle')}
              </h1>
              <table className='mt-12 w-full border-collapse text-left'>
                <thead className='sticky top-0 z-10 border-b border-neutral-300/10 bg-neutral-900/75 px-6 py-5 backdrop-blur'>
                  <tr>
                    <th className='py-4 pr-8 text-sm font-semibold text-neutral-200'>
                      {t('year')}
                    </th>
                    <th className='py-4 pr-8 text-sm font-semibold text-neutral-200'>
                      {t('project')}
                    </th>
                    <th className='hidden py-4 pr-8 text-sm font-semibold text-neutral-200 lg:table-cell'>
                      {t('madeAt')}
                    </th>
                    <th className='hidden py-4 pr-8 text-sm font-semibold text-neutral-200 lg:table-cell'>
                      {t('builtWith')}
                    </th>
                    <th className='hidden py-4 pr-8 text-sm font-semibold text-neutral-200 sm:table-cell'>
                      {t('links')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allProjects.map(
                    ({ year, project, madeAt, builtWith, links }) => (
                      <tr className='border-b border-neutral-300/10 last:border-none'>
                        <td className='py-4 pr-4 align-top text-sm'>
                          <div className='translate-y-px'>{year}</div>
                        </td>
                        <td className='py-4 pr-4 align-top font-semibold leading-snug text-neutral-200'>
                          <div>
                            <div className='block sm:hidden'>
                              {links ? (
                                <Link
                                  className='inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-highlight focus-visible:text-highlight sm:hidden group/link text-base'
                                  href={links[0].url}
                                  target='_blank'
                                  rel='noreferrer'
                                  aria-label={
                                    typeof project === 'string'
                                      ? project
                                      : project[lang]
                                  }
                                >
                                  <span>
                                    {' '}
                                    <span className='inline-block'>
                                      {typeof project === 'string'
                                        ? project
                                        : project[lang]}
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                                        aria-hidden='true'
                                      >
                                        <path
                                          fill-rule='evenodd'
                                          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                                          clipRule='evenodd'
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </Link>
                              ) : (
                                <span>
                                  {typeof project === 'string'
                                    ? project
                                    : project[lang]}
                                </span>
                              )}
                            </div>
                            <div className='hidden sm:block'>
                              {typeof project === 'string'
                                ? project
                                : project[lang]}
                            </div>
                          </div>
                        </td>
                        <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell'>
                          {madeAt && (
                            <div className='translate-y-px whitespace-nowrap'>
                              {madeAt}
                            </div>
                          )}
                        </td>
                        <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                          <ul className='flex -translate-y-1.5 flex-wrap'>
                            {builtWith.map((t) => (
                              <li className='my-1 mr-1.5'>
                                <div className='flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-highlight '>
                                  {t}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className='hidden py-4 align-top sm:table-cell'>
                          {links &&
                            links.map((link) => (
                              <ul className='translate-y-0'>
                                {' '}
                                {/* idk about this */}
                                <li className='mb-1 flex items-center'>
                                  {link.url.includes(
                                    'https://github.com/damiponce/',
                                  ) ? (
                                    <a
                                      className='flex items-center text-sm text-neutral-400 hover:text-highlight focus-visible:text-highlight font-medium leading-tight '
                                      href={link.url}
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <span>{link.name}</span>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 16 16'
                                        fill='currentColor'
                                        className='ml-1.5 h-3.5 w-3.5 shrink-0'
                                        aria-hidden='true'
                                      >
                                        <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                                      </svg>
                                    </a>
                                  ) : (
                                    <a
                                      className='inline-flex items-baseline font-medium leading-tight hover:text-highlight focus-visible:text-highlight text-sm text-neutral-400  group/link '
                                      href={link.url}
                                      target='_blank'
                                      rel='noreferrer'
                                      aria-label={link.name}
                                    >
                                      <span>
                                        {' '}
                                        <span className='inline-block'>
                                          {link.name}
                                          <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5'
                                            aria-hidden='true'
                                          >
                                            <path
                                              fill-rule='evenodd'
                                              d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                                              clipRule='evenodd'
                                            ></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </a>
                                  )}
                                </li>
                              </ul>
                            ))}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects'])),
    },
  };
};
