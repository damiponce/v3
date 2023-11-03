import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import '../components/github-markdown.css';
import { appWithTranslation } from 'next-i18next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import Script from 'next/script';

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
        <meta name='googlebot' />
        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCJSFKXG');`}
        </Script>
        <Component {...pageProps} />
      </div>
    </StrictMode>
  );
}
export default appWithTranslation(Root);
