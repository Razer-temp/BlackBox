import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TacticalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      
      // Check for dark theme cursor
      const darkSection = target.closest('[data-cursor="dark"]');
      setIsDarkTheme(!!darkSection);
      
      // Hide custom cursor over inputs
      if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
        setIsVisible(false);
        setHoveredRect(null);
        return;
      }

      // Find the clickable container
      let clickable = target.closest('a, button, [role="button"]');
      if (!clickable) {
        let current: HTMLElement | null = target;
        while (current && current !== document.body && current !== document.documentElement) {
          if (window.getComputedStyle(current).cursor === 'pointer') {
            clickable = current;
            break;
          }
          current = current.parentElement;
        }
      }

      if (clickable) {
        setHoveredRect(clickable.getBoundingClientRect());
      } else {
        setHoveredRect(null);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setHoveredRect(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop) return null;

  const isHovering = hoveredRect !== null;
  
  // Calculate target position
  // If hovering, snap to the center of the element. Otherwise, follow mouse.
  const targetX = isHovering ? hoveredRect.left + hoveredRect.width / 2 : mousePosition.x;
  const targetY = isHovering ? hoveredRect.top + hoveredRect.height / 2 : mousePosition.y;
  
  // Calculate target dimensions
  // Add padding so the brackets sit just outside the element
  const padding = 16;
  const targetWidth = isHovering ? hoveredRect.width + padding : 48;
  const targetHeight = isHovering ? hoveredRect.height + padding : 48;

  const cursorColor = isDarkTheme ? '#000000' : '#FF4500';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] flex items-center justify-center"
      animate={{
        x: targetX,
        y: targetY,
        width: targetWidth,
        height: targetHeight,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 40,
        mass: 0.1,
        opacity: { duration: 0.15 }
      }}
      style={{
        translateX: '-50%',
        translateY: '-50%'
      }}
    >
      {/* Default Crosshair */}
      <motion.div
        className="absolute font-mono text-xl leading-none flex items-center justify-center"
        style={{ color: cursorColor }}
        animate={{ 
          opacity: isHovering ? 0 : 1, 
          scale: isHovering ? 0.5 : 1 
        }}
        transition={{ duration: 0.15 }}
      >
        +
      </motion.div>

      {/* Hover Brackets */}
      <motion.div
        className="absolute inset-0"
        animate={{ 
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{ 
          type: "spring",
          stiffness: 800,
          damping: 40,
          mass: 0.1
        }}
      >
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-colors duration-200" style={{ borderColor: cursorColor }}></div>
        {/* Top Right */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 transition-colors duration-200" style={{ borderColor: cursorColor }}></div>
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 transition-colors duration-200" style={{ borderColor: cursorColor }}></div>
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-colors duration-200" style={{ borderColor: cursorColor }}></div>
      </motion.div>
    </motion.div>
  );
}
