export const PROJECT_COLORS = [
  "#FFF1B8",
  "#FFD9E4",
  "#CDEFE2",
  "#D3E8FB",
  "#FFE3C7",
  "#E4DBFA",
  "#FFD6D6",
];

type IllustrationKind =
  | "health"
  | "cx"
  | "gov"
  | "fintech"
  | "system"
  | "identity"
  | "blockchain"
  | "emr"
  | "resto";

function illustrationKind(title: string): IllustrationKind {
  const t = title.toLowerCase();
  if (t.includes("le nusa")) return "resto";
  if (t.includes("emr") || t.includes("vaccination")) return "emr";
  if (t.includes("e-health") || t.includes("simrs")) return "health";
  if (t.includes("cx")) return "cx";
  if (t.includes("procurement")) return "gov";
  if (t.includes("fintech")) return "fintech";
  if (t.includes("design system")) return "system";
  if (t.includes("ina digital")) return "identity";
  if (t.includes("blockchain")) return "blockchain";
  return "cx";
}

export default function ProjectIllustration({ title }: { title: string }) {
  const kind = illustrationKind(title);
  const w = "rgba(255,255,255,0.8)";
  const m = "rgba(20,20,30,0.14)";
  const d = "rgba(20,20,30,0.3)";
  const k = "rgba(20,20,30,0.62)";
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 200 140"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "health" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="56" y="26" width="88" height="88" rx="22" fill={w} />
          <path d="M92 46h16v18h18v16h-18v18H92V80H74V64h18z" fill={k} />
          <circle cx="162" cy="30" r="9" fill={w} />
          <circle cx="38" cy="108" r="6" fill={d} />
        </>
      )}
      {kind === "emr" && (
        <>
          <circle cx="104" cy="70" r="58" fill={m} />
          <rect x="60" y="18" width="80" height="104" rx="12" fill={w} />
          <rect x="82" y="12" width="36" height="16" rx="6" fill={k} />
          <rect x="74" y="48" width="52" height="7" rx="3.5" fill={d} />
          <rect x="74" y="64" width="52" height="7" rx="3.5" fill={m} />
          <rect x="74" y="80" width="32" height="7" rx="3.5" fill={m} />
          <rect x="144" y="76" width="12" height="40" rx="6" transform="rotate(35 150 96)" fill={k} />
        </>
      )}
      {kind === "cx" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <path d="M42 34h72a14 14 0 0 1 14 14v28a14 14 0 0 1-14 14H64l-18 16V90a14 14 0 0 1-14-14V48a14 14 0 0 1 10-14z" fill={w} />
          <rect x="94" y="64" width="80" height="48" rx="16" fill={k} />
          <rect x="110" y="82" width="48" height="7" rx="3.5" fill={w} />
          <rect x="52" y="54" width="48" height="7" rx="3.5" fill={d} />
          <circle cx="160" cy="30" r="10" fill={d} />
        </>
      )}
      {kind === "gov" && (
        <>
          <circle cx="100" cy="72" r="58" fill={m} />
          <path d="M100 18l66 30H34z" fill={w} />
          <rect x="46" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="76" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="108" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="138" y="58" width="16" height="44" rx="4" fill={w} />
          <rect x="30" y="106" width="140" height="14" rx="5" fill={k} />
          <circle cx="100" cy="40" r="6" fill={d} />
        </>
      )}
      {kind === "fintech" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="24" y="56" width="98" height="64" rx="14" fill={w} />
          <rect x="24" y="72" width="98" height="14" fill={k} />
          <rect x="38" y="100" width="30" height="7" rx="3.5" fill={d} />
          <circle cx="140" cy="48" r="28" fill={d} />
          <circle cx="140" cy="48" r="20" fill={w} />
          <rect x="136" y="36" width="8" height="24" rx="4" fill={k} />
          <rect x="140" y="104" width="12" height="16" rx="3" fill={d} />
          <rect x="158" y="92" width="12" height="28" rx="3" fill={d} />
          <rect x="176" y="76" width="12" height="44" rx="3" fill={k} />
        </>
      )}
      {kind === "system" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="30" y="28" width="52" height="52" rx="12" fill={w} />
          <circle cx="134" cy="54" r="26" fill={k} />
          <path d="M44 120l26-42 26 42z" fill={w} />
          <rect x="112" y="92" width="58" height="28" rx="14" fill={w} />
          <circle cx="127" cy="106" r="7" fill={d} />
        </>
      )}
      {kind === "identity" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="28" y="32" width="112" height="76" rx="14" fill={w} />
          <circle cx="66" cy="62" r="13" fill={k} />
          <path d="M42 96c2-18 46-18 50 0z" fill={d} />
          <rect x="100" y="54" width="28" height="7" rx="3.5" fill={d} />
          <rect x="100" y="70" width="28" height="7" rx="3.5" fill={m} />
          <path d="M158 50l24 9v20c0 17-11 27-24 33-13-6-24-16-24-33V59z" fill={k} />
          <path d="M148 84l7 7 13-15" fill="none" stroke={w} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {kind === "blockchain" && (
        <>
          <circle cx="100" cy="70" r="58" fill={m} />
          <rect x="20" y="48" width="46" height="46" rx="11" fill={w} />
          <rect x="77" y="48" width="46" height="46" rx="11" fill={k} />
          <rect x="134" y="48" width="46" height="46" rx="11" fill={w} />
          <rect x="66" y="67" width="11" height="8" fill={d} />
          <rect x="123" y="67" width="11" height="8" fill={d} />
          <circle cx="43" cy="30" r="7" fill={d} />
          <circle cx="157" cy="112" r="7" fill={d} />
        </>
      )}
      {kind === "resto" && (
        <>
          <circle cx="100" cy="72" r="58" fill={m} />
          <circle cx="100" cy="72" r="44" fill={w} />
          <circle cx="100" cy="72" r="28" fill={d} />
          <circle cx="100" cy="72" r="16" fill={w} />
          <rect x="28" y="36" width="6" height="80" rx="3" fill={k} />
          <rect x="20" y="36" width="5" height="26" rx="2.5" fill={k} />
          <rect x="37" y="36" width="5" height="26" rx="2.5" fill={k} />
          <path d="M170 36c-10 10-10 30 0 38z" fill={k} />
          <rect x="167" y="36" width="6" height="80" rx="3" fill={k} />
        </>
      )}
    </svg>
  );
}
