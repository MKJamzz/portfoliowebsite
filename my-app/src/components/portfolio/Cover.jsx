export default function Cover({ role, onEnterQuick, onEnterFull }) {
  return (
    <>
      {/* Backdrop — a separate fixed layer so it never scrolls with the content below, and always covers the full viewport. */}
      <div className="fixed inset-0 z-[90] overflow-hidden bg-paper">
        <div
          className="absolute inset-0 animate-drift opacity-20"
          style={{
            backgroundImage: "radial-gradient(#c67139 2px, transparent 2.2px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="absolute left-[8%] top-0 h-full w-[70px] -skew-x-[18deg] animate-speed bg-spot opacity-90" />
        <div className="absolute left-[22%] top-0 h-full w-[22px] -skew-x-[18deg] bg-ink opacity-90" style={{ animation: "speed 0.8s 0.06s cubic-bezier(0.2,0.9,0.2,1) both" }} />
        <div className="absolute right-[12%] top-0 h-full w-[38px] -skew-x-[18deg] bg-sage opacity-90" style={{ animation: "speed 0.8s 0.12s cubic-bezier(0.2,0.9,0.2,1) both" }} />
      </div>

      <div className="fixed inset-0 z-[90] overflow-y-auto">
        <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1080px] flex-col justify-center gap-[clamp(9px,1.8vh,14px)] px-5 py-7">
          <div className="grid items-stretch gap-[clamp(9px,1.8vh,14px)] sm:grid-cols-[1.35fr_1fr]">
          <div
            className="flex min-h-0 animate-slam flex-col justify-center overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel px-[30px] py-[clamp(14px,3vh,30px)] shadow-[9px_9px_0_var(--color-ink)]"
            style={{ animationDelay: "0.18s" }}
          >
            <div className="mb-3.5 inline-flex items-center gap-2 text-[11px] font-black tracking-[0.22em] text-spot-deep">
              <span className="block h-[3px] w-[26px] bg-spot" />
              ISSUE 01 · PORTFOLIO
            </div>
            <h1
              className="mb-2 break-words font-display leading-[0.88] tracking-[-0.035em] text-ink"
              style={{ fontSize: "clamp(32px,min(6.2vw,11vh),80px)", textShadow: "6px 6px 0 #ffc6a5" }}
            >
              MICHAEL<br />WHITEMAN
            </h1>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[13px] font-black tracking-[0.14em] text-muted">STARRING AS</span>
              <span
                key={role}
                className="inline-block animate-pop rounded-full border-[3px] border-ink bg-spot px-[18px] py-[7px] font-display text-text-on-accent shadow-[4px_4px_0_var(--color-ink)]"
                style={{ fontSize: "clamp(15px,2.2vw,22px)" }}
              >
                {role}
              </span>
            </div>

            <div className="mt-4 grid animate-slam grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3" style={{ animationDelay: "0.44s" }}>
              <button
                type="button"
                onClick={onEnterQuick}
                className="rounded-[12px] border-[4px] border-ink bg-ink px-5 py-[clamp(10px,2vh,18px)] text-left text-paper shadow-[8px_8px_0_var(--color-spot)] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_var(--color-spot)] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_var(--color-spot)]"
              >
                <div className="mb-1 font-display leading-none" style={{ fontSize: "clamp(16px,2.2vh,22px)" }}>THE 30-SECOND READ</div>
                <div className="text-[12px] font-semibold opacity-75">One page. Skills, top projects, résumé. For recruiters in a hurry.</div>
              </button>
              <button
                type="button"
                onClick={onEnterFull}
                className="rounded-[12px] border-[4px] border-ink bg-panel px-5 py-[clamp(10px,2vh,18px)] text-left text-ink shadow-[8px_8px_0_var(--color-sage)] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_var(--color-sage)] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_var(--color-sage)]"
              >
                <div className="mb-1 font-display leading-none" style={{ fontSize: "clamp(16px,2.2vh,22px)" }}>READ THE WHOLE THING</div>
                <div className="text-[12px] font-semibold opacity-70">Every panel — projects, work, school, and the photo pages.</div>
              </button>
            </div>
          </div>

          <div className="relative min-h-[min(260px,26vh)] animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel-2 shadow-[9px_9px_0_var(--color-ink)]" style={{ animationDelay: "0.3s" }}>
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{ backgroundImage: "radial-gradient(#201e1d 1.6px, transparent 1.7px)", backgroundSize: "7px 7px" }}
            />
            <img
              src="/images/character.png"
              alt=""
              className="relative h-full w-full object-contain object-bottom"
              style={{ filter: "saturate(0.85) contrast(1.05)" }}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
