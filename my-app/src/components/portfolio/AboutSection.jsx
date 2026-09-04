import { BIO_PARAGRAPHS, EDUCATION } from "../../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="origin" className="mb-14 scroll-mt-24">
      <div className="mb-4.5 flex items-baseline gap-3.5">
        <h2 className="m-0 font-display leading-[0.9]" style={{ fontSize: "clamp(30px,5.5vw,56px)" }}>ORIGIN</h2>
        <span className="h-1 flex-1 rounded-sm bg-ink" />
        <span className="text-[11px] font-black tracking-[0.2em] text-spot-deep">CH. 01</span>
      </div>

      <div className="grid items-start gap-4 [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
        <div className="relative min-h-[340px] animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel-2 shadow-[8px_8px_0_var(--color-ink)]">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{ backgroundImage: "radial-gradient(#201e1d 1.5px, transparent 1.6px)", backgroundSize: "8px 8px" }}
          />
          <img
            src="/images/profile.png"
            alt="Michael Whiteman"
            className="relative h-full min-h-[340px] w-full object-cover"
            style={{ filter: "saturate(0.65) contrast(0.92) brightness(1.08)" }}
          />
          <div className="absolute bottom-4 left-4 rounded-full border-[3px] border-ink bg-paper px-4 py-1.5 font-display text-[13px] shadow-[4px_4px_0_var(--color-ink)]">
            Michael, 2026
          </div>
        </div>

        <div className="grid gap-4">
          <div className="animate-slam rounded-[12px] border-[4px] border-ink bg-panel p-6 shadow-[8px_8px_0_var(--color-ink)]">
            {BIO_PARAGRAPHS.map((p, i) => (
              <p key={i} className={`text-[15.5px] font-semibold leading-[1.65] ${i === BIO_PARAGRAPHS.length - 1 ? "mb-0" : "mb-3"}`}>
                {p}
              </p>
            ))}
          </div>
          <div className="animate-slam rounded-[12px] border-[4px] border-ink bg-ink px-6 py-5.5 text-paper shadow-[8px_8px_0_var(--color-sage)]">
            <div className="mb-2 text-[11px] font-black tracking-[0.2em] text-accent-on-dark">EDUCATION</div>
            <div className="mb-1 font-display text-[22px] leading-[1.05]">{EDUCATION.title}</div>
            <div className="text-[13.5px] font-bold opacity-80">{EDUCATION.org} · {EDUCATION.period}</div>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {EDUCATION.courses.map((course) => (
                <span key={course} className="rounded-full border-2 border-[rgba(245,234,216,0.5)] px-[11px] py-1 text-[11.5px] font-extrabold">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
