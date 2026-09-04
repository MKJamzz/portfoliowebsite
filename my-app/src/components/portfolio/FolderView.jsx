import { useEffect, useRef, useState } from "react";
import { thumbUrl } from "../../data/portfolioData";

function LazyThumb({ item }) {
  const [visible, setVisible] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 bg-panel-2">
      {visible && item.kind === "VIDEO" && (
        <video src={item.url} muted playsInline className="absolute inset-0 h-full w-full object-cover" />
      )}
      {visible && item.kind !== "VIDEO" && (
        <img src={thumbUrl(item.url)} alt={item.label} decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      )}
    </div>
  );
}

export default function FolderView({ folder, onClose, onOpenItem }) {
  if (!folder) return null;

  return (
    <div className="fixed inset-0 z-[75] animate-swipe-up overflow-auto bg-paper">
      <div className="sticky top-0 z-10 flex items-center gap-3.5 border-b-[3px] border-ink bg-paper px-5 py-3.5">
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border-[3px] border-ink bg-panel px-4 py-2 font-display text-[13px] shadow-[3px_3px_0_var(--color-ink)]"
        >
          ← BACK
        </button>
        <div className="font-display text-[19px]">{folder.name}</div>
        <div className="ml-auto text-[12px] font-black text-muted">{folder.items.length} items</div>
      </div>
      <div className="mx-auto max-w-[1180px] p-5">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2.5">
          {folder.items.map((item, i) => (
            <button
              key={item.url}
              type="button"
              onClick={() => onOpenItem(i)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-[10px] border-[3px] border-ink bg-panel-2 shadow-[4px_4px_0_var(--color-ink)] transition hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <LazyThumb item={item} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
