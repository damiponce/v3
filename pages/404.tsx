import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import FourOhFour from '../components/another-3d';

export default function Error(
  _props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { t, i18n } = useTranslation('projects');
  const lang = i18n.language;

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FourOhFour errorCode='404' />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects'])),
    },
  };
};
