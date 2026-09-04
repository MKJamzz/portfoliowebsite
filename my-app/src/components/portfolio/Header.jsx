const NAV_ITEMS = [
  { label: "ORIGIN", href: "#origin" },
  { label: "ARSENAL", href: "#arsenal" },
  { label: "WORKS", href: "#works" },
  { label: "HISTORY", href: "#history" },
  { label: "CREATIVE", href: "#creative" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header({ mode, onSetQuick, onSetFull, sound, onToggleSound, onNavClick }) {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper shadow-[0_4px_0_rgba(32,30,29,0.12)]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3.5 px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2.5 text-ink no-underline">
          <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border-[3px] border-ink bg-ink font-display text-[15px] text-paper">
            MW
          </span>
          <span className="font-display text-[17px] tracking-[-0.01em]">michaelw.cool</span>
        </a>

        <nav className="ml-auto flex flex-wrap gap-0.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.href);
              }}
              className="rounded-full border-2 border-transparent px-[11px] py-2 text-[12px] font-black tracking-[0.1em] text-ink no-underline transition hover:border-ink hover:bg-hover-peach"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-full border-[3px] border-ink bg-panel">
            <button
              type="button"
              onClick={onSetQuick}
              className="cursor-pointer border-0 px-3.5 py-[7px] font-display text-[12px] tracking-[0.04em]"
              style={{ background: mode === "quick" ? "var(--color-ink)" : "transparent", color: mode === "quick" ? "var(--color-paper)" : "var(--color-ink)" }}
            >
              QUICK
            </button>
            <button
              type="button"
              onClick={onSetFull}
              className="cursor-pointer border-0 px-3.5 py-[7px] font-display text-[12px] tracking-[0.04em]"
              style={{ background: mode === "full" ? "var(--color-ink)" : "transparent", color: mode === "full" ? "var(--color-paper)" : "var(--color-ink)" }}
            >
              FULL
            </button>
          </div>
          <button
            type="button"
            onClick={onToggleSound}
            title="UI sound"
            className="grid h-[38px] w-[38px] place-items-center rounded-full border-[3px] border-ink bg-panel text-[15px] leading-none transition hover:bg-hover-peach"
          >
            {sound ? "🔊" : "🔇"}
          </button>
        </div>
      </div>
    </header>
  );
}
