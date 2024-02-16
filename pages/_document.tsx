import { Html, Head, Main, NextScript } from 'next/document';
import { useTranslation } from 'next-i18next';
import Script from 'next/script';

export default function Document() {
  const { i18n } = useTranslation();
  return (
    <Html lang={i18n.language}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>
          Damián Ponce
        </title>
        <meta
          name="description"
          content="Developer and Engineering student"
          key="desc"
        />
        <meta
          property="og:image"
          content="https://damianponce.com/og.png"
        />
        <meta
          property="twitter:image"
          content="https://damianponce.com/og.png"
        />
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="Damián Ponce"/>
        <meta property="twitter:description" content="Developer and Engineering student"/>
        <meta property="og:url" content="https://damianponce.com"/>
        <meta property="og:title" content="Damián Ponce"/>
        <meta property="og:description" content="Developer and Engineering student"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
