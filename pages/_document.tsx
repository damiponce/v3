import { Html, Head, Main, NextScript } from 'next/document';
import { useTranslation } from 'next-i18next';
import Script from 'next/script';

export default function Document() {
  const { i18n } = useTranslation();
  return (
    <Html lang={i18n.language}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-W2WTZGZP5B' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W2WTZGZP5B');
        `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
