import { Html, Head, Main, NextScript } from 'next/document';
import { useTranslation } from 'next-i18next';

export default function Document() {
  const { i18n } = useTranslation();
  return (
    <Html lang={i18n.language}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCJSFKXG"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </Html>
  );
}
