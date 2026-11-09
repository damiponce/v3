import { CSSProperties, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/blog.module.css';

export default function BlogFontPreview({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState('1918');
  const { locale } = useRouter();
  return <div className={styles.blog} style={{ '--blog-font': `Reforma${variant}` } as CSSProperties}>
    <label className={styles.controls}>
      {locale === 'en' ? 'Typeface' : 'Tipografía'}
      <select value={variant} onChange={event => setVariant(event.target.value)}>
        {['1918', '1969', '2018'].map(year => <option key={year} value={year}>Reforma {year}</option>)}
      </select>
    </label>
    {children}
  </div>;
}
