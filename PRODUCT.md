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

**Open decision.** Damián hasn't committed to a single angle yet and wants to try each one as a small, reversible change, possibly after talking to a hiring-process expert. The candidates, all supported by real facts:

1. **Engineer + designer:** engineering rigor (avionics technician, electronic engineering at UTN FRH, CS at UBA) combined with real design work.
2. **Ships for real clients and users:** live client sites, an event management system with 1000+ monthly users, and front-end lead on a research simulation suite.
3. **Design-minded frontend developer:** frontend specialist whose edge is taste and UX, actively growing into full-stack.

All three are written as variants of the home subtitle and About text in `_sections/positioning.tsx`, picked by `ACTIVE_POSITIONING`. Until one is chosen, keep new framing there instead of hard-coding it across the site.

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
- **The blog is real and planned.** The markdown pipeline (`_posts/`, KaTeX math, Shiki highlighting) stays, even though no real posts exist yet.
- **The design gallery stays but is secondary** (`pages/design`). It supports the story and is not a headline section.
- PostHog analytics tracks page views and page leaves.
- OG images are generated at `pages/api/og.tsx`.
- Three.js / react-three-fiber 3D components exist but are currently disabled on the home page.
- Sections: About, Experience, Education, Projects (Freelance, Coding, Engineering), Design, Blog, Contact.

## Brand Commitments

- Name: Damián Ponce.
- Voice: first person, direct, plain. The current About copy sets the tone in both languages.

## Evidence on Hand

- Experience (`_sections/experience.ts`): Full-Stack Web Developer at Encuentro Tanguero del Interior (Jun 2025 to present, 1000+ monthly users); Front-end Web Developer at GMF - LAyF - UTN FRH (Aug 2024 to present, leading front-end for a VFR battery simulation suite); Freelance Web Developer (May 2022 to present); Spanish-English Interpreter (Dec 2022 to Jan 2023).
- Education (`_sections/education.ts`): CS degree at UBA (2026 onward), Electronic Engineering at UTN FRH (2021 to 2025), Avionics Technician at INAC - CIATA (2014 to 2020).
- Live freelance client sites (`_sections/freelance.ts`): Spark Argentina, DreamBuilders, Botaaguas, Vssete, ItalTechnics, Círculo Místico.
- Coding and engineering projects: `_sections/coding.ts`, `_sections/engineering.ts`, `data/projects/allProjects.json`.
- Design work: `public/assets/design/`.
- Résumés in both languages (paths above).

**Absences that must not be faked:** no testimonials, client quotes, metrics beyond the ones above, or press. The blog has only placeholder posts (`_posts/test.md`, `_posts/wip.md`). The home `description` string in `public/locales/en/common.json` is still "Temp text".

## Product Principles

1. **Employer first.** Every section should help a hiring manager decide fast. Freelance material supports the case and never takes it over.
2. **Proof over claims.** Lead with what was built, where, and for whom. Real links, real roles, real numbers only.
3. **Bilingual parity.** Spanish and English are equal products. Nothing ships in one language only.
4. **Positioning is an experiment.** Keep framing changes small, isolated and easy to revert until an angle is chosen.
5. **Depth stays reachable but out of the way.** The design gallery, the blog and the long project lists are there for whoever wants to dig, without slowing down the skim.
