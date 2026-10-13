"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "../context/LangContext";
import { tr } from "../../lib/content/translations";
import { BLOG_ITEMS } from "../../lib/content/blog-items";
import { MESH_GRADIENTS } from "../components/portfolio/MeshGradients";
import ProjectIllustration from "../components/portfolio/ProjectIllustration";
import ArrowIcon from "../components/ui/ArrowIcon";

const ALL_CATS = ["All", "UX Design", "Service Design", "Product Strategy", "Case Study", "Design Tools", "UX Research"];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPage() {
  const { lang, t } = useLang();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? BLOG_ITEMS
    : BLOG_ITEMS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <p className="label uppercase tracking-widest text-ink-3 mb-3">{t("blog.eyebrow")}</p>
          <h1 className="font-display text-[48px] font-extrabold tracking-tighter leading-none text-ink mb-4">
            {t("blog.title")} & <span className="text-gradient">{t("blog.articles_word")}</span>
          </h1>
          <p className="text-ink-2 max-w-lg text-sm font-light leading-relaxed">
            {t("blog.intro")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ALL_CATS.map((cat) => (
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

        {/* Featured post (first item) */}
        {activeCategory === "All" && (
          <Link
            href={`/blog/${BLOG_ITEMS[0].slug}`}
            className="group block no-underline mb-6"
          >
            <div className="card overflow-hidden hover:-translate-y-1 transition-transform duration-300 grid grid-cols-1 md:grid-cols-2">
              <div
                className="h-56 md:h-auto w-full relative overflow-hidden"
                style={{ background: MESH_GRADIENTS[0] }}
              >
                <div className="absolute inset-0 w-2/3 h-full right-0 left-auto opacity-80">
                  <ProjectIllustration title={BLOG_ITEMS[0].title} />
                </div>
              </div>
              <div className="p-7 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] bg-card2 text-ink-2 px-2.5 py-1 rounded-pill font-semibold tracking-wider uppercase border border-[var(--border)]">
                    {tr(lang, BLOG_ITEMS[0].category)}
                  </span>
                  <span className="text-[10px] bg-accent text-white px-2.5 py-1 rounded-pill font-semibold">{t("portfolio.featured")}</span>
                </div>
                <div className="flex items-center gap-3 text-ink-3 text-[12px] mb-3">
                  <span>{formatDate(BLOG_ITEMS[0].date)}</span>
                  <span>·</span>
                  <span>{BLOG_ITEMS[0].readTime}</span>
                </div>
                <h2 className="font-display text-[22px] font-bold text-ink tracking-tight leading-tight mb-3 group-hover:text-accent transition-colors duration-200">
                  {BLOG_ITEMS[0].title}
                </h2>
                <p className="text-ink-2 text-sm leading-relaxed">{BLOG_ITEMS[0].excerpt}</p>
                <div className="mt-4 text-accent text-[13px] font-semibold inline-flex items-center gap-1.5">
                  {t("blog.read_article")} <ArrowIcon size={12} />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(activeCategory === "All" ? filtered.slice(1) : filtered).map((post) => {
            const gradientIdx = BLOG_ITEMS.findIndex((p) => p.id === post.id);
            return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group card overflow-hidden block no-underline hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Gradient cover */}
              <div
                className="h-32 w-full relative overflow-hidden"
                style={{ background: MESH_GRADIENTS[gradientIdx % MESH_GRADIENTS.length] }}
              >
                <div className="absolute inset-0 w-1/2 h-full right-0 left-auto opacity-80">
                  <ProjectIllustration title={post.title} />
                </div>
                <div className="absolute bottom-3 left-4 z-10">
                  <span className="text-[10px] bg-white/40 text-ink/70 px-2.5 py-1 rounded-pill font-semibold tracking-wider uppercase backdrop-blur-sm">
                    {tr(lang, post.category)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-ink-3 text-[11px] mb-2">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-[15px] font-bold text-ink tracking-tight leading-tight mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-ink-2 text-[12px] leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] text-ink-3 bg-card2 px-2 py-0.5 rounded-full border border-[var(--border)]">
                      {tr(lang, tag)}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-10 card p-8 text-center">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{t("blog.stay")}</p>
          <h2 className="font-display text-xl font-bold text-ink tracking-tight mb-2">{t("blog.subscribe_title")}</h2>
          <p className="text-ink-2 text-sm mb-4">{t("blog.subscribe_text")}</p>
          <a
            href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("blog.follow")} <ArrowIcon size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
