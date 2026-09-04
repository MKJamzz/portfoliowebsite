import { FOLDERS } from "../../data/portfolioData";

const TOTAL_ITEMS = FOLDERS.reduce((sum, f) => sum + f.items.length, 0);

export default function CreativeSection({ onOpenFolder }) {
  return (
    <section id="creative" className="mb-14 scroll-mt-24">
      <div className="mb-2 flex items-baseline gap-3.5">
        <h2 className="m-0 font-display leading-[0.9]" style={{ fontSize: "clamp(30px,5.5vw,56px)" }}>CREATIVE</h2>
        <span className="h-1 flex-1 rounded-sm bg-ink" />
        <span className="text-[11px] font-black tracking-[0.2em] text-spot-deep">SIDE STORY</span>
      </div>
      <p className="mb-4.5 max-w-[62ch] text-[14px] font-semibold text-muted">
        Photos and video from trips, shows and tournaments. {TOTAL_ITEMS} items across {FOLDERS.length} folders — thumbnails load first, full resolution only when you open one.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3.5">
        {FOLDERS.map((folder, i) => (
          <button
            key={folder.id}
            type="button"
            onClick={() => onOpenFolder(i)}
            className="animate-slam overflow-hidden rounded-[12px] border-[4px] border-ink bg-panel text-left shadow-[6px_6px_0_var(--color-ink)] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[10px_10px_0_var(--color-ink)]"
          >
            <div className="relative h-[140px] overflow-hidden border-b-[3px] border-ink bg-panel-2">
              <img
                src={folder.cover}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ filter: "saturate(0.8) contrast(0.95)" }}
              />
              <span className="absolute bottom-2.5 right-2.5 rounded-full border-2 border-ink bg-paper px-2.5 py-1 text-[11px] font-black">
                {folder.items.length} items
              </span>
            </div>
            <div className="px-4 pb-4 pt-3.5">
              <div className="mb-1 font-display text-[15px] leading-[1.1]">{folder.name}</div>
              <div className="text-[11.5px] font-extrabold text-muted">{folder.kind}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
