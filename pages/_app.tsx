import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import '../components/github-markdown.css';
import { appWithTranslation } from 'next-i18next';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

function Root({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <div>
        <style jsx global>{`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --source-code-pro-font: ${sourceCodePro.style.fontFamily};
          }
        `}</style>
        <meta name='robots' content='all' />
        <Component {...pageProps} />
      </div>
    </StrictMode>
  );
}
export default appWithTranslation(Root);
