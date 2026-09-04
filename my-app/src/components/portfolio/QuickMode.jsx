import { JOBS, PROJECTS, SOCIALS } from "../../data/portfolioData";
import TechMarquee from "./TechMarquee";

export default function QuickMode({ onOpenProject }) {
  const quickJobs = JOBS.slice(0, 3);
  const quickProjects = PROJECTS.slice(0, 3);

  return (
    <div>
      <div className="mb-4 grid animate-slam grid-cols-[150px_minmax(0,1fr)] items-center gap-6 rounded-[12px] border-[4px] border-ink bg-panel p-6.5 shadow-[8px_8px_0_var(--color-ink)]">
        <div className="h-[150px] w-[150px] overflow-hidden rounded-full border-[3px] border-ink bg-panel-2 shadow-[5px_5px_0_var(--color-spot)]">
          <img
            src="/images/profile.png"
            alt="Michael Whiteman"
            className="h-full w-full object-cover"
            style={{ filter: "saturate(0.7) contrast(0.9) brightness(1.06)" }}
          />
        </div>
        <div>
          <h2 className="mb-2.5 font-display leading-[0.92] text-ink" style={{ fontSize: "clamp(30px,5vw,52px)" }}>
            Michael Whiteman
          </h2>
          <p className="mb-3.5 max-w-[62ch] text-[16px] font-semibold text-muted">
            Computer Engineering at Waterloo (B.Eng, 2023–2028). Full-stack, game dev, and embedded — currently a software engineer at PinkByte.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={SOCIALS.resumeSoftware}
              download
              className="rounded-full border-[3px] border-ink bg-spot px-[18px] py-2.5 font-display text-[13px] text-text-on-accent no-underline shadow-[4px_4px_0_var(--color-ink)] hover:bg-spot-deep"
            >
              SOFTWARE RÉSUMÉ →
            </a>
            <a
              href={SOCIALS.resumeEmbedded}
              download
              className="rounded-full border-[3px] border-ink bg-sage px-[18px] py-2.5 font-display text-[13px] text-white no-underline shadow-[4px_4px_0_var(--color-ink)] hover:bg-sage-deep"
            >
              EMBEDDED RÉSUMÉ →
            </a>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="rounded-full border-[3px] border-ink bg-panel px-[18px] py-2.5 font-display text-[13px] text-ink no-underline shadow-[4px_4px_0_var(--color-ink)] hover:bg-hover-peach"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>

      <div className="mb-4 animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel py-4.5 shadow-[8px_8px_0_var(--color-ink)]">
        <h3 className="mb-3.5 px-5.5 font-display text-[20px]">What I build with</h3>
        <TechMarquee />
      </div>

      <div className="mb-4">
        <div className="animate-slam rounded-[12px] border-[4px] border-ink bg-ink p-5.5 text-paper shadow-[8px_8px_0_var(--color-spot)]">
          <h3 className="mb-3 font-display text-[20px] text-paper">Where I've been</h3>
          {quickJobs.map((item) => (
            <div
              key={item.title + item.year}
              className="grid grid-cols-[64px_minmax(0,1fr)] gap-2.5 border-b border-[rgba(245,234,216,0.2)] py-2 last:border-b-0"
            >
              <span className="font-display text-[13px] text-accent-on-dark">{item.year}</span>
              <span className="text-[13px] font-bold">{item.title} · {item.company}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {quickProjects.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onOpenProject(item.id)}
            className="animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel text-left shadow-[8px_8px_0_var(--color-ink)] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_var(--color-ink)]"
          >
            <div className="h-[130px] overflow-hidden border-b-[3px] border-ink bg-panel-2">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ filter: "saturate(0.8) contrast(0.95)" }}
              />
            </div>
            <div className="px-4.5 pb-4.5 pt-4">
              <div className="mb-1.5 font-display text-[18px] leading-[1.05]">{item.title}</div>
              <div className="text-[12.5px] font-semibold text-muted">{item.shortDescription}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
