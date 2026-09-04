import { JOBS } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="history" className="mb-14 scroll-mt-24">
      <div className="mb-4.5 flex items-baseline gap-3.5">
        <h2 className="m-0 font-display leading-[0.9]" style={{ fontSize: "clamp(30px,5.5vw,56px)" }}>HISTORY</h2>
        <span className="h-1 flex-1 rounded-sm bg-ink" />
        <span className="text-[11px] font-black tracking-[0.2em] text-spot-deep">CH. 04</span>
      </div>

      <div className="grid gap-4">
        {JOBS.map((item) => (
          <div
            key={item.company + item.year}
            className="grid animate-slam grid-cols-1 gap-6 rounded-[12px] border-[4px] border-ink bg-panel p-6 shadow-[8px_8px_0_var(--color-ink)] sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)]"
          >
            <div>
              <div className="font-display text-[34px] leading-none text-spot">{item.year}</div>
              <div className="mt-1.5 text-[12px] font-extrabold text-muted">{item.period}</div>
              <div className="text-[12px] font-bold text-muted">{item.location}</div>
              <span className="mt-2.5 inline-block rounded-full border-2 border-ink bg-hover-sage px-[11px] py-1 text-[11px] font-black">
                {item.type}
              </span>
            </div>
            <div>
              <h3 className="mb-0.5 font-display text-[23px] leading-[1.05]">{item.title}</h3>
              <div className="mb-2.5 font-display text-[15px] text-sage-deep">{item.company}</div>
              <p className="mb-3 max-w-[70ch] text-[14.5px] font-semibold text-muted">{item.description}</p>
              <div className="mb-3.5 grid gap-1.5">
                {item.achievements.map((ach) => (
                  <div key={ach} className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5">
                    <span className="mt-1.5 block h-2.5 w-2.5 rounded-full bg-spot" />
                    <span className="text-[13.5px] font-semibold leading-[1.5]">{ach}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map((sk) => (
                  <span key={sk} className="rounded-full border-2 border-ink px-2.5 py-1 text-[11px] font-extrabold">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
