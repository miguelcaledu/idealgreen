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
      style={{ maxWidth: 900, margin: '0 auto', padding: '104px 40px 96px' }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div style={{ textAlign: 'center', color: 'var(--sand-400)', fontSize: 18, marginBottom: 28, letterSpacing: '0.3em' }}>★★★★★</div>
      <p style={{ font: 'italic 400 2rem/1.5 var(--font-classic)', color: '#fff', margin: '0 0 32px', textAlign: 'center', minHeight: 120 }}>&quot;{active.quote}&quot;</p>
      <div style={{ textAlign: 'center' }}>
        <div style={{ font: '600 14px var(--font-body)', color: '#fff' }}>{active.name}</div>
        <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)' }}>{active.location} · WhatsApp</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index ? 'var(--green-300)' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
