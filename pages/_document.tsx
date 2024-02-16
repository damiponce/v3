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
        {/* <meta property="og:image" content="<generated>" />
<meta property="og:image:type" content="<generated>" />
<meta property="og:image:width" content="<generated>" />
<meta property="og:image:height" content="<generated>" />
<meta property="twitter" content="<generated>" />
<meta property="twitter:type" content="<generated>" />
<meta property="twitter:width" content="<generated>" />
<meta property="twitter:height" content="<generated>" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
