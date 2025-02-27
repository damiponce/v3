import { Html, Head, Main, NextScript } from 'next/document';
import { useTranslation } from 'next-i18next';
import Script from 'next/script';

export default function Document() {
  const { i18n } = useTranslation();
  return (
    <Html lang={i18n.language} style={{ backgroundColor: 'rgb(23,23,23)' }}>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
