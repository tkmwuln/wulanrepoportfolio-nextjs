"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "../../context/LangContext";
import { tr } from "../../../lib/content/translations";
import ArrowLeftIcon from "../../components/ui/ArrowLeftIcon";
import ArrowIcon from "../../components/ui/ArrowIcon";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton";

const PROCESS = [
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
];

const CHALLENGES = [
  "Express Indonesian culture through a premium visual language",
  "Showcase dishes through an accessible menu carousel and viewer",
  "Turn the restaurant story into an editorial experience",
  "Create frictionless reservation and location journeys",
];

const DELIVERABLES = [
  "Information Architecture",
  "Responsive UI",
  "Menu Carousel & Viewer",
  "Food Story Modal",
  "Reservation Flow",
  "Location & Contact",
];

export default function LenusaProjectDetail() {
  const { lang, t } = useLang();
  const L = (s: string) => tr(lang, s);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <div className="w-full py-10 md:py-16 bg-page">
        <div className="mx-auto w-full max-w-[1280px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link href="/portfolio" className="text-accent text-sm font-semibold no-underline mb-6 inline-flex items-center gap-1">
              <ArrowLeftIcon size={13} /> {t("detail.back")}
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[11px] bg-card2 text-ink-2 border border-[var(--border)] px-3 py-1 rounded-pill font-semibold tracking-wider uppercase">{L("Website")}</span>
              <span className="text-[11px] bg-card2 text-ink-2 border border-[var(--border)] px-3 py-1 rounded-pill font-semibold tracking-wider uppercase">{L("Develop")}</span>
            </div>
            <p className="text-ink-3 text-sm mb-2">{L("Featured project · 2025")}</p>
            <h1 className="font-display text-[32px] md:text-[42px] font-extrabold text-ink tracking-tight leading-tight">
              {lang === "id"
                ? "Menghadirkan fine dining Indonesia ke Paris lewat website yang menggugah indra"
                : "Bringing Indonesian fine dining to Paris through a sensorial website"}
            </h1>
            <p className="text-ink-2 max-w-xl mt-4 leading-relaxed text-sm">
              {L("An immersive restaurant website for Le Nusa Paris, where Indonesia's culinary heritage, cultural artistry, and a seamless reservation journey meet.")}
            </p>
            <a
              href="https://wulanrepowesite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-pill bg-ink text-[var(--card-bg)] font-semibold text-[13px] no-underline"
            >
              {L("Visit live website")} <ArrowIcon size={13} />
            </a>
          </div>

          {/* Live website preview, toggle between desktop and mobile viewport */}
          <div>
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
                {L("Desktop")}
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
                {L("Mobile")}
              </button>
            </div>

            {previewMode === "desktop" ? (
              <div className="rounded-[var(--r-lg)] overflow-hidden border border-[var(--border)] shadow-card-lg bg-[#1c1c22]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#2a2a33]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[11px] text-white/40 bg-white/5 rounded-full px-3 py-1 truncate">wulanrepowesite.vercel.app</span>
                </div>
                <div className="relative w-full aspect-[16/10] bg-black">
                  <iframe
                    src="https://wulanrepowesite.vercel.app/"
                    title="Le Nusa Paris live website — desktop"
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            ) : (
              <div className="mx-auto w-[260px] rounded-[2rem] border-[6px] border-[#1c1c22] bg-[#1c1c22] shadow-card-lg overflow-hidden">
                <div className="relative w-full aspect-[9/19.5] bg-black rounded-[1.4rem] overflow-hidden">
                  <iframe
                    src="https://wulanrepowesite.vercel.app/"
                    title="Le Nusa Paris live website — mobile"
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 space-y-10">
        {/* Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            [L("Role"), L("Designer & Developer")],
            [L("Project type"), L("Restaurant Website")],
            [L("Services"), L("UI, UX & Development")],
            [L("Platform"), L("Responsive Web")],
          ].map(([label, value]) => (
            <div key={label} className="card p-5">
              <p className="text-ink-3 label uppercase">{label}</p>
              <p className="text-ink font-semibold mt-1 text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="card p-8">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{L("The overview")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-4">
            {L("A digital taste of Indonesia in the heart of Paris.")}
          </h2>
          <div className="space-y-3 text-ink-2 leading-relaxed">
            <p>{L("Le Nusa is an Indonesian fine-dining restaurant at 36 rue Fabert, Paris. Its name means “archipelago,” reflecting an experience where culinary excellence meets the rich artistic heritage of Indonesia.")}</p>
            <p>{L("The website translates that sensorial experience into a digital journey—from discovering signature dishes and cultural stories to finding the restaurant and reserving a table.")}</p>
          </div>
        </div>

        {/* Challenge */}
        <div className="card p-8">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{L("The challenge")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-4">
            {L("Make culture tangible without slowing the journey.")}
          </h2>
          <p className="text-ink-2 leading-relaxed mb-6">
            {L("The experience needed to celebrate Indonesian food, batik, weaving, suntiang, and gebyok while still helping international guests quickly browse the menu, check opening hours, find the Paris location, and reserve.")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHALLENGES.map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="text-accent font-display font-bold text-sm">0{index + 1}</span>
                <p className="text-ink-2 text-sm">{L(item)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="card p-8">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{L("The process")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-2">
            {L("From restaurant story to digital experience")}
          </h2>
          <p className="text-ink-2 text-sm mb-6">
            {L("The experience balances emotional storytelling with practical tasks throughout every stage of the guest journey.")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((step) => (
              <div key={step.number} className="p-5 rounded-[var(--r)] bg-card2 border border-[var(--border)]">
                <span className="text-ink-3 font-display font-bold text-sm">{step.number}</span>
                <h3 className="font-display font-bold text-ink text-[15px] mt-2 mb-1">{L(step.title)}</h3>
                <p className="text-ink-2 text-[12px] leading-relaxed">{L(step.description)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="card p-8">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{L("Key deliverables")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-4">
            {L("A complete journey from discovery to reservation.")}
          </h2>
          <p className="text-ink-2 leading-relaxed mb-6">
            {L("The final product pairs rich imagery and cultural detail with practical features for menu discovery, storytelling, restaurant information, and table booking.")}
          </p>
          <div className="flex flex-wrap gap-2">
            {DELIVERABLES.map((item) => (
              <span key={item} className="pill pill-blue text-[11px]">{L(item)}</span>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div
          className="rounded-[var(--r-lg)] p-8 text-white"
          style={{ background: "linear-gradient(140deg, #6b0006 0%, #d11117 100%)" }}
        >
          <p className="label uppercase tracking-widest text-white/60 mb-2">{L("The outcome")}</p>
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            {L("A sensorial digital home for Le Nusa Paris.")}
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            {L("The result presents the best of Indonesia's culinary heritage through a responsive, interactive experience—while giving guests clear access to the menu, restaurant story, opening hours, Paris location, WhatsApp contact, and reservations.")}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wulanrepowesite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-white text-ink font-semibold text-[13px] no-underline"
            >
              {L("Visit live website")} <ArrowIcon size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill border border-white/40 text-white font-semibold text-[13px] no-underline"
            >
              {L("Discuss a project")}
            </a>
          </div>
        </div>

        <Link href="/portfolio" className="btn-ghost w-full justify-center text-center block">
          {L("Next: Explore all projects")}
        </Link>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
