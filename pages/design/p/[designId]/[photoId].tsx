import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Carousel from '@/components/gallery/carousel';
// import getResults from '@/utils/cachedImages'
// import cloudinary from '@/utils/cloudinary'
// import getBase64ImageUrl from '@/lib/utils'
import type { ImageProps } from '@/lib/utils';
import DESIGNS, { DesignSrc, DesignImage } from '@/_sections/designs';
import { findDesign } from '@/pages/design';

const Home: NextPage = ({ currentPhoto }: { currentPhoto: DesignImage }) => {
  const router = useRouter();
  const { any, designId, photoId } = router.query;
  let designIndex = Number(designId);
  let photoIndex = Number(photoId);

  const currentPhotoUrl = `/assets/design/${currentPhoto.design}/${currentPhoto.id}`;

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta property='og:image' content={currentPhotoUrl} />
        <meta name='twitter:image' content={currentPhotoUrl} />
      </Head>
      <main className='mx-auto max-w-[1960px] p-4'>
        <Carousel
          currentPhoto={currentPhoto}
          designIndex={designIndex}
          index={photoIndex}
        />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
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

  // search in designItems for the photo with design_id = context.params.designId and id = context.params.photoId
  const currentPhoto = findDesign(
    Number(context.params.designId),
    designItems,
  ).find((img) => img.id === Number(context.params.photoId));

  return {
    props: {
      currentPhoto: currentPhoto ?? null,
    },
  };
};

export async function getStaticPaths({ locales }) {
  var designItems: DesignSrc = {};
  var fs = require('fs');
  const path = require('path');
  var sizeOf = require('image-size');

  for (const design of DESIGNS) {
    const dir = path.join(process.cwd(), 'public/assets/design', design.id);
    const files = fs
      .readdirSync(dir)
      .filter((file: any) => file.substr(-5) === '.webp');
    designItems[design.id] = files;
  }

  let fullPaths = [];
  // iterate over every designItems key
  let m = 0;
  for (const design in designItems) {
    let n = 0;
    for (const photo of designItems[design]) {
      for (const locale of ['en', 'es']) {
        fullPaths.push({
          params: {
            designId: m.toString(),
            photoId: n.toString(),
          },
          locale,
        });
      }
      n++;
    }
    m++;
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
}
