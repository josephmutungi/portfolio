# JMM Labs website

Marketing and portfolio site for JMM Labs, a Nairobi based web design and software development studio. Built with Next.js App Router, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other project commands are:

```bash
npm run build
npm start
npm run lint
```

The contact form sends email through Gmail using Nodemailer. Configure `EMAIL_USER` and `EMAIL_PASS` in the deployment environment; `EMAIL_PASS` should be a Gmail app password. The form cannot deliver messages until these values are set.

## Project structure

- `app/` contains routes, layouts, page metadata, the contact API, and sitemap and robots handlers.
- `components/` contains shared site UI such as the navigation, hero, footer, testimonials, and homepage sections.
- `app/projects/projectsData.js` supplies the portfolio project content.
- `public/` contains images and the SVG brand assets.

Use the existing page layouts and shared components when adding pages or repeated UI. Keep page-specific metadata in each route’s layout or page export, and shared defaults in `app/layout.js`.

## Brand and interface

- `components/BrandLogo.jsx` is the shared, code-based JMM Labs logo used in the header and footer.
- `public/jmm-labs-mark.svg` is the horizontal SVG lockup; `public/jmm-labs-icon.svg` is the square mark used in structured data.
- `app/globals.css` sets the Geist font, base colors, accessible focus and selection styles, and reduced-motion behavior.
- Shared page styling uses a navy and teal palette with responsive layouts and visible keyboard focus states.
- `components/ThemeProvider.jsx` provides the light/dark theme switch, saves the visitor’s choice in local storage, and uses the operating system preference when no choice has been saved. The toggle is available in the desktop navigation and mobile menu; global theme styles are in `app/globals.css`.

When changing the brand mark, keep the component and public SVG assets visually consistent. Use the shared component for site UI rather than a separate raster logo.

## Search and sharing metadata

- `app/layout.js` defines the site-wide title template, description, keywords, social sharing defaults, metadata base, and Organization structured data.
- Route layouts define page titles, descriptions, and canonical URLs.
- The homepage includes local business service structured data.
- `app/sitemap.js` lists the main routes and project detail pages.
- `app/robots.js` allows public pages, excludes `/api/`, and references the sitemap.

The canonical host is currently `https://novastackdigital.co.ke`. If the production domain changes, update it in the metadata, structured data, sitemap, and robots handler together. SEO metadata helps search engines understand the site but does not guarantee rankings.

## Contact and business details

The contact channels are maintained in `app/contact/page.jsx` and are also referenced by the footer and structured business data. Keep the email, WhatsApp number, and GitHub profile consistent when updating them.
