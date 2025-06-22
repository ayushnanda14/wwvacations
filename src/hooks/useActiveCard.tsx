'use client';

import { useState, useEffect, RefObject } from 'react';
import { useMediaQuery } from 'react-responsive';
import throttle from 'lodash.throttle';

export function useActiveCard(containerRef: RefObject<HTMLElement | null>) {
  const [activeCard, setActiveCard] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = Array.from(container.children) as HTMLElement[];
      let closestCardIndex = 0;

      if (isMobile) {
        // Horizontal scroll logic
        const containerScrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const scrollCenter = containerScrollLeft + containerWidth / 2;
        let minDistance = Infinity;

        cards.forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(scrollCenter - cardCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestCardIndex = index;
          }
        });
      } else {
        // Vertical scroll logic
        const topOfViewport = window.scrollY;
        const middleOfViewport = topOfViewport + (window.innerHeight / 2);
        let minDistance = Infinity;
        
        cards.forEach((card, index) => {
          const cardTop = card.offsetTop + container.offsetTop;
          const distance = Math.abs(middleOfViewport - cardTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestCardIndex = index;
          }
        });
      }
      setActiveCard(closestCardIndex);
    };

    const throttledScroll = throttle(handleScroll, 100);

    if (isMobile) {
      container.addEventListener('scroll', throttledScroll);
    } else {
      window.addEventListener('scroll', throttledScroll);
    }

    // Set initial active card
    handleScroll();

    return () => {
      if (isMobile) {
        container.removeEventListener('scroll', throttledScroll);
      } else {
        window.removeEventListener('scroll', throttledScroll);
      }
      throttledScroll.cancel();
    };
  }, [containerRef, isMobile]);

  return activeCard;
}
