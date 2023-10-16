import Image from 'next/image';
import { useRouter } from 'next/router';
import useKeypress from 'react-use-keypress';
import type { ImageProps } from '../../lib/utils';
import { useLastViewedPhoto } from '../../lib/utils';
import SharedModal from './shared-modal';
import { DesignImage } from '../../_sections/designs';

export default function Carousel({
  designIndex,
  index,
  currentPhoto,
}: {
  designIndex: number;
  index: number;
  currentPhoto: DesignImage;
}) {
  const router = useRouter();
  const [, setLastViewedPhoto] = useLastViewedPhoto();

  function closeModal() {
    // setLastViewedPhoto(currentPhoto.id);
    router.push('/design/', undefined, { shallow: true });
  }

  function changePhotoId(newVal: number) {
    return newVal;
  }

  useKeypress('Escape', () => {
    closeModal();
  });

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <button
        className='absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl'
        onClick={closeModal}
      >
        <Image
          src={`/assets/design/${currentPhoto.design}/${currentPhoto.public_id}.${currentPhoto.format}`}
          className='pointer-events-none h-full w-full blur-3xl scale-125 brightness-75'
          alt='blurred background'
          fill
          sizes={'15px'}
          priority={true}
        />
      </button>
      <SharedModal
        designIndex={designIndex}
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  );
}
