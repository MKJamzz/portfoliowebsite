import React from "react";
import "./FuzzyImage.css";

/**
 * Fuzzy/glitch image:
 * - Stacks two color-shifted, jittering layers behind the real image
 * - Works with circles (default) or rounded rectangles
 */
export default function FuzzyImage({
  src,
  alt = "",
  size = 160,                  // px size (width/height)
  shape = "circle",            // "circle" | "rounded"
  baseIntensity = 0.6,         // idle jitter/blur strength
  hoverIntensity = 1.2,        // on-hover boost
  className = "",
  border = true,               // show white border ring
}) {
  const radiusClass = shape === "circle" ? "rounded-full" : "rounded-2xl";

  return (
    <div
      className={`fuzzy-img relative isolate ${radiusClass} ${className}`}
      style={{
        "--size": `${size}px`,
        "--base": baseIntensity,
        "--hover": hoverIntensity,
      }}
    >
      {/* Main crisp image */}
      <img
        src={src}
        alt={alt}
        className={`w-[var(--size)] h-[var(--size)] object-cover ${radiusClass} relative z-10 ${
          border ? "border-4 border-slate-100 shadow-2xl" : ""
        }`}
      />

      {/* Two animated, color-shifted layers behind */}
      <img
        src={src}
        alt=""
        aria-hidden
        className={`absolute inset-0 ${radiusClass} object-cover layer layer-r`}
      />
      <img
        src={src}
        alt=""
        aria-hidden
        className={`absolute inset-0 ${radiusClass} object-cover layer layer-b`}
      />
    </div>
  );
}
