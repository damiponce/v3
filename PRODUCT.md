# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: employers.** Hiring managers, recruiters and engineering leads deciding whether to interview Damián for a developer role. They usually skim the site briefly next to a résumé, a LinkedIn profile or a job application, and need to quickly see what he has built, where, and at what level.

**Secondary: freelance prospects.** Small and medium businesses (current clients are in Argentina and Chile) looking for someone to build their website. The site should help them a little without competing with the employer pitch.

## Product Purpose

Damián Ponce's personal site. Its main job is to get him hired as a developer. Success means employers reach out or move him forward in a hiring process. Freelance inquiries are a welcome side effect.

## Positioning

**Full-stack developer** with 4+ years of paid client work, shipping web and mobile products end to end: UI, backend, cloud functions and ESP32-connected devices. Avionics technician background; works in Spanish and English.

The home subtitle and About text live in `_sections/positioning.tsx` (`ACTIVE_POSITIONING`). Earlier candidate angles (engineer + designer, ships for real users, design-minded frontend) are in git history at 27a37c9.

## Operating Context

- Visitors come from job applications, LinkedIn, GitHub and direct links, often with the résumé PDF already open.
- Bilingual audience: Spanish for local employers and clients, English for international ones.
- Résumés are downloadable in both languages and are a primary conversion path for employers.
- Freelance prospects reach out through the contact form, which asks for contact info, subject and a message about project, timeline and budget.

## Capabilities and Constraints

- Next.js 13 (pages router), TypeScript, Tailwind CSS, shadcn/ui primitives, framer-motion. Managed with pnpm; deployed on Vercel (a Docker build workflow exists but is commented out).
- **ES/EN bilingual is fixed.** Every page and content entry ships in both languages through next-i18next (`public/locales/{en,es}`) and the per-language objects in `_sections/*.ts`.
- **Contact form and résumé PDFs are core.** The contact page embeds a Tally form (one form per language; its field copy is edited in Tally, not in this repo) and shows `dev@damianponce.com` as the direct email. The `form` and `errors` strings in `contact.json` belong to an unused in-house form. CVs live at `public/assets/resume/CV_PONCE_{EN,ES}.pdf`.
- **Spanish copy uses Argentine voseo** ("escribime", "contame", "usá") everywhere.
- **The blog is real and planned.** The markdown pipeline (`_posts/`, KaTeX math, Shiki highlighting) stays, but the home section and nav link are hidden behind `SHOW_BLOG` in `lib/flags.ts` until real posts exist.
- **The design gallery is archived** in `archive/design` and is not part of the public site.
- PostHog analytics tracks page views and page leaves.
- OG images are generated at `pages/api/og.tsx`.
- Three.js / react-three-fiber 3D components exist but are currently disabled on the home page.
- Sections: About, Experience, Education, Projects (Freelance, Coding, Engineering), Design, Blog, Contact.

## Brand Commitments

- Name: Damián Ponce.
- Voice: first person, direct, plain. The current About copy sets the tone in both languages.
- Keep the datasheet influence visual. Use clear portfolio labels (Work & projects, Experience, Education), lead with the scope of the work, and leave implementation details to project descriptions. Describe language ability through working use rather than a CEFR level.

## Evidence on Hand

- Experience (`_sections/experience.ts`): Full-Stack Developer at Encuentro Tanguero del Interior (ETI, Jun 2025 to present; 2,000+ registered users, up to 1,000 MAU at peak; registration, approval and capacity management); Front-End Lead at GMF - LAyF - UTN FRH (2024, VFR battery simulation suite); Full-Stack Developer, freelance (May 2022 to present; web, mobile and IoT for clients in Argentina and Chile); Spanish-English Interpreter (Dec 2022 to Jan 2023).
- Featured projects (`_sections/featured.ts`) are picked by key from their own category: ETI and the IoT grill monitor (device + companion app, for a hardware startup client) from Freelance, and Music Timeline and SatView (personal projects) from Coding. **The grill client's product name must never appear anywhere in the repo**: no text, file names, alt text or URLs.
- Education (`_sections/education.ts`): CS degree at UBA - FCEyN (2026 onward), partial Electronic Engineering studies at UTN FRH (2021 to 2025, degree not completed), Avionics Technician at INAC - CIATA (2014 to 2020).
- Live freelance client sites (`_sections/freelance.ts`): Spark Argentina, DreamBuilders, Botaaguas, Vssete, ItalTechnics, Círculo Místico.
- Coding and engineering projects: `_sections/coding.ts`, `_sections/engineering.ts`, `data/projects/allProjects.json`.
- Archived design work: `archive/design/public/assets/design/` (not publicly served).
- Résumés in both languages (paths above).

**Absences that must not be faked:** no testimonials, client quotes, metrics beyond the ones above, or press. The blog has only placeholder posts (`_posts/test.md`, `_posts/wip.md`). The home `description` string in `public/locales/en/common.json` is still "Temp text".

## Product Principles

1. **Employer first.** Every section should help a hiring manager decide fast. Freelance material supports the case and never takes it over.
2. **Proof over claims.** Lead with what was built, where, and for whom. Real links, real roles, real numbers only.
3. **Bilingual parity.** Spanish and English are equal products. Nothing ships in one language only.
4. **Positioning is an experiment.** Keep framing changes small, isolated and easy to revert until an angle is chosen.
5. **Depth stays reachable but out of the way.** The design gallery, the blog and the long project lists are there for whoever wants to dig, without slowing down the skim.
