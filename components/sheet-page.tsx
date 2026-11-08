import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import s from '../styles/datasheet.module.css';
import p from '../styles/sheet-page.module.css';

const body = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--ds-body' });
const cond = Barlow_Condensed({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--ds-cond' });

export default function SheetPage({ title, children }: { title: string; children: ReactNode }) {
  const router = useRouter();
  const en = router.locale === 'en';
  const links = [['/projects', en ? 'Projects' : 'Proyectos'], ['/design', en ? 'Design' : 'Diseño'], ['/blog', 'Blog'], ['/contact', en ? 'Contact' : 'Contacto']];
  return <div className={`${s.root} ${body.variable} ${cond.variable} ${p.root}`}>
    <a className={s.skip} href="#content">{en ? 'Skip to content' : 'Ir al contenido'}</a>
    <header className={p.header}><Link href="/" className="cond">Damián Ponce</Link>
      <nav aria-label={en ? 'Navigation' : 'Navegación'}>{links.map(([href, label]) => <Link key={href} href={href} aria-current={router.pathname === href ? 'page' : undefined}>{label}</Link>)}
      <Link href={{ pathname: router.pathname, query: router.query }} as={router.asPath} locale={en ? 'es' : 'en'}>{en ? 'Español' : 'English'}</Link></nav>
    </header>
    <main id="content" className={s.page}><h1 className={`cond ${p.title}`}>{title}</h1>{children}
      <footer className={p.footer}><Link href="/">Damián Ponce</Link> / <a href="mailto:dev@damianponce.com">dev@damianponce.com</a></footer>
    </main>
  </div>;
}
