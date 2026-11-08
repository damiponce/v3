// Direct contact details shared by the header rail, the Experience section
// and the closing contact block on the home page.

export const EMAIL = 'dev@damianponce.com';

const RESUME = {
  en: '/assets/resume/CV_PONCE_EN.pdf',
  es: '/assets/resume/CV_PONCE_ES.pdf',
};

// The résumé in the page's language first, then the other one.
export const resumeFor = (lang: string) =>
  lang === 'es'
    ? { main: RESUME.es, other: RESUME.en }
    : { main: RESUME.en, other: RESUME.es };
