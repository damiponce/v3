import SheetPage from '../components/sheet-page';
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { InferGetStaticPropsType } from "next";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { z } from "zod";
import Back from "../components/back";
import Meta from "../components/meta";
import { redirect } from "next/navigation";
import Script from "next/script";
// import { useActionResult, redirect } from './your-server-framework';

export default function Contact(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t, i18n } = useTranslation("contact");
  const lang = i18n.language;

  return (
    <>
      <Head>
        <title>{`${t("title")} | Damián Ponce`}</title>
      </Head>
      <Meta />
      <SheetPage title={t("bigTitle")}>
        <div className="mx-auto min-h-screen max-w-[1000px]  px-6 py-0 font-sans md:px-12 md:py-0 lg:px-24 lg:py-0">
          <div className=" max-w-screen-xl mx-auto">
            <div className="">


              <h2 className="text-xl font-medium tracking-[-0.02em] text-neutral-700 sm:text-xl text-balance mt-2">
                <Trans
                  t={t}
                  i18nKey="subtitle"
                  components={{
                    email: (
                      <a
                        href="mailto:dev@damianponce.com"
                        className="text-black underline decoration-neutral-600 underline-offset-4 transition-colors hover:decoration-neutral-200 focus-visible:decoration-neutral-200"
                      />
                    ),
                  }}
                />
              </h2>
              <ul className="group/list mt-12"></ul>
            </div>
            <iframe
              data-tally-src={
                lang === "en"
                  ? "https://tally.so/embed/n04rGj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                  : "https://tally.so/embed/mZx5yo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
              }
              style={{ colorScheme: "light" }}
              title={t("bigTitle")}
              loading="lazy"
              width="100%"
              height="238"
              className="-mx-2"
            ></iframe>
            <Script
              src="https://tally.so/widgets/embed.js"
              strategy="beforeInteractive"
              onReady={() => {
                // @ts-ignore
                window.Tally?.loadEmbeds();
              }}
            ></Script>
          </div>
        </div>
      </SheetPage>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact"])),
    },
  };
};
