import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import '../components/github-markdown.css';
import { appWithTranslation } from 'next-i18next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import Script from 'next/script';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

function Root({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <>
        <style jsx global>{`
          :root {
            --inter-font: ${inter.style.fontFamily};
            --source-code-pro-font: ${sourceCodePro.style.fontFamily};
          }
        `}</style>
        <Head>
          <meta name='robots' content='all' />
          <meta name='googlebot' />
          <meta
            name='description'
            content='Developer and Engineering student'
            key='desc'
          />
          <meta property='og:image' content='https://damianponce.com/og.png' />
          <meta
            property='twitter:image'
            content='https://damianponce.com/og.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:title' content='Damián Ponce' />
          <meta
            property='twitter:description'
            content='Developer and Engineering student'
          />
          <meta property='og:url' content='https://damianponce.com' />
          <meta property='og:title' content='Damián Ponce' />
          <meta
            property='og:description'
            content='Developer and Engineering student'
          />
        </Head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-W2WTZGZP5B'
        />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W2WTZGZP5B');
        `}
        </Script>
        <Component {...pageProps} />
      </>
    </StrictMode>
  );
}
export default appWithTranslation(Root);
