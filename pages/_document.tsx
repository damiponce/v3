import { Html, Head, Main, NextScript } from 'next/document';
import { useTranslation } from 'next-i18next';
import Script from 'next/script';

export default function Document() {
  const { i18n } = useTranslation();
  return (
    <Html lang={i18n.language}>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
