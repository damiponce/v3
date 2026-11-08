---
version: 1
slug: "pages-index-tsx"
primary_target: "pages/index.tsx"
related_targets: []
---

# Home page (pages/index.tsx)

Mode: Persuade. Audience: an engineering lead or recruiter with the résumé PDF open in the next tab, about a minute to decide. Job: show what he shipped, where, and at what level; action: open the résumé or email him. Proof: ETI (2,000+ users), IoT grill monitor (device + app), Music Timeline, freelance client sites. Constraints: ES/EN parity, voseo, no invented claims; screenshots for ETI and Music Timeline to come from the user (diagrams until then). Other routes (/projects, /freelance, /contact, /design) stay on the old world for now.

## Direction contract

THESIS: The developer documented like a component datasheet: title block, features, application notes, a functional block diagram, a typical-stack table and a revision history. Refuses the dark sticky-rail portfolio and the big "Hi, I'm" hero.

OWN-WORLD: White page, ink #0F1012, one signal red #C8102E for the top rule, section numbers, list markers and the primary action; table header fill #E6E7E9. 1px and 2px ink rules, square corners, no shadows, no cards. Barlow Condensed for the title block, section heads and figures; Barlow for running text; tabular figures in tables. Figures carry italic captions ("Figure 1.").

STORY: The visitor reads the title block and the features in seconds, sees the full chain in the block diagram (selecting a block highlights where that layer is used), checks the application notes for proof, scans the revision history for roles, the other applications table for client sites and personal projects (the Proof line), and the background table for education (PRODUCT.md evidence), and leaves through the résumé or email in the title block or the contact section.

FIRST VIEWPORT: Red rule, then a full-width title block table: name and one-line description, current role (from experience.ts), languages, and the résumé, other-language résumé and email. Below, three columns: 1 Features, 2 Applications, 3 Typical stack table; then the full-width functional block diagram (UI, Backend, Cloud functions, Device). Adaptations: no part number and no bare revision year in the title block (user guardrail "not costume-y"; a recruiter learns nothing from either). The header carries the genre label once and the résumé as a plain link; the title block holds the one red résumé button.

FORM: Component Datasheet, position 1 of 7 on the grounded list (Impeccable's pick, built on request alongside the assigned direction). seed:06927f1e7da4281b.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
