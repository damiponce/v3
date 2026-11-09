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
      <div className="absolute inset-0 bg-white border-t-8 border-[#c8102e]" />
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
