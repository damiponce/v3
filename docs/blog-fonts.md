# Blog fonts

The blog index and posts include a temporary typeface selector for Reforma 1918,
1969, and 2018. The default is 1918. Navigation and page chrome retain Barlow.
Reforma 1918 is the serif family; the other families are supplied for comparison.

Only WOFF2 files are included. Reforma uses `font-display: optional` to avoid swapping fonts after first paint.
The blog list preloads only the default 1918 regular and bold faces it uses.
Other faces load on demand; the typeface selector waits for regular and bold
before applying an explicitly selected family. Server Mono uses `swap`. Blog styles are
imported through BlogFontPreview, and no other routes use these font families.
Server Mono is used for blog code, with Geist Mono and system monospace fallbacks.

Reforma: © 2018 Universidad Nacional de Córdoba. Designed by Alejandro Lo Celso,
programmed by Guido Ferreyra, PampaType. Original fonts are unmodified; the
included license and README are in public/fonts/reforma.
Server Mono source: https://github.com/internet-development/www-server-mono
Its OFL license is included in public/fonts/server-mono.

# Contact form theme

The contact page embeds Tally forms n04rGj (English) and mZx5yo (Spanish).
The iframe declares a light browser color scheme, but its internal field and text
colors are controlled by Tally. In each form's editor, choose Customize → Light
and publish the changes. The existing embed will pick up published form styling.
https://tally.so/help/customize-your-form
