# BAKEPACKS website (React + Vite, plain CSS)
Dev: `npm install` then `npm run dev`. Build: `npm run build` -> upload everything inside `dist/` to Hostinger `public_html` (File Manager).
- Text/contact details: `src/data/site.js`  - One file per page: `src/pages/`  - Styles: `src/styles/global.css`
- Replace placeholders: swap `<Placeholder />` with `<img src="..." alt="..."/>` (put photos in `public/images/`).
- Pages use #-links (e.g. site.com/#/about) so no server rewrite rules are needed.
