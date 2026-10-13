"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useLang } from "../../context/LangContext";
import { tr } from "../../../lib/content/translations";
import { PORTFOLIO_ITEMS } from "../../../lib/content/portfolio-items";
import { projectDetails } from "../../../lib/content";
import LenusaProjectDetail from "./LenusaProjectDetail";
import { MESH_GRADIENTS } from "../../components/portfolio/MeshGradients";
import ProjectIllustration from "../../components/portfolio/ProjectIllustration";
import CvGateModal from "../../components/CvGateModal";
import ArrowIcon from "../../components/ui/ArrowIcon";
import ArrowLeftIcon from "../../components/ui/ArrowLeftIcon";
import ArrowRightIcon from "../../components/ui/ArrowRightIcon";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";

const CV_URL = "/cv-putri-wulandari.pdf";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");

  if (slug === "website-lenusa") {
    return <LenusaProjectDetail />;
  }

  const item = PORTFOLIO_ITEMS.find((p) => p.slug === slug);
  const detail = projectDetails[slug];

  if (!item || !detail) {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-ink mb-4">{t("detail.not_found")}</h1>
          <Link href="/portfolio" className="btn-primary"><ArrowLeftIcon size={13} /> {t("detail.back")}</Link>
        </div>
      </div>
    );
  }

  const idx = PORTFOLIO_ITEMS.findIndex((p) => p.slug === slug);
  const next = PORTFOLIO_ITEMS[(idx + 1) % PORTFOLIO_ITEMS.length];
  const color = MESH_GRADIENTS[idx % MESH_GRADIENTS.length];

  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-10">
        <Link href="/portfolio" className="text-accent text-sm font-semibold no-underline mb-6 inline-flex items-center gap-1">
          <ArrowLeftIcon size={13} /> {t("detail.back")}
        </Link>

        {/* Header */}
        <div className="mb-6">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">
            {tr(lang, item.category)} · {item.projectYear}
          </p>
          <h1 className="font-display text-[36px] md:text-[42px] font-extrabold tracking-tight leading-tight text-ink max-w-2xl">
            {item.title}
          </h1>
          <p className="text-ink-2 max-w-xl mt-3 leading-relaxed text-sm">{item.description}</p>
        </div>

        {/* Visual */}
        <div
          className="w-full h-[280px] rounded-[var(--r-lg)] relative overflow-hidden mb-6"
          style={{ background: color }}
        >
          <div className="absolute inset-0 w-1/2 h-full right-0 left-auto opacity-80">
            <ProjectIllustration title={item.title} />
          </div>
          <div className="absolute bottom-6 left-6 font-display text-[28px] font-extrabold text-ink/85">
            {item.metric}
          </div>
        </div>

        {/* Live preview — desktop / mobile toggle */}
        {item.liveUrl && (
          <div className="mb-6">
            <div className="flex gap-1 mb-3">
              <button
                type="button"
                onClick={() => setPreviewMode("desktop")}
                className={`px-4 py-1.5 rounded-pill text-[12px] font-semibold cursor-pointer border transition-colors ${
                  previewMode === "desktop"
                    ? "bg-ink text-[var(--card-bg)] border-ink"
                    : "bg-transparent text-ink-2 border-[var(--border)] hover:border-ink-2"
                }`}
              >
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode("mobile")}
                className={`px-4 py-1.5 rounded-pill text-[12px] font-semibold cursor-pointer border transition-colors ${
                  previewMode === "mobile"
                    ? "bg-ink text-[var(--card-bg)] border-ink"
                    : "bg-transparent text-ink-2 border-[var(--border)] hover:border-ink-2"
                }`}
              >
                Mobile
              </button>
            </div>

            {previewMode === "desktop" ? (
              <div className="rounded-[var(--r-lg)] overflow-hidden border border-[var(--border)] shadow-card-lg bg-[#1c1c22]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#2a2a33]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[11px] text-white/40 bg-white/5 rounded-full px-3 py-1 truncate">{item.liveUrl.replace(/^https?:\/\//, "")}</span>
                </div>
                <div className="relative w-full aspect-[16/10] bg-black">
                  <iframe
                    src={item.liveUrl}
                    title={`${item.title} — desktop preview`}
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            ) : (
              <div className="mx-auto w-[260px] rounded-[2rem] border-[6px] border-[#1c1c22] bg-[#1c1c22] shadow-card-lg overflow-hidden">
                <div className="relative w-full aspect-[9/19.5] bg-black rounded-[1.4rem] overflow-hidden">
                  <iframe
                    src={item.liveUrl}
                    title={`${item.title} — mobile preview`}
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* App preview — real screenshot of the live product's home screen */}
        {item.homeScreenshot && (
          <div className="mb-6">
            <p className="label uppercase tracking-widest text-ink-3 mb-3">App Preview</p>
            <div className="rounded-[var(--r-lg)] overflow-hidden border border-[var(--border)] shadow-card-lg bg-[#1c1c22]">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#2a2a33]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.homeScreenshot} alt={`${item.title} — home screen`} className="w-full h-auto block" />
            </div>
          </div>
        )}

        {/* Screenshot gallery — real captures of key app screens */}
        {item.screenshots && (
          <div className="mb-6">
            <p className="label uppercase tracking-widest text-ink-3 mb-3">App Screens</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {item.screenshots.map((shot) => (
                <div key={shot.src} className="rounded-[var(--r-lg)] overflow-hidden border border-[var(--border)] bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt={shot.label} className="w-full h-auto block" />
                  <p className="text-ink-2 text-[11px] font-medium px-3 py-2">{shot.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-ink mb-4 tracking-tight">{t("detail.overview")}</h2>
              <div className="space-y-3">
                {detail.overview.map((p) => (
                  <p key={p.en} className="text-ink-2 leading-relaxed">{p[lang]}</p>
                ))}
              </div>
            </div>

            {/* Goals + Users */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card p-8">
                <h2 className="font-display text-lg font-bold text-ink mb-4 tracking-tight">{t("detail.goals")}</h2>
                <ul className="space-y-2 list-disc list-inside text-ink-2 text-sm leading-relaxed">
                  {detail.goals.map((g) => (
                    <li key={g.en}>{g[lang]}</li>
                  ))}
                </ul>
              </div>
              <div className="card p-8">
                <h2 className="font-display text-lg font-bold text-ink mb-4 tracking-tight">{t("detail.users")}</h2>
                <div className="space-y-4">
                  {detail.users.map((u) => (
                    <div key={u.name.en}>
                      <h3 className="font-semibold text-ink text-sm">{u.name[lang]}</h3>
                      <p className="text-ink-2 text-[13px] mt-0.5">{u.need[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-ink mb-4 tracking-tight">{t("detail.challenge")}</h2>
              <p className="text-ink-2 leading-relaxed">{detail.challenge[lang]}</p>
            </div>

            {/* Research */}
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-ink mb-6 tracking-tight">{t("detail.research")}</h2>
              <div className="space-y-5">
                {detail.research.map((r) => (
                  <div key={r.finding.en}>
                    <h3 className="font-semibold text-ink text-sm">{r.finding[lang]}</h3>
                    <p className="text-ink-2 text-[13px] mt-1 leading-relaxed">{r.detail[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-ink mb-6 tracking-tight">{t("detail.approach")}</h2>
              <div className="space-y-4">
                {detail.approach.map((step, i) => (
                  <div key={step.title.en} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-accent-soft text-accent flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{step.title[lang]}</p>
                      <p className="text-ink-2 text-sm mt-0.5">{step.body[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decisions */}
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-ink mb-6 tracking-tight">{t("detail.decisions")}</h2>
              <div className="space-y-4">
                {detail.decisions.map((d, i) => (
                  <div key={d.title.en} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-violet-soft text-violet flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{d.title[lang]}</p>
                      <p className="text-ink-2 text-sm mt-0.5">{d.body[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div
              className="rounded-[var(--r-lg)] p-8 text-white"
              style={{ background: item.gradient }}
            >
              <h2 className="font-display text-xl font-bold mb-4 tracking-tight">{t("detail.outcomes")}</h2>
              <ul className="space-y-2 list-disc list-inside text-white/85 leading-relaxed">
                {detail.outcomes.map((o) => (
                  <li key={o.en}>{o[lang]}</li>
                ))}
              </ul>
            </div>

            {/* Learnings + Tools */}
            <div className="card p-8">
              <h2 className="font-display text-xl font-bold text-ink mb-4 tracking-tight">{t("detail.learnings")}</h2>
              <ul className="space-y-2 list-disc list-inside text-ink-2 leading-relaxed mb-6">
                {detail.learnings.map((o) => (
                  <li key={o.en}>{o[lang]}</li>
                ))}
              </ul>
              <p className="label uppercase text-ink-3 mb-2">{t("detail.tools")}</p>
              <div className="flex flex-wrap gap-2">
                {detail.tools.map((tool) => (
                  <span key={tool} className="pill pill-blue text-[11px]">{tool}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Author Card */}
            <div
              className="rounded-[var(--r-lg)] p-6 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(140deg, #0d0f1a 0%, #1a1f42 100%)" }}
            >
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(91,120,255,.3) 0%, transparent 70%)" }}
              />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full overflow-hidden relative ring-2 ring-white/20 shrink-0">
                  <img
                    src="/images/profile-pic.png"
                    alt="Putri Wulandari"
                    className="object-cover w-full h-full absolute inset-0 z-10"
                  />
                  <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-accent to-violet text-white text-sm font-bold">
                    PW
                  </div>
                </div>
                <div>
                  <p className="font-display font-bold text-white text-[14px]">Putri Wulandari</p>
                  <p className="text-white/50 text-[11px]">{t("about.headline")}</p>
                </div>
              </div>
            </div>

            {/* Project Facts */}
            <div className="card p-6">
              <h3 className="font-display text-base font-bold text-ink mb-4">{t("detail.focus")}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-ink-3 label uppercase">{t("detail.role")}</p>
                  <p className="text-ink font-medium mt-1">{detail.role[lang]}</p>
                </div>
                <div>
                  <p className="text-ink-3 label uppercase">{t("detail.duration")}</p>
                  <p className="text-ink font-medium mt-1">{detail.duration[lang]}</p>
                </div>
                <div>
                  <p className="text-ink-3 label uppercase">{t("detail.team")}</p>
                  <p className="text-ink font-medium mt-1">{detail.team[lang]}</p>
                </div>
                <div>
                  <p className="text-ink-3 label uppercase">{t("detail.company")}</p>
                  <p className="text-ink font-medium mt-1">{item.clientName}</p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="card p-6">
              <h3 className="font-display text-base font-bold text-ink mb-4">{t("detail.metrics")}</h3>
              <div className="grid grid-cols-2 gap-3">
                {detail.metrics.map((m) => (
                  <div key={m.label.en}>
                    <p className="text-[20px] font-display font-extrabold text-accent tracking-tight">{m.value}</p>
                    <p className="text-ink-3 text-[11px] mt-0.5">{m.label[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCvModalOpen(true)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-pill font-semibold text-[13px] transition-all duration-200 border-2 border-accent text-accent hover:bg-accent hover:text-white cursor-pointer bg-transparent"
            >
              {t("about.cv")}
            </button>

            <a
              href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full justify-center text-center"
            >
              {t("about.linkedin")} <ArrowIcon size={13} />
            </a>

            <Link href={`/portfolio/${next.slug}`} className="btn-ghost w-full justify-center text-center">
              {t("detail.next")}: {next.title} <ArrowRightIcon size={13} />
            </Link>
          </div>
        </div>
      </div>
      <CvGateModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} cvUrl={CV_URL} />
      <ScrollToTopButton />
    </div>
  );
}
