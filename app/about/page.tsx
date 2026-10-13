"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";
import { tr } from "../../lib/content/translations";
import { SOFT_PURPLE_BLOB } from "../../lib/gradients";
import ArrowIcon from "../components/ui/ArrowIcon";
import CvGateModal from "../components/CvGateModal";

const SERVICES: [string, string, string][] = [
  ["UX", "UX Design", "End-to-end user experience design from research to delivery"],
  ["UR", "UX Research", "Qualitative and quantitative research, usability testing"],
  ["SD", "Service Design", "Service blueprints, journey maps, and systems thinking"],
  ["PM", "Project Management", "Agile PM, roadmaps, and stakeholder alignment"],
  ["ID", "Interaction Design", "Micro-interactions, prototyping, and motion design"],
  ["WD", "Web Design", "Responsive web design and scalable design systems"],
];

const CAREER = [
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
];

const SKILLS = [
  "Cognitive Psychology", "System Thinking", "CX Design", "Service Design",
  "Design Strategy", "UX Research", "Figma", "Prototyping", "User Testing",
  "Agile / Scrum", "OKR Framework", "Stakeholder Management",
  "Design Systems", "Information Architecture", "AI Product Management",
];

export default function AboutPage() {
  const { lang, t } = useLang();
  const [openRole, setOpenRole] = useState(0);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 py-8 md:py-12 space-y-6 md:space-y-8">
        <div className="mb-2">
          <p className="label uppercase tracking-widest text-ink-3 mb-3">{t("about.eyebrow")}</p>
          <h1 className="font-display text-[40px] font-extrabold tracking-tighter leading-none text-ink">
            {t("about.my")} <span className="text-gradient">{t("about.profile")}</span>
          </h1>
        </div>

        {/* Hero */}
        <div className="rounded-[var(--r-xl)] overflow-hidden grid grid-cols-1 md:grid-cols-2 card">
          {/* Left: photo + availability + name */}
          <div className="relative min-h-[320px] overflow-hidden" style={{ background: SOFT_PURPLE_BLOB }}>
            <div className="absolute top-6 left-6 w-20 h-20 rounded-full overflow-hidden relative shrink-0 ring-4 ring-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] z-10">
              <img
                src="/images/profile-pic.png"
                alt="Putri Wulandari"
                className="object-cover w-full h-full absolute inset-0 z-10 bg-card"
              />
              <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center bg-violet text-white text-xl font-bold font-display">
                PW
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h2 className="font-display text-[26px] font-extrabold text-ink tracking-tight leading-tight mb-1">
                Putri Wulandari
              </h2>
              <p className="text-ink-2 text-[13px]">{t("about.headline")}</p>
              <span className="mt-1.5 inline-flex items-center gap-1 px-2 py-1 rounded-pill bg-white/50 backdrop-blur-md border border-white/60 text-ink-3 text-[12px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                {t("about.available")}
              </span>
            </div>
          </div>

          {/* Right: statement + CTAs */}
          <div className="p-8 md:p-10 flex flex-col justify-center bg-card">
            <p className="text-ink leading-relaxed text-[17px]">
              {t("about.statement_a")}
              <span className="text-accent font-semibold">{t("about.statement_b")}</span>
              {t("about.statement_c")}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[13px] py-2.5 px-5"
              >
                {t("about.linkedin")} <ArrowIcon size={13} />
              </a>
              <a href="mailto:ptr.wuln@gmail.com"
                className="inline-flex items-center gap-2 font-medium cursor-pointer no-underline transition-all duration-200 px-5 py-2.5 rounded-pill text-[13px] text-ink-2 hover:text-ink border border-[var(--border)] hover:border-ink-2"
              >
                {t("about.email")}
              </a>
              <button
                type="button"
                onClick={() => setCvModalOpen(true)}
                className="inline-flex items-center gap-2 font-medium cursor-pointer no-underline transition-all duration-200 px-5 py-2.5 rounded-pill text-[13px] text-ink-2 hover:text-ink border border-[var(--border)] hover:border-ink-2 bg-transparent"
              >
                {t("about.cv")}
              </button>
              <span className="inline-flex items-center gap-2 font-medium px-5 py-2.5 rounded-pill text-[13px] text-ink-2 border border-[var(--border)]">
                📍 Jakarta, Indonesia
              </span>
            </div>
            <CvGateModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} cvUrl="/cv-putri-wulandari.pdf" />
          </div>
        </div>

        {/* Services */}
        <div className="card p-8">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{t("about.what_i_do")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-6">{t("about.services")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map(([short, title, description]) => (
              <div key={title} className="p-5 rounded-[var(--r)] bg-card2 border border-[var(--border)] hover:border-accent/30 transition-colors duration-200">
                <div className="w-9 h-9 rounded-full bg-accent-soft text-accent flex items-center justify-center font-display font-bold text-[13px] mb-3">
                  {short}
                </div>
                <h3 className="font-display font-bold text-ink text-[15px] mb-1">{tr(lang, title)}</h3>
                <p className="text-ink-2 text-[12px] leading-relaxed">{tr(lang, description)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career */}
        <div className="card p-8">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{t("about.career")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-6">{t("about.experience")}</h2>
          <div className="space-y-2">
            {CAREER.map((role, index) => {
              const open = openRole === index;
              return (
                <div key={`${role.company}-${role.title}`} className="rounded-[var(--r)] border border-[var(--border)] overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenRole(open ? -1 : index)}
                    className="w-full flex items-center gap-4 p-4 text-left cursor-pointer bg-transparent"
                  >
                    <span className="font-display font-bold text-ink-3 text-sm w-8 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-display font-bold text-ink text-[15px]">{tr(lang, role.title)}</span>
                      <span className="block text-ink-2 text-[13px]">{role.company}</span>
                    </span>
                    <span className="hidden sm:block text-right shrink-0">
                      <span className="block font-semibold text-ink text-[12px]">{tr(lang, role.period)}</span>
                      <span className="block text-ink-3 text-[11px]">{role.location}</span>
                    </span>
                    <span className={`shrink-0 text-ink-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>⌄</span>
                  </button>
                  {open && (
                    <ul className="px-4 pb-5 pl-16 space-y-2 list-disc text-ink-2 text-[13px] leading-relaxed">
                      {role.points.map((point) => (
                        <li key={point}>{tr(lang, point)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="card p-8">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{t("about.expertise")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-6">{t("about.skills")}</h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span key={skill} className="expertise-tag">{tr(lang, skill)}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card p-8 text-center">
          <p className="label uppercase tracking-widest text-ink-3 mb-2">{t("about.work_together")}</p>
          <h2 className="font-display text-2xl font-bold text-ink tracking-tight mb-2">
            {t("about.cta_title")}
          </h2>
          <p className="text-ink-2 text-sm mb-6 max-w-md mx-auto">
            {t("about.cta_text")}
          </p>
          <a
            href="https://www.linkedin.com/in/putriwulandari-ptrwuln/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("about.linkedin")} <ArrowIcon size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
