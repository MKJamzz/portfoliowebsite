import { SKILLS } from "../../data/portfolioData";
import TechMarquee from "./TechMarquee";

const DOT_CLASS = { spot: "bg-spot", sage: "bg-sage" };

export default function ArsenalSection() {
  return (
    <section id="arsenal" className="mb-14 scroll-mt-24">
      <div className="mb-4.5 flex items-baseline gap-3.5">
        <h2 className="m-0 font-display leading-[0.9]" style={{ fontSize: "clamp(30px,5.5vw,56px)" }}>ARSENAL</h2>
        <span className="h-1 flex-1 rounded-sm bg-ink" />
        <span className="text-[11px] font-black tracking-[0.2em] text-spot-deep">CH. 02</span>
      </div>

      <div className="mb-4 animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel py-4 shadow-[8px_8px_0_var(--color-sage)]">
        <TechMarquee />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(255px,1fr))] gap-3.5">
        {SKILLS.map((cat) => (
          <div key={cat.cat} className="animate-slam rounded-[12px] border-[4px] border-ink bg-panel px-5 py-4.5 shadow-[6px_6px_0_var(--color-ink)]">
            <div className="mb-3 flex items-center gap-2.5">
              <span className={`block h-3.5 w-3.5 rounded-full border-[3px] border-ink ${DOT_CLASS[cat.dot]}`} />
              <h3 className="m-0 font-display text-[17px]">{cat.cat}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.tags.map((tag) => (
                <span key={tag} className="rounded-full border-2 border-ink bg-paper px-[11px] py-1 text-[11.5px] font-extrabold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
