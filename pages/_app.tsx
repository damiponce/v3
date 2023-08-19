import { AppProps } from 'next/app';
import '../styles/index.css';
import { appWithTranslation } from 'next-i18next';

function Root({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default appWithTranslation(Root);
