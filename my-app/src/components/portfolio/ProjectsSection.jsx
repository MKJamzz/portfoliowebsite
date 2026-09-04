import { PROJECTS } from "../../data/portfolioData";

export default function ProjectsSection({ onOpenProject }) {
  return (
    <section id="works" className="mb-14 scroll-mt-24">
      <div className="mb-4.5 flex items-baseline gap-3.5">
        <h2 className="m-0 font-display leading-[0.9]" style={{ fontSize: "clamp(30px,5.5vw,56px)" }}>WORKS</h2>
        <span className="h-1 flex-1 rounded-sm bg-ink" />
        <span className="text-[11px] font-black tracking-[0.2em] text-spot-deep">CH. 03</span>
      </div>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {PROJECTS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onOpenProject(item.id)}
            className={`animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel text-left shadow-[8px_8px_0_var(--color-ink)] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-ink)] ${item.span ? "[grid-column:span_2]" : ""}`}
          >
            <div className="relative h-[180px] overflow-hidden border-b-[3px] border-ink bg-panel-2">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ filter: "saturate(0.82) contrast(0.96)" }}
              />
              <span
                className={`absolute right-3 top-3 rounded-full border-[3px] border-ink px-3.5 py-1.5 font-display text-[11px] text-ink shadow-[3px_3px_0_var(--color-ink)] ${item.status === "In Progress" ? "bg-hover-sage" : "bg-hover-peach"}`}
              >
                {item.status}
              </span>
            </div>
            <div className="px-5 pb-5 pt-4.5">
              <div className="mb-1 font-display text-[22px] leading-[1.03]">{item.title}</div>
              <div className="mb-2.5 text-[11.5px] font-black tracking-[0.12em] text-spot-deep">{item.period}</div>
              <div className="mb-3 text-[13.5px] font-semibold text-muted">{item.shortDescription}</div>
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border-2 border-ink px-2.5 py-1 text-[11px] font-extrabold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
