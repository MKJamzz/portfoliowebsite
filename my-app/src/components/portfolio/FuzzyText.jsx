import React, { useEffect, useRef } from 'react';

const FuzzyText = ({
  children,
  fontSize = 'clamp(2rem, 8vw, 6rem)',
  fontWeight = 900,
  fontFamily = 'inherit',
  color = '#fff',
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isCancelled = false; // Flag to indicate if the effect has been cancelled (component unmounted or deps changed)
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Define variables to hold references to event handlers.
    // This is crucial for cleanup, as add/removeEventListener need the exact same function reference.
    let currentHandleMouseMove, currentHandleMouseLeave, currentHandleTouchMove, currentHandleTouchEnd;

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      // If the effect was cancelled while awaiting font load, stop initialization
      if (isCancelled) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === 'inherit' ? window.getComputedStyle(canvas).fontFamily || 'sans-serif' : fontFamily;

      const fontSizeStr = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
      let numericFontSize;
      if (typeof fontSize === 'number') {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement('span');
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = window.getComputedStyle(temp).fontSize;
        numericFontSize = parseFloat(computedSize);
        document.body.removeChild(temp);
      }

      const text = React.Children.toArray(children).join('');

      const offscreen = document.createElement('canvas');
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = 'alphabetic';
      const metrics = offCtx.measureText(text);

      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent = metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textBoundingWidth = Math.ceil(actualLeft + actualRight);
      const tightHeight = Math.ceil(actualAscent + actualDescent);

      const extraWidthBuffer = 10;
      const offscreenWidth = textBoundingWidth + extraWidthBuffer;

      offscreen.width = offscreenWidth;
      offscreen.height = tightHeight;

      const xOffset = extraWidthBuffer / 2;
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = 'alphabetic';
      offCtx.fillStyle = color;
      offCtx.fillText(text, xOffset - actualLeft, actualAscent);

      const horizontalMargin = 50;
      const verticalMargin = 0;
      canvas.width = offscreenWidth + horizontalMargin * 2;
      canvas.height = tightHeight + verticalMargin * 2;
      ctx.translate(horizontalMargin, verticalMargin);

      const interactiveLeft = horizontalMargin + xOffset;
      const interactiveTop = verticalMargin;
      const interactiveRight = interactiveLeft + textBoundingWidth;
      const interactiveBottom = interactiveTop + tightHeight;

      // Internal mutable state for hover effect, doesn't need to trigger re-renders
      let isHovering = false;
      const fuzzRange = 30;

      const run = () => {
        // If the effect was cancelled, stop the animation loop
        if (isCancelled) return;
        ctx.clearRect(-fuzzRange, -fuzzRange, offscreenWidth + 2 * fuzzRange, tightHeight + 2 * fuzzRange);
        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < tightHeight; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(offscreen, 0, j, offscreenWidth, 1, dx, j, offscreenWidth, 1);
        }
        animationFrameId = window.requestAnimationFrame(run);
      };

      const isInsideTextArea = (x, y) => {
        return x >= interactiveLeft && x <= interactiveRight && y >= interactiveTop && y <= interactiveBottom;
      };

      // Assign handlers to the 'current' variables declared in the useEffect scope
      currentHandleMouseMove = e => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      currentHandleMouseLeave = () => {
        isHovering = false;
      };

      currentHandleTouchMove = e => {
        if (!enableHover) return;
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      currentHandleTouchEnd = () => {
        isHovering = false;
      };

      run(); // Start the animation loop

      if (enableHover) {
        canvas.addEventListener('mousemove', currentHandleMouseMove);
        canvas.addEventListener('mouseleave', currentHandleMouseLeave);
        canvas.addEventListener('touchmove', currentHandleTouchMove, { passive: false });
        canvas.addEventListener('touchend', currentHandleTouchEnd);
      }
    };

    init();

    // Cleanup function for useEffect
    return () => {
      isCancelled = true; // Signal ongoing async operations or animation frames to stop
      window.cancelAnimationFrame(animationFrameId); // Cancel the last requested animation frame

      // Remove event listeners if they were added.
      // We use the 'current' references to ensure we remove the exact same functions that were added.
      if (canvas && enableHover) {
        canvas.removeEventListener('mousemove', currentHandleMouseMove);
        canvas.removeEventListener('mouseleave', currentHandleMouseLeave);
        canvas.removeEventListener('touchmove', currentHandleTouchMove);
        canvas.removeEventListener('touchend', currentHandleTouchEnd);
      }
    };
  }, [children, fontSize, fontWeight, fontFamily, color, enableHover, baseIntensity, hoverIntensity]);

  return <canvas ref={canvasRef} />;
};

export default FuzzyText;