# Esports Production Services Quest - Development Guide

## Quick Start

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
git add -A && git commit -m "message" && git push  # Deploy to Vercel
```

## Project Overview

- **Location**: `/Users/dankeegan/esportsproduction.quest`
- **Domain**: https://esportsproduction.quest
- **Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Database**: Neon PostgreSQL (for contact form)
- **Hosting**: Vercel

## Site Purpose

SEO-optimized informational site for esports production services, targeting:
- Tournament organisers seeking production partners
- Game publishers planning esports events
- Brands activating in competitive gaming
- Aspiring esports production professionals

## Primary SEO Target

**Keyword**: "esports production services" (Position 6.9 in Google as of Jan 2025)

**Goal**: Reach position 1 for "esports production services"

## Content Architecture

### Homepage (`app/page.tsx`)
Main landing page with:
- Hero section with H1 "ESPORTS PRODUCTION SERVICES"
- 9 content sections, all H2s follow "Esports Production Services: [Topic]" format
- 94+ keyword mentions, bolded once
- Table of Contents for navigation
- High-authority external links (ESL, Riot, Twitch, PGL, BLAST, FACEIT)
- Internal links to all content pages

### Content Pages (`content/*.md`)
Markdown-based pages rendered via `app/[slug]/page.tsx`:

| Page | Target Keyword | Priority |
|------|---------------|----------|
| `/esports-production-guide` | esports production guide | 0.95 (Pillar) |
| `/esports-production-companies` | esports production companies | 0.85 |
| `/esports-live-production` | esports live production | 0.85 |
| `/video-game-tournament-production` | video game tournament production | 0.85 |
| `/esports-broadcast-services` | esports broadcast services | 0.85 |
| `/tournament-production-cost` | tournament production cost | 0.85 |
| `/esports-streaming-setup` | esports streaming setup | 0.85 |
| `/remote-esports-production` | remote esports production | 0.70 |
| `/esports-observer-guide` | esports observer | 0.70 |

### Contact Page (`app/contact/page.tsx`)
Lead generation form connected to Neon database.

## Key Files

```
/app/
├── page.tsx              # Homepage (main SEO target)
├── layout.tsx            # Root layout with schema, meta tags
├── sitemap.ts            # Auto-generates from content folder
├── robots.ts             # Robots.txt configuration
├── [slug]/page.tsx       # Dynamic content page renderer
├── contact/page.tsx      # Contact form
└── components/
    ├── UnifiedHeader.tsx # Cross-site navigation
    ├── UnifiedFooter.tsx # Cross-site footer
    └── NewsSection.tsx   # News feed from esportsnews.quest

/content/
├── esports-production-guide.md
├── esports-production-companies.md
├── esports-live-production.md
├── video-game-tournament-production.md
├── esports-broadcast-services.md
├── tournament-production-cost.md
├── esports-streaming-setup.md
├── remote-esports-production.md
└── esports-observer-guide.md

/lib/
└── content.ts            # Markdown processing with gray-matter
```

## Schema Markup

The site includes comprehensive JSON-LD schema in `layout.tsx`:
- **WebSite** schema with site name
- **Organization** schema with knowsAbout
- **WebPage** schema for homepage
- **FAQPage** schema with 8 Q&As
- **BreadcrumbList** schema
- **Article** schema on content pages

## SEO Patterns

### Headers
All H2 headers follow: "Esports Production Services: [Section Topic]"

### Meta Tags
- Title starts with "Esports Production Services"
- Description starts with "Esports production services"
- Keywords array includes primary and secondary terms

### Content Pages
Each markdown page includes:
- Frontmatter: title, description, keywords, author, date, hero_image, hero_alt
- Internal links back to homepage with keyword anchor text
- External authority links to industry leaders
- Related resources section linking to other content pages

### Alt Text
All images and videos include "Esports Production Services" in alt/title/aria-label.

## Cross-Site Network

Part of the ESPORTS QUEST Network:
- https://esportsevent.quest (Insurance)
- https://esportsnews.quest (News)
- https://mvp.actor (Recruitment)

UnifiedHeader and UnifiedFooter provide cross-site navigation.

## Adding New Content Pages

1. Create markdown file in `/content/`:
```markdown
---
title: "Esports Production Services: [Topic]"
description: "Esports production services [description starting with keyword]..."
keywords:
  - primary keyword
  - esports production services
  - secondary keywords
author: "Esports Production Services Quest"
date: "YYYY-MM-DD"
last_updated: "YYYY-MM-DD"
hero_image: "/images/[slug].jpg"
hero_alt: "Esports Production Services - [descriptive text]"
---

# Esports Production Services: [Topic]

[Content with keyword mentions, internal links, external authority links]

## Related Esports Production Services Resources

- [Esports Production Services Guide](/esports-production-guide)
- [Back to Esports Production Services Homepage](/)
```

2. Add to `highPriorityPages` in `app/sitemap.ts` if important
3. Add to `resourceGuides` array in `app/page.tsx` for homepage link

## Database (Neon)

Contact form submissions stored in Neon PostgreSQL.
- Project: Connected via `@neondatabase/serverless`
- API route: `app/api/contact/route.ts`

## Deployment

Automatic deployment via Vercel on push to `main` branch.

```bash
git add -A && git commit -m "Description" && git push
```

## SEO Monitoring

Track in Google Search Console:
- Primary: "esports production services" (target: position 1)
- Secondary: "esports production companies", "esports live production", "video game tournament production"

---

*Last Updated: 2026-01-30*
*Maintained by: Claude Code + Dan Keegan*
