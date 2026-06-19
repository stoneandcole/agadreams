# AgaDream — Project Bible

## What This Is

AgaDream is an apartment rental discovery website for Agadir, Morocco, built around an influencer's video reviews. The platform differentiates itself by:

1. **Video-first listings** — every apartment has an embedded video review filmed by the influencer
2. **Nearby experiences** — each listing surfaces the influencer's reviews of restaurants, beaches, activities, and places near the apartment
3. **Curated feel** — this is not a generic OTA (online travel agency); it's a hand-picked selection the influencer personally vouches for

The target audience is tourists and travelers looking to rent in Agadir who trust the influencer's taste.

---

## Tech Stack (to be confirmed)

- **Framework:** Next.js 14 (App Router) — SSR/SSG for SEO, fast page loads, easy image/video optimization
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Package manager:** npm
- **Database:** TBD (likely Supabase or a headless CMS like Sanity for content management)
- **Video:** YouTube embeds or direct video hosting (Cloudinary/Mux)
- **Deployment:** Vercel

---

## Site Structure

```
/ (Home)
  Hero — brand statement + search/filter bar
  Featured Apartments — curated picks
  "About the Influencer" strip — trust signal

/apartments
  Listing grid with filter (zone, price, beds, type)

/apartments/[slug]
  Photo gallery
  Embedded video review
  Description, amenities, pricing, booking CTA
  "Nearby" section — linked influencer reviews (restaurants, beaches, excursions)

/explore
  Map or grid of all places the influencer has reviewed in Agadir & surrounding region

/explore/[slug]
  Individual place review (restaurant, activity, landmark)
  Map pin
  Linked apartments nearby

/about
  Influencer bio + social links

/contact
  Booking inquiry form
```

---

## Content Model

### Apartment
- `slug` — URL key
- `title` — e.g. "Penthouse avec vue mer, Hay Mohammadi"
- `zone` — neighborhood / area in Agadir
- `price_per_night` — MAD
- `bedrooms`, `bathrooms`, `capacity`
- `amenities` — array (wifi, pool, parking, AC, sea view…)
- `images[]` — gallery
- `video_url` — YouTube / hosted video embed
- `description` — rich text
- `nearby_places[]` — references to Place items
- `booking_url` or `contact_cta`

### Place (restaurant, activity, landmark)
- `slug`
- `name`
- `category` — restaurant | beach | activity | excursion | shopping | nightlife
- `location` — neighborhood + GPS coords
- `description`
- `video_url` — influencer review video
- `rating` (influencer score, not aggregate)
- `images[]`
- `linked_apartments[]` — back-references

---

## Design Direction

- **Palette:** warm desert tones (terracotta, sand, ivory) + Atlantic blue accents
- **Typography:** modern, clean — something like Inter or Plus Jakarta Sans
- **Vibe:** premium but approachable; feels like a personal recommendation, not a corporate listing site
- **Language:** French primary (Moroccan market), English secondary
- **Mobile-first** — most users arrive via Instagram/TikTok link on mobile

---

## Key UX Principles

- Video review is above the fold on every apartment page — it's the product differentiator
- "Nearby experiences" section must feel editorial, not algorithmic
- Booking CTA is always visible (sticky on mobile)
- Fast load is critical — compress images, lazy-load videos

---

## Out of Scope (v1)

- User accounts / authentication
- User-generated reviews
- Real-time availability calendar (use external booking link for now)
- Payment processing

---

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # ESLint
```

---

## Notes for Claude

- When generating UI, default to Tailwind utility classes — no CSS modules unless there's a strong reason
- All text strings should be in French unless noted otherwise
- Apartment and place slugs should be URL-safe, lowercase, hyphenated
- Never hardcode prices — they come from the data layer
- Keep components small and composable; avoid god components
- The influencer's personal brand must feel present but not overwhelming — the apartments are the product
