'use client';

import { useEffect, useRef, useState } from 'react';

const TESTIMONIALS = [
  {
    quote: 'Jorge picked the coastal road back from Sintra without us asking, just because the light was better.',
    name: 'Helen & Robert',
    location: 'United Kingdom',
  },
  {
    quote: 'Our flight landed two hours late and he was still there with the sign.',
    name: 'Claudia M.',
    location: 'Germany',
  },
  {
    quote: 'Three generations, one van, no complaints — he even packed a picnic for the viewpoint at Cabo da Roca.',
    name: 'The Alves Family',
    location: 'Brazil',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const active = TESTIMONIALS[index];

  return (
    <section
      style={{ maxWidth: 900, margin: '0 auto', padding: '88px 32px' }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div style={{ textAlign: 'center', color: 'var(--sand-500)', fontSize: 18, marginBottom: 20 }}>★★★★★</div>
      <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', padding: 40, textAlign: 'center', boxShadow: 'var(--shadow-sm)', minHeight: 170 }}>
        <p style={{ font: 'italic 26px/1.5 var(--font-classic)', color: 'var(--text-primary)', margin: '0 0 20px' }}>&quot;{active.quote}&quot;</p>
        <div style={{ font: '600 14px var(--font-body)', color: 'var(--text-primary)' }}>{active.name}</div>
        <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{active.location} · WhatsApp</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index ? 'var(--green-700)' : 'var(--stone-300)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
