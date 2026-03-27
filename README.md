# Wildman Games — Landing Page

Next.js landing page for The Wildman Games / Wildman Challenge.  
Built for Vercel deployment.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no extra config needed
4. Hit Deploy

---

## Replacing Placeholders

### Links
Search the codebase for these and replace:

| Placeholder | Where | What to put |
|---|---|---|
| `#book` (FIT_CALL_LINK) | Header.js, Hero.js, EventStartsNow.js, BottomSections.js | Your Calendly or booking URL |
| `#deposit` (DEPOSIT_LINK) | Header.js, Hero.js, Pricing.js, BottomSections.js | Your Stripe / payment link |
| `[AIRPORT NAME]` | Logistics.js, BottomSections.js | e.g. "Málaga (AGP)" |
| `[SINGLE ROOM UPGRADE £]` | Logistics.js | e.g. "£250" |
| `[TRAVEL INSURANCE NOTE]` | Logistics.js | Any specific recommendation |

### Domain (OG tags)
In `app/layout.js`, update:
```js
url: 'https://wildmangames.com', // your actual domain
```

---

## Swapping Images

All images live in `/public/assets/`. 

| File | Used in | Recommendation |
|---|---|---|
| `DSC01666.JPG` | Hero background | Your best wide landscape/action shot |
| `PHOTO20231120184122.jpg` | EventStartsNow section | Training/prep shot |
| `IMG_1716825287357.JPEG` | Founder section | Founder in-field portrait |
| `2.png`, `3.png`, `5.png` | Mechanism image strip | Action/activity shots |
| `9.png`, `4.png` | Social proof gallery | Group/results shots |
| `LOGO_FILE_.png` | Header | Keep as-is or update |
| `FAVICON_.png` | Browser tab | Keep as-is |
| `og-image.jpg` | Social sharing | **Create this** — 1200×630px recommended |

To swap an image: replace the file in `/public/assets/` keeping the same filename, or update the `src` prop in the relevant component.

---

## Adding Testimonials

Open `components/SocialProof.js` and update the `testimonials` array at the top:

```js
const testimonials = [
  {
    quote: 'Actual quote here.',
    name: 'First name, Age',
    detail: 'Location or occupation',
    image: '/assets/testimonial-1.jpg', // optional
  },
  // ...
];
```

Add photos to `/public/assets/` and reference them in the `image` field.

---

## Updating the Stats Bar (Social Proof)

In `SocialProof.js`, find the stats array and update values as needed:
```js
{ number: '100%', label: 'Of past attendees would recommend' }
```

---

## Spots Remaining

Update the "Spots remaining" in the Hero section:
- In `components/Hero.js`, find `{ label: 'Spots remaining', value: '16 left' }` and update the number as spots sell.

---

## Early Bird Deadline

Search for `Friday 13 March 2026` across components and update when expired.

---

## Project Structure

```
wildman-games/
├── app/
│   ├── layout.js          # Root layout, fonts, SEO/OG tags
│   ├── page.js            # Main page — assembles all sections
│   └── globals.css        # Global styles, design tokens
├── components/
│   ├── Header.js          # Sticky nav with CTA
│   ├── Hero.js            # Full-viewport hero
│   ├── WhyThisExists.js   # Section 01
│   ├── WhoItsFor.js       # Section 02-03
│   ├── TheProblem.js      # Section 04
│   ├── TheMechanism.js    # Section 05 — 4 pillars
│   ├── WhatToExpect.js    # Section 06 — day-by-day
│   ├── EventStartsNow.js  # Sections 07+08 — prep + outcomes
│   ├── SocialProof.js     # Section 09 — testimonials + stats
│   ├── Logistics.js       # Section 10 — what's included
│   ├── Pricing.js         # Section 11 — 3 payment options
│   └── BottomSections.js  # Sections 12-14 + Footer
├── public/
│   └── assets/            # All images and logos
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Design System

Colours are defined in `tailwind.config.js` and `globals.css`:

- **Black**: `#0A0A0A`
- **Charcoal**: `#161616`
- **Off-white**: `#F5F2EE`
- **Sand** (accent): `#C4AA87`
- **Stone**: `#7A6E63`

Fonts loaded via `next/font/google`:
- **Display**: Barlow Condensed (800) — headlines
- **Body**: DM Sans (300/400/500) — body copy
- **Mono**: DM Mono — labels and metadata

---

## CTA Summary

Two primary actions throughout the page:

1. **Book a Fit Call** → `FIT_CALL_LINK` — primary conversion
2. **Secure Your Deposit** → `DEPOSIT_LINK` — secondary conversion

Both appear in: Header, Hero, EventStartsNow, HowBookingWorks, FinalCTA.
