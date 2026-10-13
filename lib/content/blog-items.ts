export type BlogItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  category: string;
  gradient: string;
};

export const BLOG_ITEMS: BlogItem[] = [
  {
    id: "1",
    slug: "cognitive-psychology-ux-design",
    title: "How Cognitive Psychology Makes Better UX",
    excerpt: "Most UX problems don't come from bad design — they come from skipping steps. Exploring how Fogg's Behavior Model, cognitive load theory, and progressive disclosure create delightful digital products.",
    tags: ["UX Research", "Psychology", "Product Design"],
    date: "2025-03-15",
    readTime: "8 min read",
    category: "UX Design",
    gradient: "linear-gradient(140deg, #1f1c2c 0%, #928dab 100%)",
  },
  {
    id: "2",
    slug: "service-design-govtech-indonesia",
    title: "Service Design in Indonesian Govtech: What Works",
    excerpt: "After designing for LKPP, Telkom, and INA DIGITAL — here's what I've learned about making government digital services actually usable for 10M+ Indonesians across different tech literacy levels.",
    tags: ["Service Design", "Govtech", "Indonesia"],
    date: "2025-02-28",
    readTime: "12 min read",
    category: "Service Design",
    gradient: "linear-gradient(140deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  },
  {
    id: "3",
    slug: "ai-product-management-2025",
    title: "AI Product Management in 2025: A PM's Perspective",
    excerpt: "What does it actually mean to be an AI Product Manager? Beyond the buzzwords — breaking down how AI changes the PM role, what skills matter most, and how I approach building AI-powered products.",
    tags: ["AI", "Product Management", "Strategy"],
    date: "2025-01-20",
    readTime: "10 min read",
    category: "Product Strategy",
    gradient: "linear-gradient(140deg, #4b1248 0%, #f0c27b 100%)",
  },
  {
    id: "4",
    slug: "fintech-onboarding-lessons",
    title: "61% Retention Boost: Lessons from Redesigning Fintech Onboarding",
    excerpt: "A behind-the-scenes look at how we improved 7-day retention by 61% — the research process, behavioral design decisions, the mistakes we made, and what actually moved the needle.",
    tags: ["Fintech", "Onboarding", "Case Study"],
    date: "2024-11-10",
    readTime: "15 min read",
    category: "Case Study",
    gradient: "linear-gradient(140deg, #373b44 0%, #4286f4 100%)",
  },
  {
    id: "5",
    slug: "design-system-from-zero",
    title: "Building a Design System from Zero to 200+ Components",
    excerpt: "The honest story of building a design system from scratch — what worked, what failed, how to get designer-developer collaboration right, and the governance model that actually stuck.",
    tags: ["Design System", "Figma", "Process"],
    date: "2024-09-05",
    readTime: "11 min read",
    category: "Design Tools",
    gradient: "linear-gradient(140deg, #1a1c2c 0%, #4a192c 100%)",
  },
  {
    id: "6",
    slug: "blockchain-ux-for-non-techies",
    title: "Making Blockchain UX Accessible to Non-Tech Government Users",
    excerpt: "Blockchain UI is broken for most people. Here's how we simplified decentralized workflows using plain Indonesian language, familiar mental models, and trust-first design.",
    tags: ["Blockchain", "Web3", "Accessibility"],
    date: "2024-07-22",
    readTime: "9 min read",
    category: "UX Research",
    gradient: "linear-gradient(140deg, #2c3e50 0%, #3498db 100%)",
  },
];
