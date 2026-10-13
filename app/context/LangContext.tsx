"use client";

import { createContext, useContext, useState } from "react";

export type Lang = "en" | "id";

type LangContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
};

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.open_to_work": "Open to work",
    "nav.lets_talk": "Let's Talk ↗",

    // Hero
    "hero.label": "Senior PM & UX Manager · Portfolio",
    "hero.title1": "Turning",
    "hero.title_gradient": "complex problems",
    "hero.title2": "into elegant products",
    "hero.bio":
      "Building digital experiences that balance deep user empathy with measurable business outcomes — from research to shipped product.",
    "hero.cta_primary": "View Case Studies ↗",
    "hero.cta_secondary": "Download CV",

    // Profile card
    "profile.available": "Available now",

    // Products card
    "products.label": "Products Shipped",
    "products.sub": "across 6 industries · 2018–2026",

    // Stats
    "stat.exp": "Exp.",
    "stat.rating": "Rating",

    // Projects section
    "projects.label": "Portfolio",
    "projects.heading": "Featured Projects",
    "projects.view_all": "View all",
    "projects.empty": "No projects yet. Add your first one from admin.",
    "projects.go_admin": "Go to Admin",

    // Metrics
    "metric.conversion": "Avg Conversion Lift",
    "metric.conversion_sub": "across checkout projects",
    "metric.retention": "Retention Impact",
    "metric.retention_sub": "D7 retention · Fintech onboarding",
    "metric.users": "Users Impacted",
    "metric.users_sub": "monthly active users",
    "metric.components": "Components Built",
    "metric.components_sub": "design system tokens",

    // Portfolio page
    "portfolio.eyebrow": "Case Studies",
    "portfolio.title": "Portfolio",
    "portfolio.showcase": "Showcase",
    "portfolio.intro":
      "Selected case studies spanning Govtech, Fintech, E-Health, B2B SaaS, and web experiences—built with research and shipped with care.",
    "portfolio.featured": "Featured",

    // Portfolio detail page
    "detail.back": "← Back to portfolio",
    "detail.company": "Company",
    "detail.role": "Role",
    "detail.duration": "Duration",
    "detail.team": "Team",
    "detail.focus": "Focus",
    "detail.overview": "Overview",
    "detail.goals": "Goals",
    "detail.users": "Who we designed for",
    "detail.challenge": "The challenge",
    "detail.research": "What the research told us",
    "detail.approach": "Approach",
    "detail.decisions": "Key design decisions",
    "detail.outcomes": "Outcomes",
    "detail.learnings": "What I learned",
    "detail.tools": "Tools",
    "detail.next": "Next",
    "detail.not_found": "Project not found",

    // About page
    "about.eyebrow": "About",
    "about.my": "My",
    "about.profile": "Profile",
    "about.available": "Available for new opportunities",
    "about.headline": "AI Product Manager · Service Designer · UX Lead",
    "about.statement_a": "I'm a digital Product Manager and Service Designer. I love using ",
    "about.statement_b": "cognitive psychology",
    "about.statement_c": " to humanize technology and solve real people problems.",
    "about.linkedin": "Connect on LinkedIn",
    "about.email": "Send email",
    "about.cv": "Download CV",
    "about.what_i_do": "What I do",
    "about.services": "Services",
    "about.career": "Career",
    "about.experience": "Experience",
    "about.expertise": "Expertise",
    "about.skills": "Skills & Tools",
    "about.work_together": "Let's work together",
    "about.cta_title": "Have a complex problem worth solving?",
    "about.cta_text":
      "Open to PM, UX Lead, and Service Design opportunities. Let's build something useful together.",

    // Blog page
    "blog.eyebrow": "Writing",
    "blog.title": "Blog",
    "blog.articles_word": "Articles",
    "blog.intro":
      "Thoughts on UX design, product management, service design, and building digital products that actually work for real people.",
    "blog.read_article": "Read article",
    "blog.stay": "Stay updated",
    "blog.subscribe_title": "New ideas, shared thoughtfully.",
    "blog.subscribe_text": "Follow on LinkedIn for new articles and product insights.",
    "blog.follow": "Follow on LinkedIn",
    "blog.back": "← Back to blog",
    "blog.in_article": "In this article",
    "blog.takeaways": "Key takeaways",
    "blog.not_found": "Article not found",
  },
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.portfolio": "Portofolio",
    "nav.about": "Tentang",
    "nav.blog": "Blog",
    "nav.open_to_work": "Buka untuk kerja",
    "nav.lets_talk": "Mari Bicara ↗",

    // Hero
    "hero.label": "Senior PM & Manajer UX · Portofolio",
    "hero.title1": "Mengubah",
    "hero.title_gradient": "masalah kompleks",
    "hero.title2": "menjadi produk elegan",
    "hero.bio":
      "Membangun pengalaman digital yang menyeimbangkan empati mendalam terhadap pengguna dengan hasil bisnis yang terukur — dari riset hingga produk yang diluncurkan.",
    "hero.cta_primary": "Lihat Studi Kasus ↗",
    "hero.cta_secondary": "Unduh CV",

    // Profile card
    "profile.available": "Tersedia sekarang",

    // Products card
    "products.label": "Produk Diluncurkan",
    "products.sub": "di 6 industri · 2018–2026",

    // Stats
    "stat.exp": "Pengalaman",
    "stat.rating": "Rating",

    // Projects section
    "projects.label": "Portofolio",
    "projects.heading": "Proyek Unggulan",
    "projects.view_all": "Lihat semua",
    "projects.empty": "Belum ada proyek. Tambahkan dari admin.",
    "projects.go_admin": "Ke Admin",

    // Metrics
    "metric.conversion": "Peningkatan Konversi",
    "metric.conversion_sub": "di proyek checkout",
    "metric.retention": "Dampak Retensi",
    "metric.retention_sub": "Retensi D7 · Onboarding Fintech",
    "metric.users": "Pengguna Terdampak",
    "metric.users_sub": "pengguna aktif bulanan",
    "metric.components": "Komponen Dibangun",
    "metric.components_sub": "token sistem desain",

    // Portfolio page
    "portfolio.eyebrow": "Studi Kasus",
    "portfolio.title": "Portofolio",
    "portfolio.showcase": "Pilihan",
    "portfolio.intro":
      "Studi kasus pilihan di Govtech, Fintech, E-Health, B2B SaaS, dan pengalaman web—dibangun dengan riset dan dirilis dengan penuh perhatian.",
    "portfolio.featured": "Pilihan",

    // Portfolio detail page
    "detail.back": "← Kembali ke portofolio",
    "detail.company": "Perusahaan",
    "detail.role": "Peran",
    "detail.duration": "Durasi",
    "detail.team": "Tim",
    "detail.focus": "Fokus",
    "detail.overview": "Gambaran umum",
    "detail.goals": "Tujuan",
    "detail.users": "Untuk siapa kami mendesain",
    "detail.challenge": "Tantangan",
    "detail.research": "Temuan riset",
    "detail.approach": "Pendekatan",
    "detail.decisions": "Keputusan desain utama",
    "detail.outcomes": "Hasil",
    "detail.learnings": "Pelajaran",
    "detail.tools": "Alat",
    "detail.next": "Berikutnya",
    "detail.not_found": "Proyek tidak ditemukan",

    // About page
    "about.eyebrow": "Tentang",
    "about.my": "Profil",
    "about.profile": "Saya",
    "about.available": "Terbuka untuk peluang baru",
    "about.headline": "AI Product Manager · Service Designer · UX Lead",
    "about.statement_a": "Saya Product Manager dan Service Designer digital. Saya suka memakai ",
    "about.statement_b": "psikologi kognitif",
    "about.statement_c": " untuk memanusiakan teknologi dan menyelesaikan masalah nyata orang.",
    "about.linkedin": "Terhubung di LinkedIn",
    "about.email": "Kirim email",
    "about.cv": "Unduh CV",
    "about.what_i_do": "Yang saya kerjakan",
    "about.services": "Layanan",
    "about.career": "Karier",
    "about.experience": "Pengalaman",
    "about.expertise": "Keahlian",
    "about.skills": "Keahlian & Alat",
    "about.work_together": "Ayo bekerja sama",
    "about.cta_title": "Punya masalah kompleks yang layak diselesaikan?",
    "about.cta_text":
      "Terbuka untuk peluang PM, UX Lead, dan Service Design. Mari membangun sesuatu yang berguna bersama.",

    // Blog page
    "blog.eyebrow": "Tulisan",
    "blog.title": "Blog",
    "blog.articles_word": "Artikel",
    "blog.intro":
      "Pemikiran tentang desain UX, manajemen produk, desain layanan, dan membangun produk digital yang benar-benar berguna bagi orang nyata.",
    "blog.read_article": "Baca artikel",
    "blog.stay": "Tetap terhubung",
    "blog.subscribe_title": "Ide baru, dibagikan dengan penuh pertimbangan.",
    "blog.subscribe_text": "Ikuti LinkedIn untuk artikel dan wawasan produk terbaru.",
    "blog.follow": "Ikuti di LinkedIn",
    "blog.back": "← Kembali ke blog",
    "blog.in_article": "Di artikel ini",
    "blog.takeaways": "Poin penting",
    "blog.not_found": "Artikel tidak ditemukan",
  },
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (key) => key,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "id" : "en"));

  const t = (key: string): string =>
    translations[lang][key] ?? translations["en"][key] ?? key;

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
