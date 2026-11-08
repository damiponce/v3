import SheetPage from '../components/sheet-page';
import Head from "next/head";
import Meta from "../components/meta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { allProjects } from "../_sections/allProjects";
import Link from "next/link";
import Back from "../components/back";
import LangSwitcher from "../components/lang-switcher";
import FREELANCE from "@/_sections/freelance";
import BigImgCard from "@/components/big-img-card";
import ArchDiagram from "@/components/arch-diagram";

export default function Freelance(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t, i18n } = useTranslation("freelance");
  const lang = i18n.language;

  return (
    <>
      <Head>
        <title>{`${t("title")} | Damián Ponce`}</title>
      </Head>
      <Meta />
      <SheetPage title={t("bigTitle")}>
        <div className="mx-auto min-h-screen max-w-screen-xl  px-6 py-0 font-sans md:px-12 md:py-0 lg:px-24 lg:py-0">
          <div className=" max-w-screen-xl mx-auto">
            <div className="">


              <h2 className="text-xl font-medium tracking-[-0.02em] text-neutral-700 sm:text-xl text-pretty mt-2">
                {t("subtitle")}
              </h2>
              <ul className="group/list mt-12">
                {FREELANCE.map((item) => (
                  <li key={item._key} className="border-b border-black py-6 grid gap-6 md:grid-cols-[260px_1fr]">
                    <div>{item.diagram ? <ArchDiagram name={item.diagram} lang={lang} layout="tile" tone="light" /> : item.img ? <img src={item.img} alt={item[lang].title} className="w-full h-auto border border-black" /> : null}</div>
                    <div><h2>{item[lang].title}</h2><p className="whitespace-pre-line">{item[lang].description}</p>
                    <p className="my-4 text-sm">{(item[lang].technologies ?? item.technologies)?.join(', ')}</p>
                    {item.url && <a className="underline mr-4" href={item.url}>{item[lang].title}</a>}
                    {item.links?.map(link=><a key={link.url} className="underline mr-4" href={link.url}>{link.name}</a>)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SheetPage>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["freelance"])),
    },
  };
};
