import { useEffect, useState } from "react"
import Fairy from "./Fairy"
import { tr } from "./id"
import { articleDetails, projectDetails, type Lang } from "./content"

type Copy = {
  role: string
  headlineStart: string
  headlineAccent: string
  description: string
  caseStudies: string
  download: string
  available: string
}

const copy: Record<"en" | "id", Copy> = {
  en: {
    role: "Senior PM & UX Manager · Portfolio",
    headlineStart: "Turning",
    headlineAccent: "complex problems",
    description:
      "Building digital experiences that balance deep user empathy with measurable business outcomes — from research to shipped product.",
    caseStudies: "View Case Studies",
    download: "Download CV",
    available: "Available for new opportunities",
  },
  id: {
    role: "Senior PM & UX Manager · Portofolio",
    headlineStart: "Mengubah",
    headlineAccent: "masalah kompleks",
    description:
      "Membangun pengalaman digital yang menyeimbangkan empati pengguna dengan hasil bisnis terukur — dari riset hingga produk diluncurkan.",
    caseStudies: "Lihat Studi Kasus",
    download: "Unduh CV",
    available: "Terbuka untuk peluang baru",
  },
}

const projects = [
  {
    number: "01",
    badges: ["UX Design", "Service Design"],
    href: "/portfolio/simrs-kesehatan",
    category: "Govtech · E-Health",
    title: "E-Health Platform — SIMRS Kesehatan",
    detail: "50k+ impact · Telkom Indonesia 2024",
    gradient: "linear-gradient(140deg, #2c3e50 0%, #3498db 100%)",
  },
  {
    number: "02",
    badges: ["CX Design", "Strategy"],
    href: "/portfolio/cx-platform",
    category: "B2B SaaS",
    title: "Strategic CX Platform",
    detail: "+38% impact · Telkom Indonesia 2023",
    gradient: "linear-gradient(140deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  },
  {
    number: "03",
    badges: ["Service Design", "Govtech"],
    href: "/portfolio/lkpp-procurement",
    category: "Govtech",
    title: "Government Procurement UX",
    detail: "+61% impact · LKPP 2024",
    gradient: "linear-gradient(140deg, #4b1248 0%, #f0c27b 100%)",
  },
  {
    number: "04",
    badges: ["UX Design", "Onboarding"],
    href: "/portfolio/fintech-onboarding",
    category: "Fintech",
    title: "Fintech Onboarding — D7 Retention",
    detail: "+61% impact · WeekndLabs Studio 2022",
    gradient: "linear-gradient(140deg, #373b44 0%, #4286f4 100%)",
  },
  {
    number: "05",
    badges: ["Design System", "Library"],
    href: "/portfolio/design-system",
    category: "Design System",
    title: "Design System — 200+ Components",
    detail: "200+ impact · WeekndLabs Studio 2021",
    gradient: "linear-gradient(140deg, #1a1c2c 0%, #4a192c 100%)",
  },
  {
    number: "06",
    badges: ["Product", "Govtech"],
    href: "/portfolio/ina-digital",
    category: "Govtech",
    title: "INA DIGITAL — PM & Design",
    detail: "",
    gradient: "linear-gradient(140deg, #141e30 0%, #243b55 100%)",
  },
  {
    number: "07",
    href: "/portfolio/website-lenusa",
    category: "Restaurant · Website",
    title: "Le Nusa Paris — Digital Experience",
    detail: "Fine Dining · UI & Development",
    badges: ["Website", "Develop"],
    gradient: "linear-gradient(140deg, #6b0006 0%, #d11117 100%)",
  },
]

type IllustrationKind =
  | "health"
  | "cx"
  | "gov"
  | "fintech"
  | "system"
  | "identity"
  | "blockchain"
  | "emr"
  | "resto"

function illustrationKind(title: string): IllustrationKind {
  const t = title.toLowerCase()
  if (t.includes("le nusa")) return "resto"
  if (t.includes("emr") || t.includes("vaccination")) return "emr"
  if (t.includes("e-health") || t.includes("simrs")) return "health"
  if (t.includes("cx")) return "cx"
  if (t.includes("procurement")) return "gov"
  if (t.includes("fintech")) return "fintech"
  if (t.includes("design system")) return "system"
  if (t.includes("ina digital")) return "identity"
  if (t.includes("blockchain")) return "blockchain"
  return "cx"
}

function ProjectIllustration({ title }: { title: string }) {
  const kind = illustrationKind(title)
  const w = "rgba(255,255,255,0.8)"
  const m = "rgba(20,20,30,0.14)"
  const d = "rgba(20,20,30,0.3)"
  const k = "rgba(20,20,30,0.62)"
  return (
    <svg
      className="project-illustration"
      viewBox="0 0 200 140"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "health" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="56" y="26" width="88" height="88" rx="22" fill={w} />
          <path d="M92 46h16v18h18v16h-18v18H92V80H74V64h18z" fill={k} />
          <circle cx="162" cy="30" r="9" fill={w} />
          <circle cx="38" cy="108" r="6" fill={d} />
        </>
      )}
      {kind === "emr" && (
        <>
          <circle cx="104" cy="70" r="58" fill={m} />
          <rect x="60" y="18" width="80" height="104" rx="12" fill={w} />
          <rect x="82" y="12" width="36" height="16" rx="6" fill={k} />
          <rect x="74" y="48" width="52" height="7" rx="3.5" fill={d} />
          <rect x="74" y="64" width="52" height="7" rx="3.5" fill={m} />
          <rect x="74" y="80" width="32" height="7" rx="3.5" fill={m} />
          <rect x="144" y="76" width="12" height="40" rx="6" transform="rotate(35 150 96)" fill={k} />
        </>
      )}
      {kind === "cx" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <path d="M42 34h72a14 14 0 0 1 14 14v28a14 14 0 0 1-14 14H64l-18 16V90a14 14 0 0 1-14-14V48a14 14 0 0 1 10-14z" fill={w} />
          <rect x="94" y="64" width="80" height="48" rx="16" fill={k} />
          <rect x="110" y="82" width="48" height="7" rx="3.5" fill={w} />
          <rect x="52" y="54" width="48" height="7" rx="3.5" fill={d} />
          <circle cx="160" cy="30" r="10" fill={d} />
        </>
      )}
      {kind === "gov" && (
        <>
          <circle cx="100" cy="72" r="58" fill={m} />
          <path d="M100 18l66 30H34z" fill={w} />
          <rect x="46" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="76" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="108" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="138" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="30" y="106" width="140" height="14" rx="5" fill={k} />
          <circle cx="100" cy="40" r="6" fill={d} />
        </>
      )}
      {kind === "fintech" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="24" y="56" width="98" height="64" rx="14" fill={w} />
          <rect x="24" y="72" width="98" height="14" fill={k} />
          <rect x="38" y="100" width="30" height="7" rx="3.5" fill={d} />
          <circle cx="140" cy="48" r="28" fill={d} />
          <circle cx="140" cy="48" r="20" fill={w} />
          <rect x="136" y="36" width="8" height="24" rx="4" fill={k} />
          <rect x="140" y="104" width="12" height="16" rx="3" fill={d} />
          <rect x="158" y="92" width="12" height="28" rx="3" fill={d} />
          <rect x="176" y="76" width="12" height="44" rx="3" fill={k} />
        </>
      )}
      {kind === "system" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="30" y="28" width="52" height="52" rx="12" fill={w} />
          <circle cx="134" cy="54" r="26" fill={k} />
          <path d="M44 120l26-42 26 42z" fill={w} />
          <rect x="112" y="92" width="58" height="28" rx="14" fill={w} />
          <circle cx="127" cy="106" r="7" fill={d} />
        </>
      )}
      {kind === "identity" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="28" y="32" width="112" height="76" rx="14" fill={w} />
          <circle cx="66" cy="62" r="13" fill={k} />
          <path d="M42 96c2-18 46-18 50 0z" fill={d} />
          <rect x="100" y="54" width="28" height="7" rx="3.5" fill={d} />
          <rect x="100" y="70" width="28" height="7" rx="3.5" fill={m} />
          <path d="M158 50l24 9v20c0 17-11 27-24 33-13-6-24-16-24-33V59z" fill={k} />
          <path d="M148 84l7 7 13-15" fill="none" stroke={w} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {kind === "blockchain" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="20" y="48" width="46" height="46" rx="11" fill={w} />
          <rect x="77" y="48" width="46" height="46" rx="11" fill={k} />
          <rect x="134" y="48" width="46" height="46" rx="11" fill={w} />
          <rect x="66" y="67" width="11" height="8" fill={d} />
          <rect x="123" y="67" width="11" height="8" fill={d} />
          <circle cx="43" cy="30" r="7" fill={d} />
          <circle cx="157" cy="112" r="7" fill={d} />
        </>
      )}
      {kind === "resto" && (
        <>
          <circle cx="100" cy="72" r="58" fill={m} />
          <circle cx="100" cy="72" r="44" fill={w} />
          <circle cx="100" cy="72" r="28" fill={d} />
          <circle cx="100" cy="72" r="16" fill={w} />
          <rect x="28" y="36" width="6" height="80" rx="3" fill={k} />
          <rect x="20" y="36" width="5" height="26" rx="2.5" fill={k} />
          <rect x="37" y="36" width="5" height="26" rx="2.5" fill={k} />
          <path d="M170 36c-10 10-10 30 0 38z" fill={k} />
          <rect x="167" y="36" width="6" height="80" rx="3" fill={k} />
        </>
      )}
    </svg>
  )
}

const projectColors = [
  "#FFF1B8",
  "#FFD9E4",
  "#CDEFE2",
  "#D3E8FB",
  "#FFE3C7",
  "#E4DBFA",
  "#FFD6D6",
]

const metrics = [
  {
    label: "Avg Conversion Lift",
    value: "+38%",
    detail: "across checkout projects",
    className: "metric-blue",
  },
  {
    label: "Retention Impact",
    value: "+61%",
    detail: "D7 retention - Fintech onboarding",
    className: "metric-light",
  },
  {
    label: "Users Impacted",
    value: "50k+",
    detail: "monthly active users",
    className: "metric-dark",
  },
  {
    label: "Components Built",
    value: "200+",
    detail: "design system tokens",
    className: "metric-violet",
  },
]

const portfolioItems = [
  {
    category: "E-Health",
    featured: true,
    title: "E-Health Platform — SIMRS Kesehatan",
    year: "2024",
    description:
      "End-to-end UX design for a hospital management system serving 50k+ monthly users across Indonesia's health ecosystem.",
    tags: ["UX Design", "Service Design"],
    impact: "50k+ MAU",
    company: "Telkom Indonesia",
    href: "/portfolio/simrs-kesehatan",
    gradient: "linear-gradient(140deg, #2c3e50, #3498db)",
  },
  {
    category: "B2B SaaS",
    featured: true,
    title: "Strategic CX Platform",
    year: "2023",
    description:
      "Designed and led UX for Telkom's customer experience platform, improving conversion across checkout flows through research-driven redesign.",
    tags: ["CX Design", "Product Strategy"],
    impact: "+38% Conversion",
    company: "Telkom Indonesia",
    href: "/portfolio/cx-platform",
    gradient: "linear-gradient(140deg, #0f2027, #2c5364)",
  },
  {
    category: "Govtech",
    featured: true,
    title: "Government Procurement UX",
    year: "2024",
    description:
      "Service design and UX lead for LKPP's digital procurement platform, streamlining complex government procurement flows.",
    tags: ["Service Design", "Government"],
    impact: "10M+ Users",
    company: "LKPP",
    href: "/portfolio/lkpp-procurement",
    gradient: "linear-gradient(140deg, #4b1248, #f0c27b)",
  },
  {
    category: "Fintech",
    featured: false,
    title: "Fintech Onboarding — D7 Retention",
    year: "2022",
    description:
      "Redesigned a fintech onboarding flow that improved 7-day retention using cognitive psychology and behavior-driven design.",
    tags: ["UX Design", "Onboarding"],
    impact: "+61% D7 Retention",
    company: "WeekndLabs Studio",
    href: "/portfolio/fintech-onboarding",
    gradient: "linear-gradient(140deg, #373b44, #4286f4)",
  },
  {
    category: "Design System",
    featured: false,
    title: "Design System — 200+ Components",
    year: "2021",
    description:
      "Built a comprehensive design system with 200+ tokens and components, documentation, and a governance framework.",
    tags: ["Design System", "Component Library"],
    impact: "200+ Components",
    company: "WeekndLabs Studio",
    href: "/portfolio/design-system",
    gradient: "linear-gradient(140deg, #1a1c2c, #4a192c)",
  },
  {
    category: "Govtech",
    featured: true,
    title: "INA DIGITAL — National Identity Platform",
    year: "2025",
    description:
      "Leading product management and design for Indonesia's national digital identity and government service platform.",
    tags: ["Product Management", "Government"],
    impact: "National Scale",
    company: "INA DIGITAL",
    href: "/portfolio/ina-digital",
    gradient: "linear-gradient(140deg, #141e30, #243b55)",
  },
  {
    category: "Blockchain",
    featured: false,
    title: "Blockchain Service Design",
    year: "2023",
    description:
      "UX and service design for blockchain-based government services, simplifying decentralized workflows for non-technical users.",
    tags: ["Blockchain", "Service Design"],
    impact: "3 Products",
    company: "WeekndLabs Studio",
    href: "/portfolio/blockchain-service",
    gradient: "linear-gradient(140deg, #1d4350, #a43931)",
  },
  {
    category: "E-Health",
    featured: false,
    title: "EMR & Vaccination Ecosystem",
    year: "2024",
    description:
      "Electronic Medical Records and vaccination management UX, part of Indonesia's Satu Sehat digital health initiative.",
    tags: ["E-Health", "UX Design"],
    impact: "Satu Sehat",
    company: "Telkom Indonesia",
    href: "/portfolio/emr-vaccination",
    gradient: "linear-gradient(140deg, #134e5e, #71b280)",
  },
  {
    category: "Website",
    featured: true,
    title: "Le Nusa Paris — Digital Experience",
    year: "2025",
    description:
      "An immersive restaurant website where Indonesian culinary heritage, cultural storytelling, and a seamless reservation journey meet.",
    tags: ["Website", "Development"],
    impact: "Live Experience",
    company: "Le Nusa Paris",
    href: "/portfolio/website-lenusa",
    gradient: "linear-gradient(140deg, #6b0006, #d11117)",
  },
]

const blogArticles = [
  {
    category: "UX Design",
    date: "March 15, 2025",
    readTime: "8 min read",
    title: "How Cognitive Psychology Makes Better UX",
    description:
      "Most UX problems don't come from bad design — they come from skipping steps. Exploring how behavioral models, cognitive load, and progressive disclosure create delightful products.",
    tags: ["Psychology", "Product Design"],
    href: "/blog/cognitive-psychology-ux-design",
    featured: true,
  },
  {
    category: "Service Design",
    date: "February 28, 2025",
    readTime: "12 min read",
    title: "Service Design in Indonesian Govtech: What Works",
    description:
      "Lessons from designing government digital services for millions of Indonesians across different levels of technology literacy.",
    tags: ["Service Design", "Govtech"],
    href: "/blog/service-design-govtech-indonesia",
  },
  {
    category: "Product Strategy",
    date: "January 20, 2025",
    readTime: "10 min read",
    title: "AI Product Management in 2025: A PM's Perspective",
    description:
      "Beyond the buzzwords: how AI changes the PM role, which skills matter, and how to approach building AI-powered products.",
    tags: ["AI", "Product Management"],
    href: "/blog/ai-product-management-2025",
  },
  {
    category: "Case Study",
    date: "November 10, 2024",
    readTime: "15 min read",
    title: "61% Retention Boost: Lessons from Fintech Onboarding",
    description:
      "A behind-the-scenes look at the research, behavioral design decisions, mistakes, and changes that moved the needle.",
    tags: ["Fintech", "Onboarding"],
    href: "/blog/fintech-onboarding-lessons",
  },
  {
    category: "Design Tools",
    date: "September 5, 2024",
    readTime: "11 min read",
    title: "Building a Design System from Zero to 200+ Components",
    description:
      "What worked, what failed, and the collaboration and governance model that helped the system grow.",
    tags: ["Design System", "Figma"],
    href: "/blog/design-system-from-zero",
  },
  {
    category: "UX Research",
    date: "July 22, 2024",
    readTime: "9 min read",
    title: "Making Blockchain UX Accessible to Non-Tech Users",
    description:
      "Simplifying decentralized workflows with plain Indonesian language, familiar mental models, and trust-first design.",
    tags: ["Blockchain", "Web3"],
    href: "/blog/blockchain-ux-for-non-techies",
  },
]

function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

const linkProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" }
    : {}

const listeners = new Set<(l: Lang) => void>()

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(() =>
    localStorage.getItem("lang") === "id" ? "id" : "en",
  )
  useEffect(() => {
    listeners.add(setLangState)
    return () => {
      listeners.delete(setLangState)
    }
  }, [])
  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l)
    listeners.forEach((fn) => fn(l))
  }
  return [lang, setLang]
}

const ui = {
  en: {
    home: "Home", portfolio: "Portfolio", about: "About", blog: "Blog",
    open: "Open to work", talk: "Let's Talk", menu: "Open menu",
    light: "Switch to light mode", darkMode: "Switch to dark mode",
    toggleLang: "Toggle language",
    backPortfolio: "← Back to portfolio", backBlog: "← Back to blog",
    next: "Next", notFound: "Page not found",
    company: "Company", impact: "Impact", focus: "Focus", role: "Role", duration: "Duration",
    challenge: "The challenge", approach: "Approach", outcomes: "Outcomes", tools: "Tools",
    team: "Team", overview: "Overview", goals: "Goals", users: "Who we designed for", research: "What the research told us", decisions: "Key design decisions", learnings: "What I learned", inArticle: "In this article", takeaways: "Key takeaways",
    article: "Article", readMore: "Keep reading",
    caseStudies: "Case studies", portfolioTitle: "Portfolio", showcase: "Showcase",
    portfolioIntro: "Selected case studies spanning Govtech, Fintech, E-Health, B2B SaaS, and web experiences—built with research and shipped with care.",
    aboutEyebrow: "About", my: "My", profile: "Profile",
    writing: "Writing", blogTitle: "Blog", insights: "Insights",
    articlesWord: "Articles", blogIntro: "Thoughts on UX design, product management, service design, and building digital products that actually work for real people.",
    available: "Available for new opportunities",
    whatIDo: "What I do", services: "Services", career: "Career", experience: "Experience",
    expertise: "Expertise", skills: "Skills & Tools",
    statementA: "I'm a digital Product Manager and Service Designer. I love using ", statementB: "cognitive psychology", statementC: " to humanize technology and solve real people problems.",
    linkedin: "Connect on LinkedIn", email: "Send email", cv: "Download CV",
    stay: "Stay updated", subscribeTitle: "New ideas, shared thoughtfully.", subscribeText: "Follow on LinkedIn for new articles and product insights.", follow: "Follow on LinkedIn",
    workTogether: "Let's work together", ctaTitle: "Have a complex problem worth solving?", ctaText: "Open to PM, UX Lead, and Service Design opportunities. Let's build something useful together.",
  },
  id: {
    home: "Beranda", portfolio: "Portofolio", about: "Tentang", blog: "Blog",
    open: "Terbuka untuk kerja", talk: "Ayo Ngobrol", menu: "Buka menu",
    light: "Ganti ke mode terang", darkMode: "Ganti ke mode gelap",
    toggleLang: "Ganti bahasa",
    backPortfolio: "← Kembali ke portofolio", backBlog: "← Kembali ke blog",
    next: "Berikutnya", notFound: "Halaman tidak ditemukan",
    company: "Perusahaan", impact: "Dampak", focus: "Fokus", role: "Peran", duration: "Durasi",
    challenge: "Tantangan", approach: "Pendekatan", outcomes: "Hasil", tools: "Alat",
    team: "Tim", overview: "Gambaran umum", goals: "Tujuan", users: "Untuk siapa kami mendesain", research: "Temuan riset", decisions: "Keputusan desain utama", learnings: "Pelajaran", inArticle: "Di artikel ini", takeaways: "Poin penting",
    article: "Artikel", readMore: "Lanjut membaca",
    caseStudies: "Studi kasus", portfolioTitle: "Portofolio", showcase: "Pilihan",
    portfolioIntro: "Studi kasus pilihan di Govtech, Fintech, E-Health, B2B SaaS, dan pengalaman web—dibangun dengan riset dan dirilis dengan penuh perhatian.",
    aboutEyebrow: "Tentang", my: "Profil", profile: "Saya",
    writing: "Tulisan", blogTitle: "Blog", insights: "Wawasan",
    articlesWord: "Artikel", blogIntro: "Pemikiran tentang desain UX, manajemen produk, desain layanan, dan membangun produk digital yang benar-benar berguna bagi orang nyata.",
    available: "Terbuka untuk peluang baru",
    whatIDo: "Yang saya kerjakan", services: "Layanan", career: "Karier", experience: "Pengalaman",
    expertise: "Keahlian", skills: "Keahlian & Alat",
    statementA: "Saya Product Manager dan Service Designer digital. Saya suka memakai ", statementB: "psikologi kognitif", statementC: " untuk memanusiakan teknologi dan menyelesaikan masalah nyata orang.",
    linkedin: "Terhubung di LinkedIn", email: "Kirim email", cv: "Unduh CV",
    stay: "Tetap terhubung", subscribeTitle: "Ide baru, dibagikan dengan penuh pertimbangan.", subscribeText: "Ikuti LinkedIn untuk artikel dan wawasan produk terbaru.", follow: "Ikuti di LinkedIn",
    workTogether: "Ayo bekerja sama", ctaTitle: "Punya masalah kompleks yang layak diselesaikan?", ctaText: "Terbuka untuk peluang PM, UX Lead, dan Service Design. Mari membangun sesuatu yang berguna bersama.",
  },
}

function InteriorHeader({
  active,
  dark,
  onToggleTheme,
}: {
  active: "home" | "portfolio" | "about" | "blog"
  dark: boolean
  onToggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useLang()
  const t = ui[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links: [typeof active, string, string][] = [
    ["home", "/", t.home],
    ["portfolio", "/portfolio", t.portfolio],
    ["about", "/about", t.about],
    ["blog", "/blog", t.blog],
  ]

  return (
    <header
      className={`site-header interior-header floating-bar${scrolled ? " scrolled" : ""}`}
    >
      <a className="brand" href="/">
        Putri Wulandari<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([key, href, label]) => (
          <a className={active === key ? "active" : ""} href={href} key={key}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="language-toggle"
          data-fairy="lang"
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          title={t.toggleLang}
        >
          <span className={lang === "en" ? "selected" : ""}>EN</span>
          <i />
          <span className={lang === "id" ? "selected" : ""}>ID</span>
        </button>
        <button
          aria-label={dark ? t.light : t.darkMode}
          className="icon-button"
          data-fairy="theme"
          onClick={onToggleTheme}
        >
          {dark ? (
            <svg aria-hidden="true" fill="none" height="15" viewBox="0 0 24 24" width="15">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" fill="none" height="15" viewBox="0 0 24 24" width="15">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
        <div className="work-status header-status">
          <span />
          {t.open}
        </div>
        <a
          className="primary-button talk-button"
          href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
          rel="noreferrer"
          target="_blank"
        >
          {t.talk} <ArrowUpRight />
        </a>
        <button
          aria-expanded={open}
          aria-label={t.menu}
          className="icon-button menu-button"
          onClick={() => setOpen(!open)}
        >
          <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 24 24" width="16">
            <path
              d={open ? "m6 6 12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([key, href, label]) => (
            <a href={href} key={key} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <button
            className="language-toggle"
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            title={t.toggleLang}
          >
            <span className={lang === "en" ? "selected" : ""}>EN</span>
            <i />
            <span className={lang === "id" ? "selected" : ""}>ID</span>
          </button>
        </nav>
      )}
    </header>
  )
}

function PageFooter() {
  return (
    <footer className="subpage-footer">
      <a className="brand" href="/">
        Putri Wulandari<span>.</span>
      </a>
      <span>{tr(useLang()[0], "Product, experience, and service design.")}</span>
      <a
        href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn <ArrowUpRight />
      </a>
    </footer>
  )
}

function PortfolioPage({
  dark,
  onToggleTheme,
}: {
  dark: boolean
  onToggleTheme: () => void
}) {
  const [filter, setFilter] = useState("All")
  const lang = useLang()[0]
  const t = ui[lang]
  const filters = [
    "All",
    "Govtech",
    "B2B SaaS",
    "Fintech",
    "Design System",
    "Blockchain",
    "E-Health",
    "Website",
  ]
  const visible =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter)

  return (
    <div className="app-shell">
      <InteriorHeader
        active="portfolio"
        dark={dark}
        onToggleTheme={onToggleTheme}
      />
      <main className="subpage-main">
        <section className="subpage-intro">
          <p className="eyebrow">{t.caseStudies}</p>
          <h1>
            {t.portfolioTitle} <span className="gradient-text">{t.showcase}</span>
          </h1>
          <p>{t.portfolioIntro}</p>
        </section>
        <div className="filter-row" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              className={filter === item ? "active" : ""}
              key={item}
              onClick={() => setFilter(item)}
            >
              {tr(lang, item)}
            </button>
          ))}
        </div>
        <section className="portfolio-list">
          {visible.map((item, index) => (
            <a
              className="portfolio-list-card"
              href={item.href}
              key={item.title}
              {...linkProps(item.href)}
            >
              <div
                className="portfolio-card-visual"
                style={{ background: projectColors[index % projectColors.length] }}
              >
                <ProjectIllustration title={item.title} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{tr(lang, item.impact)}</strong>
              </div>
              <div className="portfolio-card-copy">
                <div className="portfolio-card-meta">
                  <span>{tr(lang, item.category)}</span>
                  {item.featured && <b>{tr(lang, "Featured")}</b>}
                  <i>{item.year}</i>
                </div>
                <h2>{tr(lang, item.title)}</h2>
                <p>{tr(lang, item.description)}</p>
                <div className="portfolio-card-bottom">
                  <div>
                    {item.tags.map((tag) => (
                      <span key={tag}>{tr(lang, tag)}</span>
                    ))}
                  </div>
                  <strong>{item.company}</strong>
                </div>
              </div>
              <span className="list-arrow">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </section>
        <PageFooter />
      </main>
    </div>
  )
}

function BlogPage({
  dark,
  onToggleTheme,
}: {
  dark: boolean
  onToggleTheme: () => void
}) {
  const [filter, setFilter] = useState("All")
  const lang = useLang()[0]
  const t = ui[lang]
  const filters = [
    "All",
    "UX Design",
    "Service Design",
    "Product Strategy",
    "Case Study",
    "Design Tools",
    "UX Research",
  ]
  const featured = blogArticles[0]
  const visible = blogArticles
    .slice(1)
    .filter((article) => filter === "All" || article.category === filter)

  return (
    <div className="app-shell">
      <InteriorHeader
        active="blog"
        dark={dark}
        onToggleTheme={onToggleTheme}
      />
      <main className="subpage-main">
        <section className="subpage-intro blog-intro">
          <p className="eyebrow">{t.writing}</p>
          <h1>
            {t.blogTitle} & <span className="gradient-text">{t.articlesWord}</span>
          </h1>
          <p>{t.blogIntro}</p>
        </section>
        <div className="filter-row" role="group" aria-label="Filter articles">
          {filters.map((item) => (
            <button
              className={filter === item ? "active" : ""}
              key={item}
              onClick={() => setFilter(item)}
            >
              {tr(lang, item)}
            </button>
          ))}
        </div>
        {(filter === "All" || filter === featured.category) && (
          <a className="featured-article" href={featured.href} {...linkProps(featured.href)}>
            <div className="featured-article-art">
              <div className="mind-orbit">
                <span />
                <i />
                <b />
              </div>
            </div>
            <div className="featured-article-copy">
              <div>
                <span>{tr(lang, featured.category)}</span>
                <b>{tr(lang, "Featured")}</b>
              </div>
              <p className="article-date">
                {tr(lang, featured.date)} · {tr(lang, featured.readTime)}
              </p>
              <h2>{tr(lang, featured.title)}</h2>
              <p>{tr(lang, featured.description)}</p>
              <strong>
                {tr(lang, "Read article")} <ArrowUpRight />
              </strong>
            </div>
          </a>
        )}
        <section className="article-grid">
          {visible.map((article, index) => (
            <a
              className="article-card"
              href={article.href}
              key={article.title}
              {...linkProps(article.href)}
            >
              <div className={`article-art article-art-${index + 1}`}>
                <span>{String(index + 2).padStart(2, "0")}</span>
              </div>
              <div className="article-card-copy">
                <span className="article-category">{tr(lang, article.category)}</span>
                <p className="article-date">
                  {tr(lang, article.date)} · {tr(lang, article.readTime)}
                </p>
                <h2>{tr(lang, article.title)}</h2>
                <p>{tr(lang, article.description)}</p>
                <div className="article-tags">
                  {article.tags.map((tag) => (
                    <span key={tag}>{tr(lang, tag)}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </section>
        <section className="subscribe-card">
          <div>
            <p className="eyebrow">{t.stay}</p>
            <h2>{t.subscribeTitle}</h2>
            <p>{t.subscribeText}</p>
          </div>
          <a
            className="primary-button"
            href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
            rel="noreferrer"
            target="_blank"
          >
            {t.follow} <ArrowUpRight />
          </a>
        </section>
        <PageFooter />
      </main>
    </div>
  )
}

function AboutPage({
  dark,
  onToggleTheme,
}: {
  dark: boolean
  onToggleTheme: () => void
}) {
  const lang = useLang()[0]
  const t = ui[lang]
  const services = [
    ["UX", "UX Design", "End-to-end user experience design from research to delivery"],
    ["UR", "UX Research", "Qualitative and quantitative research, usability testing"],
    ["SD", "Service Design", "Service blueprints, journey maps, and systems thinking"],
    ["PM", "Project Management", "Agile PM, roadmaps, and stakeholder alignment"],
    ["ID", "Interaction Design", "Micro-interactions, prototyping, and motion design"],
    ["WD", "Web Design", "Responsive web design and scalable design systems"],
  ]
  const career = [
    {
      company: "INADIGITAL Health (IDH) · Kemenkes Indonesia",
      title: "Product Manager & Design",
      period: "Oct 2025 – Present",
      location: "Jakarta",
      points: [
        "Led product requirements and delivery, enabling Puskesmas to track preventive healthcare screening across patient life cycles. Ensured personal data protection compliance and supported national health mapping and regulatory decision-making.",
        "Managed CKG and routine screening programs spanning NCDs, substance abuse, mental, adolescent, geriatric and environmental health, and smoking cessation. Developed Ayo CKG for self-registration and initial screening, plus program evaluation and reporting dashboards.",
        "Worked with working units, District Health Offices, vendors and primary healthcare providers, alongside cross-functional engineering, security, QA, product, design, research, content, marketing and support teams.",
        "Handled requirements, sprint planning, alignment, report updates, product versions, error management and research evaluation, using NPS, CSAT and UTAUT to guide feature improvements.",
      ],
    },
    {
      company: "PT Telkom Indonesia Tbk",
      title: "UX Designer Lead",
      period: "Oct 2022 – Sept 2025",
      location: "Jakarta",
      points: [
        "Leading solution designer for complex digital products, driven by research, and orchestrating all stakeholders.",
        "This journey is built on a passion for product design centered on good user experiences.",
        "In my role, I collaborate with product teams, technology teams, other stakeholders, and customers to gather, understand, and define requirements, and ultimately design exceptional user experiences.",
        "Coordinate and align with other teams to ensure that research will impact users, business objectives, and the organization.",
      ],
    },
    {
      company: "PT Bank Negara Indonesia (Persero) Tbk.",
      title: "Digital Experience Designer",
      period: "Dec 2020 – Oct 2022",
      location: "Jakarta",
      points: [
        "Responsible for developing a design system focused on simplicity and efficiency, eliminating inconsistency, and increasing speed to produce new products.",
        "Redesigning the mobile banking project.",
      ],
    },
    {
      company: "PT Kreasi Lebah Aktif (Strongbee)",
      title: "UIX Designer",
      period: "May 2019 – Nov 2020",
      location: "Jakarta",
      points: ["Conduct research to explore and identify user pain points."],
    },
    {
      company: "PT Prudential Life Assurance Indonesia",
      title: "UIX Designer",
      period: "Dec 2018 – Apr 2019",
      location: "Jakarta",
      points: [
        "Worked as a user experience designer, conducting research to explore and identify user problems with user flow and process flow, and developing wireframes on the Pulse Apps project by Prudential.",
      ],
    },
  ]
  const [openRole, setOpenRole] = useState(0)
  const skills = [
    "Cognitive Psychology",
    "System Thinking",
    "CX Design",
    "Service Design",
    "Design Strategy",
    "UX Research",
    "Figma",
    "Prototyping",
    "User Testing",
    "Agile / Scrum",
    "OKR Framework",
    "Stakeholder Management",
    "Design Systems",
    "Information Architecture",
    "AI Product Management",
  ]

  return (
    <div className="app-shell">
      <InteriorHeader
        active="about"
        dark={dark}
        onToggleTheme={onToggleTheme}
      />
      <main className="subpage-main">
        <section className="subpage-intro about-title">
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h1>
            {t.my} <span className="gradient-text">{t.profile}</span>
          </h1>
        </section>
        <section className="about-hero">
          <div className="about-profile">
            <div className="about-avatar">
              <img src="/images/profile-pic.png" alt="Putri Wulandari" />
            </div>
            <div>
              <div className="availability">
                <span />
                {t.available}
              </div>
              <h2 className="about-name">Putri Wulandari</h2>
              <p>{tr(lang, "AI Product Manager · Service Designer · UX Lead")}</p>
            </div>
          </div>
          <div className="about-statement">
            <p>
              {t.statementA}<span>{t.statementB}</span>{t.statementC}
            </p>
            <div>
              <a
                className="primary-button"
                href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
                rel="noreferrer"
                target="_blank"
              >
                {t.linkedin} <ArrowUpRight />
              </a>
              <a className="ghost-button" href="mailto:ptr.wuln@gmail.com">
                {t.email}
              </a>
              <a
                className="ghost-button"
                href="https://www.figma.com/proto/vzr3JyEeD2zLp4KWjwLzeL/CV-wulan?node-id=6938-37&t=l96CCQjtU1DG1ET7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                rel="noreferrer"
                target="_blank"
              >
                {t.cv}
              </a>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-title">
            <p className="eyebrow">{t.whatIDo}</p>
            <h2>{t.services}</h2>
          </div>
          <div className="services-grid">
            {services.map(([short, title, description]) => (
              <article key={title}>
                <span>{short}</span>
                <h3>{tr(lang, title)}</h3>
                <p>{tr(lang, description)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section career-section">
          <div className="about-section-title">
            <p className="eyebrow">{t.career}</p>
            <h2>{t.experience}</h2>
          </div>
          <div className="career-list accordion">
            {career.map((role, index) => {
              const open = openRole === index
              return (
                <article className={open ? "open" : ""} key={`${role.company}-${role.title}`}>
                  <button
                    aria-expanded={open}
                    className="accordion-trigger"
                    onClick={() => setOpenRole(open ? -1 : index)}
                    type="button"
                  >
                    <span className="career-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="career-heading">
                      <h3>{tr(lang, role.title)}</h3>
                      <p>{role.company}</p>
                    </span>
                    <span className="career-time">
                      <strong>{tr(lang, role.period)}</strong>
                      <span>{role.location}</span>
                    </span>
                    <span aria-hidden="true" className="accordion-chevron">⌄</span>
                  </button>
                  {open && (
                    <ul className="accordion-panel">
                      {role.points.map((point) => (
                        <li key={point}>{tr(lang, point)}</li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="skills-section">
          <div className="about-section-title">
            <p className="eyebrow">{t.expertise}</p>
            <h2>{t.skills}</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{tr(lang, skill)}</span>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <p className="eyebrow">{t.workTogether}</p>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <a
            className="primary-button"
            href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
            rel="noreferrer"
            target="_blank"
          >
            {tr(lang, "Connect on LinkedIn")} <ArrowUpRight />
          </a>
        </section>
        <PageFooter />
      </main>
    </div>
  )
}

function BlogPostPage({
  dark,
  onToggleTheme,
  slug,
}: {
  dark: boolean
  onToggleTheme: () => void
  slug: string
}) {
  const [lang] = useLang()
  const t = ui[lang]
  const idx = blogArticles.findIndex((a) => a.href === `/blog/${slug}`)
  const article = blogArticles[idx]
  const sections = articleDetails[slug]
  const next = blogArticles[(idx + 1) % blogArticles.length]
  return (
    <div className="app-shell">
      <InteriorHeader active="blog" dark={dark} onToggleTheme={onToggleTheme} />
      <main className="subpage-main">
        <a className="back-link" href="/blog">{t.backBlog}</a>
        {article && sections ? (
          <>
            <section className="subpage-intro">
              <p className="eyebrow">{tr(lang, article.category)} · {tr(lang, article.date)} · {tr(lang, article.readTime)}</p>
              <h1>{tr(lang, article.title)}</h1>
              <p>{tr(lang, article.description)}</p>
              <div className="article-tags">
                {article.tags.map((tag) => (
                  <span key={tag}>{tr(lang, tag)}</span>
                ))}
              </div>
            </section>
            <nav aria-label={t.inArticle} className="detail-toc">
              <strong>{t.inArticle}</strong>
              <ol>
                {sections.sections.map((section, i) => (
                  <li key={section.h.en}>
                    <a href={`#s${i + 1}`}>{section.h[lang]}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <article className="detail-article">
              {sections.sections.map((section, i) => (
                <section id={`s${i + 1}`} key={section.h.en}>
                  <h2>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {section.h[lang]}
                  </h2>
                  {section.p.map((para) => (
                    <p key={para.en}>{para[lang]}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((li) => (
                        <li key={li.en}>{li[lang]}</li>
                      ))}
                    </ul>
                  )}
                  {section.callout && <blockquote>{section.callout[lang]}</blockquote>}
                </section>
              ))}
              <aside className="detail-takeaways">
                <h2>{t.takeaways}</h2>
                <ul>
                  {sections.takeaways.map((k) => (
                    <li key={k.en}>{k[lang]}</li>
                  ))}
                </ul>
              </aside>
            </article>
            <p className="detail-next">
              <a className="primary-button" href={next.href}>{t.next}: {tr(lang, next.title)} →</a>
            </p>
          </>
        ) : (
          <section className="subpage-intro">
            <h1>{t.notFound}</h1>
          </section>
        )}
        <PageFooter />
      </main>
    </div>
  )
}

function ProjectDetailPage({
  dark,
  onToggleTheme,
  slug,
}: {
  dark: boolean
  onToggleTheme: () => void
  slug: string
}) {
  const [lang] = useLang()
  const t = ui[lang]
  const item = portfolioItems.find((i) => i.href === `/portfolio/${slug}`)
  const detail = projectDetails[slug]
  if (!item || !detail) {
    return (
      <div className="app-shell">
        <InteriorHeader active="portfolio" dark={dark} onToggleTheme={onToggleTheme} />
        <main className="subpage-main">
          <a className="back-link" href="/portfolio">{t.backPortfolio}</a>
          <section className="subpage-intro">
            <h1>{t.notFound}</h1>
          </section>
          <PageFooter />
        </main>
      </div>
    )
  }
  const idx = portfolioItems.findIndex((i) => i === item)
  const next = portfolioItems[(idx + 1) % portfolioItems.length]
  const color = projectColors[idx % projectColors.length]
  return (
    <div className="app-shell">
      <InteriorHeader active="portfolio" dark={dark} onToggleTheme={onToggleTheme} />
      <main className="subpage-main">
        <a className="back-link" href="/portfolio">{t.backPortfolio}</a>
        <section className="subpage-intro">
          <p className="eyebrow">{tr(lang, item.category)} · {item.year}</p>
          <h1>{tr(lang, item.title)}</h1>
          <p>{tr(lang, item.description)}</p>
        </section>
        <div className="detail-visual" style={{ background: color }}>
          <ProjectIllustration title={item.title} />
          <strong>{tr(lang, item.impact)}</strong>
        </div>
        <section className="case-facts">
          <div><span>{t.company}</span><strong>{item.company}</strong></div>
          <div><span>{t.role}</span><strong>{detail.role[lang]}</strong></div>
          <div><span>{t.duration}</span><strong>{detail.duration[lang]}</strong></div>
          <div><span>{t.team}</span><strong>{detail.team[lang]}</strong></div>
          <div><span>{t.focus}</span><strong>{item.tags.map((x) => tr(lang, x)).join(" · ")}</strong></div>
        </section>
        <section className="detail-block">
          <h2>{t.overview}</h2>
          <div className="detail-prose">
            {detail.overview.map((p) => (
              <p key={p.en}>{p[lang]}</p>
            ))}
          </div>
        </section>
        <section className="detail-metrics">
          {detail.metrics.map((m) => (
            <div key={m.label.en}>
              <strong>{m.value}</strong>
              <span>{m.label[lang]}</span>
            </div>
          ))}
        </section>
        <section className="detail-block detail-two">
          <div>
            <h2>{t.goals}</h2>
            <ul className="detail-outcomes">
              {detail.goals.map((g) => (
                <li key={g.en}>{g[lang]}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.users}</h2>
            <div className="detail-users">
              {detail.users.map((u) => (
                <article key={u.name.en}>
                  <h3>{u.name[lang]}</h3>
                  <p>{u.need[lang]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="detail-block">
          <h2>{t.challenge}</h2>
          <p>{detail.challenge[lang]}</p>
        </section>
        <section className="detail-block">
          <h2>{t.research}</h2>
          <div className="detail-insights">
            {detail.research.map((r) => (
              <article key={r.finding.en}>
                <h3>{r.finding[lang]}</h3>
                <p>{r.detail[lang]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="detail-block">
          <h2>{t.approach}</h2>
          <div className="detail-steps">
            {detail.approach.map((step, i) => (
              <article key={step.title.en}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title[lang]}</h3>
                <p>{step.body[lang]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="detail-block">
          <h2>{t.decisions}</h2>
          <div className="detail-decisions">
            {detail.decisions.map((d, i) => (
              <article key={d.title.en}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{d.title[lang]}</h3>
                  <p>{d.body[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="detail-block">
          <h2>{t.outcomes}</h2>
          <ul className="detail-outcomes">
            {detail.outcomes.map((o) => (
              <li key={o.en}>{o[lang]}</li>
            ))}
          </ul>
        </section>
        <section className="detail-block">
          <h2>{t.learnings}</h2>
          <ul className="detail-outcomes">
            {detail.learnings.map((o) => (
              <li key={o.en}>{o[lang]}</li>
            ))}
          </ul>
          <div className="article-tags detail-tools">
            {detail.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>
        <p className="detail-next">
          <a className="primary-button" href={next.href}>{t.next}: {tr(lang, next.title)} →</a>
        </p>
        <PageFooter />
      </main>
    </div>
  )
}

function LenusaProjectPage({
  dark,
  onToggleTheme,
}: {
  dark: boolean
  onToggleTheme: () => void
}) {
  const [lang] = useLang()
  const L = (s: string) => tr(lang, s)
  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "Translated Le Nusa's restaurant experience, Indonesian heritage, and practical guest needs into a focused digital brief.",
    },
    {
      number: "02",
      title: "Structure",
      description:
        "Organized the menu, food story, reservation, location, and contact journeys into clear, effortless navigation.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Combined editorial food photography, cultural motifs, and warm natural tones into an immersive restaurant experience.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "Built responsive carousels, accessible modals, a menu viewer, reservation flow, and location interactions.",
    },
  ]

  return (
    <div className="case-study">
      <InteriorHeader
        active="portfolio"
        dark={dark}
        onToggleTheme={onToggleTheme}
      />

      <main className="case-main">
        <section className="case-hero">
          <div className="case-hero-copy fade-up">
            <a className="back-link" href="/portfolio">
              {ui[lang].backPortfolio}
            </a>
            <div className="case-tags">
              <span>{L("Website")}</span>
              <span>{L("Develop")}</span>
            </div>
            <p className="eyebrow">{L("Featured project · 2025")}</p>
            <h1>
              {lang === "id" ? (
                <>
                  Menghadirkan fine dining Indonesia ke Paris lewat{" "}
                  <span className="gradient-text">website yang menggugah indra</span>
                </>
              ) : (
                <>
                  Bringing Indonesian fine dining to Paris through a{" "}
                  <span className="gradient-text">sensorial website</span>
                </>
              )}
            </h1>
            <p className="case-intro">
              {L("An immersive restaurant website for Le Nusa Paris, where Indonesia's culinary heritage, cultural artistry, and a seamless reservation journey meet.")}
            </p>
            <a
              className="case-live-link"
              href="https://wulanrepowesite.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >{L("Visit live website")}<ArrowUpRight />
            </a>
          </div>

          <div className="case-browser fade-up delay-1" aria-hidden="true">
            <div className="browser-bar">
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>lenusaparis.com</span>
            </div>
            <div className="browser-page lenusa-preview">
              <img src="/images/lenusa/01930.png" alt="" />
              <div className="lenusa-preview-shade" />
              <div className="mock-nav lenusa-mock-nav">
                <strong>LE NUSA</strong>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span>{L("Reservation")}</span>
              </div>
              <div className="lenusa-preview-title">
                <p>BISTRONOMIE INDONÉSIENNE</p>
                <strong>Le Nusa</strong>
                <span>PARIS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="case-facts">
          <div>
            <p>{L("Role")}</p>
            <strong>{L("Designer & Developer")}</strong>
          </div>
          <div>
            <p>{L("Project type")}</p>
            <strong>{L("Restaurant Website")}</strong>
          </div>
          <div>
            <p>{L("Services")}</p>
            <strong>{L("UI, UX & Development")}</strong>
          </div>
          <div>
            <p>{L("Platform")}</p>
            <strong>{L("Responsive Web")}</strong>
          </div>
        </section>

        <section className="case-overview">
          <div>
            <p className="eyebrow">{L("The overview")}</p>
            <h2>{L("A digital taste of Indonesia in the heart of Paris.")}</h2>
          </div>
          <div className="case-overview-copy">
            <p>{L("Le Nusa is an Indonesian fine-dining restaurant at 36 rue Fabert, Paris. Its name means “archipelago,” reflecting an experience where culinary excellence meets the rich artistic heritage of Indonesia.")}</p>
            <p>{L("The website translates that sensorial experience into a digital journey—from discovering signature dishes and cultural stories to finding the restaurant and reserving a table.")}</p>
          </div>
        </section>

        <section className="case-challenge">
          <div className="challenge-copy">
            <p className="eyebrow">{L("The challenge")}</p>
            <h2>{L("Make culture tangible without slowing the journey.")}</h2>
            <p>{L("The experience needed to celebrate Indonesian food, batik, weaving, suntiang, and gebyok while still helping international guests quickly browse the menu, check opening hours, find the Paris location, and reserve.")}</p>
          </div>
          <div className="challenge-list">
            {[
              "Express Indonesian culture through a premium visual language",
              "Showcase dishes through an accessible menu carousel and viewer",
              "Turn the restaurant story into an editorial experience",
              "Create frictionless reservation and location journeys",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{L(item)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-process">
          <div className="case-section-heading">
            <div>
              <p className="eyebrow">{L("The process")}</p>
              <h2>{L("From restaurant story to digital experience")}</h2>
            </div>
            <p>{L("The experience balances emotional storytelling with practical tasks throughout every stage of the guest journey.")}</p>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{L(step.title)}</h3>
                <p>{L(step.description)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-deliverables">
          <div className="deliverable-visual" aria-hidden="true">
            <div className="device-desktop">
              <div className="device-desktop-bar">
                <i />
                <i />
                <i />
                <span>lenusaparis.com</span>
              </div>
              <div className="device-desktop-page">
                <img src="/images/lenusa/01930.png" alt="" />
                <div className="device-shade" />
                <div className="device-nav">
                  <strong>LE NUSA</strong>
                  <span>{L("Menu")}</span>
                  <span>{L("Story")}</span>
                  <span>{L("Contact")}</span>
                  <b>{L("Reservation")}</b>
                </div>
                <div className="device-title">
                  <p>BISTRONOMIE INDONÉSIENNE</p>
                  <h3>Le Nusa</h3>
                </div>
              </div>
            </div>
            <div className="mobile-mock">
              <div className="mobile-top">
                <strong>LE NUSA</strong>
                <i />
              </div>
              <div className="mobile-hero">
                <img src="/images/lenusa/01930.png" alt="" />
              </div>
              <p>BISTRONOMIE INDONÉSIENNE</p>
              <h3>{L("The very best of Indonesia's culinary heritage.")}</h3>
              <b className="mobile-cta">{L("Reservation")}</b>
              <div className="mobile-dishes">
                <span style={{ backgroundPosition: "27% 30%" }} />
                <span style={{ backgroundPosition: "52% 78%" }} />
                <span style={{ backgroundPosition: "88% 85%" }} />
              </div>
              <small>36 rue Fabert · Paris</small>
            </div>
            <span className="device-label">{L("Responsive · Desktop & Mobile")}</span>
          </div>
          <div className="deliverable-copy">
            <p className="eyebrow">{L("Key deliverables")}</p>
            <h2>{L("A complete journey from discovery to reservation.")}</h2>
            <p>{L("The final product pairs rich imagery and cultural detail with practical features for menu discovery, storytelling, restaurant information, and table booking.")}</p>
            <div className="deliverable-tags">
              {[
                "Information Architecture",
                "Responsive UI",
                "Menu Carousel & Viewer",
                "Food Story Modal",
                "Reservation Flow",
                "Location & Contact",
              ].map((item) => (
                <span key={item}>{L(item)}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="case-outcome">
          <p className="eyebrow">{L("The outcome")}</p>
          <h2>{L("A sensorial digital home for Le Nusa Paris.")}</h2>
          <p>{L("The result presents the best of Indonesia's culinary heritage through a responsive, interactive experience—while giving guests clear access to the menu, restaurant story, opening hours, Paris location, WhatsApp contact, and reservations.")}</p>
          <div className="case-outcome-actions">
            <a
              className="primary-button"
              href="https://wulanrepowesite.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >{L("Visit live website")}<ArrowUpRight />
            </a>
            <a
              className="ghost-button"
              href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
              rel="noreferrer"
              target="_blank"
            >{L("Discuss a project")}</a>
          </div>
        </section>

        <footer className="case-footer">
          <span>{L("Putri Wulandari · Portfolio")}</span>
          <a href="/portfolio">{L("Next: Explore all projects")}<ArrowUpRight />
          </a>
        </footer>
      </main>
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark")
  const [language] = useLang()
  const text = copy[language]
  const pathname = window.location.pathname.replace(/\/$/, "") || "/"
  const isLenusaProject = pathname === "/portfolio/website-lenusa"
  const isPortfolioPage = pathname === "/portfolio"
  const isAboutPage = pathname === "/about"
  const isBlogPage = pathname === "/blog"

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    const detailTitle = pathname.startsWith("/blog/")
      ? blogArticles.find((a) => a.href === pathname)?.title
      : pathname.startsWith("/portfolio/")
        ? portfolioItems.find((i) => i.href === pathname)?.title
        : undefined
    document.title = detailTitle
      ? `${detailTitle} — Putri Wulandari`
      : isLenusaProject
      ? "Le Nusa Paris — Putri Wulandari"
      : isPortfolioPage
        ? "Portfolio — Putri Wulandari"
        : isAboutPage
          ? "About — Putri Wulandari"
          : isBlogPage
            ? "Blog — Putri Wulandari"
            : "Putri Wulandari — Senior PM & UX Manager"
  }, [dark, pathname])

  if (pathname.startsWith("/blog/")) {
    return (
      <BlogPostPage
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
        slug={pathname.slice("/blog/".length)}
      />
    )
  }

  if (pathname.startsWith("/portfolio/") && !isLenusaProject) {
    return (
      <ProjectDetailPage
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
        slug={pathname.slice("/portfolio/".length)}
      />
    )
  }

  if (isLenusaProject) {
    return (
      <LenusaProjectPage
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
      />
    )
  }

  if (isPortfolioPage) {
    return (
      <PortfolioPage dark={dark} onToggleTheme={() => setDark(!dark)} />
    )
  }

  if (isAboutPage) {
    return <AboutPage dark={dark} onToggleTheme={() => setDark(!dark)} />
  }

  if (isBlogPage) {
    return <BlogPage dark={dark} onToggleTheme={() => setDark(!dark)} />
  }

  return (
    <div className="app-shell">
      <InteriorHeader active="home" dark={dark} onToggleTheme={() => setDark(!dark)} />

      <main id="home">
        <div className="container">
          <section className="hero-grid">
            <div className="intro-card card-large fade-up">
              <div className="hero-glow" />
              <svg
                aria-hidden="true"
                className="sparkle"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c.7 6.5 3.5 9.3 10 10-6.5.7-9.3 3.5-10 10-.7-6.5-3.5-9.3-10-10 6.5-.7 9.3-3.5 10-10Z" />
              </svg>
              <div>
                <p className="eyebrow">{text.role}</p>
                <h1>
                  {text.headlineStart}{" "}
                  <span className="gradient-text">{text.headlineAccent}</span>
                  <br />
                  {language === "id" ? "menjadi produk yang elegan" : "into elegant products"}
                </h1>
                <p className="hero-description">{text.description}</p>
              </div>
              <div className="hero-actions">
                <a className="primary-button" href="/portfolio">
                  {text.caseStudies} <ArrowUpRight />
                </a>
                <a
                  className="ghost-button"
                  href="https://www.figma.com/proto/vzr3JyEeD2zLp4KWjwLzeL/CV-wulan?node-id=6938-37&t=l96CCQjtU1DG1ET7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                  rel="noreferrer"
                  target="_blank"
                >
                  {text.download}
                </a>
                <a
                  aria-label="LinkedIn"
                  className="linkedin-button"
                  href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    height="15"
                    viewBox="0 0 24 24"
                    width="15"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="products-card card fade-up delay-1">
              <div>
                <p className="eyebrow">{tr(language, "Products Shipped")}</p>
                <div className="pills product-pills">
                  <span className="pill blue">E-commerce</span>
                  <span className="pill violet">Fintech</span>
                  <span className="pill green">B2B SaaS</span>
                  <span className="pill amber">Govtech</span>
                  <span className="pill rose">{tr(language, "Health")}</span>
                  <span className="pill orange">F&amp;B</span>
                </div>
              </div>
              <div className="collaborators">
                <p className="eyebrow">{tr(language, "Collaborated With")}</p>
                <div className="pills">
                  {[
                    "Gojek",
                    "Tokopedia",
                    "Kemenkes RI",
                    "LKPP",
                    "Telkom",
                    "BNI",
                    "Prudential",
                  ].map(
                    (name) => (
                      <span className="brand-pill" key={name}>
                        {name}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div>
                <p className="product-count">
                  {projects.length}
                  <span>+</span>
                </p>
                <p className="fine-print">{language === "id" ? "di 6 industri" : "across 6 industries"} · 2018–{new Date().getFullYear()}</p>
              </div>
            </div>

            <article className="profile-card fade-up delay-2" id="about">
              <div className="profile-glow" />
              <div className="profile-top">
                <div className="avatar">
                  <img src="/images/profile-pic.png" alt="Putri Wulandari" />
                </div>
                <div>
                  <div className="availability">
                    <span />
                    {text.available}
                  </div>
                  <p className="location">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="10"
                      viewBox="0 0 24 24"
                      width="10"
                    >
                      <path
                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
              <div>
                <h2>Putri Wulandari</h2>
                <p className="profile-role">
                  AI Product Manager & Service Designer
                </p>
              </div>
              <div>
                <p className="profile-label">{tr(language, "Expertise")}</p>
                <div className="expertise">
                  {[
                    "UX Research",
                    "PRD",
                    "Figma",
                    "OKR",
                    "A/B Test",
                    "Design Sys.",
                    "Roadmap",
                    "SQL",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="profile-stats">
                <div>
                  <strong>{tr(language, "8yr")}</strong>
                  <span>{tr(language, "Exp.")}</span>
                </div>
                <div>
                  <strong>4.9★</strong>
                  <span>{tr(language, "Rating")}</span>
                </div>
              </div>
            </article>
          </section>

          <section className="metrics-grid" aria-label="Portfolio metrics">
            {metrics.map((metric) => (
              <article
                className={`metric-card ${metric.className}`}
                key={metric.label}
              >
                <p className="metric-label">{tr(language, metric.label)}</p>
                <div>
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-detail">{tr(language, metric.detail)}</p>
                </div>
                <span className="metric-arrow">
                  <ArrowUpRight />
                </span>
              </article>
            ))}
          </section>

          <section className="portfolio-section" id="portfolio">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{tr(language, "Portfolio")}</p>
                <h2>{tr(language, "Featured Projects")}</h2>
              </div>
              <a className="ghost-button" href="/portfolio">
                {tr(language, "View all")}
              </a>
            </div>
            <div className="project-grid" id="project-grid">
              {projects.map((project, index) => (
                <a
                  className="project-card"
                  href={project.href}
                  key={project.number}
                  {...linkProps(project.href)}
                  style={{ background: projectColors[index % projectColors.length] }}
                >
                  <ProjectIllustration title={project.title} />
                  <span className="project-number">{project.number}</span>
                  {project.badges && (
                    <span className="project-badges">
                      {project.badges.map((badge) => (
                        <span key={badge}>{tr(language, badge)}</span>
                      ))}
                    </span>
                  )}
                  <div className="project-copy">
                    <p>{tr(language, project.category)}</p>
                    <h3>{tr(language, project.title)}</h3>
                    {project.detail && <span>{tr(language, project.detail)}</span>}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function Root() {
  const [lang] = useLang()
  return (
    <>
      <App />
      <Fairy lang={lang} />
    </>
  )
}

export default Root
