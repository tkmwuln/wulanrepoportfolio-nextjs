"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "../context/LangContext";
import { tr } from "../../lib/content/translations";
import { PORTFOLIO_ITEMS } from "../../lib/content/portfolio-items";
import ProjectIllustration, { PROJECT_COLORS } from "../components/portfolio/ProjectIllustration";

const CATEGORY_ORDER = ["All", "Govtech", "B2B SaaS", "Fintech", "Design System", "Blockchain", "E-Health", "Website"];

export default function PortfolioPage() {
  const { lang, t } = useLang();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="label uppercase tracking-widest text-ink-3 mb-3">{t("portfolio.eyebrow")}</p>
          <h1 className="font-display text-[48px] font-extrabold tracking-tighter leading-none text-ink mb-4">
            {t("portfolio.title")} <span className="text-gradient">{t("portfolio.showcase")}</span>
          </h1>
          <p className="text-ink-2 max-w-lg text-sm font-light leading-relaxed">
            {t("portfolio.intro")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-pill text-[12px] font-semibold tracking-wide transition-all duration-200 cursor-pointer border ${
                activeCategory === cat
                  ? "bg-ink border-ink text-[var(--card-bg)]"
                  : "bg-transparent text-ink-2 border-[var(--border)] hover:border-ink-2 hover:text-ink"
              }`}
            >
              {tr(lang, cat)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, index) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group card overflow-hidden block no-underline hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Cover */}
              <div
                className="h-48 w-full relative overflow-hidden p-5"
                style={{ background: PROJECT_COLORS[index % PROJECT_COLORS.length] }}
              >
                <div className="absolute inset-0 w-2/3 h-full right-0 left-auto opacity-90">
                  <ProjectIllustration title={project.title} />
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-[10px] bg-ink/10 text-ink/70 px-2.5 py-1 rounded-pill font-semibold tracking-wider uppercase">
                    {tr(lang, project.category)}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] bg-ink text-white px-2.5 py-1 rounded-pill font-semibold tracking-wider uppercase">
                      {t("portfolio.featured")}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-5 left-5 font-display text-[15px] font-extrabold text-ink/80">
                  {project.metric}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-[16px] font-bold text-ink leading-tight tracking-tight group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-[11px] text-ink-3 shrink-0 mt-0.5">
                    {project.projectYear}
                  </span>
                </div>
                <p className="text-[12px] text-ink-2 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Metric */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] text-ink-3 bg-card2 px-2 py-0.5 rounded-full border border-[var(--border)]">
                        {tr(lang, tag)}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-accent">
                    {project.metric}
                  </span>
                </div>

                {project.clientName && (
                  <p className="text-[11px] text-ink-3 mt-2">
                    {project.clientName}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
