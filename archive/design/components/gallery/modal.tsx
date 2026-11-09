import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import useKeypress from 'react-use-keypress';
import type { ImageProps } from '../../lib/utils';
import SharedModal from './shared-modal';
import { DesignImage } from '../../_sections/designs';

export default function Modal({
  designIndex,
  images,
  onClose,
}: {
  designIndex: number;
  images: DesignImage[];
  onClose?: () => void;
}) {
  let overlayRef = useRef();
  const router = useRouter();

  const { photoId } = router.query;
  let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    router.push('/design/', undefined, { shallow: true });
    onClose();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router.push(
      {
        query: { designId: designIndex, photoId: newVal },
      },
      `/design/p/${designIndex}/${newVal}`,
      { shallow: true },
    );
  }

  useKeypress('ArrowRight', () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress('ArrowLeft', () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className='fixed inset-0 z-10 flex items-center justify-center'
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key='backdrop'
        className='fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        designIndex={designIndex}
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
