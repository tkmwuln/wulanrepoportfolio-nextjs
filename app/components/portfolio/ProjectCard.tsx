import Link from "next/link";
import ProjectIllustration, { PROJECT_COLORS } from "./ProjectIllustration";

type Metric = {
  metricLabel: string;
  metricValue: string;
  metricUnit?: string | null;
};

type ProjectCardProps = {
  title: string;
  slug: string;
  summary?: string | null;
  coverImageUrl?: string | null;
  category?: { name: string; color?: string | null } | null;
  clientName?: string | null;
  projectYear?: number | null;
  durationWeeks?: number | null;
  metrics?: Metric[];
  gradient?: string;
  index?: number;
};

export default function ProjectCard({
  title,
  slug,
  category,
  clientName,
  projectYear,
  metrics = [],
  index = 0,
}: ProjectCardProps) {
  const bg = PROJECT_COLORS[index % PROJECT_COLORS.length];

  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group relative rounded-card overflow-hidden shadow-card block no-underline"
      style={{ height: "220px", background: bg }}
    >
      <div className="absolute inset-0 w-2/3 h-full right-0 left-auto opacity-90 transition-transform duration-500 group-hover:scale-105">
        <ProjectIllustration title={title} />
      </div>

      <div className="absolute top-3.5 left-4 text-[11px] text-ink/50 bg-ink/10 rounded-pill px-2.5 py-1 font-semibold">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        {category && (
          <p className="text-[10px] uppercase tracking-[.08em] font-semibold text-ink/60 mb-1">
            {category.name}
          </p>
        )}
        <h3 className="font-display text-[17px] font-bold text-ink leading-tight tracking-tight">
          {title}
        </h3>
        {metrics[0] && (
          <p className="text-[11px] text-ink/60 mt-1">
            {metrics[0].metricValue}
            {metrics[0].metricUnit} {metrics[0].metricLabel}
            {clientName && ` · ${clientName}`}
            {projectYear && ` ${projectYear}`}
          </p>
        )}
      </div>
    </Link>
  );
}
