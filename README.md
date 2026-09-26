# Exodus Studio Productions website

Static site: plain HTML, CSS and JS. No build step.

## Structure
- index.html — the page, with one commented block per section
- css/base.css — colors, fonts, buttons, shared styles
- css/header.css, services.css, portfolio.css, about.css, cta.css, footer.css — one file per section
- js/main.js — mobile menu + footer year
- images/ — photos (see images/README.md)

## Deploy
1. Push this folder to a GitHub repo.
2. In Vercel: Add New → Project → import the repo.
3. Framework preset: **Other**. Leave build command and output directory empty. Deploy.
4. Add the domain (exodusstudio.ca) under Project → Settings → Domains and update DNS at the registrar.
