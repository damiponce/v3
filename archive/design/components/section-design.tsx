import Image from 'next/image';
import { cn, useLastViewedPhoto } from '../lib/utils';
import { Design, DesignImage } from '../_sections/designs';
import { TFunction } from 'i18next';
import { Masonry } from 'masonic';
import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from 'react';
import { useRouter } from 'next/router';
import Modal from './gallery/modal';
import Link from 'next/link';

type Props = {
  t: TFunction<'translation', undefined>;
  design: Design;
  items: DesignImage[];
  className?: string;
  lvp?: LVP;
  isTitleSticky?: boolean;
};

export type LVP = {
  designId: number;
  photoId: number;
};

type CardType = {
  image: DesignImage;
  lvp: LVP;
};

const SectionDesign = forwardRef<any, Props>(
  // ({ t, design, items, className, lvp, ref }: Props) => {
  (props, ref) => {
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
      setShowComponent(true);
    }, []);

    const theseItems = props.items.map((item) => {
      return { image: item, lvp: props.lvp };
    });

    return (
      <section
        id={props.design.id}
        data-heading
        className={cn(
          'mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24',
          false ? 'border-dashed border-red-600 border-2' : '',
          props.className,
        )}
      >
        <div
          data-design-title
          className='sticky top-0 z-10 -mx-6 mb-4 w-screen bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 _lg:sr-only _lg:relative _lg:top-auto _lg:mx-auto _lg:w-full _lg:px-0 _lg:py-0 _lg:opacity-0 lg:w-min lg:rounded-bl-[28px] lg:rounded-br-[28px] lg:rounded-tl-[28px] lg:rounded-tr-[28px] lg:px-7 lg:-mx-7 transition-all'
          ref={props.isTitleSticky ? ref : null}
        >
          <h2 className='text-lg font-extrabold uppercase tracking-[0.075em] text-neutral-200 _lg:sr-only whitespace-nowrap'>
            {props.t(`name.${props.design.name}`)}
          </h2>
        </div>
        {/* <h3 className='p-4 -m-4 text-xl'>{name}</h3> */}
        {showComponent && (
          <Masonry
            items={theseItems}
            // render={(e) => (
            //   <CardWithRef image={e.data.image} lvp={e.data.lvp} ref={ref} />
            // )}
            render={Card}
            overscanBy={2}
            columnGutter={8}
            columnWidth={230}
          />
        )}
      </section>
    );
  },
);

const CardWithRef = forwardRef<HTMLAnchorElement, CardType>((props, ref) => (
  <div className='relative'>
    <Link
      key={`${props.image.design_id}-${props.image.id}`}
      href={`?designId=${props.image.design_id}&photoId=${props.image.id}`}
      as={`/design/p/${props.image.design_id}/${props.image.id}`}
      ref={
        props.image.design_id === props.lvp?.designId &&
        props.image.id === props.lvp?.photoId
          ? ref
          : null
      }
      shallow
      className='after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight'
    >
      <Image
        src={`/assets/design/${props.image.design}/${props.image.public_id}.${props.image.format}`}
        width={0}
        height={0}
        // loading='lazy'
        decoding='async'
        data-nimg='1'
        alt='' // !!!!!!!!
        sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
        className='w-full h-auto text-transparent object-contain rounded-[4px] '
      />
    </Link>
  </div>
));

const Card = ({ data }) => (
  <Link
    key={`${data.image.design_id}-${data.image.id}`}
    href={`?designId=${data.image.design_id}&photoId=${data.image.id}`}
    as={`/design/p/${data.image.design_id}/${data.image.id}`}
    // ref={
    //   data.image.design_id === data.lvp?.designId &&
    //   data.image.id === data.lvp?.photoId
    //     ? null
    //     : null
    // }
    shallow
    className='after:content group relative _mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight after:!shadow-[rgba(255,255,255,0.05)]'
  >
    <Image
      src={`/assets/design/${data.image.design}/${data.image.public_id}.${data.image.format}`}
      width={0}
      height={0}
      // loading='lazy'
      decoding='async'
      data-nimg='1'
      alt='' // !!!!!!!!
      sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
      className='w-full h-auto text-transparent object-contain rounded-lg transform brightness-95 transition will-change-auto group-hover:brightness-110'
    />
  </Link>
);

export default SectionDesign;
