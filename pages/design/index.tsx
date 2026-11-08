import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DESIGNS, { DesignSrc } from '../../_sections/designs';
import SheetPage from '../../components/sheet-page';
import Link from 'next/link';
import Image from 'next/image';
export function findDesign(number: number, items: DesignSrc) {
 return Object.values(items).find(images=>images.some(image=>image.design_id===number));
}
export default function Design({designItems}) {
 const {t}=useTranslation('design');
 return <><Head><title>{t('title')} | Damián Ponce</title></Head><SheetPage title={t('bigTitle')}>
 {DESIGNS.map((design,i)=><section key={design.id} id={design.id}><h2><span style={{color:'#c8102e'}}>{i+1}.</span> {t('name.'+design.name)}</h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{designItems[design.id].map(image=><figure key={image.id}>
 <Link href={`/design/p/${image.design_id}/${image.id}`}><Image src={`/assets/design/${image.design}/${image.public_id}.${image.format}`} width={image.width} height={image.height} alt={t('name.'+design.name)+' / '+(image.id+1)} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="w-full h-auto border border-black" /></Link>
 <figcaption className="text-sm italic mt-2">{t('name.'+design.name)} / {image.id+1}</figcaption></figure>)}</div></section>)}
 </SheetPage></>;
}
export const getStaticProps = async ({ locale }) => {
  var designItems: DesignSrc = {};
  var fs = require('fs');
  const path = require('path');
  var sizeOf = require('image-size');

  // iterate over DESIGNS, for each design get the list of files at assets/design/{design.id} and add the list to the designItems object
  let i = 0;
  for (const design of DESIGNS) {
    const dir = path.join(process.cwd(), 'public/assets/design', design.id);
    const files = fs
      .readdirSync(dir)
      .filter((file: any) => file.substr(-5) === '.webp');
    designItems[design.id] = [];
    let j = 0;
    files.forEach((file: any) => {
      const width = sizeOf(path.join(dir, file)).width;
      const height = sizeOf(path.join(dir, file)).height;
      designItems[design.id].push({
        design_id: i,
        id: j,
        design: design.id,
        public_id: file.substr(0, file.length - 5),
        format: sizeOf(path.join(dir, file)).type,
        width: width,
        height: height,
        ar: width / height,
      });
      j++;
    });
    i++;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['design'])),
      designItems,
    },
  };
};
