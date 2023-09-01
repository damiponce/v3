import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { cn } from '../lib/utils';

const LangSwitcher = ({ rightSide = false }) => {
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const { pathname, asPath, query } = router;
  return (
    <span
      className={cn(
        'group/langsw w-fit inline-flex items-center font-medium text-neutral-500 cursor-pointer leading-tight px-1',
      )}
      onClick={() =>
        router.push({ pathname, query }, asPath, {
          locale: i18n.language === 'en' ? 'es' : 'en',
        })
      }
    >
      {/* <svg
        className='ml-0.5 h-4 w-4'
        viewBox='0 0 24 24'
        fill='none'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 12H19M19 12L13 6M19 12L13 18'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg> */}
      {rightSide ? (i18n.language === 'en' ? 'Español' : 'English') : null}
      <svg
        className={cn(
          'mx-1 h-4 w-4',
          'transition-transform group-hover/langsw:scale-[1.15] group-hover/langsw:-translate-x-0.5_ group-focus-visible/langsw:scale-[1.15] group-focus-visible/langsw:-translate-x-0.5_ motion-reduce:transition-none',
          rightSide ? 'origin-left' : 'origin-right',
        )}
        viewBox='0 0 24 24'
        fill='none'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3 12H21M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M12 21C4.75561 13.08 8.98151 5.7 12 3M12 21C19.2444 13.08 15.0185 5.7 12 3'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      {rightSide ? null : i18n.language === 'en' ? 'Español' : 'English'}
    </span>
  );
};

export default LangSwitcher;
