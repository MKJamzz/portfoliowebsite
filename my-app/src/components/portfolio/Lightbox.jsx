import { useState } from "react";
import { thumbUrl } from "../../data/portfolioData";

function LightboxMedia({ item }) {
  const [loaded, setLoaded] = useState(false);

  if (item.kind === "VIDEO") {
    return (
      <div className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <video src={item.url} controls autoPlay className="max-h-[90vh] max-w-[90vw] outline-none" />
      </div>
    );
  }

  return (
    <div className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center" onClick={(e) => e.stopPropagation()}>
      <img
        src={thumbUrl(item.url)}
        alt={item.label}
        className="absolute inset-0 h-full w-full object-contain transition-opacity duration-[400ms]"
        style={{ filter: "blur(12px)", transform: "scale(1.06)", opacity: loaded ? 0 : 1 }}
      />
      <img
        src={item.url}
        alt={item.label}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="relative z-10 max-h-[90vh] max-w-[90vw] object-contain transition-opacity duration-[400ms]"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}

export default function Lightbox({ folder, index, onClose, onPrev, onNext }) {
  if (!folder || index === null) return null;
  const item = folder.items[index];

  return (
    <div onClick={onClose} className="fixed inset-0 z-[85] grid place-items-center bg-[rgba(32,30,29,0.93)] p-6">
      <LightboxMedia item={item} />
      <div className="absolute bottom-[22px] left-0 right-0 flex justify-center gap-2.5">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="rounded-full border-[3px] border-paper bg-transparent px-5 py-2.5 font-display text-[14px] text-paper"
        >
          ←
        </button>
        <span className="rounded-full border-[3px] border-paper px-4.5 py-2.5 text-[12.5px] font-black text-paper">
          {index + 1} / {folder.items.length}
        </span>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="rounded-full border-[3px] border-paper bg-transparent px-5 py-2.5 font-display text-[14px] text-paper"
        >
          →
        </button>
      </div>
    </div>
  );
}
