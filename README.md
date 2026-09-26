# Exodus Studio Productions website

Static site: plain HTML, CSS and JS. No build step.

## Files (all in root)
- index.html: the page, one commented block per section
- base.css: colors, fonts, buttons, shared styles
- header.css, services.css, portfolio.css, about.css, cta.css, footer.css: one per section
- main.js: mobile menu + footer year
- Images to add: hero-studio.jpg (2400×1200), work-1.jpg, work-2.jpg, work-3.jpg (1280×720), about.jpg (1400×800)

## Deploy
1. Push this folder to a GitHub repo.
2. In Vercel: Add New → Project → import the repo.
3. Framework preset: **Other**. Leave build command and output directory empty. Deploy.
4. Add the domain (exodusstudio.ca) under Project → Settings → Domains and update DNS at the registrar.
