# Dow's Lake Dental — website

Six-page static site. Plain HTML, one stylesheet, one script, no build step.

```
├── index.html            Home
├── about.html            About Us — story, dentist, team, clinic gallery, why us
├── services.html         Services — five categories with photo, description, treatment list
├── new-patients.html     New Patients — steps, what to bring, insurance, forms, FAQ
├── reviews.html          Reviews
├── contact.html          Contact / Book — form, office details, map
├── css/styles.css
├── js/main.js            Mobile menu, scroll reveal, form validation, footer year
└── assets/images/        36 labelled placeholders (see below)
```

## Replacing the placeholder images

Every image slot is a labelled SVG in `assets/images/`. Each one says what photo belongs there and the suggested size. To replace one, drop in a JPG with the same name and change the `.svg` extension to `.jpg` in the HTML (a project-wide find-and-replace of `.svg"` → `.jpg"` does all of them at once).

| File | What to shoot | Size |
|---|---|---|
| hero-home | Wide shot of a treatment room or reception, bright | 1920×1200 |
| intro-team, cta-team, about-hero | Team photos (candid, group, wide) | see label |
| dentist-portrait, team-* | Portraits, 4:5 | 1000–1200 wide |
| clinic-* | Reception, waiting area, treatment room, equipment, details | see label |
| service-* | One photo per category | 1400×1000 |
| exterior, ottawa-dows-lake | Storefront and neighbourhood | 1400×1000 |
| *-hero | One wide hero per inner page | 1920×1000 |

No image is reused within a page, and hero images differ across pages.

## Placeholder content to fill in

Search for `Placeholder` and `[` to find every spot. Nothing below was invented:

- **Phone**: `(613) 000-0000` / `+16130000000` — header, footer, contact, home, new patients
- **Email**: `email@placeholder.example` — footer and contact
- **Hours**: `[hours]` — footer, home, contact
- **Dentist bio and quote** — home and about
- **Our story** — about
- **Insurance & payment**, **patient form PDFs**, **insurance FAQ** — new patients

Address (484 Preston St), the 4.9 / 228 rating, the six reviews, and the team names came from the brief.

## Wiring the booking form

`contact.html` has `id="booking-form"`. Set its `action` to Netlify Forms (`data-netlify="true"` + `name="booking"`), Formspree, or your own endpoint, then delete the block in `js/main.js` marked `DEMO MODE`. Validation stays.

## Deploy

Static, root-published. Netlify: publish directory `.`. Vercel: framework "Other", no build.
