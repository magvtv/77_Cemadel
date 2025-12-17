## CEMADEL Brochure – Todos & Roadmap

This file tracks potential improvements to the CEMADEL brochure prototype.  
Use it as a living checklist as you refine content, design, and functionality.

---

### 1. Copy & Content

- [ ] Replace all placeholder bracketed values in `main.html`:
  - [ ] `[Nurse's Name]`
  - [ ] `[X years]` and `[X+]`
  - [ ] `[Location/Year]`
  - [ ] `[info@cemadelcare.com]`
  - [ ] `[Your Location, e.g., Nairobi, Kenya]`
  - [ ] Social handles like `[Facebook/Instagram]`
  - [ ] Placeholder names in testimonials (e.g., “The Johnson Family”, “Raj K.”) if you have real client stories.
- [ ] Refine storytelling in the hero and About sections to match CEMADEL’s actual origin story and tone of voice.
- [ ] Align the services table descriptions with the real list of services (add/remove rows as needed).
- [ ] Replace `testimonial-placeholder.svg` with real avatars or photos (and adjust the markup if filenames change).

---

### 2. UX & UI Enhancements

- [ ] Review and tune mobile responsiveness:
  - [ ] Check spacing and font sizes on small screens.
  - [ ] Ensure the services table is readable and does not overflow horizontally.
- [ ] Improve visual hierarchy:
  - [ ] Adjust headings, subheadings, and body text sizes in `styles.css`.
  - [ ] Add consistent spacing between accordion sections and cards.
- [ ] Enhance button and link states:
  - [ ] Add clear hover, focus, and active styles (especially for keyboard users).
- [ ] Consider adding subtle motion:
  - [ ] Hero section entrance animation.
  - [ ] Slight transitions for accordion open/close (beyond Bootstrap defaults).

---

### 3. Functional Features

- [ ] Replace the primary CTA alert (in `script.js`) with a more robust interaction:
  - [ ] **Option A**: Open a contact form section or modal.
  - [ ] **Option B**: Deep link to WhatsApp (e.g., `https://wa.me/` with pre-filled message).
  - [ ] **Option C**: Navigate to a dedicated contact/booking page.
- [ ] Implement a contact form:
  - [ ] Fields for name, phone, preferred contact method, and short message.
  - [ ] Client-side validation (required fields, phone/email format).
  - [ ] Clear success and error messages.
  - [ ] (Optional) Hook up to a backend or form service when available.
- [ ] Upgrade testimonials:
  - [ ] Turn the testimonial list into a slider or carousel.
  - [ ] Add navigation controls and indicators (with accessible labels).
- [ ] Add optional features:
  - [ ] Language toggle (e.g., English / Swahili).
  - [ ] Dark mode that uses icons/SVGs rather than emoji.

---

### 4. Accessibility Improvements

- [ ] Confirm color contrast ratios for text and UI elements meet accessibility guidelines.
- [ ] Ensure all images have meaningful `alt` text or are marked decorative when appropriate.
- [ ] Validate keyboard navigation:
  - [ ] Accordion sections can be opened and read without a mouse.
  - [ ] Focus is clearly visible and not trapped.
- [ ] Review ARIA attributes on accordion elements (Bootstrap sets many, but verify correctness for your final content).

---

### 5. Technical & Operations

- [ ] SEO and metadata:
  - [ ] Update `<title>` to final product name/tagline.
  - [ ] Add descriptive `<meta name="description">`.
  - [ ] Include relevant `<meta>` tags for social sharing (Open Graph/Twitter if needed).
- [ ] Analytics and tracking:
  - [ ] Decide on an analytics solution (e.g., privacy-friendly or standard analytics).
  - [ ] Add tracking script snippet if required.
- [ ] Performance:
  - [ ] Optimize SVGs (minify, remove unused attributes).
  - [ ] Consider lazy-loading any heavier images if added later.
- [ ] Deployment documentation:
  - [ ] Document your chosen hosting provider and exact deployment steps (in `README.md` or a separate file).
  - [ ] Add environment-specific notes if you integrate forms or scripts that depend on external services.

---

### 6. Future Ideas

- [ ] Multi-page brochure structure (e.g., dedicated pages for Services, About, Resources).
- [ ] Blog or resources section for family caregiving tips.
- [ ] Simple pricing/plan overview with comparison cards.
- [ ] FAQ accordion to address common concerns.
- [ ] Reusable components (if you later migrate to a framework like React, Vue, or Svelte).


