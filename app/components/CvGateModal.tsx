"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";

export default function CvGateModal({
  open,
  onClose,
  cvUrl,
}: {
  open: boolean;
  onClose: () => void;
  cvUrl: string;
}) {
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/cv-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } catch {
      // Best-effort: saving the lead shouldn't block the user from getting the CV.
    } finally {
      setSubmitting(false);
    }
    window.open(cvUrl, "_blank", "noopener,noreferrer");
    setName("");
    setEmail("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up">
      <div className="absolute inset-0 bg-black/35 backdrop-blur-sm" onClick={onClose} />

      <button
        type="button"
        onClick={onClose}
        aria-label={lang === "id" ? "Lewati" : "Skip"}
        className="absolute top-6 right-6 z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-pill bg-white/80 backdrop-blur-md border border-white/70 text-ink-2 text-sm font-medium hover:bg-white transition-colors cursor-pointer"
      >
        {lang === "id" ? "Lewati" : "Skip"} ×
      </button>

      <div className="relative z-10 w-full max-w-md rounded-[var(--r-lg)] bg-card shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-8 md:p-10">
        <h2 className="font-display text-2xl font-bold text-ink mb-2">
          {lang === "id" ? "Sebelum unduh CV-ku" : "Before you download my CV"}
        </h2>
        <p className="text-ink-2 text-sm mb-6">
          {lang === "id" ? "Boleh kenalan dulu? Isi nama & email kamu ya." : "Mind introducing yourself? Just your name & email."}
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={lang === "id" ? "Masukkan nama kamu" : "Input your name"}
            className="w-full px-4 py-3 rounded-pill border border-[var(--border)] bg-card2 text-ink text-sm outline-none focus:border-accent"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={lang === "id" ? "Masukkan email kamu, contoh: nama@email.com" : "Input your email, e.g. name@email.com"}
            className="w-full px-4 py-3 rounded-pill border border-[var(--border)] bg-card2 text-ink text-sm outline-none focus:border-accent"
          />
          <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
            {submitting
              ? (lang === "id" ? "Mengirim..." : "Sending...")
              : (lang === "id" ? "Unduh CV" : "Download CV")}
          </button>
        </form>
      </div>
    </div>
  );
}
