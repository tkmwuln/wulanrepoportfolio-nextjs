"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLang } from "../../context/LangContext";
import { tr } from "../../../lib/content/translations";
import { BLOG_ITEMS } from "../../../lib/content/blog-items";
import { articleDetails } from "../../../lib/content";
import { MESH_GRADIENTS } from "../../components/portfolio/MeshGradients";
import ProjectIllustration from "../../components/portfolio/ProjectIllustration";
import ArrowIcon from "../../components/ui/ArrowIcon";
import ArrowLeftIcon from "../../components/ui/ArrowLeftIcon";
import ArrowRightIcon from "../../components/ui/ArrowRightIcon";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();

  const post = BLOG_ITEMS.find((p) => p.slug === slug);
  const article = articleDetails[slug];

  if (!post || !article) {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-ink mb-4">{t("blog.not_found")}</h1>
          <Link href="/blog" className="btn-primary"><ArrowLeftIcon size={13} /> {t("blog.back")}</Link>
        </div>
      </div>
    );
  }

  const idx = BLOG_ITEMS.findIndex((p) => p.slug === slug);
  const next = BLOG_ITEMS[(idx + 1) % BLOG_ITEMS.length];

  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <div
        className="w-full h-80 flex items-end relative overflow-hidden"
        style={{ background: MESH_GRADIENTS[idx % MESH_GRADIENTS.length] }}
      >
        <div className="absolute inset-0 w-1/2 h-full right-0 left-auto opacity-70">
          <ProjectIllustration title={post.title} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[860px] px-6 pb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[11px] bg-white/20 text-white/80 px-3 py-1 rounded-pill font-semibold tracking-wider uppercase backdrop-blur-sm">
                {tr(lang, tag)}
              </span>
            ))}
          </div>
          <h1 className="font-display text-[36px] font-extrabold text-white tracking-tight leading-tight max-w-2xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 mt-4 text-white/50 text-sm">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{tr(lang, post.category)}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto w-full max-w-[860px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
          {/* Table of contents */}
          <nav className="hidden md:block">
            <div className="sticky top-24">
              <p className="label uppercase text-ink-3 mb-3">{t("blog.in_article")}</p>
              <ol className="space-y-2">
                {article.sections.map((section, i) => (
                  <li key={section.h.en}>
                    <a href={`#s${i + 1}`} className="text-ink-2 text-[12px] hover:text-accent no-underline leading-snug block">
                      {section.h[lang]}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="card p-8 md:p-10">
            <p className="text-ink-2 text-[15px] leading-relaxed mb-8 italic border-l-4 border-accent pl-5">
              {post.excerpt}
            </p>

            <div className="space-y-10">
              {article.sections.map((section, i) => (
                <section key={section.h.en} id={`s${i + 1}`}>
                  <h2 className="font-display text-[20px] font-bold text-ink tracking-tight mb-3 flex items-baseline gap-2">
                    <span className="text-ink-3 text-sm font-normal">{String(i + 1).padStart(2, "0")}</span>
                    {section.h[lang]}
                  </h2>
                  <div className="space-y-3">
                    {section.p.map((para) => (
                      <p key={para.en} className="text-ink-2 leading-relaxed text-[15px]">
                        {para[lang]}
                      </p>
                    ))}
                  </div>
                  {section.list && (
                    <ul className="mt-3 space-y-2 list-disc list-inside text-ink-2 text-[15px] leading-relaxed">
                      {section.list.map((li) => (
                        <li key={li.en}>{li[lang]}</li>
                      ))}
                    </ul>
                  )}
                  {section.callout && (
                    <blockquote className="mt-4 border-l-4 border-violet pl-5 text-ink font-medium italic">
                      {section.callout[lang]}
                    </blockquote>
                  )}
                </section>
              ))}
            </div>

            {/* Takeaways */}
            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <h2 className="font-display text-[20px] font-bold text-ink tracking-tight mb-4">{t("blog.takeaways")}</h2>
              <ul className="space-y-2 list-disc list-inside text-ink-2 text-[15px] leading-relaxed">
                {article.takeaways.map((k) => (
                  <li key={k.en}>{k[lang]}</li>
                ))}
              </ul>
            </div>

            {/* Author */}
            <div className="mt-12 pt-8 border-t border-[var(--border)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                <img
                  src="/images/profile-pic.png"
                  alt="Putri Wulandari"
                  className="object-cover w-full h-full absolute inset-0 z-10 bg-card"
                />
                <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-accent to-violet text-white text-sm font-bold font-display">
                  PW
                </div>
              </div>
              <div>
                <p className="font-display font-bold text-ink text-[15px]">Putri Wulandari</p>
                <p className="text-ink-3 text-[12px]">{t("about.headline")}</p>
              </div>
              <a
                href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto btn-ghost text-[12px] py-2 px-4 shrink-0"
              >
                {t("blog.follow")} <ArrowIcon size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6 gap-4">
          <Link href="/blog" className="btn-ghost"><ArrowLeftIcon size={13} /> {t("blog.back")}</Link>
          <Link href={`/blog/${next.slug}`} className="btn-primary">
            {t("detail.next")}: {next.title} <ArrowRightIcon size={13} />
          </Link>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
