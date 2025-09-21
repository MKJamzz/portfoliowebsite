import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap'
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0
  }
};

export default function DecryptedText({
  text,
  speed = 100,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [internalHover, setInternalHover] = useState(false); // Tracks actual hover state
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimatedInView, setHasAnimatedInView] = useState(false); // Tracks if the 'view' animation has completed once
  const [shouldAnimateRun, setShouldAnimateRun] = useState(false); // Controls the main animation loop
  const containerRef = useRef(null);

  // Effect to handle view-based animation trigger
  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'both') return;

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedInView) {
          setShouldAnimateRun(true); // Trigger the animation
          setHasAnimatedInView(true); // Mark as animated to prevent re-triggering
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOn, hasAnimatedInView]); // Re-run if animateOn or hasAnimatedInView changes

  // Effect to link internalHover to shouldAnimateRun for hover-based animations
  useEffect(() => {
    if (animateOn === 'hover' || animateOn === 'both') {
      if (internalHover) {
        setShouldAnimateRun(true);
      } else {
        // Only stop animation on mouse leave if it's NOT sequential
        // Sequential animations are meant to complete once started
        if (!sequential) {
          setShouldAnimateRun(false);
        }
      }
    }
  }, [internalHover, animateOn, sequential]);

  // Main animation effect
  useEffect(() => {
    let interval;
    let currentIteration = 0; // Use a local variable to track iterations for the current animation cycle

    const getNextIndex = revealedSet => {
      const textLength = text.length;
      switch (revealDirection) {
        case 'start':
          return revealedSet.size;
        case 'end':
          return textLength - 1 - revealedSet.size;
        case 'center': {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const potentialIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

          if (potentialIndex >= 0 && potentialIndex < textLength && !revealedSet.has(potentialIndex)) {
            return potentialIndex;
          }

          // Fallback: search for any unrevealed index
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return undefined; // All indices revealed or no unrevealed found
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
      : characters.split('');

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const unrevealedNonSpaceChars = originalText
          .split('')
          .filter((char, i) => !currentRevealed.has(i) && char !== ' ');

        // Shuffle these characters randomly
        for (let i = unrevealedNonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [unrevealedNonSpaceChars[i], unrevealedNonSpaceChars[j]] = [
            unrevealedNonSpaceChars[j],
            unrevealedNonSpaceChars[i]
          ];
        }

        let charIndex = 0;
        return originalText
          .split('')
          .map((char, i) => {
            if (currentRevealed.has(i)) {
              return originalText[i]; // Keep revealed characters as they are
            }
            if (char === ' ') {
              return ' '; // Keep spaces as they are
            }
            // For unrevealed, non-space characters, use a shuffled character
            return unrevealedNonSpaceChars[charIndex++] || '';
          })
          .join('');
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (currentRevealed.has(i)) return originalText[i]; // Keep revealed characters
            if (char === ' ') return ' '; // Keep spaces
            // For unrevealed non-space characters, pick a random character from the available set
            return availableChars[Math.floor(Math.random() * availableChars.length)];
          })
          .join('');
      }
    };

    if (shouldAnimateRun) { // This condition truly controls whether the animation loop starts/runs
      setIsScrambling(true); // Indicate that scrambling is active
      // Reset state for a new animation cycle
      setRevealedIndices(new Set());
      currentIteration = 0; // Reset local iteration counter

      // Set initial display text before the interval starts
      // This ensures an immediate scramble or partial reveal on trigger
      setDisplayText(shuffleText(text, new Set()));

      interval = setInterval(() => {
        setRevealedIndices(prevRevealed => {
          let newRevealed = new Set(prevRevealed);
          let animationComplete = false;

          if (sequential) {
            if (newRevealed.size < text.length) {
              const nextIndex = getNextIndex(newRevealed);
              if (nextIndex !== undefined) { // Only add if a valid next index was found
                newRevealed.add(nextIndex);
              }

              if (newRevealed.size === text.length) { // All characters revealed
                animationComplete = true;
              }
            } else { // Already all revealed
              animationComplete = true;
            }
          } else { // Non-sequential animation (scrambles for maxIterations then stops)
            currentIteration++; // Increment local iteration counter
            if (currentIteration >= maxIterations) {
              animationComplete = true;
            }
          }

          if (animationComplete) {
            clearInterval(interval);
            setIsScrambling(false); // No longer scrambling
            setDisplayText(text); // Ensure final (original) text is displayed
            setShouldAnimateRun(false); // Stop the animation logic
            // For sequential animations, all characters should be considered "revealed" at the end
            return new Set(Array.from({ length: text.length }, (_, i) => i));
          } else {
            // If animation is not complete, update display text and return updated revealed indices
            setDisplayText(shuffleText(text, newRevealed));
            return newRevealed;
          }
        });
      }, speed);
    } else {
      // If shouldAnimateRun is false, ensure everything is reset to the initial state
      // This also handles component unmount or when props change causing re-run with shouldAnimateRun=false
      if (interval) clearInterval(interval); // Clear any existing interval
      setIsScrambling(false);
      setDisplayText(text); // Always display the original text when not animating
      setRevealedIndices(new Set()); // Clear revealed indices
    }

    return () => {
      // Cleanup function: ensures interval is cleared if component unmounts or effect re-runs
      if (interval) clearInterval(interval);
    };
    // Dependencies for the main animation effect. Re-runs if these props change.
  }, [shouldAnimateRun, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);


  const hoverProps = {};
  if (animateOn === 'hover' || animateOn === 'both') {
    hoverProps.onMouseEnter = () => setInternalHover(true);
    hoverProps.onMouseLeave = () => setInternalHover(false);
  }

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
      {/* SR Only text should always show the full original text for accessibility */}
      <span style={styles.srOnly}>{text}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          // A character is "revealed" if its index is in revealedIndices (for sequential),
          // OR if the animation is not currently scrambling (meaning it's either finished or not started).
          const isCharRevealed = revealedIndices.has(index) || !isScrambling;

          return (
            <span key={index} className={isCharRevealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}