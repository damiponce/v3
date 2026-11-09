import { CSSProperties, ReactNode, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/blog.module.css';

export default function BlogFontPreview({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState('1918');
  const { locale } = useRouter();
  const requestedVariant = useRef(variant);

  async function changeVariant(nextVariant: string) {
    requestedVariant.current = nextVariant;
    // Explicit previews wait for their faces; initial rendering never swaps late.
    try {
      await Promise.all([
        document.fonts.load(`400 16px Reforma${nextVariant}`),
        document.fonts.load(`700 16px Reforma${nextVariant}`),
      ]);
    } catch {
      // Keep the selector usable with the fallback if a font request fails.
    }
    if (requestedVariant.current === nextVariant) setVariant(nextVariant);
  }
  return <div className={styles.blog} style={{ '--blog-font': `Reforma${variant}` } as CSSProperties}>
    <label className={styles.controls}>
      {locale === 'en' ? 'Typeface' : 'Tipografía'}
      <select value={variant} onChange={event => void changeVariant(event.target.value)}>
        {['1918', '1969', '2018'].map(year => <option key={year} value={year}>Reforma {year}</option>)}
      </select>
    </label>
    {children}
  </div>;
}
