import { useEffect, useRef } from "react";

const COLOR = "#c67139";
const COUNT = 9;
const RADIUS = 16;
const LENGTH = 11;
const DURATION = 420;

const ease = (t) => t * (2 - t);

export default function ClickSparks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let sparks = [];
    let raf;

    const fit = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();
    window.addEventListener("resize", fit);

    const onPointerDown = (ev) => {
      const now = performance.now();
      for (let i = 0; i < COUNT; i++) {
        sparks.push({ x: ev.clientX, y: ev.clientY, angle: (2 * Math.PI * i) / COUNT, start: now });
      }
    };
    window.addEventListener("pointerdown", onPointerDown);

    const frame = (now) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";
      ctx.strokeStyle = COLOR;
      ctx.lineWidth = 2.6;
      sparks = sparks.filter((sp) => {
        const t = (now - sp.start) / DURATION;
        if (t >= 1) return false;
        const p = ease(t);
        const d = RADIUS + p * (RADIUS + LENGTH * 2);
        const len = LENGTH * (1 - p);
        const cos = Math.cos(sp.angle), sin = Math.sin(sp.angle);
        ctx.globalAlpha = 1 - p;
        ctx.beginPath();
        ctx.moveTo(sp.x + cos * d, sp.y + sin * d);
        ctx.lineTo(sp.x + cos * (d + len), sp.y + sin * (d + len));
        ctx.stroke();
        return true;
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("pointerdown", onPointerDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[200] h-full w-full"
    />
  );
}
