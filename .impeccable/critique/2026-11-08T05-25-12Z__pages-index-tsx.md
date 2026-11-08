---
target: homepage
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:/Users/dam/dev/v3/pages/index.tsx"
target_fingerprint: "sha256:81dc95a009072d9477d40f9bce9782f4d0829224819e7d6055a8a541c48fb9e8"
target_path: /Users/dam/dev/v3/pages/index.tsx
timestamp: 2026-11-08T05-25-12Z
slug: pages-index-tsx
---
# Critique: homepage (pages/index.tsx)

Method: dual-agent. Dev server on :3000 returned 500 for main.js (missing vendor chunk in .next), so the page never hydrated; live review used SSR HTML with injected Tailwind. Fonts, hovers and entrance motion not seen live.

## Design Health Score: 18/32 (Acceptable, 56%). n/a: 7, 10.
1 Visibility 3 (scroll-spy desktop only) | 2 Real world 2 (author taxonomy; Licenciatura labelled MSc) | 3 Control 3 (resume opens same tab) | 4 Consistency 2 (broken highlight token tailwind.config.js:13,19; external icon on in-page anchors) | 5 Error prevention 1 (placeholder images on proof; opacity 0 until JS) | 6 Recognition 3 (rail scrolls away on mobile) | 7 n/a | 8 Minimalism 2 (ETI x3, ~40 pills, 6 empty thumbs) | 9 Recovery 2 (blank without JS, empty box without image) | 10 n/a

## Design specificity
Close adaptation of Brittany Chiang's v4 portfolio (credited in footer.tsx:22,36) plus generic decoration (name glow, moving grid, pulsing NEW badges, shimmer CTA). Only the IoT diagram is his own. Avionics/hardware range unused visually. Detector: 0 findings CLI (19 files, with and without config) and in-page (/en, /es, /projects, SSR DOM). Issues are template identity, content gaps and bugs, outside detector scope.

## Priority issues
- [P0] Lead proof projects show placeholder boxes (freelance.ts:26, coding.ts:28, engineering.ts:18); ETI url empty. Fix: no-image variant or diagram cards, real screenshots, ETI link/recording, drop unfinished engineering items. harden, delight.
- [P1] Page leads with resume duplicate (About, Experience, Education, then Featured at index.tsx:95-184); featured items repeat in Freelance/Coding. Fix: About, Featured, compact Experience, rest; filter FEATURED keys. layout, distill.
- [P1] Resume/contact buried, no closing CTA; resume links below Experience (index.tsx:123-134), ES listed first on EN; no email on home. Fix: locale-matched resume link + email in rail, closing block with availability/timezone. clarify, layout.
- [P1] Page invisible until JS: _app.tsx motion.div opacity 0 1.3s; section.tsx:14-19 stagger to ~2.1s. Fix: visible by default, post-hydration CSS motion, reduced-motion guard. animate, optimize.
- [P2] Borrowed identity + polish debt: highlight token, span-based lang switcher (lang-switcher.tsx:12-16), neutral-500 contrast ~3.8:1, 14px horizontal scroll at 390 (header.tsx:236-261, index.tsx:70), infinite animations without reduced-motion, " MSc" (education.ts:33), OG url /np (_app.tsx:91), no <title> in SSR head (verify on prod build). bolder, audit, polish.

## Persona red flags
Jordan: resume/email/availability not visible; jargon; freelance tiles lack descriptions (grid-card.tsx:96-138).
Riley: 6 placeholders, ETI x3, empty WIP description, MSc label, in-page link with external icon (experience.ts:46), dead hover, lang switch not keyboard reachable, "Temp text" description.
Casey: no proof on first screen, 14px wobble, ~11 screens tall, no CTA after first screen.
Eng lead: two sections duplicate the PDF; ETI no link/image; no recent code links; template recognition.

## Minor
Rotated PROJECTS label unreadable; NEW badge in nav; pill overload; mobile thumbnail/diagram sizing; canonical "/" both locales; interpreter role redundant; "WE'RE DOOMED" last image.

## Questions
Template recognition vs own taste; why repeat the PDF; three featured projects only; one 10-second end-to-end artifact for ETI.
