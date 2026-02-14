/**
 * Case studies — content lives entirely in this React app.
 * Copy the text from your Squarespace pages into these structured blocks.
 * No Squarespace embeds or markup; only Figma embeds (from figma.com) are iframes.
 *
 * Block types:
 *   - heading  { type: 'heading', level: 2|3, text: string }
 *   - paragraph { type: 'paragraph', text: string }
 *   - list      { type: 'list', items: string[], ordered?: boolean }
 *   - figma     { type: 'figma', url: string, title?: string }
 *   - link      { type: 'link', url: string, text?: string }
 *   - image     { type: 'image', url: string, alt: string, caption?: string }
 *   - paragraph with preformatted: true for multi-line (e.g. domain tree)
 */

export const caseStudies = [
  {
    slug: "uva-vpr",
    title: "UVA VPR Redesign",
    description: "Complex Multi-site Migration and Modernization Project",
    blocks: [
      { type: "heading", level: 2, text: "Project Overview" },
      {
        type: "paragraph",
        text: "Led the complete redesign and restructuring of the University of Virginia's Vice President for Research (VPR) digital ecosystem, transforming a complex multisite environment into a streamlined, hierarchical platform serving the university's research community.",
      },
      { type: "heading", level: 2, text: "Role(s)" },
      { type: "list", items: ["UX/UI Designer", "Lead Drupal Developer"] },
      { type: "heading", level: 2, text: "Challenge" },
      { type: "heading", level: 3, text: "Complex Infrastructure" },
      {
        type: "list",
        items: [
          "Overcomplicated multisite management system",
          "Inefficient content governance",
          "Limited scalability for new programs",
          "Challenging feature implementation",
        ],
      },
      { type: "heading", level: 3, text: "Technical Limitations" },
      {
        type: "list",
        items: [
          "Fragmented URL structure",
          "Inconsistent user experiences",
          "Limited template flexibility",
          "Complex content management workflows",
        ],
      },
      { type: "heading", level: 2, text: "Site Components" },
      { type: "heading", level: 3, text: "Main VPR Site" },
      {
        type: "list",
        items: [
          "External-facing landing page",
          "Researcher portal",
          "Program directories",
          "Resource libraries",
        ],
      },
      { type: "heading", level: 3, text: "Specialized Microsites" },
      {
        type: "list",
        items: [
          "Sponsored Programs (OSP)",
          "Research Security",
          "Human Research Protection Program (HRPP)",
          "Animal Care & Use",
          "Environmental Health & Safety",
          "Compliance & Training",
          "Research Development",
        ],
      },
      { type: "heading", level: 3, text: "Domain Structure" },
      {
        type: "paragraph",
        preformatted: true,
        text: `Level One:   research.virginia.edu/
Level Two:   ├── compliance.research.virginia.edu
Level Three: │   ├── compliance.research.virginia.edu/Training
             │   ├── compliance.research.virginia.edu/CUI
Level Four:  │   └── compliance.research.virginia.edu/CUI/forms
Level Two:   ├── animalcare.research.virginia.edu/
Level Three: │   ├── animalcare.research.virginia.edu/acuc
             │   ├── animalcare.research.virginia.edu/oaw
Level Four:  │   └── animalcare.research.virginia.edu/oaw/training`,
      },
      { type: "heading", level: 2, text: "Project Workflow" },
      {
        type: "paragraph",
        text: "Problem → Discovery & Strategy (Research/Analyze/Synthesize) → Develop & Deliver (Design/Prototype/Build) → Solution",
      },
      {
        type: "image",
        url: "/images/vpr-double-diamond.png",
        alt: "Double Diamond design process: Problem, Discovery (Research, analyze, synthesize), Strategy, Develop (Design, prototype, build), Deliver, and Solution",
        caption: "The Double Diamond design process — framework for solving complex problems through iterative design.",
      },
      { type: "heading", level: 2, text: "UI/UX" },
      { type: "heading", level: 3, text: "Design System Implementation" },
      { type: "heading", level: 3, text: "Header System" },
      {
        type: "list",
        items: [
          "UVA Research logo with Office of the Vice President for Research subtitle",
          "Global navigation with Search and Give buttons",
          "Mobile-responsive menu system",
          "Consistent branding across all subsites",
        ],
      },
      { type: "heading", level: 3, text: "Homepage Components" },
      {
        type: "list",
        items: [
          "Hero section with mission statement",
          "Key metrics display (R&D Expenditures, Research Awards, Proposal Activity)",
          "Leadership profile section",
          "News and updates grid",
          "Quick links to key resources",
          "Video integration for research spotlights",
        ],
      },
      { type: "heading", level: 3, text: "Content Card System" },
      {
        type: "list",
        items: [
          "Department cards with consistent styling",
          "News article cards",
          "Event cards",
          "Resource cards",
          "Contact information cards",
        ],
      },
      { type: "heading", level: 3, text: "Design Language" },
      {
        type: "image",
        url: "/images/vpr-brand-wahoo.png",
        alt: "UVA brand expression: citizen-leaders quote, Virginia typography, and wahoo motif",
        caption: "UVA brand expression — citizen-leaders since 1819 (brand.virginia.edu).",
      },
      {
        type: "image",
        url: "/images/vpr-franklin-gothic.png",
        alt: "Franklin Gothic typography and UVA Wahoos style guide — primary typeface for headings and body copy",
        caption: "Franklin Gothic — primary typeface for headings and body copy in marketing (brand.virginia.edu).",
      },
      { type: "heading", level: 3, text: "Typography" },
      {
        type: "list",
        items: [
          "Primary Headlines: University serif font",
          "Body Text: Clean sans-serif for readability",
          "Hierarchical structure using size and weight",
        ],
      },
      { type: "heading", level: 3, text: "Grid System" },
      {
        type: "list",
        items: [
          "Responsive 12-column layout",
          "Consistent spacing metrics",
          "Flexible container widths",
          "Mobile-first breakpoints",
        ],
      },
      { type: "heading", level: 3, text: "Color Palette" },
      {
        type: "list",
        items: [
          "Primary: UVA Navy (#232D4B)",
          "Secondary: UVA Orange (#E57200)",
          "Accent Blues (#2B6CB0, #3182CE)",
          "Neutral grays for content areas",
          "White space for readability",
        ],
      },
      { type: "heading", level: 3, text: "Design System Components" },
      { type: "heading", level: 3, text: "Core Components" },
      {
        type: "list",
        items: [
          "Stats Block Module",
          "Mosaic Layout System",
          "Text/Video Split Layout",
          "Event Listing Component",
          "People Filtering System",
          "Customizable Button & Link System",
          "Slim Masthead Banner",
          "Emergency Alert Module",
          "UVAToday Tags Integration",
          "PDF/Document Upload System",
        ],
      },
      { type: "heading", level: 3, text: "Template System" },
      {
        type: "list",
        items: [
          "General Template (Base System)",
          "Site-Specific Custom Templates",
          "Landing Page Templates",
          "Subpage Templates",
          "Advanced Table UI",
          "Video Page Layout",
          "People Directory Layout",
        ],
      },
      { type: "heading", level: 2, text: "Technical Implementation" },
      { type: "heading", level: 3, text: "Platform & Infrastructure" },
      {
        type: "list",
        items: [
          "CMS: Drupal multisite architecture",
          "Hosting: Acquia Cloud environment",
          "Authentication: UVA Computing ID integration",
          "Analytics: Google Analytics implementation across all sites",
        ],
      },
      { type: "heading", level: 2, text: "Results & Impact" },
      { type: "heading", level: 3, text: "Performance Metrics" },
      {
        type: "list",
        items: [
          "User Engagement: 52.63% increase in monthly site visits (from 19,000 to 29,000 visitors)",
          "Page Load Time: Reduced from 4.2s to 2.1s",
          "Mobile Usage: 60% increase in mobile visitors",
          "User Satisfaction: 92/100 usability score",
          "Accessibility Score: WCAG AA Compliant 90.9 score (SiteImprove)",
        ],
      },
      { type: "heading", level: 3, text: "User Benefits" },
      {
        type: "list",
        items: [
          "Simplified navigation",
          "Consistent user experience",
          "Improved content discovery",
          "Mobile-responsive design",
        ],
      },
      { type: "heading", level: 3, text: "Technical Achievements" },
      {
        type: "list",
        items: [
          "Streamlined multisite architecture",
          "Improved content management workflow",
          "Enhanced security controls",
          "Better resource organization",
        ],
      },
      { type: "heading", level: 3, text: "Administrative Improvements" },
      {
        type: "list",
        items: [
          "Centralized governance",
          "Streamlined content updates",
          "Better access controls",
          "Enhanced monitoring capabilities",
        ],
      },
      {
        type: "link",
        url: "https://research.virginia.edu",
        text: "Visit VPR Site",
      },
    ],
  },
  {
    slug: "claude-moore-health-sciences-library",
    title: "Claude Moore Health Sciences Library",
    description: "Web and digital experience for the Claude Moore Health Sciences Library at UVA.",
    blocks: [
      {
        type: "paragraph",
        text: "Web and digital experience work for the Claude Moore Health Sciences Library. The work included improving findability, user experience, and alignment with the library's services and brand.",
      },
      {
        type: "image",
        url: "/images/claude-moore-mockup.png",
        alt: "Claude Moore Health Sciences Library website on MacBook Pro mockup",
        caption: "Claude Moore Health Sciences Library — web experience",
      },
      {
        type: "figma",
        url: "https://www.figma.com/design/YOUR_FILE_KEY/Claude-Moore-Library",
        title: "Claude Moore Health Sciences Library — designs",
      },
    ],
  },
  {
    slug: "delta",
    title: "Delta",
    description: "Case study for the Delta project.",
    blocks: [
      {
        type: "paragraph",
        text: "Add your Delta case study content from Squarespace here. Use heading blocks for section titles and paragraph blocks for body copy.",
      },
      {
        type: "heading",
        level: 2,
        text: "Process",
      },
      {
        type: "paragraph",
        text: "Describe your process and outcomes.",
      },
      {
        type: "figma",
        url: "https://www.figma.com/design/YOUR_FILE_KEY/Delta",
        title: "Delta — Figma prototype or frames",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug) ?? null;
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((c) => c.slug);
}
