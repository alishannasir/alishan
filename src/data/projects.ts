export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  colors: { from: string; to: string };
  description: string;
  overview: string[];
  highlights: string[];
  link: string;
  image: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "alishan-portfolio",
    title: "Alishan Portfolio",
    category: "Personal Site",
    year: "2025",
    role: "Full-Stack Developer",
    stack: ["React", "Three.js", "TypeScript", "Tailwind CSS", "Vite"],
    colors: { from: "#d4d4d4", to: "#737373" },
    description:
      "A personal portfolio with interactive Three.js visuals, typewriter copy, and a clean developer-first layout.",
    overview: [
      "This is my own site — the place I send people when they ask what I build. The brief was simple: feel modern, move a little, and get out of the way of the work.",
      "Three.js powers the hero atmosphere while React handles routing, animations, and the project showcase. Everything is typed, responsive, and tuned for fast first paint.",
    ],
    highlights: [
      "Interactive Three.js scene layered behind a minimal typographic layout",
      "Typewriter hero copy with staggered pill-button reveals",
      "Project and about pages with scroll-driven motion",
      "Fully responsive from mobile to wide desktop",
    ],
    link: "https://alishan.dev",
    image: "/images/one.png",
  },
  {
    slug: "pixelplay",
    title: "PixelPlay",
    category: "Full-Stack Web App",
    year: "2024",
    role: "Full-Stack Developer",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    colors: { from: "#312e81", to: "#0f172a" },
    description:
      "A gaming discovery platform with curated collections, ratings, and platform filters across mobile and PC titles.",
    overview: [
      "PixelPlay is a full-stack gaming list platform built to surface standout titles without the noise of a generic store. Users browse featured collections, filter by platform, and jump straight into game detail pages.",
      "I owned the API design, database schema, admin flows, and the dark-themed frontend. Game cards show ratings, download counts, and platform tags with a layout built for scanning fast.",
    ],
    highlights: [
      "Featured collections with platform tags and rating metadata",
      "Search, filter, and category navigation across mobile and PC games",
      "REST API with MongoDB-backed game catalog and admin CRUD",
      "Dark UI with responsive card grid and detail page routing",
    ],
    link: "https://pixelplay.app",
    image: "/images/two.png",
  },
  {
    slug: "gilgit-trails",
    title: "Gilgit Trails",
    category: "Full-Stack Web App",
    year: "2024",
    role: "Full-Stack Developer",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    colors: { from: "#86efac", to: "#14532d" },
    description:
      "A local trails discovery website for Gilgit-Baltistan — search remote paths, explore trail detail pages, and plan the next adventure.",
    overview: [
      "Gilgit Trails started as a local project to map and share hiking routes through one of the most beautiful regions on Earth. The landing page uses scattered trail photography and a bold hero to set the tone before users dive into search and detail views.",
      "Built full-stack end to end: trail data models, search and filtering, detail pages with maps and descriptions, and a content layer the team can update without touching code.",
    ],
    highlights: [
      "Hero landing with floating trail photography and dual CTA layout",
      "Full-width immersive hero variant for campaign and detail entry points",
      "Trail search, filtering, and rich detail pages with route metadata",
      "Full-stack architecture with API-backed content and responsive UI",
    ],
    link: "https://gilgit-trails.com",
    image: "/images/three.png",
    images: ["/images/three.png", "/images/four.png"],
  },
  {
    slug: "gilgit-app",
    title: "GilgitApp",
    category: "E-Commerce",
    year: "2024",
    role: "Full-Stack Developer",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    colors: { from: "#1e293b", to: "#0f172a" },
    description:
      "A classifieds and e-commerce marketplace for Gilgit — browse listings, filter by category, and buy or sell locally.",
    overview: [
      "GilgitApp is a local e-commerce platform modeled after modern classifieds: cars, bikes, laptops, home goods, and more. Sellers post listings with photos and pricing; buyers search, filter by location, and reach out directly.",
      "The dark-themed UI prioritizes scanability — category icons across the top, card grids with price and location, and detail pages with view counts and seller info. I built the listing flow, category system, and search from scratch.",
    ],
    highlights: [
      "Multi-category marketplace with icon navigation and location filters",
      "Listing cards with pricing, city, timestamps, and view counts",
      "Dark-mode-first UI with search, login, and seller onboarding flows",
      "Detail pages with image galleries and structured listing metadata",
    ],
    link: "https://gilgitapp.com",
    image: "/images/five.png",
  },
  {
    slug: "fieldpulse",
    title: "FieldPulse",
    category: "SaaS Marketing Site",
    year: "2023",
    role: "Frontend Developer",
    stack: ["Svelte", "Strapi", "Tailwind CSS", "TypeScript"],
    colors: { from: "#1e3a5f", to: "#93c5fd" },
    description:
      "A Svelte and Strapi-powered landing website for FieldPulse — field service software built to save time and keep teams aligned.",
    overview: [
      "FieldPulse needed a marketing site that felt enterprise-ready without being stiff. Strapi handles the content layer — case studies, resources, and blog entries — while Svelte renders fast, component-driven pages on the front.",
      "The layout mixes editorial cards, case study blocks, and product messaging into a grid that scales from hero to deep content sections. Everything is CMS-driven so the marketing team can ship updates independently.",
    ],
    highlights: [
      "Svelte frontend with Strapi headless CMS for content management",
      "Resource grid with case studies, tools & tips, and e-book CTAs",
      "Multi-level navigation with product, solutions, and pricing sections",
      "Responsive marketing layout with reusable content blocks",
    ],
    link: "https://fieldpulse.com",
    image: "/images/six.png",
  },
];
