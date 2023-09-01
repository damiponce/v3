import Link from 'next/link';
import DateFormatter from './date-formatter';
import { format, parseISO } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import { useTranslation } from 'next-i18next';

type Props = {
  key: string;
  url: string;
  date: string;
  title: string;
  category?: string;
  excerpt?: string;
};

const TextCard = ({ key, url, date, title, category, excerpt }: Props) => {
  const dateISO = parseISO(date);

  const { t, i18n } = useTranslation();

  return (
    <li className='mb-12' key={key}>
      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(38,38,38,0.1)] lg:group-hover:drop-shadow-lg'></div>

        <header
          className='z-10 text-xs mb-2 mt-1 font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2 whitespace-pre-line sm:m-0'
          aria-label={date}
        >
          <span className='leading-[22px]'>
            {format(dateISO, 'LLLL	d, yyyy', {
              locale: i18n.language === 'es' ? es : enUS,
            })}
          </span>
          {'\n'}
          <span className='leading-[22px] inline-flex items-center '>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              className='h-3 w-3 mr-[5px] mb-[0.05rem]'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 12H7.6C7.03995 12 6.75992 12 6.54601 12.109C6.35785 12.2049 6.20487 12.3578 6.10899 12.546C6 12.7599 6 13.0399 6 13.6V16M12 12H16.4C16.9601 12 17.2401 12 17.454 12.109C17.6422 12.2049 17.7951 12.3578 17.891 12.546C18 12.7599 18 13.0399 18 13.6V16M12 12V8M11.1 8H12.9C13.4601 8 13.7401 8 13.954 7.89101C14.1422 7.79513 14.2951 7.64215 14.391 7.45399C14.5 7.24008 14.5 6.96005 14.5 6.4V4.6C14.5 4.03995 14.5 3.75992 14.391 3.54601C14.2951 3.35785 14.1422 3.20487 13.954 3.10899C13.7401 3 13.4601 3 12.9 3H11.1C10.5399 3 10.2599 3 10.046 3.10899C9.85785 3.20487 9.70487 3.35785 9.60899 3.54601C9.5 3.75992 9.5 4.03995 9.5 4.6V6.4C9.5 6.96005 9.5 7.24008 9.60899 7.45399C9.70487 7.64215 9.85785 7.79513 10.046 7.89101C10.2599 8 10.5399 8 11.1 8ZM5.1 21H6.9C7.46005 21 7.74008 21 7.95399 20.891C8.14215 20.7951 8.29513 20.6422 8.39101 20.454C8.5 20.2401 8.5 19.9601 8.5 19.4V17.6C8.5 17.0399 8.5 16.7599 8.39101 16.546C8.29513 16.3578 8.14215 16.2049 7.95399 16.109C7.74008 16 7.46005 16 6.9 16H5.1C4.53995 16 4.25992 16 4.04601 16.109C3.85785 16.2049 3.70487 16.3578 3.60899 16.546C3.5 16.7599 3.5 17.0399 3.5 17.6V19.4C3.5 19.9601 3.5 20.2401 3.60899 20.454C3.70487 20.6422 3.85785 20.7951 4.04601 20.891C4.25992 21 4.53995 21 5.1 21ZM17.1 21H18.9C19.4601 21 19.7401 21 19.954 20.891C20.1422 20.7951 20.2951 20.6422 20.391 20.454C20.5 20.2401 20.5 19.9601 20.5 19.4V17.6C20.5 17.0399 20.5 16.7599 20.391 16.546C20.2951 16.3578 20.1422 16.2049 19.954 16.109C19.7401 16 19.4601 16 18.9 16H17.1C16.5399 16 16.2599 16 16.046 16.109C15.8578 16.2049 15.7049 16.3578 15.609 16.546C15.5 16.7599 15.5 17.0399 15.5 17.6V19.4C15.5 19.9601 15.5 20.2401 15.609 20.454C15.7049 20.6422 15.8578 20.7951 16.046 20.891C16.2599 21 16.5399 21 17.1 21Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            {t(`category.${category}`)}
          </span>
        </header>
        <div className='z-10 sm:col-span-6'>
          <h3 className='font-medium leading-snug text-neutral-200'>
            <div>
              <Link
                className='inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-highlight focus-visible:text-neutral-100  group/link text-base'
                href={url}
                aria-label={`${title}`}
                locale={false}
              >
                <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                <span className='inline-block'>
                  {title}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </h3>
          {excerpt && <p className='mt-2 text-sm leading-normal'>{excerpt}</p>}
        </div>
      </div>
    </li>
  );
};

export default TextCard;
