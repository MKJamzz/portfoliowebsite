import { useEffect, useRef, useState } from 'react';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true // This prop is no longer used for pill animations but kept for API consistency
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Removed circleRefs, tlRefs, activeTweenRefs as pill hover animations are now CSS-driven
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null); // Kept for potential mobile menu implementation
  const mobileMenuRef = useRef(null); // Kept for potential mobile menu implementation
  const navItemsRef = useRef(null); // Kept for potential mobile menu implementation
  const logoRef = useRef(null);

  // Removed the useEffect that handled circle and label animations,
  // as pill hover effects are now handled by CSS.

  // Removed handleEnter and handleLeave as pill hover animations are now CSS-driven.

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    img.style.transition = 'transform 0.2s ease-out';
    img.style.transform = 'rotate(360deg)';
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        <a
          className="pill-logo cursor-target"
          href="#hero"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          ref={logoRef}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} />
        </a>

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href || `item-${i}`} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`pill cursor-target${activeHref === item.href ? ' is-active' : ''}`}
                  aria-label={item.ariaLabel || item.label}
                  // onMouseEnter and onMouseLeave removed as pill hover animations are now CSS-driven
                  onClick={(e) => {
                    e.preventDefault();
                    item.onClick?.();
                  }}
                >
                  {/* Removed hover-circle */}
                  {/* Replaced label-stack with a single pill-label */}
                  <span className="pill-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu button and overlay would go here if implemented */}
      </nav>
    </div>
  );
};

export default PillNav;