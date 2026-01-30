# Esports Production Services Quest - Product Requirements Document

> **North Star Document** - This PRD is the single source of truth for the Esports Production Services Quest project.
> All feature development and SEO work should reference this document.

## Mission

Build the UK's premier informational resource for esports production services, achieving:
- **SEO Dominance**: Position 1 for "esports production services" and related keywords
- **Lead Generation**: Convert visitors into quote requests via contact form
- **Authority Building**: Establish credibility through comprehensive content and industry links
- **Network Effect**: Drive traffic across the ESPORTS QUEST Network

## Target Users

### Primary: Tournament Organisers
- Gaming companies planning competitive events
- Esports teams hosting tournaments
- Game publishers launching esports programmes
- Looking for: Production partners, pricing information, capability assessment

### Secondary: Brands & Sponsors
- Non-endemic brands entering esports
- Endemic gaming brands scaling activations
- Looking for: Understanding of esports production, vendor evaluation

### Tertiary: Aspiring Professionals
- People wanting careers in esports production
- Broadcast professionals transitioning to gaming
- Looking for: Industry knowledge, skill requirements, career paths

## Current State (January 2026)

### SEO Performance (Google Search Console - Jan 2025)

| Keyword | Position | Impressions | Opportunity |
|---------|----------|-------------|-------------|
| esports production services | 6.9 | 17 | PRIMARY TARGET |
| competitive video game tournament production | 7.5 | 6 | Good position |
| e-sports productions | 5.5 | 2 | Maintain |
| video game tournament event production | 21.9 | 15 | NEW PAGE CREATED |
| video gaming tournament event production | 20.4 | 14 | NEW PAGE CREATED |
| esports production companies | 70.3 | 9 | NEW PAGE CREATED |
| esports live production | 89.0 | 1 | NEW PAGE CREATED |
| esports production | 52.4 | 9 | Improve |
| esports events production | 15.3 | 3 | Improve |
| esports broadcast solutions | 32.0 | 1 | Content exists |

### Site Metrics
- **Total Pages**: 10 (1 homepage + 9 content pages)
- **Content Pages**: 9 markdown-based guides
- **New Pages (Jan 30, 2026)**: 3 landing pages targeting poor-ranking keywords

### Content Structure

**Homepage** (Priority 1.0)
- Full SEO optimization for "esports production services"
- 94+ keyword mentions, bolded once in hero
- All H2 headers include keyword
- High-authority external links
- Internal links to all content pages
- Schema markup (WebSite, Organization, WebPage, FAQPage, BreadcrumbList)

**Pillar Page** (Priority 0.95)
- `/esports-production-guide` - Comprehensive guide

**High-Priority Pages** (Priority 0.85)
- `/esports-production-companies` - NEW (targeting position 70.3)
- `/esports-live-production` - NEW (targeting position 89.0)
- `/video-game-tournament-production` - NEW (targeting positions 21.9, 20.4)
- `/esports-broadcast-services`
- `/tournament-production-cost`
- `/esports-streaming-setup`

**Supporting Pages** (Priority 0.7)
- `/remote-esports-production`
- `/esports-observer-guide`

**Conversion Page** (Priority 0.9)
- `/contact` - Quote request form

### Technical Architecture

```
Frontend (Next.js 15 + Vercel)
├── Homepage (app/page.tsx) → Static, fully optimized
├── Content Pages (app/[slug]/page.tsx) → Dynamic from /content/*.md
├── Contact (app/contact/page.tsx) → Form + Neon DB
└── Components (UnifiedHeader, UnifiedFooter, NewsSection)

Content System
├── Markdown files in /content/
├── gray-matter for frontmatter parsing
├── remark for markdown-to-HTML
└── Auto-generated sitemap from content slugs

Database (Neon PostgreSQL)
└── Contact form submissions
```

## In Scope - Current Phase

### Phase 1: SEO Foundation ✅ COMPLETE
- [x] Site structure with Next.js 15
- [x] Schema markup implementation
- [x] Meta tags optimization
- [x] Sitemap and robots.txt
- [x] Core content pages

### Phase 2: Keyword Optimization ✅ COMPLETE (Jan 30, 2026)
- [x] Homepage fully optimized for "esports production services"
- [x] All H2 headers include primary keyword
- [x] Keyword mentioned 94+ times, bolded once
- [x] All video alt text includes keyword
- [x] High-authority external links added
- [x] Site name consistency across all metadata

### Phase 3: Gap Pages ✅ COMPLETE (Jan 30, 2026)
- [x] `/esports-production-companies` - Targeting position 70.3
- [x] `/esports-live-production` - Targeting position 89.0
- [x] `/video-game-tournament-production` - Targeting positions 21.9, 20.4
- [x] Sitemap updated with new pages
- [x] Homepage links to new pages

### Phase 4: Link Building (NEXT)
- [ ] Ensure all content pages link back to homepage with keyword anchor
- [ ] Cross-link between content pages
- [ ] External outreach for backlinks
- [ ] Guest posts on industry sites

### Phase 5: Conversion Optimization (Future)
- [ ] A/B test CTA copy and placement
- [ ] Add social proof (case studies, testimonials)
- [ ] Implement exit-intent popup
- [ ] Add live chat or chatbot

### Phase 6: Content Expansion (Future)
- [ ] Create pages for remaining poor-ranking keywords
- [ ] Add video content (YouTube embeds)
- [ ] Create downloadable resources (guides, checklists)
- [ ] Blog/news section for fresh content

## Out of Scope (Current Phase)

- E-commerce / direct booking
- User accounts / login
- Job board functionality
- Video hosting
- Mobile app
- Multi-language support

## Success Metrics

### Primary KPI
- **Position 1** for "esports production services" in Google UK

### Secondary KPIs
- Top 10 for all target keywords
- 100+ monthly organic visitors
- 10+ monthly contact form submissions
- 5+ quality backlinks

### Technical Metrics
- Core Web Vitals: All green
- Page load: < 2 seconds
- Mobile responsive: 100%
- Schema validation: No errors

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Algorithm update drops rankings | High | Diversify keywords, quality content |
| Competitor outranks us | Medium | Continuous optimization, link building |
| Low conversion rate | Medium | CTA optimization, social proof |
| Content becomes outdated | Low | Regular updates, fresh content |

## Cross-Site Network

Esports Production Services Quest is part of the ESPORTS QUEST Network:

| Site | Purpose | Cross-Linking |
|------|---------|---------------|
| esportsproduction.quest | Production services | Hub site |
| esportsevent.quest | Event insurance | Footer + inline |
| esportsnews.quest | Industry news | NewsSection component |
| mvp.actor | Recruitment | Footer + inline |

Network effect: Each site links to others, building domain authority across the network.

## Content Guidelines

### Keyword Usage
- Primary keyword in: title, H1, first paragraph, H2s, alt text
- Natural density: 1-2% of content
- Bold keyword once per page
- Variations: "esports production services", "esports production", "production services"

### External Links
Always include authority links to:
- ESL Gaming (eslgaming.com)
- Riot Games Esports (lolesports.com)
- Twitch (twitch.tv)
- PGL Esports (pglesports.com)
- BLAST Premier (blastpremier.com)
- FACEIT (faceit.com)

### Internal Links
Every content page should link to:
- Homepage with keyword anchor text
- 2-3 related content pages
- Contact page CTA

### Schema Requirements
- Homepage: WebSite, Organization, WebPage, FAQPage, BreadcrumbList
- Content pages: Article, BreadcrumbList
- All pages: Proper canonical URLs

---

*Last Updated: 2026-01-30*
*Maintained by: Claude Code + Dan Keegan*
