import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
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
        <title>{t("title")}</title>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="beforeInteractive"
          onReady={() => {
            // @ts-ignore
            Tally.loadEmbeds();
          }}
        ></Script>
      </Head>
      <Meta />
      <div className="">
        <div className="mx-auto min-h-screen max-w-[1000px]  px-6 py-8 font-sans md:px-12 md:py-14 lg:px-24 lg:py-20">
          <div className=" max-w-screen-xl mx-auto">
            <div className="">
              <Back />
              <h1 className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl mt-4">
                {t("bigTitle")}
              </h1>
              <h2 className="text-xl font-medium tracking-[-0.02em] text-neutral-400 sm:text-xl text-balance mt-2">
                {t("subtitle")}
              </h2>
              <ul className="group/list mt-12"></ul>
            </div>
            <iframe
              data-tally-src={
                lang === "en"
                  ? "https://tally.so/embed/n04rGj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                  : "https://tally.so/embed/mZx5yo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
              }
              loading="lazy"
              width="100%"
              height="238"
              className="-mx-2"
            ></iframe>

            <script>{`Tally.loadEmbeds();`}</script>
          </div>
        </div>
      </div>
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
