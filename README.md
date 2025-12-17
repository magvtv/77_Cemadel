## CEMADEL Care – Multi-Page Prototype

A multi-page marketing site for **CEMADEL** – a patient attendant and home-based care service.  
This repo contains a static HTML/CSS/JS prototype you can open directly in a browser or deploy to any static host.

### Features

- **Home page**:
  - Hero with clear value proposition and primary CTA (“Request Care Call”).
  - Bento highlight grid for key service areas.
  - \"How it works\" 3-step strip.
  - Mini care stories strip and CTA band.
- **Services page**:
  - Service categories in a bento grid.
  - \"Who we help\" and \"How a plan is shaped\" panels.
- **About page**:
  - Origin story, lead nurse card, journey milestones, and values.
- **Care Stories page**:
  - Story cards plus reassurance stats.
- **Contact page**:
  - Quick contact tiles and a visual prototype of a “Request a care call” form.
- **Light interactivity** (vanilla JS):
  - Smooth scrolling for CTA buttons.
  - IntersectionObserver-based reveal animations for tiles and cards respecting `prefers-reduced-motion`.

### Getting Started

#### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari).
- No build tools or package managers are required.

#### Run Locally

1. Clone or download this repository.
2. Open `index.html` directly in your browser:
   - Double-click `index.html`, or
   - Right-click and choose “Open With” → your browser, or
   - Serve the folder via a simple static server (e.g., `python -m http.server`) and navigate to `http://localhost:8000/index.html`.

### Deployment

Because this is a static site, you can host it on any static hosting provider, such as:

- A basic web server (Apache, Nginx, etc.).
- Static hosting platforms (e.g., GitHub Pages, Netlify, Vercel, or similar).

Deployment steps are generally:

1. Upload all files in this repo (`main.html`, `styles.css`, `script.js`, `img/`).
2. Configure your host’s document root to serve `main.html` as the entry page.

Provider-specific configuration is not included in this repo; follow your host’s documentation.

### Project Structure

- `index.html` – Home page (hero, bento highlights, how it works, mini stories, CTA band).
- `services.html` – Service categories and who/what panels.
- `about.html` – Story, journey, values, and team overview.
- `care-stories.html` – Care story cards and stats.
- `contact.html` – Contact options and request form prototype.
- `css/`
  - `base.css` – tokens, typography and body/base styles.
  - `layout.css` – header, footer, containers, grid helpers.
  - `components.css` – cards, buttons, badges, hero, bento, CTA band.
  - `pages-home.css` – home-specific tweaks and reveal helpers.
- `js/`
  - `main.js` – smooth scroll and reveal-on-scroll logic.
- `img/` – SVG assets:
  - `logo.svg` – CEMADEL logo.
  - `care-icon.svg` – service icon used in the original brochure.
  - `testimonial-placeholder.svg` – avatar-style placeholders for testimonials.

### Customization Guide

- **Branding**:
  - Replace `img/logo.svg` with your production logo (keeping the same filename or updating the `src` attributes).
  - Adjust tokens and gradients in `css/base.css`, `css/components.css` to match your palette.

- **Copy & content**:
  - Update hero copy, services descriptions, stories, and About content across the HTML pages.
  - Replace all placeholder bracketed values before production use:
    - `[Lead nurse name]`, `[Year]`, `[X+]`, `[info@cemadelcare.com]`, `[Your Location, e.g., Nairobi, Kenya]`, etc.
  - Swap placeholder story text with real anonymized care stories.

- **Interactivity**:
  - Connect the Contact form in `contact.html` to your backend or a form service before using it in production.

### Accessibility & Responsiveness

- **Bootstrap** provides a responsive grid and accessible accordion behavior by default.
- Custom styles in `styles.css` are mobile-friendly, but should be reviewed on target devices to:
  - Ensure text sizes and spacing are comfortable.
  - Confirm the services table remains readable on small screens.
  - Verify focus states and keyboard navigation work well with the accordion and buttons.

Consider further enhancements listed in `todos.md` for accessibility (e.g., improved ARIA labels, contrast checks).

### Roadmap

High-level improvement ideas are tracked in `todos.md`, grouped into:

- Content and copy refinements.
- UX and visual polish.
- Functional features (contact form, booking flows).
- Technical enhancements (SEO, analytics, deployment details).

### License / Usage

This project is currently treated as an internal/portfolio prototype for CEMADEL.  
If you intend to open-source or reuse this for other brands, add a suitable license file (e.g., MIT, Apache 2.0) and update this section accordingly.


