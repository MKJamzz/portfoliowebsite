export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[70] grid place-items-center overflow-auto bg-[rgba(32,30,29,0.72)] p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[760px] animate-slam overflow-hidden rounded-[14px] border-[4px] border-ink bg-panel shadow-[12px_12px_0_var(--color-spot)]"
        style={{ animationDuration: "0.34s" }}
      >
        <div className="relative h-[230px] border-b-[4px] border-ink bg-panel-2">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: "saturate(0.85)" }}
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-full border-[3px] border-ink bg-paper text-[17px] font-black leading-none shadow-[3px_3px_0_var(--color-ink)]"
          >
            ×
          </button>
        </div>
        <div className="max-h-[56vh] overflow-auto px-7 pb-7.5 pt-6.5">
          <h3 className="mb-1 font-display text-[30px] leading-[1.02]">{project.title}</h3>
          <div className="mb-3.5 text-[12px] font-black tracking-[0.12em] text-spot-deep">
            {project.period} · {project.status}
          </div>
          <p className="mb-4.5 text-[15px] font-semibold leading-[1.6]">{project.description}</p>
          <div className="mb-4.5 grid gap-2">
            {project.highlights.map((h) => (
              <div key={h} className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2.5">
                <span className="mt-1.5 block h-2.5 w-2.5 rounded-full bg-sage" />
                <span className="text-[13.5px] font-semibold leading-[1.5]">{h}</span>
              </div>
            ))}
          </div>
          <div className="mb-4.5 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-full border-2 border-ink px-[11px] py-1 text-[11.5px] font-extrabold">
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="rounded-full border-[3px] border-ink bg-ink px-[18px] py-2.5 font-display text-[13px] text-paper no-underline shadow-[3px_3px_0_var(--color-spot)] hover:bg-spot-deep"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
