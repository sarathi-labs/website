# Sarathi Labs Website — React + Vite + shadcn/ui

A React port of the original static Sarathi Labs website, rebuilt with
Vite, React Router, Tailwind CSS, and shadcn/ui — while preserving the
original visual design, fonts, copy, and animations exactly.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your form endpoint — see "Contact form" below
npm run dev             # start the dev server (http://localhost:5173)
npm run build            # production build → dist/
npm run preview          # preview the production build locally
```

Requires Node 18+.

## Contact form → real emails

The contact form (used on the homepage and the Contact page) sends
submissions via **FormSubmit** (formsubmit.co) straight to
`contact@sarathilabs.com` — this is wired up out of the box, matching
what the original site's `app.js` already did, so **no setup is required**
to get real emails flowing.

**One-time activation:** the very first submission after you deploy will
trigger FormSubmit to email a one-click "Activate Form" link to
`contact@sarathilabs.com`. The UI shows an alert telling you this — open
that inbox, click activate, and every submission after that lands directly
with no further action.

**To point it at a different inbox or provider**, either:
- Edit `RECIPIENT_EMAIL` in `src/components/ContactForm.jsx`, or
- Set `VITE_FORM_ENDPOINT` in a `.env` file (see `.env.example`) to override
  the endpoint entirely — this takes priority over the FormSubmit default.

Any endpoint that accepts a `POST` with JSON fields (`name`, `email`,
`company`, `message`) and returns `{ success: "true" }` (FormSubmit's
format) or a 2xx status will work as a drop-in replacement. Alternatives
worth knowing about: **Formspree**, **EmailJS** (sends straight from the
browser, no backend at all), or your own serverless function.

## What changed vs. the original static site

- **Structure**: 5 static HTML pages → a single-page React app with
  React Router (`/`, `/about`, `/services`, `/work`, `/faq`, `/contact`).
  Shared chrome (`Nav`, `Footer`, `BackToTop`) now lives once in `App.jsx`
  instead of being duplicated in every HTML file.
- **Styling**: Your original `styles.css` (design tokens, fonts, layout,
  section styles) is preserved as-is in `src/index.css`, sitting alongside
  Tailwind CSS. Fonts and images were copied into `public/assets` unchanged.
- **Interactivity** (previously `app.js`) is now React:
  - Scroll-reveal (`.rv` elements) → `src/components/Reveal.jsx`
    (IntersectionObserver-based, same thresholds/timings as before)
  - Sticky nav that solidifies on scroll, mobile menu → `src/components/Nav.jsx`
  - FAQ accordion → rebuilt on **shadcn/ui's Accordion** (Radix-based) in
    `src/components/FaqList.jsx` / `src/components/ui/accordion.jsx`
  - Homepage section-index rail → `src/components/SectionRail.jsx`
  - Back-to-top button → `src/components/BackToTop.jsx`
  - Intro horse-run animation (once per session) → `src/components/IntroAnimation.jsx`
  - Contact form (fake-submit UX) → `src/components/ContactForm.jsx`, built
    with shadcn/ui's `Input`, `Textarea`, `Label`, and `Button`
- **shadcn/ui components used**: `Button`, `Input`, `Textarea`, `Label`,
  `Accordion` — all in `src/components/ui/`, styled with custom variants
  (`accent` / `ink` / `paper` / `ghost`) that match the original `.btn`
  classes, so they're genuinely shadcn primitives rather than re-skinned
  HTML. You can add more shadcn components the normal way (`npx shadcn add
  <component>`) — `components.json` is already configured.

## Project structure

```
src/
  components/
    ui/              # shadcn/ui primitives (button, input, textarea, label, accordion)
    Nav.jsx           Footer.jsx           BackToTop.jsx
    SectionRail.jsx   IntroAnimation.jsx   Reveal.jsx
    ContactForm.jsx   FaqList.jsx          PageHead.jsx
    ScrollToHash.jsx  # scrolls to #hash targets across page navigations
  hooks/
    useScrollEffects.js  # nav-solid, back-to-top visibility, active-section tracking
  pages/
    Home.jsx  About.jsx  Services.jsx  Work.jsx  Faq.jsx  Contact.jsx
  lib/utils.js       # shadcn's cn() helper
  index.css          # Tailwind + your original design system
  App.jsx            # routes + shared layout
  main.jsx           # entry point
public/
  assets/            # fonts, logos, icons — copied verbatim from the original site
```

## Notes

- The contact form doesn't send anywhere yet — it mimics the original's
  front-end-only "Thanks, we'll be in touch" behavior. Wire it up to your
  backend/email service of choice in `src/components/ContactForm.jsx`.
- In-page anchor links on the same page (e.g. hero → "See how we work")
  use plain `<a href="#s4">` and rely on `scroll-behavior: smooth` (already
  set globally), same as the original. Cross-page anchors (e.g. footer →
  `/services#process`) are handled by `ScrollToHash.jsx`.
