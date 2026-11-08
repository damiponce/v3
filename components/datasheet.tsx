import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import { useState } from 'react';

import s from '../styles/datasheet.module.css';
import ArchDiagram from './arch-diagram';
import {
  APPLICATIONS,
  EDUCATION,
  EXPERIENCE,
  FEATURED,
  FEATURED_LAYERS,
  FEATURES,
  LAYERS,
  formatDate,
  otherProjects,
  pickL,
  type Layer,
} from '../_sections/datasheet';
import { EMAIL, resumeFor } from '../lib/contact';

const cond = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--ds-cond',
});
const body = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ds-body',
});

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

// Figure 1. Each block is a toggle: hovering, focusing, tapping or pressing
// Enter/Space on one highlights the stack row and the application notes that
// use that layer. A tap pins the highlight until the block is tapped again.
const SUB: Record<Layer, string> = {
  ui: 'Next.js · React Native',
  backend: 'Auth · custom claims',
  cloud: 'Firebase',
  device: 'ESP32 · SoftAP',
};
const WIRES = ['HTTPS', 'Triggers', 'Wi-Fi'];

function BlockDiagram({
  lang,
  hover,
  setHover,
  pinned,
  setPinned,
}: {
  lang: string;
  hover: Layer | null;
  setHover: (l: Layer | null) => void;
  pinned: Layer | null;
  setPinned: (l: Layer | null) => void;
}) {
  const { t } = useTranslation();
  const tl = pickL(lang);
  // Unpinning also clears the focus/hover preview, so a second tap on a
  // touch screen (where the block keeps focus) removes the highlight.
  const toggle = (id: Layer) => {
    if (pinned === id) {
      setPinned(null);
      setHover(null);
    } else {
      setPinned(id);
    }
  };

  const block = (
    l: (typeof LAYERS)[number],
    x: number,
    y: number,
    w: number,
    h: number,
    inner: boolean,
  ) => (
    <g
      key={l.id}
      className={s.block}
      tabIndex={0}
      role='button'
      aria-pressed={pinned === l.id}
      aria-label={`${tl(l.name)}: ${l.parts}`}
      data-hot={hover === l.id}
      onMouseEnter={() => setHover(l.id)}
      onMouseLeave={() => setHover(null)}
      onFocus={() => setHover(l.id)}
      onBlur={() => setHover(null)}
      onClick={() => toggle(l.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle(l.id);
        }
      }}
    >
      <rect x={x} y={y} width={w} height={h} />
      <text
        x={x + w / 2}
        y={inner ? y + 25 : y + h / 2 + 9}
        textAnchor='middle'
        fontSize={inner ? 22 : 26}
        fontWeight={700}
        className='cond'
      >
        {tl(l.name)}
      </text>
      {inner && (
        <text x={x + w / 2} y={y + 45} textAnchor='middle' fontSize={13} className={s.sub}>
          {SUB[l.id]}
        </text>
      )}
    </g>
  );

  return (
    <>
      <svg viewBox='0 0 1120 150' className={s.wide} role='group' aria-label={t('ds.fig1')}>
        <defs>
          <marker id='ds-ah' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='8' markerHeight='8' orient='auto'>
            <path d='M0 0L10 5L0 10z' fill='#0f1012' />
          </marker>
        </defs>
        {LAYERS.map((l, i) => block(l, 10 + i * 300, 20, 200, 80, false))}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            className={s.wire}
            pathLength={100}
            d={`M${214 + i * 300} 60H${304 + i * 300}`}
            markerEnd='url(#ds-ah)'
          />
        ))}
        {WIRES.map((w, i) => (
          <text key={w} x={259 + i * 300} y={50} textAnchor='middle' className={s.figLabel}>
            {w}
          </text>
        ))}
        {LAYERS.map((l, i) => (
          <text key={l.id} x={110 + i * 300} y={128} textAnchor='middle' className={s.figLabel}>
            {SUB[l.id]}
          </text>
        ))}
      </svg>
      <svg viewBox='0 0 320 362' className={s.tall} role='group' aria-label={t('ds.fig1')}>
        <defs>
          <marker id='ds-ah2' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='8' markerHeight='8' orient='auto'>
            <path d='M0 0L10 5L0 10z' fill='#0f1012' />
          </marker>
        </defs>
        {LAYERS.map((l, i) => block(l, 30, 6 + i * 96, 220, 56, true))}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            className={s.wire}
            pathLength={100}
            d={`M140 ${66 + i * 96}V${98 + i * 96}`}
            markerEnd='url(#ds-ah2)'
          />
        ))}
        {WIRES.map((w, i) => (
          <text key={w} x={152} y={86 + i * 96} className={s.figLabel}>
            {w}
          </text>
        ))}
      </svg>
    </>
  );
}

export default function Datasheet() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const lk = lang === 'es' ? 'es' : 'en';
  const tl = pickL(lang);
  const router = useRouter();
  const other = lang === 'en' ? 'es' : 'en';
  const resume = resumeFor(lang);
  const [hover, setHover] = useState<Layer | null>(null);
  const [pinned, setPinned] = useState<Layer | null>(null);
  const hot = hover ?? pinned;
  const others = otherProjects(lang);
  // The first experience entry is the current role.
  const current = EXPERIENCE[0];

  return (
    <div className={cx(s.root, cond.variable, body.variable)} lang={lang}>
      <a href='#features' className={s.skip}>
        {t('ds.skip')}
      </a>
      <header className={s.run}>
        <div className={s.runInner}>
          <span className={cx(s.runTitle, 'cond')}>
            Damián Ponce <span>· {t('ds.kind')}</span>
          </span>
          <nav className={s.runNav} aria-label={t('ds.sections')}>
            <a className={s.sec} href='#applications'>{t('ds.h.notes')}</a>
            <a className={s.sec} href='#history'>{t('ds.h.history')}</a>
            <a className={s.sec} href='#contact'>{t('ds.h.contact')}</a>
            <Link
              href={{ pathname: router.pathname, query: router.query }}
              as={router.asPath}
              locale={other}
              hrefLang={other}
              lang={other}
            >
              {other === 'es' ? 'Español' : 'English'}
            </Link>
            <a className={s.runCv} href={resume.main} target='_blank' rel='noreferrer'>
              {t('resume')}
            </a>
          </nav>
        </div>
      </header>

      <main className={s.page}>
        <div className={s.rule} />
        <div className={s.tb}>
          <div>
            <h1 className={cx(s.name, 'cond')}>Damián Ponce</h1>
            <span className={s.desc}>{t('ds.description')}</span>
            <span className={s.docno}>damianponce.com</span>
          </div>
          <div>
            <small>{t('ds.currentRole')}</small>
            <span className={cx(s.tbValue, 'cond')}>{current[lk].title}</span>
            <span className={s.tbSub}>
              ETI · {formatDate(current[lk].date, lang)}
            </span>
          </div>
          <div>
            <small>{t('ds.languages')}</small>
            <span className={cx(s.tbValue, 'cond')}>ES · EN (C2)</span>
          </div>
          <div>
            <small>{t('ds.documents')}</small>
            <div className={s.tbLinks}>
              <a className={s.primary} href={resume.main} target='_blank' rel='noreferrer'>
                {t('resume')}
              </a>
              <a href={resume.other} target='_blank' rel='noreferrer'>
                {t('resumeOther')}
              </a>
              <a className={s.mailText} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className={s.cols}>
          <section id='features' className={s.section} aria-labelledby='h-features'>
            <h2 id='h-features' className={cx(s.h2, 'cond')}>
              <span className={s.n}>1</span>
              {t('ds.h.features')}
            </h2>
            <ul className={s.list}>
              {FEATURES.map((f) => (
                <li key={f.en}>{tl(f)}</li>
              ))}
            </ul>
          </section>
          <section className={s.section} aria-labelledby='h-apps'>
            <h2 id='h-apps' className={cx(s.h2, 'cond')}>
              <span className={s.n}>2</span>
              {t('ds.h.applications')}
            </h2>
            <ul className={s.list}>
              {APPLICATIONS.map((a) => (
                <li key={a.en}>{tl(a)}</li>
              ))}
            </ul>
          </section>
          <section className={s.section} aria-labelledby='h-stack'>
            <h2 id='h-stack' className={cx(s.h2, 'cond')}>
              <span className={s.n}>3</span>
              {t('ds.h.stack')}
            </h2>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>{t('ds.col.layer')}</th>
                    <th>{t('ds.col.parts')}</th>
                    <th>{t('ds.col.usedIn')}</th>
                  </tr>
                </thead>
                <tbody>
                  {LAYERS.map((l) => (
                    <tr key={l.id} data-hot={hot === l.id}>
                      <td className={s.nowrap} data-label={t('ds.col.layer')}>{tl(l.name)}</td>
                      <td data-label={t('ds.col.parts')}>{l.parts}</td>
                      <td className={s.muted} data-label={t('ds.col.usedIn')}>{tl(l.usedIn)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <figure className={s.figure}>
          <BlockDiagram
            lang={lang}
            hover={hover}
            setHover={setHover}
            pinned={pinned}
            setPinned={setPinned}
          />
          <figcaption className={s.caption}>{t('ds.fig1')}</figcaption>
          <p className={s.hint}>{t('ds.fig1hint')}</p>
        </figure>

        <section id='applications' className={s.section} aria-labelledby='h-notes'>
          <h2 id='h-notes' className={cx(s.h2, 'cond')}>
            <span className={s.n}>4</span>
            {t('ds.h.notes')}
          </h2>
          <div className={s.notes}>
            {FEATURED.map((p, i) => {
              const c = p[lk];
              const [main, fixed] = (c.description ?? '').split('\n\n');
              const layers = FEATURED_LAYERS[p._key] ?? [];
              const isHot = hot !== null && layers.includes(hot);
              const fixedText = fixed?.replace(/^(Hardest problem|El problema más difícil):\s*/, '');
              return (
                <article key={p._key} className={s.note} data-hot={isHot}>
                  <figure className={s.noteFig}>
                    {p.diagram ? (
                      <ArchDiagram name={p.diagram} lang={lang} layout='tile' tone='light' />
                    ) : null}
                    <figcaption className={s.caption}>
                      {t('ds.figure')} {i + 2}. {t(`ds.figs.${p._key}`)}
                    </figcaption>
                  </figure>
                  <div>
                    <h3 className={cx(s.noteTitle, 'cond')}>
                      <span className={s.n}>4.{i + 1}</span>
                      {c.title}
                    </h3>
                    <p className={s.noteMeta}>{t(`ds.meta.${p._key}`)}</p>
                    <p className={s.noteBody}>{main}</p>
                    {fixedText && (
                      <p className={s.fixed}>
                        <b>{t('ds.fixed')}</b>
                        {fixedText}
                      </p>
                    )}
                    <p className={s.parts}>
                      <b>{t('ds.col.parts')}:</b>
                      {(c.technologies ?? p.technologies ?? []).join(', ')}
                    </p>
                    {(p.url || p.links?.length) && (
                      <p className={s.noteLinks}>
                        {p.url && (
                          <a href={p.url} target='_blank' rel='noreferrer'>
                            {p.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </a>
                        )}
                        {p.links?.map((l) => (
                          <a key={l.url} href={l.url} target='_blank' rel='noreferrer'>
                            {l.name}
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id='history' className={s.section} aria-labelledby='h-history'>
          <h2 id='h-history' className={cx(s.h2, 'cond')}>
            <span className={s.n}>5</span>
            {t('ds.h.history')}
          </h2>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>{t('ds.col.date')}</th>
                  <th>{t('ds.col.role')}</th>
                  <th>{t('ds.col.where')}</th>
                  <th>{t('ds.col.notes')}</th>
                </tr>
              </thead>
              <tbody>
                {EXPERIENCE.filter((e) => !e.hideOnHome).map((e) => (
                  <tr key={e._key}>
                    <td className={s.nowrap} data-label={t('ds.col.date')}>{formatDate(e[lk].date, lang)}</td>
                    <td data-label={t('ds.col.role')}>{e[lk].title}</td>
                    <td data-label={t('ds.col.where')}>{e[lk].position}</td>
                    <td className={s.muted} data-label={t('ds.col.notes')}>{e[lk].description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={s.section} aria-labelledby='h-other'>
          <h2 id='h-other' className={cx(s.h2, 'cond')}>
            <span className={s.n}>6</span>
            {t('ds.h.other')}
          </h2>
          <div className={s.tableWrap}>
            <table className={cx(s.table, s.compact)}>
              <thead>
                <tr>
                  <th>{t('ds.col.year')}</th>
                  <th>{t('ds.col.project')}</th>
                  <th>{t('ds.col.type')}</th>
                  <th>{t('ds.col.link')}</th>
                </tr>
              </thead>
              <tbody>
                {others.map((r) => (
                  <tr key={r.key}>
                    <td className={s.nowrap} data-label={t('ds.col.year')}>{r.year}</td>
                    <td data-label={t('ds.col.project')}>{r.title}</td>
                    <td className={s.muted} data-label={t('ds.col.type')}>{r.type}</td>
                    <td data-label={t('ds.col.link')}>
                      {r.url ? (
                        <a href={r.url} target='_blank' rel='noreferrer'>
                          {r.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </a>
                      ) : (
                        <span className={s.muted}>{t('ds.noLink')}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={s.noteLinks}>
            <Link href='/projects'>{t('ds.allProjects')}</Link>
            <Link href='/design'>{t('ds.design')}</Link>
            <Link href='/blog'>Blog</Link>
          </p>
        </section>

        <section className={s.section} aria-labelledby='h-bg'>
          <h2 id='h-bg' className={cx(s.h2, 'cond')}>
            <span className={s.n}>7</span>
            {t('ds.h.background')}
          </h2>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>{t('ds.col.date')}</th>
                  <th>{t('ds.col.program')}</th>
                  <th>{t('ds.col.where')}</th>
                </tr>
              </thead>
              <tbody>
                {EDUCATION.map((e) => (
                  <tr key={e._key}>
                    <td className={s.nowrap} data-label={t('ds.col.date')}>{formatDate(e[lk].date, lang)}</td>
                    <td data-label={t('ds.col.program')}>{e[lk].title.trim()}</td>
                    <td data-label={t('ds.col.where')}>{e[lk].place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id='contact' className={s.contact} aria-labelledby='h-contact'>
          <h2 id='h-contact' className={cx(s.contactTitle, 'cond')}>
            {t('ds.h.contact')}
          </h2>
          <p className={s.contactText}>
            {t('closing.bodyBefore')}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            {t('closing.bodyAfter')}
          </p>
          <div className={s.contactLinks}>
            <a className={s.primary} href={resume.main} target='_blank' rel='noreferrer'>
              {t('resume')}
            </a>
            <a href={resume.other} target='_blank' rel='noreferrer'>
              {t('resumeOther')}
            </a>
            <Link href='/contact'>{t('closing.form')}</Link>
          </div>
        </section>
        <div className={s.foot}>
          <span>damianponce.com</span>
          <span>{t('ds.footer')}</span>
        </div>
      </main>
    </div>
  );
}
