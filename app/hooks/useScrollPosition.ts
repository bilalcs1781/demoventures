"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Custom hook to track scroll position with throttling for performance
 * @param threshold - The scroll position threshold in pixels
 * @returns boolean indicating if scroll has passed the threshold
 */
export function useScrollPosition(threshold: number = 400) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    setIsScrolled(scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  return isScrolled;
}
