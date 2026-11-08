import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { allProjects } from '../_sections/allProjects';
import SheetPage from '../components/sheet-page';
export default function Projects() {
 const {t,i18n}=useTranslation('projects');
 return <><Head><title>{t('title')} | Damián Ponce</title></Head><SheetPage title={t('bigTitle')}>
 <table><thead><tr>{['year','project','madeAt','builtWith','links'].map(k=><th key={k} scope="col">{t(k)}</th>)}</tr></thead><tbody>
 {allProjects.map((p,i)=><tr key={i}>
 <td data-label={t('year')}>{p.year}</td>
 <td data-label={t('project')}>{typeof p.project==='string'?p.project:p.project[i18n.language]}</td>
 <td data-label={t('madeAt')}>{p.madeAt || '—'}</td>
 <td data-label={t('builtWith')}>{p.builtWith.join(', ')}</td>
 <td data-label={t('links')}><div>{p.links?.map(l=><a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.name}</a>)}</div></td>
 </tr>)}</tbody></table></SheetPage></>;
}
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects'])),
    },
  };
};
