'use client';

import { useEffect, useRef, useState } from 'react';

const TARGETS = [30, 12, 100, 22];
const LABELS = ['destinations', 'private tours', 'private rides', 'founded'];
const SUFFIX = ['+', '', '%', ''];

export default function StatsCounters() {
  const [values, setValues] = useState([0, 0, 0, 0]);
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
            const start = performance.now();
            const dur = 1400;
            const step = (t) => {
              const p = Math.min(1, (t - start) / dur);
              setValues(TARGETS.map((tg) => Math.round(tg * p)));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const counters = values.map((v, i) => ({
    display: i === 3 ? '20' + v : v + SUFFIX[i],
    label: i === 3 ? 'Founded' : LABELS[i],
  }));

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px 56px', textAlign: 'center' }}>
      <p className="ig-reveal" style={{ font: 'var(--text-h3)', color: 'var(--text-primary)', margin: '0 0 40px', maxWidth: 680, marginInline: 'auto' }}>
        From Lisbon to all of Portugal — and Seville. We&apos;ll be there on time.
      </p>
      <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 24 }}>
        {counters.map((c, i) => (
          <div key={i}>
            <div style={{ font: '600 44px var(--font-display)', color: 'var(--green-700)' }}>{c.display}</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 4 }}>{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
