---
name: Damián Ponce
description: Personal site of a full-stack developer, laid out as a component datasheet.
colors:
  paper: "#ffffff"
  ink: "#0f1012"
  ink-2: "#2f3237"
  ink-3: "#5a5d62"
  fill: "#e6e7e9"
  tint: "#fbe9ec"
  signal-red: "#c8102e"
  signal-red-deep: "#a50d26"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(36px, 5vw, 52px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.02em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.1
  title-value:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.15
  body-lead:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  table:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  table-head:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.04em"
  caption:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  cell-x: "10px"
  block-x: "16px"
  gutter: "20px"
  frame-x: "24px"
  column-gap: "32px"
  section: "40px"
  closing: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "7px 12px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-deep}"
  table-head-cell:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.ink}"
    typography: "{typography.table-head}"
    padding: "6px 10px"
  table-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.table}"
    padding: "7px 10px"
  table-row-hot:
    backgroundColor: "{colors.tint}"
  title-block-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "12px 16px"
  figure-frame:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "20px 24px 12px"
  diagram-block:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  diagram-block-active:
    backgroundColor: "{colors.tint}"
  fixed-note:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.ink}"
    padding: "8px 12px"
  running-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    padding: "10px 20px"
---

# Design System: Damián Ponce

## Overview

**Creative North Star: "The Component Datasheet"**

The developer is documented the way a part is documented: a red top rule, a ruled title block, numbered sections, ruled tables with tabular figures, a functional block diagram, and figures with italic captions. The page is white paper and black ink. Structure comes from 1px and 2px ink rules, never from cards or shadows. One signal red marks the things a reader should find first: the top rule, section numbers, list markers, the primary action and the current selection.

Density is that of a technical document: compact tables, short lists, generous but regular section spacing, and a 1240px sheet width. Type is Barlow throughout, with Barlow Condensed for anything that names something (the name, section heads, values in the title block, figure block labels) and regular Barlow for running text. Motion is restrained to a 160ms state ease and one authored moment, the signal path in Figure 1 drawing in left to right.

The world was chosen to replace a dark, sticky-rail portfolio template. It currently covers the home page only.

**Key Characteristics:**
- White paper, near-black ink, one signal red.
- Square corners everywhere; frames are ink rules (1px inner, 2px outer).
- Condensed bold for names and heads, regular Barlow for reading.
- Numbered sections and numbered figures with italic captions.
- Tables with tabular figures and a grey header fill.
- No shadows, no gradients, no rounded cards.

## Colors

A monochrome ink-on-paper palette with a single signal red and its pale tint.

### Primary
- **Signal Red** (`signal-red`): the 8px top rule above the title block and the contact frame, section and note numbers, square list markers, the primary résumé button, the résumé link underline in the header, the focus outline, text selection, the "Fixed" run-in label, and the stroke of an active diagram block.
- **Deep Signal Red** (`signal-red-deep`): hover state of the primary button only.
- **Signal Tint** (`tint`): background of a highlighted table row and fill of an active diagram block. It marks the current selection and nothing else.

### Neutral
- **Paper** (`paper`): page, header, title block and figure backgrounds; text on the red button.
- **Ink** (`ink`): primary text and every rule, border, wire and arrowhead.
- **Ink 2** (`ink-2`): secondary running text: descriptions, note bodies, header nav links, diagram block subtitles.
- **Ink 3** (`ink-3`): tertiary text: field labels, captions, hints, metadata, muted table columns, footer.
- **Datasheet Grey** (`fill`): table header fill, diagram block fill, the "Fixed" note background, and the mobile row-label cell.

### Named Rules
**The One Signal Rule.** Red is a pointer, not a surface. It appears as rules, numerals, markers, outlines and the single primary button; it is never used for running text or for a fill larger than the 8px top rule.

**The Selection Tint Rule.** The pale red tint means "this is selected or linked to what you selected". Do not use it as decoration.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, Arial, sans-serif)
**Body Font:** Barlow (with Helvetica Neue, Arial, sans-serif)

**Character:** An industrial grotesque pair from one family. The condensed cut names things and sets the hierarchy; the regular cut carries all reading text, so the page reads like a printed spec sheet rather than a magazine.

Both faces load through `next/font/google` and are exposed as `--ds-cond` and `--ds-body`; the condensed face is applied by the `cond` class.

### Hierarchy
- **Display** (700, clamp(36px, 5vw, 52px), line-height 1): the name in the title block and the contact heading.
- **Headline** (700, 22px, uppercase, 0.02em): numbered section heads, set on a 2px ink underline with the red numeral before the text.
- **Title** (700, 26px, line-height 1.1): application note titles, with a red decimal number ("4.1").
- **Title Value** (600, 22px, line-height 1.15): the values in title block fields (current role, languages). The running header title uses the same face at 600, 17px.
- **Body Lead** (400, 17px): the one-line description under the name and the contact paragraph.
- **Body** (400, 16px, line-height 1.5): lists and running text; note bodies and contact text cap at 60ch.
- **Table** (400, 14.5px, tabular figures): every table body.
- **Table Head** (600, 13px, uppercase, 0.04em): table column headers on the grey fill.
- **Caption** (400 italic, 13px, ink-3): figure captions, always "Figure N." first.
- **Label** (600, 11px, uppercase, 0.08em, ink-3): field labels inside title block cells, and (at 0.04em) the mobile row labels that replace table headers.

### Named Rules
**The Condensed Names Rule.** Barlow Condensed is for names, heads, values and diagram labels. Paragraphs, lists and tables stay in regular Barlow.

**The Tabular Figures Rule.** Anything with numbers in columns (tables, section and figure numerals, the document line) uses tabular figures.

## Layout

A single sheet, max 1240px wide, centred, with a 20px side gutter that respects safe-area insets. A sticky running header (paper background, 1px ink bottom rule) holds the name, the genre label, section links, the language switch and the résumé link; section links hide below 900px and the genre label below 640px.

The sheet opens with the 8px red rule (28px below the header), then the title block: a four-column ruled grid (1.6fr 0.9fr 0.6fr 0.9fr) from 900px, collapsing to two columns with the name and the documents cell spanning full width. Below it, features, applications and the stack table sit in a column grid: one column, two from 760px, three (1fr 1fr 1.15fr) from 1100px, with 32px gaps (36px at the widest).

Sections are 40px apart. Application notes stack as rows divided by 1px ink rules, each a 260px figure column beside the text from 900px. The page closes with the contact frame 48px down and a small footer over a 1px rule.

Breakpoints in use: 640px (tables become labelled blocks; header trims), 760px (column grid; wide diagram replaces the tall one), 900px (title block row, note figure column, header section links), 1100px (three columns).

On phones every table row becomes a block: the header row is hidden, each cell shows its column name as a small uppercase label in a 76px left column, and the first cell takes the grey fill. The "other applications" table uses a compact variant with the project name leading each block.

## Elevation & Depth

Flat. There are no shadows anywhere; depth and grouping come from ink rules of two weights and from the grey fill. The sticky header separates itself with a 1px ink bottom rule and a solid paper background, not a shadow or blur.

### Named Rules
**The Ruled Not Raised Rule.** Group content with a frame of ink rules (2px outer, 1px inner) or a grey fill. Never lift it with a shadow.

## Shapes

Square corners throughout (0px), including buttons, frames, table cells, diagram blocks and the light-tone architecture diagrams. Outer frames (title block, figure, contact) use a 2px ink border; internal divisions, table cells and note dividers use 1px. The red 8px bar sits on top of the title block and replaces the top border of the contact frame, so the page opens and closes on the same mark. List markers are red squares. Diagram arrows are 2px ink wires with solid triangular heads.

## Components

### Buttons
Plain, rectangular, loud only in colour.
- **Shape:** square (0px).
- **Primary:** signal red background, white 600-weight text, 7px 12px padding. Used once in the title block and once in the contact frame, always for the résumé PDF.
- **Hover / Focus:** background darkens to deep signal red over 160ms; focus is the shared 2px red outline at 3px offset.
- **Secondary:** text links, 600 weight, underlined at 3px offset (the other-language résumé, email, contact form). In the header the résumé link is ink text with a 2px red underline.

### Navigation
The running header: Barlow Condensed name at 600 17px with an ink-3 genre label, then nav links in ink-2 at 14px, 18px apart. Hover turns the link ink and underlines it at 4px offset. On phones only the language switch and the résumé link remain.

### Title Block
The datasheet's identity table. A ruled grid with a red rule above it; each cell holds a small uppercase field label (ink-3) above a condensed value, padded 12px 16px. The first cell carries the display name, the description and the domain line in ink-3 tabular figures.

### Section Head
Uppercase condensed 22px head on a 2px ink underline, preceded by a red tabular numeral. Numbering is continuous down the page.

### Tables
Full-width, collapsed 1px ink borders, grey header row in uppercase 13px, body cells 7px 10px at 14.5px with tabular figures. Secondary columns go ink-3. A row linked to the current diagram selection takes the signal tint. Links inside cells are underlined. Below 640px rows become labelled blocks (see Layout).

### Figures
A 2px ink frame with 20px 24px 12px padding around an SVG, followed by an italic ink-3 caption ("Figure N. ...") and an optional ink-3 hint line. Inline note figures use a 1px frame with the caption beneath.

### Block Diagram (signature)
Grey-filled square blocks with 2px ink strokes and condensed bold labels, joined by 2px ink wires with solid arrowheads and small ink-3 wire labels. Each block is a keyboard and pointer toggle: hover, focus or selection fills it with the tint and switches the stroke to 3px signal red, and highlights the matching stack row and application notes. A tap pins the highlight. With motion allowed, the wires draw in over 700ms, staggered 120ms. Desktop shows a horizontal chain; below 760px a vertical one.

### Application Note
A row with a figure column and a text column, divided from its neighbours by a 1px ink rule. Condensed 26px title with a red decimal number, an ink-3 meta line, a 60ch ink-2 body, an optional "Fixed" note on the grey fill with a red uppercase run-in label, a "Parts" line, and underlined links. When the note uses the selected diagram layer, its title turns red.

### Contact Frame
A 2px ink frame with an 8px signal red top border, padded 22px 24px 26px, holding a display-size heading, a 17px paragraph with the email in bold ink, and a row with the primary résumé button and text links.

## Do's and Don'ts

### Do:
- **Do** frame and divide with ink rules: 2px for outer frames and section underlines, 1px for internal divisions and table cells.
- **Do** keep every corner square (0px), including diagrams and buttons.
- **Do** number sections, notes and figures, set the numerals in signal red with tabular figures, and caption every figure in italic ink-3 starting with "Figure N.".
- **Do** use Barlow Condensed for names, heads, values and diagram labels, and regular Barlow for all reading text.
- **Do** use the signal tint only to show the current selection and what it links to.
- **Do** gate the wire draw-in behind `prefers-reduced-motion: no-preference` and keep state transitions at 160ms with the `cubic-bezier(0.16, 1, 0.3, 1)` ease.
- **Do** turn tables into labelled blocks below 640px rather than letting them scroll sideways.

### Don't:
- **Don't** add shadows, blurs or gradients; this world is flat.
- **Don't** use rounded, filled or shadowed cards; group with a ruled frame or a grey fill.
- **Don't** spread red beyond rules, numerals, markers, outlines and the single primary button per block; no red body text or large red fills.
- **Don't** add a second accent colour.
- **Don't** reuse the 11px uppercase field-label style as a kicker or eyebrow above headings; it belongs inside title block cells and mobile table rows only.
- **Don't** add a part number or bare revision year to the title block, or other datasheet props a reader learns nothing from.
