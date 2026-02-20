# Service Call Saver - Landing Page

## Overview

Service Call Saver is a high-converting landing page for an AI-powered call handling service targeted at restaurants, cafes, and food service businesses. The page focuses on reducing employee turnover, eliminating missed calls, and freeing restaurant owners from phone chaos. All page copy is centralized in a single content file for easy editing. Lead tracking is handled entirely by Meta Pixel — no database required.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — `/` main landing page (DemoLanding), `/demo` redirects to `/`, `/privacy` privacy policy, `/terms` terms and conditions, plus a 404 fallback
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS variables for theming. Light theme with warm orange accent. Lemonade.com-inspired clean, minimal design. Custom color tokens defined in `client/src/index.css`
- **Animations**: Framer Motion for scroll-triggered entry animations
- **Content Management**: All copy lives in `client/src/lib/content.ts` — edit text there without touching components
- **Analytics/Tracking**: Meta Pixel for conversion tracking; lightweight console logger in `client/src/lib/analytics.ts` for dev
- **Fonts**: Lato (body), Merriweather (headings) via Google Fonts — warm, friendly, approachable
- **Path aliases**: `@/` maps to `client/src/`

### Backend
- **Runtime**: Node.js with Express
- **Language**: TypeScript, executed via `tsx`
- **API**: No API endpoints — the server only serves the static frontend in production
- **Build**: Custom build script using esbuild for server + Vite for client; outputs to `dist/`
- **No database**: All lead capture and tracking is handled externally via Meta Pixel and third-party tools

### Key Design Decisions
1. **Light theme**: White background with warm orange accent, clean minimal design inspired by Lemonade.com — no dark mode
2. **Single content file**: All marketing copy, testimonials, CTAs, and URLs are in `client/src/lib/content.ts` so non-developers can update text easily
3. **Single CTA pattern**: CTA buttons scroll to the Cal.com booking calendar (#book anchor)
4. **Meta Pixel tracking**: All conversion and CTA tracking handled by Meta Pixel — no server-side lead logging
5. **Service business-focused messaging**: Pain points target missed calls, after-hours chaos, and owner burnout
6. **Risk-free positioning**: 14-day free trial, plug-and-unplug anytime, start with missed calls only
7. **Mobile-optimized**: Vimeo preview thumbnails via oEmbed API on mobile (no iframes) to prevent blank cards

### Main Landing Page Sections (/ — DemoLanding.tsx — in order)
1. **Sticky Header** — Logo + "Start your free trial" CTA button fixed to top
2. **Hero + Photo Carousel** — Large mixed-typography headline ("Stop losing calls. *Start booking jobs.*") + subtext + CTA button + horizontally scrolling auto-play carousel of photo cards and quote cards
3. **Mid-Scroll Statement** — Bold centered text ("Every missed call is a missed job.") + CTA
4. **Social Proof / Testimonials** — 3 cards (video thumbnail + play-button + quote + name)
5. **Feature 1: Never Miss a Call** — Left: eyebrow + H2 + 3 feature callouts (24/7, books appointments, screens spam). Right: phone conversation mockup card
6. **Feature 2: Set Up in Minutes** — Left: 3 numbered steps card. Right: eyebrow + H2 + description + CTA
7. **Feature 3: What We Handle** — Left: eyebrow + H2 + description. Right: 2x3 capability chip grid
8. **Comparison Table** — 4-column table (Category, Human Receptionist, Other AI Services, Service Call Saver)
9. **The Offer** (#offer) — ROI line + 4 checkmark items + CTA
10. **Booking Calendar** (#book) — Cal.com embed (dark theme, month_view layout)
11. **FAQ** — 4 accordion items
12. **Closing CTA + Footer** — "More money without more hours." + "Try it free." + CTA + Privacy/Terms links, copyright

## External Dependencies

- **Google Fonts**: Merriweather and Lato loaded from fonts.googleapis.com
- **Vimeo**: Video embeds and oEmbed API for mobile thumbnails
- **Cal.com**: Booking calendar embedded at #book anchor (`servicecallsaver/demo`)
- **Meta Pixel**: Conversion tracking (pixel ID in client/index.html)
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` used in development mode
- **No authentication**: This is a public-facing landing page with no auth required
- **No database**: All data capture handled externally
