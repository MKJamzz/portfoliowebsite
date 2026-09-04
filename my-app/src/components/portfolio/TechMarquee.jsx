import { LOGOS } from "../../data/portfolioData";

const DOUBLED = [...LOGOS, ...LOGOS];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-[linear-gradient(90deg,var(--color-panel),rgba(249,244,237,0))]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-[linear-gradient(270deg,var(--color-panel),rgba(249,244,237,0))]" />
      <div className="flex w-max animate-marquee gap-10">
        {DOUBLED.map((logo, i) => (
          <div
            key={logo.name + i}
            title={logo.name}
            className="flex w-[78px] flex-none flex-col items-center gap-1.5 opacity-85 transition hover:-translate-y-0.5 hover:opacity-100"
          >
            <img src={logo.src} alt={logo.name} loading="lazy" className="h-[34px] w-[34px] object-contain" />
            <span className="whitespace-nowrap text-center text-[10px] font-black tracking-[0.06em] text-muted">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
