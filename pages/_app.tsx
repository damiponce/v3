import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import '../components/github-markdown.css';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';
import { NextSeo } from 'next-seo';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// import { Inter, Source_Code_Pro } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
// const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

function Root({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <>
        <style jsx global>
          {`
            :root {
              --font-geist-sans: ${GeistSans.style.fontFamily};
              --font-geist-mono: ${GeistMono.style.fontFamily};
            }
          `}
        </style>
        {/* --inter-font: ${inter.style.fontFamily};
            --source-code-pro-font: ${sourceCodePro.style.fontFamily}; */}
        <NextSeo
          title='Damián Ponce'
          description='Developer and Engineering student'
          canonical='https://damianponce.com/'
          openGraph={{
            url: 'https://damianponce.com/np',
            title: 'Damián Ponce',
            description: 'Developer and Engineering student',
            images: [
              {
                url: 'https://damianponce.com/og.png',
                width: 1200,
                height: 630,
                alt: 'Damián Ponce - OG Image',
                type: 'image/png',
              },
            ],
            siteName: 'Damián Ponce',
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />
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
