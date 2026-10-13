"use client";

import Link from "next/link";
import { useLang } from "../../context/LangContext";
import { useState, useEffect } from "react";
import CvGateModal from "../CvGateModal";
import ArrowIcon from "../ui/ArrowIcon";
import { SOFT_PURPLE_BLOB } from "../../../lib/gradients";

function CountUp({ value, duration = 1500 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo function for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <>{count}</>;
}

type Profile = {
  fullName: string;
  headline?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
  location?: string | null;
  openToWork: boolean;
};

type HeroSectionProps = {
  profile: Profile;
  projectCount: number;
  yearsExperience?: number;
  industries?: { label: string; colorClass: string }[];
};

const defaultIndustries = [
  { label: "E-commerce", colorClass: "pill-blue" },
  { label: "Fintech", colorClass: "pill-violet" },
  { label: "B2B SaaS", colorClass: "pill-green" },
  { label: "Govtech", colorClass: "pill-amber" },
  { label: "Health", colorClass: "pill-blue" },
  { label: "F&B", colorClass: "pill-violet" },
];

const COLLABORATORS = ["Gojek", "Tokopedia", "Kemenkes RI", "LKPP", "Telkom", "BNI", "Prudential"];
const EXPERTISE = ["UX Research", "PRD", "Figma", "OKR", "A/B Test", "Service Design", "Design Sys.", "Roadmap", "SQL"];

const LINKEDIN_URL = "https://www.linkedin.com/in/putriwulandari-ptrwuln/";
const CV_URL = "/cv-putri-wulandari.pdf";
const AVATAR_URL = "/images/profile-pic.png";

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function HeroSection({
  profile,
  projectCount,
  yearsExperience = 8,
  industries = defaultIndustries,
}: HeroSectionProps) {
  const { t } = useLang();
  const avatarUrl = profile.avatarUrl || AVATAR_URL;
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <>
    <div className="bento bento-hero animate-fade-up">
      {/* ── Main Hero Card ── */}
      <div className="card-lg p-10 flex flex-col justify-between relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,90,241,.07) 0%, transparent 70%)" }}
        />
        <span className="absolute top-9 right-10 text-3xl text-accent/10 select-none">✦</span>

        <div>
          <p className="label uppercase tracking-widest text-ink-3 mb-4">{t("hero.label")}</p>
          <h1 className="font-display text-[48px] font-extrabold tracking-tighter leading-none text-ink">
            {t("hero.title1")}{" "}
            <span className="text-gradient">{t("hero.title_gradient")}</span>
            <br />
            {t("hero.title2")}
          </h1>
          <p className="mt-4 text-sm text-ink-2 leading-relaxed max-w-lg font-light">
            {profile.bio ?? t("hero.bio")}
          </p>
        </div>

        <div className="flex gap-3 flex-wrap items-center">
          <Link href="/portfolio" className="btn-primary">{t("hero.cta_primary")} <ArrowIcon size={13} /></Link>
          <button type="button" onClick={() => setCvModalOpen(true)} className="btn-ghost">{t("hero.cta_secondary")}</button>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white text-ink-2 transition-all duration-200"
          >
            <LinkedInIcon size={15} />
          </a>
          {profile.location && (
            <span className="btn-ghost cursor-default">📍 {profile.location}</span>
          )}
        </div>
      </div>

      {/* ── Products Shipped + Collaborated + Expertise ── */}
      <div className="card p-6 flex flex-col justify-between animate-fade-up delay-100 overflow-hidden">
        {/* Products header */}
        <div>
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{t("products.label")}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {industries.map((ind) => (
              <span key={ind.label} className={`pill ${ind.colorClass}`}>{ind.label}</span>
            ))}
          </div>
        </div>

        {/* Collaborated With — horizontal pills */}
        <div className="mb-3">
          <p className="label uppercase tracking-widest text-ink-3 mb-2 text-[10px]">Collaborated With</p>
          <div className="flex flex-wrap gap-1">
            {COLLABORATORS.map(c => (
              <span key={c} className="pill text-ink-3 border border-[var(--border)] bg-card2">{c}</span>
            ))}
          </div>
        </div>

        {/* Count */}
        <div>
          <div className="flex items-baseline gap-2">
            <div className="font-display text-[48px] font-extrabold tracking-tighter leading-none text-ink">
              <CountUp value={projectCount} /><span className="text-[24px] text-ink-3">+</span>
            </div>
            <span className="text-ink-2 text-sm font-medium">Projects</span>
          </div>
          <p className="text-xs text-ink-3 mt-1">{t("products.sub")}</p>
        </div>
      </div>

      {/* ── Profile Card (stacked photo-hero style) ── */}
      <div className="relative h-full animate-fade-up delay-200">
        {/* offset background layer for the stacked-card depth effect */}
        <div className="absolute inset-x-3 top-3 -bottom-2 rounded-[var(--r-lg)] bg-card2" />

        <div className="relative h-full rounded-[var(--r-lg)] bg-card shadow-card p-4 flex flex-col">
          {/* Top row: greeting, arrow link */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <p className="label uppercase tracking-widest text-ink-3 truncate">Hi, nice to meet you! 👋</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-6 h-6 rounded-full bg-card2 flex items-center justify-center text-ink-2 hover:bg-ink hover:text-white transition-colors duration-200 shrink-0"
            >
              <ArrowIcon size={11} />
            </a>
          </div>

          {/* Hero visual — soft purple gradient with a small round avatar */}
          <div className="relative flex-1 min-h-[230px] rounded-[20px] overflow-hidden" style={{ background: SOFT_PURPLE_BLOB }}>
            <Link href="/about" className="absolute top-5 left-5 w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] z-10 block">
              <img
                src={avatarUrl}
                alt="Putri Wulandari"
                className="object-cover w-full h-full absolute inset-0 z-10"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center bg-violet text-white text-lg font-bold">PW</div>
            </Link>

            {/* Floating stat badges — glassmorphic */}
            <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
              <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center leading-tight text-center bg-white/50 backdrop-blur-md border border-white/60">
                <span className="label uppercase tracking-widest text-violet text-[10px]">{yearsExperience}<br />years</span>
              </div>
              <a
                href={`${LINKEDIN_URL}details/recommendations/`}
                target="_blank"
                rel="noopener noreferrer"
                title="See LinkedIn recommendations"
                className="w-16 h-16 rounded-full flex flex-col items-center justify-center leading-none bg-white/50 backdrop-blur-md border border-white/60 hover:bg-white/70 transition-colors duration-200"
              >
                <span className="label uppercase tracking-widest text-violet">4.9★</span>
              </a>
            </div>

            {/* Bottom caption — directly on the gradient */}
            <div className="absolute bottom-4 left-5 right-5 z-20">
              <p className="font-display font-bold text-[16px] text-ink leading-tight truncate">Putri Wulandari</p>
              <p className="text-ink-2 text-[12px] leading-tight truncate">{profile.headline ?? "AI Product Manager & Service Designer"}</p>
              {profile.openToWork && (
                <span className="mt-1.5 inline-flex items-center gap-1 px-2 py-1 rounded-pill bg-white/50 backdrop-blur-md border border-white/60 text-ink-3 text-[12px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  {t("profile.available")}
                </span>
              )}
            </div>
          </div>

          {/* Expertise pills */}
          <div className="flex flex-wrap gap-1 mt-3">
            {EXPERTISE.slice(0, 6).map(skill => (
              <span key={skill} className="pill text-ink-3 border border-[var(--border)] bg-card2">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <CvGateModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} cvUrl={CV_URL} />
    </>
  );
}
