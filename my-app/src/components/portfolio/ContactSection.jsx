import { SOCIALS } from "../../data/portfolioData";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="relative animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-ink px-[34px] py-9.5 text-paper shadow-[10px_10px_0_var(--color-spot)]">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(#f5ead8 1.4px, transparent 1.5px)", backgroundSize: "12px 12px" }}
        />
        <div className="relative">
          <h2 className="mb-2.5 font-display leading-[0.92] text-paper" style={{ fontSize: "clamp(30px,6vw,58px)" }}>
            TO BE CONTINUED
          </h2>
          <p className="mb-5.5 max-w-[52ch] text-[15px] font-semibold opacity-80">
            Hiring, collaborating, or just want to talk about game dev? I answer email fast.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="rounded-full border-[3px] border-paper bg-spot px-[22px] py-2.5 font-display text-[14px] text-text-on-accent no-underline hover:bg-spot-deep"
            >
              {SOCIALS.email}
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener"
              className="rounded-full border-[3px] border-paper bg-transparent px-[22px] py-2.5 font-display text-[14px] text-paper no-underline hover:bg-paper hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener"
              className="rounded-full border-[3px] border-paper bg-transparent px-[22px] py-2.5 font-display text-[14px] text-paper no-underline hover:bg-paper hover:text-ink"
            >
              GitHub
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <a
              href={SOCIALS.resumeSoftware}
              download
              className="rounded-full border-[3px] border-accent-on-dark px-4.5 py-2 text-[12.5px] font-black tracking-[0.06em] text-accent-on-dark no-underline hover:bg-accent-on-dark hover:text-ink"
            >
              SOFTWARE RÉSUMÉ →
            </a>
            <a
              href={SOCIALS.resumeEmbedded}
              download
              className="rounded-full border-[3px] border-sage-on-dark px-4.5 py-2 text-[12.5px] font-black tracking-[0.06em] text-sage-on-dark no-underline hover:bg-sage-on-dark hover:text-ink"
            >
              EMBEDDED RÉSUMÉ →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
