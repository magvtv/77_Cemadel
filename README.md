## CEMADEL Brochure Prototype

A single-page marketing brochure for **CEMADEL** – a patient attendant and home-based care service.  
This repo contains a static HTML/CSS/JS prototype you can open directly in a browser or deploy to any static host.

### Features

- **Hero cover section**: Logo, tagline, value statement, and a primary call-to-action button.
- **Accordion content** (Bootstrap): 
  - About Us – story-driven introduction and positioning.
  - Our Services – tabular list of services with narrative examples and benefits.
  - Testimonials / Why Choose Us – social proof and differentiators.
  - Contact & Next Steps – phone/WhatsApp contacts and placeholders for email, address, and social links.
- **Light interactivity** (vanilla JS):
  - Smooth scrolling to keep accordion sections in view when opened.
  - Fade/slide-in animations for testimonials when they enter the viewport.
  - Hover highlight on service table rows.
  - Primary button that shows a contact prompt.

### Tech Stack

- **HTML5** – structure and brochure content in `main.html`.
- **CSS3 + Bootstrap 5 (CDN)** – layout, typography, and components.
- **Vanilla JavaScript** – small interaction layer in `script.js`.
- **Static assets** – SVG images in `img/`.

### Project Structure

- `main.html` – the main brochure page with:
  - Hero section (logo, headings, CTA).
  - Bootstrap accordion with sections: About Us, Our Services, Testimonials / Why Choose Us, Contact Us & Next Steps.
- `styles.css` – custom styling:
  - Container styling for the brochure card.
  - Hero gradient background and typography tweaks.
  - Table and testimonial card styles.
  - Service icon sizing and custom button styling.
- `script.js` – behavior for:
  - Scrolling opened accordion sections into view.
  - IntersectionObserver-based testimonial reveal animation.
  - CTA button alert linking users back to phone contacts.
  - Hover background color change on service rows.
- `img/` – SVG assets:
  - `logo.svg` – CEMADEL logo.
  - `care-icon.svg` – icon used in the services table.
  - `testimonial-placeholder.svg` – avatar-style placeholders for testimonials.

### Getting Started

#### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari).
- No build tools or package managers are required.

#### Run Locally

1. Clone or download this repository.
2. Open `main.html` directly in your browser:
   - Double-click `main.html`, or
   - Right-click and choose “Open With” → your browser, or
   - Serve the folder via a simple static server (e.g., `python -m http.server`) and navigate to `http://localhost:8000/main.html`.

The page will load Bootstrap and JavaScript from CDNs referenced in `main.html`.

### Deployment

Because this is a static site, you can host it on any static hosting provider, such as:

- A basic web server (Apache, Nginx, etc.).
- Static hosting platforms (e.g., GitHub Pages, Netlify, Vercel, or similar).

Deployment steps are generally:

1. Upload all files in this repo (`main.html`, `styles.css`, `script.js`, `img/`).
2. Configure your host’s document root to serve `main.html` as the entry page.

Provider-specific configuration is not included in this repo; follow your host’s documentation.

### Customization Guide

- **Branding**:
  - Replace `img/logo.svg` with your production logo (keeping the same filename or updating the `src` attribute in `main.html`).
  - Adjust colors and gradients in `styles.css` (e.g., `.hero-section`, `.section-header`, `.btn-custom`) to match your brand palette.

- **Copy & content**:
  - Update the narrative text in the hero, About, Services, Testimonials, and Contact sections inside `main.html`.
  - Replace all placeholder bracketed values before production use, including:
    - `[Nurse's Name]`
    - `[X years]` and `[X+]`
    - `[Location/Year]`
    - `[info@cemadelcare.com]`
    - `[Your Location, e.g., Nairobi, Kenya]`
    - Social handles like `[Facebook/Instagram]`.

- **Services & testimonials**:
  - Modify the services table rows in the “Our Services” accordion item to match the actual offering.
  - Replace testimonial placeholder text with real quotes and, if desired, real photos (update `testimonial-placeholder.svg` with real assets or new filenames).

- **Interactivity**:
  - Adjust or replace the alert in `script.js` used for the primary CTA button with:
    - A contact form modal, or
    - A WhatsApp deep link (`https://wa.me/` style URL), or
    - A dedicated contact/booking page.

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


