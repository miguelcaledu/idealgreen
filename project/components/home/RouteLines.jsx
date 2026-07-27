'use client';

import Link from 'next/link';
import { useScrollReveal } from './useScrollReveal';

const ROUTES = {
  en: [
    { city: 'Porto', time: '3h', price: 370 },
    { city: 'Faro', time: '2h30', price: 315 },
    { city: 'Évora', time: '1h20', price: 190 },
    { city: 'Fátima', time: '1h30', price: 165 },
    { city: 'Coimbra', time: '2h', price: 250 },
    { city: 'Seville, Spain', time: '3h30', price: 420 },
  ],
  pt: [
    { city: 'Porto', time: '3h', price: 370 },
    { city: 'Faro', time: '2h30', price: 315 },
    { city: 'Évora', time: '1h20', price: 190 },
    { city: 'Fátima', time: '1h30', price: 165 },
    { city: 'Coimbra', time: '2h', price: 250 },
    { city: 'Sevilha, Espanha', time: '3h30', price: 420 },
  ],
};

const COPY = {
  en: { kicker: 'Routes', heading: 'Where we drive from Lisbon', href: '/transfers' },
  pt: { kicker: 'Rotas', heading: 'De Lisboa, levamos-te a', href: '/transfers-pt' },
};

export default function RouteLines({ lang = 'en' }) {
  const t = COPY[lang];
  const { ref, revealed } = useScrollReveal(0.3);

  return (
    <section ref={ref} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '104px 40px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-400)', textAlign: 'center', marginBottom: 18 }}>{t.kicker}</div>
        <h2 style={{ font: '500 3rem/1.14 var(--font-display)', color: '#fff', margin: '0 0 64px', textAlign: 'center', letterSpacing: '-0.01em' }}>{t.heading}</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ROUTES[lang].map((rl) => (
            <Link
              key={rl.city}
              href={t.href}
              className="ig-route-row"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 24, padding: '22px 8px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'inherit' }}
            >
              <div className="ig-route-line" style={{ width: 140, flexShrink: 0, position: 'relative', height: 1, background: 'rgba(255,255,255,0.18)' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: 1, background: 'var(--green-300)', width: revealed ? '100%' : '0%', transition: 'width 1200ms ease-out' }} />
              </div>
              <div className="ig-route-city" style={{ font: '500 20px var(--font-body)', color: '#fff', flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {rl.city}
              </div>
              <div className="ig-route-time" style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', flexShrink: 0 }}>{rl.time}</div>
              <div style={{ font: '500 22px var(--font-display)', color: 'var(--green-300)', minWidth: 70, flexShrink: 0, textAlign: 'right' }}>€{rl.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
