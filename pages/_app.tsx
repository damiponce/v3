import { AppProps } from 'next/app';
import '../styles/index.css';
import '../components/github-markdown.css';
import { appWithTranslation } from 'next-i18next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function Root({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <meta name='robots' content='all' />
      <Component {...pageProps} />
    </div>
  );
}
export default appWithTranslation(Root);
