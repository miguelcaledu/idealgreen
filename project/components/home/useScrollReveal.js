'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const thresholdRef = useRef(threshold);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.disconnect();
          }
        });
      },
      { threshold: thresholdRef.current }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const revealStyle = {
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity 900ms cubic-bezier(.4,0,.2,1), transform 900ms cubic-bezier(.4,0,.2,1)',
  };

  return { ref, revealed, revealStyle };
}
