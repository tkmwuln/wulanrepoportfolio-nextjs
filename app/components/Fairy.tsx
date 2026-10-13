"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import ArrowIcon from "./ui/ArrowIcon";

function FairyIllustration() {
  // Semi-3D chibi-style illustration: soft gradient shading for a glossy,
  // rounded look, wide wings, and a small magic wand for extra charm.
  return (
    <svg width="116" height="80" viewBox="-30 -6 116 88" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fairy-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff0e2" />
          <stop offset="100%" stopColor="#ffd9bd" />
        </linearGradient>
        <linearGradient id="fairy-hijab" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f080ab" />
          <stop offset="100%" stopColor="#d9427f" />
        </linearGradient>
        <linearGradient id="fairy-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1ecfb" />
        </linearGradient>
        <linearGradient id="fairy-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eaf6ff" />
          <stop offset="100%" stopColor="#a9d8ff" />
        </linearGradient>
        <linearGradient id="fairy-wing-lower" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd3ec" />
          <stop offset="100%" stopColor="#ffb0db" />
        </linearGradient>
      </defs>

      {/* floating glow orb above head */}
      <circle className="fairy-orb" cx="28" cy="-1" r="3.2" fill="#ffe08a" />
      <circle className="fairy-orb" cx="28" cy="-1" r="1.4" fill="#fff6d8" />

      {/* wings (behind body), butterfly-style fore + hind wings, wide span */}
      <g className="wing-left" style={{ transformOrigin: "14px 30px" }}>
        <path d="M10 40c-18-1-28-18-25-34 14 1 25 11 28 25 1.8 6 0.5 8.5-3 9z" fill="url(#fairy-wing)" opacity=".92" />
        <path d="M12.5 37c-11-1-18-12-16-24 9 1 16 8 18 17 1.2 4.3 0.5 6.5-2 7z" fill="#f5fbff" opacity=".92" />
        <path d="M13 43c-10 4-19-2-21-12 7-2 15 0.5 19 6.5 1.6 2.4 2.3 4.4 2 5.5z" fill="url(#fairy-wing-lower)" opacity=".88" />
      </g>
      <g className="wing-right" style={{ transformOrigin: "42px 30px" }}>
        <path d="M46 40c18-1 28-18 25-34-14 1-25 11-28 25-1.8 6-0.5 8.5 3 9z" fill="url(#fairy-wing)" opacity=".92" />
        <path d="M43.5 37c11-1 18-12 16-24-9 1-16 8-18 17-1.2 4.3-0.5 6.5 2 7z" fill="#f5fbff" opacity=".92" />
        <path d="M43 43c10 4 19-2 21-12-7-2-15 0.5-19 6.5-1.6 2.4-2.3 4.4-2 5.5z" fill="url(#fairy-wing-lower)" opacity=".88" />
      </g>

      {/* hijab back drape */}
      <path d="M10 26c0-11 8-19 18-19s18 8 18 19v16c0 5-4 9-9 9H19c-5 0-9-4-9-9V26z" fill="url(#fairy-hijab)" />
      {/* face */}
      <ellipse cx="28" cy="27.5" rx="14.5" ry="13.5" fill="url(#fairy-face)" />
      {/* hijab front wrap framing the face */}
      <path d="M12 24a16 16 0 0132-0.3c.4 3-1 5.6-2 5.6-1.6-5-7.5-9.5-14-9.5s-12.4 4.8-14 9.8c-1 0-2.4-2.3-2-5.6z" fill="url(#fairy-hijab)" />
      {/* blush */}
      <circle cx="18.5" cy="30.5" r="3" fill="#ff9fb8" opacity=".75" />
      <circle cx="37.5" cy="30.5" r="3" fill="#ff9fb8" opacity=".75" />
      {/* eyes (closed, happy) */}
      <path d="M16.5 27q3-3 6 0" stroke="#3a2a28" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M33.5 27q3-3 6 0" stroke="#3a2a28" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* smile */}
      <path d="M23.5 34q4.5 3.4 9 0" stroke="#b2534f" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* hijab knot under chin */}
      <path d="M22 39c2 3 10 3 12 0l-1 6c-3 2-7 2-10 0z" fill="#c43e73" />
      {/* arm holding the wand */}
      <path d="M38 48c4 1 7 4 8 8" stroke="url(#fairy-body)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* body (dress, long enough to only peek a sliver of leg above the feet) */}
      <path d="M15 47c0-4 6-6 13-6s13 2 13 6v18c0 2-2 4-4 4H19c-2 0-4-2-4-4z" fill="url(#fairy-body)" />
      {/* legs */}
      <rect x="19.5" y="67" width="4" height="4" rx="1.5" fill="#ffd9bd" />
      <rect x="31.5" y="67" width="4" height="4" rx="1.5" fill="#ffd9bd" />
      {/* feet */}
      <ellipse cx="21.5" cy="71" rx="3.4" ry="2.4" fill="#d94f84" />
      <ellipse cx="33.5" cy="71" rx="3.4" ry="2.4" fill="#d94f84" />

      {/* magic wand, held out to the right */}
      <g>
        <line x1="46" y1="56" x2="58" y2="46" stroke="#c9922f" strokeWidth="2" strokeLinecap="round" />
        <path d="M58 40.5l1.4 3.2 3.2 1.4-3.2 1.4-1.4 3.2-1.4-3.2-3.2-1.4 3.2-1.4z" fill="#ffd36e" />
      </g>

      {/* sparkle accents */}
      <path d="M50 12l1.3 3 3 1.3-3 1.3-1.3 3-1.3-3-3-1.3 3-1.3z" fill="#ffd36e" />
      <circle cx="3" cy="40" r="1.6" fill="#8fd3ff" />
    </svg>
  );
}

type Sparkle = { id: number; x: number; y: number };

function SparkleTrail({ sparkles }: { sparkles: Sparkle[] }) {
  return (
    <>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="fixed pointer-events-none z-[59] animate-sparkle-fade"
          style={{ left: s.x, top: s.y }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M5 0l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#ffd36e" />
          </svg>
        </span>
      ))}
    </>
  );
}

const MENU_ITEMS = [
  { key: "portfolio", label: { en: "See portfolio", id: "Lihat portofolio" }, href: "/portfolio" },
  { key: "about", label: { en: "About Putri", id: "Tentang Putri" }, href: "/about" },
  { key: "blog", label: { en: "Read the blog", id: "Baca blog" }, href: "/blog" },
  { key: "email", label: { en: "Send an email", id: "Kirim email" }, href: "mailto:ptr.wuln@gmail.com" },
] as const;

const CHAT_PROMPTS = [
  { en: "Hi there! 👋", id: "Hai! 👋" },
  { en: "Lost? I got you ✨", id: "Nyasar? Aku temenin ✨" },
  { en: "Psst, got a sec?", id: "Psst, punya waktu sebentar?" },
  { en: "I know where the good stuff is", id: "Aku tau tempat seru di sini" },
  { en: "Tap me, I don't bite 🪄", id: "Pencet aku, nggak gigit kok 🪄" },
  { en: "Fancy a tour?", id: "Mau diajak keliling?" },
  { en: "Following your every move 👀", id: "Aku ngikutin kamu terus 👀" },
  { en: "Let's find something cool", id: "Yuk cari yang seru" },
] as const;

const FALLBACK_POS = { x: 0, y: 0 };

let sparkleId = 0;

export default function Fairy() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(FALLBACK_POS);
  const [ready, setReady] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [showBubble, setShowBubble] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [tilt, setTilt] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);
  const frozenRef = useRef(false);
  const lastSparkleRef = useRef(0);
  const lastXRef = useRef<number | null>(null);
  const lastDirRef = useRef(0);
  const reversalsRef = useRef<number[]>([]);
  const shakeCooldownRef = useRef(0);
  const tiltResetRef = useRef<number | null>(null);

  useEffect(() => {
    frozenRef.current = open;
    if (open) setShowBubble(false);
  }, [open]);

  useEffect(() => {
    const cycle = window.setInterval(() => {
      setShowBubble((wasShown) => {
        if (frozenRef.current) return false;
        if (!wasShown) setPromptIndex((i) => (i + 1) % CHAT_PROMPTS.length);
        return !wasShown;
      });
    }, 4000);
    return () => window.clearInterval(cycle);
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanHover(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      if (frozenRef.current) return;
      setPos({ x: e.clientX, y: e.clientY });
      setReady(true);

      const now = performance.now();

      // Shake gesture: wiggling the cursor left-right a few times in a row
      // pops the menu open, as an alternative to clicking the mascot.
      if (lastXRef.current !== null) {
        const dx = e.clientX - lastXRef.current;
        if (Math.abs(dx) > 4) {
          const dir = dx > 0 ? 1 : -1;
          if (lastDirRef.current !== 0 && dir !== lastDirRef.current) {
            reversalsRef.current.push(now);
          }
          lastDirRef.current = dir;

          // Lean into the direction of travel for a livelier, more
          // interactive feel; settle back upright once the cursor idles.
          setTilt(dir * 12);
          if (tiltResetRef.current) window.clearTimeout(tiltResetRef.current);
          tiltResetRef.current = window.setTimeout(() => setTilt(0), 300);
        }
      }
      lastXRef.current = e.clientX;
      reversalsRef.current = reversalsRef.current.filter((t) => now - t < 800);
      if (reversalsRef.current.length >= 4 && now > shakeCooldownRef.current) {
        reversalsRef.current = [];
        shakeCooldownRef.current = now + 1500;
        setOpen(true);
      }
      if (now - lastSparkleRef.current > 25) {
        lastSparkleRef.current = now;
        const id = sparkleId++;
        const jitterX = (Math.random() - 0.5) * 4;
        const jitterY = (Math.random() - 0.5) * 4;
        setSparkles((prev) => [
          ...prev,
          { id, x: e.clientX + jitterX, y: e.clientY + jitterY },
        ]);
        window.setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 650);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const followStyle: React.CSSProperties =
    canHover && ready
      ? {
          position: "fixed",
          left: pos.x + 8,
          top: pos.y + 8,
          bottom: "auto",
          right: "auto",
          transition: open ? "none" : "left 0.18s ease-out, top 0.18s ease-out",
        }
      : {};

  return (
    <>
      {canHover && <SparkleTrail sparkles={sparkles} />}
      <div
        ref={rootRef}
        className="fixed bottom-5 right-5 z-[60] pointer-events-none"
        style={followStyle}
      >
        {/* Idle chat-invite bubble — sits beside the mascot, not above it */}
        {!open && showBubble && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2.5 px-3 py-1.5 rounded-xl bg-card border border-[var(--border)] shadow-[0_6px_16px_rgba(0,0,0,0.15)] text-[12px] font-medium text-ink whitespace-nowrap animate-fade-up pointer-events-none">
            {CHAT_PROMPTS[promptIndex][lang]}
            <span className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[7px] border-l-[var(--card-bg)]" />
          </div>
        )}

        {/* Popup menu — anchored to the fairy's current (now frozen) position, doesn't move while open */}
        {open && (
          <div className="absolute bottom-full right-0 mb-3 w-56 rounded-[var(--r-lg)] bg-card border border-[var(--border)] shadow-[0_12px_32px_rgba(0,0,0,0.18)] p-2 animate-fade-up pointer-events-auto">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-[12px] text-[13px] font-medium text-ink no-underline hover:bg-card2 transition-colors"
              >
                {item.label[lang]}
                <span className="text-ink-3"><ArrowIcon size={12} /></span>
              </Link>
            ))}
            <button
              type="button"
              onClick={() => { toggleTheme(); setOpen(false); }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-[12px] text-[13px] font-medium text-ink hover:bg-card2 transition-colors cursor-pointer bg-transparent text-left"
            >
              {lang === "id" ? "Ganti tema" : "Switch theme"}
              <span className="text-ink-3 text-[11px]">{theme === "dark" ? "☀️" : "🌙"}</span>
            </button>
          </div>
        )}

        {/* Mascot button — the hit area is offset beside the cursor (not on top
            of it) so a single click here never swallows clicks meant for other
            buttons on the page */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={lang === "id" ? "Buka menu peri Putri" : "Open Putri's fairy menu"}
          aria-expanded={open}
          className="w-[116px] h-[80px] flex items-start justify-start cursor-pointer bg-transparent border-none p-0 drop-shadow-[0_6px_16px_rgba(0,0,0,0.25)] pointer-events-auto"
          style={{ transform: `rotate(${tilt}deg)`, transition: "transform 0.25s ease-out" }}
        >
          <FairyIllustration />
        </button>
      </div>
    </>
  );
}
