'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const ROUTES = [
  { city: 'Porto', time: '3h', price: 370 },
  { city: 'Faro', time: '2h30', price: 315 },
  { city: 'Évora', time: '1h20', price: 190 },
  { city: 'Fátima', time: '1h30', price: 165 },
  { city: 'Coimbra', time: '2h', price: 250 },
  { city: 'Seville, Spain', time: '3h30', price: 420 },
];

export default function RouteLines() {
  const [progress, setProgress] = useState(false);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            setProgress(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--green-900)', padding: '88px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 40px', textAlign: 'center' }}>Where we drive from Lisbon</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ROUTES.map((rl) => (
            <Link
              key={rl.city}
              href="/transfers"
              className="ig-route-row"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                padding: '16px 12px',
                borderBottom: '1px solid rgba(255,255,255,0.12)',
                position: 'relative',
              }}
            >
              <div style={{ width: 120, flexShrink: 0, position: 'relative', height: 2, background: 'rgba(255,255,255,0.15)' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: 2,
                    background: 'var(--green-400)',
                    width: progress ? '100%' : '0%',
                    transition: 'width 1200ms ease-out',
                  }}
                />
              </div>
              <div style={{ font: '600 18px var(--font-body)', color: '#fff', flex: 1 }}>{rl.city}</div>
              <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>{rl.time}</div>
              <div style={{ font: '600 20px var(--font-display)', color: 'var(--green-300)' }}>€{rl.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
