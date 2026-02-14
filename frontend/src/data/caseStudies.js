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
      {
        type: "figma",
        url: "https://embed.figma.com/proto/ET2nfjZQZYWWfpbdTNmgkz/VP-Research-UI?page-id=366%3A191&node-id=366-539&viewport=188%2C21%2C0.09&scaling=min-zoom&content-scaling=fixed&embed-host=share",
        title: "VP Research UI — interactive prototype",
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
    description: "UX Research & Design Case Study",
    blocks: [
      { type: "heading", level: 2, text: "Project Overview" },
      {
        type: "paragraph",
        text: "Led the complete redesign of UVA's Claude Moore Health Sciences Library website, focusing on improving user experience for clinicians, students, and faculty while modernizing the interface and implementing UVA Health brand standards.",
      },
      {
        type: "image",
        url: "/images/claude-moore-mockup.png",
        alt: "Claude Moore Health Sciences Library website on MacBook Pro mockup",
        caption: "Claude Moore Health Sciences Library — web experience",
      },
      { type: "heading", level: 2, text: "Role(s)" },
      { type: "list", items: ["UX/UI Designer"] },
      { type: "heading", level: 2, text: "Challenge" },
      {
        type: "paragraph",
        text: "The existing library website needed significant updates to:",
      },
      {
        type: "list",
        items: [
          "Improve search functionality and navigation",
          "Provide better access to critical resources for different user groups",
          "Modernize UI while maintaining brand compliance",
          "Optimize content organization and layout",
          "Enhance overall usability",
        ],
      },
      { type: "heading", level: 2, text: "Process" },
      { type: "heading", level: 3, text: "Research Design & Planning" },
      { type: "heading", level: 3, text: "Research Tools Selection" },
      {
        type: "list",
        items: [
          "Google Analytics for quantitative usage data",
          "SiteImprove for accessibility and usability metrics",
          "Userbrain.com for unbiased external feedback",
          "In-person testing protocols for direct user observation",
        ],
      },
      { type: "heading", level: 3, text: "Competitive Analysis Framework" },
      {
        type: "list",
        items: [
          "Identified key university libraries for benchmarking",
          "Created evaluation criteria for design components",
          "Documented best practices and successful patterns",
        ],
      },
      { type: "heading", level: 3, text: "Strategic Planning" },
      {
        type: "list",
        items: [
          "Developed comprehensive research strategy combining multiple data sources",
          "Created detailed test plans for different user groups",
          "Established success metrics and KPIs",
          "Designed testing scripts and tasks",
        ],
      },
      { type: "heading", level: 3, text: "Stakeholder Collaboration" },
      {
        type: "list",
        items: [
          "Coordinated with library staff for access to users",
          "Aligned research goals with stakeholder objectives",
          "Created feedback loops for continuous improvement",
          "Established regular check-ins with key stakeholders",
        ],
      },
      { type: "heading", level: 3, text: "Qualitative Research" },
      {
        type: "paragraph",
        text: "Coordinated and conducted in-person usability tests with: Students, Staff members, Librarians, Faculty. Utilized Userbrain.com for external user testing to gather unbiased feedback. Collected feedback on both: Existing website pain points, New prototype iterations.",
      },
      { type: "heading", level: 3, text: "Quantitative Research" },
      {
        type: "list",
        items: [
          "Analyzed Google Analytics data to understand: Most accessed resources, Common user paths, Drop-off points, Search patterns",
          "Used SiteImprove to evaluate: Accessibility scores, Usability metrics, Technical performance",
          "Conducted competitive analysis of other university library websites",
        ],
      },
      { type: "heading", level: 3, text: "Research Methodology" },
      {
        type: "list",
        items: [
          "Early Phase: Unmoderated remote testing via Userbrain.com; Analysis of existing analytics data",
          "Mid Phase: In-person moderated testing at the library; Interactive prototype testing; Stakeholder interviews",
          "Late Phase: A/B testing for design validation; Accessibility testing; Performance benchmarking",
        ],
      },
      { type: "heading", level: 3, text: "Design Process" },
      { type: "heading", level: 3, text: "Technical Implementation" },
      {
        type: "list",
        items: [
          "Collaborated with SpringShare engineers",
          "Built bootstrap-compatible framework",
          "Created development-ready components",
          "Provided technical documentation and specifications",
        ],
      },
      { type: "heading", level: 3, text: "Mockups & Prototypes" },
      {
        type: "list",
        items: [
          "Created wireframes and prototypes based on research findings",
          "Developed 2-3 design concepts for stakeholder review",
          "Implemented iterative design improvements based on feedback",
          "Ensured ADA compliance and accessibility",
          "Maintained UVA Health brand standards",
        ],
      },
      { type: "heading", level: 2, text: "Outcomes" },
      { type: "heading", level: 3, text: "Improved Navigation" },
      {
        type: "list",
        items: [
          "Streamlined information architecture",
          "Enhanced search functionality",
          "Better resource accessibility",
        ],
      },
      { type: "heading", level: 3, text: "User-Centric Design" },
      {
        type: "list",
        items: [
          "Tailored interfaces for different user groups",
          "Improved content organization",
          "Enhanced user flow",
        ],
      },
      { type: "heading", level: 3, text: "Modern Interface" },
      {
        type: "list",
        items: [
          "Updated visual design",
          "Brand compliance",
          "Responsive layout",
        ],
      },
      { type: "heading", level: 3, text: "Accessibility" },
      {
        type: "list",
        items: [
          "ADA compliant design",
          "Inclusive user experience",
        ],
      },
      {
        type: "link",
        url: "https://library.healthsystem.virginia.edu",
        text: "Visit CMHSL Site",
      },
    ],
  },
  {
    slug: "uva-fralin-museum",
    title: "UVA Fralin Museum",
    description: "UI redesign for the Fralin Museum of Art at the University of Virginia.",
    blocks: [
      { type: "heading", level: 2, text: "Project Overview" },
      {
        type: "paragraph",
        text: "UI redesign work for the Fralin Museum of Art at UVA. Explore the interactive prototype below.",
      },
      {
        type: "figma",
        url: "https://embed.figma.com/proto/L1I5nGgYFSkswRA5EgVu63/Fralin-Redesign-Round-3?page-id=0%3A1&node-id=1-2&p=f&viewport=414%2C25%2C0.07&scaling=min-zoom&content-scaling=fixed&embed-host=share",
        title: "Fralin Museum — redesign prototype (Round 3)",
      },
    ],
  },
  {
    slug: "hooslist",
    title: "HoosList Schedule View",
    description: "Performance Optimization & UX Engineering in Drupal",
    blocks: [
      { type: "heading", level: 2, text: "Project Summary" },
      {
        type: "paragraph",
        text: "Led the UX and frontend architecture for a high-traffic academic scheduling system serving thousands of students, faculty, and advisors. Re-architected the data layer and Drupal Views implementation to significantly improve performance, stability, and usability during peak registration periods.",
      },
      { type: "heading", level: 2, text: "The Challenge" },
      {
        type: "paragraph",
        text: "The existing schedule interface relied on live entity queries with multiple relational joins. During high-concurrency events (course registration windows), this caused:",
      },
      {
        type: "list",
        items: [
          "Expensive SQL queries",
          "Increased database strain",
          "Slower render times",
          "Inconsistent performance under load",
        ],
      },
      {
        type: "paragraph",
        text: "The system needed to scale reliably without replacing Drupal or adding unnecessary infrastructure complexity.",
      },
      { type: "heading", level: 2, text: "The Solution" },
      { type: "heading", level: 3, text: "Snapshot-Based Data Architecture" },
      {
        type: "paragraph",
        text: "Designed and implemented a denormalized snapshot table to serve as the primary data source for the schedule View.",
      },
      { type: "heading", level: 3, text: "Key engineering decisions:" },
      {
        type: "list",
        items: [
          "Reduced runtime joins and relational query depth",
          "Controlled SQL behavior for predictable execution",
          "Implemented time-based caching (15-minute window)",
          "Capped pagination to limit heavy result sets",
          "Avoided AJAX rendering to ensure deterministic caching behavior",
        ],
      },
      { type: "heading", level: 3, text: "Impact:" },
      {
        type: "list",
        items: [
          "Reduced database overhead during peak usage",
          "Improved response time consistency for large semester datasets",
          "Increased stability during high-concurrency registration events",
        ],
      },
      { type: "heading", level: 3, text: "Modular, Scalable Implementation" },
      {
        type: "paragraph",
        text: "Delivered as a standalone Drupal module with:",
      },
      {
        type: "list",
        items: [
          "Custom service layer for snapshot management",
          "Dedicated Views configuration",
          "Isolated CSS library for UI control and maintainability",
        ],
      },
      {
        type: "paragraph",
        text: "This modular approach allowed independent deployment, easier testing, and future extensibility.",
      },
      { type: "heading", level: 3, text: "UX & Accessibility Improvements" },
      {
        type: "paragraph",
        text: "Optimized both performance and user clarity:",
      },
      {
        type: "list",
        items: [
          "Clear, structured enrollment indicators",
          "Accessible loading states with reduced-motion support",
          "Responsive filter layout",
          "Improved empty-state guidance",
          "Legacy-mode support to preserve institutional familiarity during transition",
        ],
      },
      { type: "heading", level: 3, text: "Impact:" },
      {
        type: "list",
        items: [
          "Reduced user confusion during registration",
          "Maintained accessibility standards",
          "Improved clarity under high-stress usage scenarios",
        ],
      },
      { type: "heading", level: 2, text: "Measurable Outcomes" },
      {
        type: "list",
        items: [
          "Improved performance predictability during peak load",
          "Reduced query complexity and database strain",
          "Cleaner separation of data processing and presentation layers",
          "Architecture prepared for future enrollment and historical data expansion",
        ],
      },
      { type: "heading", level: 2, text: "My Role" },
      {
        type: "list",
        items: [
          "UX strategy & interface design",
          "Frontend engineering",
          "Drupal Views architecture",
          "Performance optimization",
          "Accessibility implementation",
          "Frontend/backend integration",
        ],
      },
      { type: "heading", level: 2, text: "Skills Demonstrated" },
      {
        type: "list",
        items: [
          "Performance engineering within CMS platforms",
          "Scalable data modeling",
          "High-load system optimization",
          "UX systems thinking",
          "Accessibility-first frontend development",
        ],
      },
      {
        type: "paragraph",
        text: "This project demonstrates my ability to operate beyond theming — designing systems that scale, remain accessible, and perform reliably under institutional-level demand.",
      },
      { type: "heading", level: 2, text: "Design & Prototypes" },
      {
        type: "figma",
        url: "https://embed.figma.com/deck/6W14tutflkpu8ZYKK1KhEb/Template-review-session-presentation---Modes?node-id=1-598&p=f&viewport=491%2C212%2C0.2&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share",
        title: "Template review session presentation",
      },
      {
        type: "figma",
        url: "https://embed.figma.com/proto/F0D3Ea7Vl03XO0nl2qA4UX/Wireframes---Mockups?page-id=56%3A1249&node-id=56-1250&p=f&viewport=25%2C191%2C0.12&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=56%3A1250&embed-host=share",
        title: "HoosList — wireframes & mockups prototype",
      },
      {
        type: "paragraph",
        text: "The web app launched with a decision to use Azure as the backend.",
      },
      {
        type: "link",
        url: "https://hooslist.virginia.edu",
        text: "Visit HoosList (hooslist.virginia.edu)",
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
