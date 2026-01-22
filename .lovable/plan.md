

# PALANTIR-CODE Website Development Plan

## Overview

Create a professional B2B website for PALANTIR-CODE, Spain's first certified Plane partner. The website will follow a similar structure to quabusolutions.com but focused entirely on Plane (plane.so) services and solutions instead of Atlassian.

## Brand Assets

- **Square Logo**: Blue crystal ball/sphere icon (will be copied to src/assets)
- **Brand Mark**: "PALANTIR-CODE" text with blue underline (will be copied to src/assets)
- **Color Palette**: Blue-focused (#0066B3 primary) to align with both the logo and Plane's branding
- **Language**: English throughout

---

## Website Structure

### 1. Navigation Header (Sticky)

- Logo (square icon + brand name)
- Menu Items:
  - Solutions (dropdown)
  - Services (dropdown)
  - About
  - Contact
- CTA Button: "Schedule a Demo"
- Partner Badge: "Official Plane Partner - Spain's First"

### 2. Hero Section

**Headline**: "Accelerate Your Projects with Plane"

**Subheadline**: "PALANTIR-CODE is Spain's first certified Plane partner. We help teams ship faster with expert implementation, migration, and custom solutions for Plane's unified workspace."

**CTAs**:
- "Explore Solutions" (primary)
- "Schedule a Demo" (secondary)
- "Talk to an Expert" (tertiary)

**Trust Indicator**: Plane Partner badge prominently displayed

### 3. Stats Section

Key metrics to build credibility:
- "First Partner in Spain"
- "100% Plane Certified"
- "Enterprise Ready"
- "24/7 Support"

### 4. Why Plane Section

Showcase Plane's core value propositions:
- **Projects**: Customizable workflows, dependency tracking, flexible boards
- **Wiki**: Built-in documentation, rich text editor, publishable pages
- **AI**: Automate routine tasks, insights across projects
- **Deployment**: Cloud, Self-hosted, or Airgapped options

### 5. Solutions/Accelerators Section

Pre-built solutions adapted for Plane:

| Solution | Description |
|----------|-------------|
| Marketing | Campaign management, content calendars in Plane |
| Sales | Sales pipelines, CRM workflows, deal tracking |
| HR & People | Onboarding workflows, performance reviews |
| Operations | Process automation, resource management |
| Finance | Budget approvals, expense tracking workflows |
| IT & DevOps | Incident management, service desk |
| Customer Service | Support ticketing, SLA management |
| R&D | Product development, innovation tracking |

### 6. Services Section

Expert consulting services:

**Migration Services**
- Migrate from Jira, Linear, ClickUp, or Asana
- Zero data loss guaranteed
- User training included
- Post-migration support

**Implementation & Configuration**
- Best practices setup
- Custom workflow design
- Governance frameworks
- Performance optimization

**Custom Development**
- API integrations
- Custom automations
- Third-party connectors
- Workflow extensions

**Managed Services**
- 24/7 monitoring
- Proactive maintenance
- User support
- Regular health checks

### 7. Why PALANTIR-CODE Section

- Spain's First Certified Plane Partner
- Deep expertise in project management tools
- Bilingual support (English/Spanish)
- Enterprise-grade security compliance (SOC 2, GDPR, ISO27001)

### 8. Trusted By / Clients Section

Logo wall with placeholder for client logos (can be populated later)

### 9. CTA Section

"Ready to Transform Your Project Management?"

- Schedule a Demo button
- Contact form link

### 10. Footer

- Company info
- Quick links (Solutions, Services, About, Contact)
- Social media links
- Legal (Privacy Policy, Terms of Service)
- "Official Plane Partner" badge

---

## Pages to Create

| Page | Description |
|------|-------------|
| `/` | Home page (main landing) |
| `/solutions` | Overview of all solutions |
| `/services` | Detailed services page |
| `/about` | Company information |
| `/contact` | Contact form with demo scheduling |

---

## Technical Implementation

### File Structure

```text
src/
├── assets/
│   ├── palantir-logo-square.png
│   └── palantir-brand.png
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── WhyPlane.tsx
│   │   ├── Solutions.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── TrustedBy.tsx
│   │   └── CTASection.tsx
│   └── ui/ (existing components)
├── pages/
│   ├── Index.tsx (Home)
│   ├── Solutions.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
└── lib/
    └── constants.ts (company info, navigation data)
```

### Design System Updates

Update `index.css` with PALANTIR-CODE brand colors:
- Primary Blue: #0066B3 (matching logo)
- Secondary: Light blue accents
- Neutral backgrounds with white space

### Components to Build

1. **Header**: Sticky navigation with dropdown menus and mobile hamburger
2. **Hero**: Large headline, animated elements, CTAs
3. **Stats**: Animated counters or static badges
4. **Feature Cards**: Reusable cards for solutions/services
5. **Service Cards**: Detailed service descriptions with bullet points
6. **CTA Sections**: Call-to-action banners
7. **Footer**: Multi-column layout with links

### Animations & Polish

- Smooth scroll behavior
- Subtle hover effects on cards
- Fade-in animations on scroll (using CSS or simple intersection observer)
- Responsive design for all breakpoints

---

## Content Summary (English)

All text content will be in English, positioning PALANTIR-CODE as:
- Spain's first and only certified Plane partner
- Expert in Plane implementation and migration
- Specialist in enterprise project management solutions
- Trusted advisor for teams moving from Jira, Linear, or other tools to Plane

---

## Implementation Order

1. Copy brand assets to project
2. Update design system with brand colors
3. Create layout components (Header, Footer)
4. Build Home page sections (Hero through CTA)
5. Create additional pages (Solutions, Services, About, Contact)
6. Add routing configuration
7. Polish with animations and responsive adjustments

