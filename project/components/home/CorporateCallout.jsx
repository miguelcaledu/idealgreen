'use client';

import Link from 'next/link';
import { useScrollReveal } from './useScrollReveal';
import { asset } from '@/lib/basePath';

const COPY = {
  en: {
    kicker: 'Corporate mobility',
    heading: 'Arrive ready.',
    body: 'Quiet cabins, punctual pickups and monthly invoicing for teams travelling between hotels, conferences and airports.',
    link: 'Corporate accounts →',
    href: '/corporate',
  },
  pt: {
    kicker: 'Mobilidade empresarial',
    heading: 'Chegue preparado.',
    body: 'Cabinas silenciosas, recolhas pontuais e faturação mensal para equipas em viagem entre hotéis, conferências e aeroportos.',
    link: 'Contas empresariais →',
    href: '/corporate-pt',
  },
};

export default function CorporateCallout({ lang = 'en' }) {
  const t = COPY[lang];
  const { ref, revealStyle } = useScrollReveal();

  return (
    <section style={{ padding: '104px 40px' }}>
      <div ref={ref} className="ig-two" style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', ...revealStyle }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/fleet-teslas-jkeuropa.jpg')}
          alt="Fleet of Tesla vehicles for corporate accounts"
          style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block', filter: 'saturate(1.05) contrast(1.06) brightness(0.85)' }}
        />
        <div>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 20 }}>{t.kicker}</div>
          <h2 style={{ font: '500 3rem/1.14 var(--font-display)', color: '#fff', margin: '0 0 24px', letterSpacing: '-0.01em' }}>{t.heading}</h2>
          <p style={{ font: '400 1.15rem/1.7 var(--font-body)', color: 'var(--stone-300)', margin: '0 0 32px', maxWidth: 440 }}>{t.body}</p>
          <Link href={t.href} style={{ font: '600 15px var(--font-body)', color: 'var(--green-300)', textDecoration: 'none' }}>
            {t.link}
          </Link>
        </div>
      </div>
    </section>
  );
}
