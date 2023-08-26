import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../components/container';
import PostBody from '../components/post-body';
import Header from '../components/header';
import PostHeader from '../components/post-header';
import Layout from '../components/layout';
import { getPostBySlug, getAllPosts } from '../lib/api';
import PostTitle from '../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import markdownToHtml from '../lib/markdownToHtml';
import type PostType from '../interfaces/post';
import Meta from '../components/meta';
import { serialize } from 'react-serialize';
import sizeOf from 'image-size';
import { join } from 'path';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { allProjects } from '../_sections/allProjects';
import Link from 'next/link';
import Back from '../components/back';

export default function Post(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const router = useRouter();

  const { t } = useTranslation('');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Meta />
      <div className=''>
        <div className='mx-auto min-h-screen max-w-screen-xl  px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:py-24 max-w-2xl mx-auto'>
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
                      {t('link')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allProjects.map(
                    ({ year, project, madeAt, builtWith, link }) => (
                      <tr className='border-b border-neutral-300/10 last:border-none'>
                        <td className='py-4 pr-4 align-top text-sm'>
                          <div className='translate-y-px'>{year}</div>
                        </td>
                        <td className='py-4 pr-4 align-top font-semibold leading-snug text-neutral-200'>
                          <div>
                            <div className='block sm:hidden'>
                              {link ? (
                                <Link
                                  className='inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-highlight focus-visible:text-highlight hover:text-neutral-200 focus-visible:text-highlight sm:hidden group/link text-base'
                                  href={link.url}
                                  target='_blank'
                                  rel='noreferrer'
                                  aria-label={project}
                                >
                                  <span>
                                    {' '}
                                    <span className='inline-block'>
                                      {project}
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
                                          clip-rule='evenodd'
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </Link>
                              ) : (
                                <span>{project}</span>
                              )}
                            </div>
                            <div className='hidden sm:block'>{project}</div>
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
                          {link && (
                            <ul className='translate-y-1'>
                              <li className='mb-1 flex items-center'>
                                <a
                                  className='inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-highlight focus-visible:text-highlight text-sm text-neutral-400 hover:text-neutral-200 focus-visible:text-highlight group/link text-sm'
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
                                          clip-rule='evenodd'
                                        ></path>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          )}
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
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
