'use client';

import { useState } from 'react';
import { asset } from '@/lib/basePath';

const FLEET = {
  en: {
    electric: [
      { image: '/assets/fleet-tesla-hotel-day.jpg', alt: 'Tesla Model Y', name: 'Tesla Model Y', desc: 'Up to 4 passengers. Electric, quiet, our main transfer car.' },
      { image: '/assets/fleet-teslas-jkeuropa.jpg', alt: 'Tesla Model Y fleet', name: 'Tesla Model Y fleet', desc: 'Several units running transfers and tours daily.' },
    ],
    vans: [
      { image: '/assets/fleet-vans-pines.jpg', alt: 'Mercedes V-Class vans', name: 'Mercedes V-Class', desc: 'Up to 7 passengers. Groups, families, corporate delegations.' },
      { image: '/assets/fleet-vans-grilles.jpg', alt: 'Mercedes V-Class vans', name: 'V-Class, fuelled and ready', desc: 'Kept serviced for long-distance routes.' },
    ],
    classics: [
      { image: '/assets/classic-mercedes-ponton-wedding-front.jpg', alt: 'Classic Mercedes collection', name: 'Classic Mercedes collection', desc: 'Eight vintage cars for weddings, events and productions.' },
      { image: '/assets/classic-mercedes-sedan-black-street.jpg', alt: 'Classic Mercedes-Benz sedan', name: 'The Stroke Eight', desc: 'One of the eight — see the full collection on Classic Cars.' },
    ],
  },
  pt: {
    electric: [
      { image: '/assets/fleet-tesla-hotel-day.jpg', alt: 'Tesla Model Y', name: 'Tesla Model Y', desc: 'Até 4 passageiros. Elétrico, silencioso, o nosso principal carro de transfer.' },
      { image: '/assets/fleet-teslas-jkeuropa.jpg', alt: 'Frota Tesla Model Y', name: 'Frota Tesla Model Y', desc: 'Várias unidades a fazer transfers e tours diariamente.' },
    ],
    vans: [
      { image: '/assets/fleet-vans-pines.jpg', alt: 'Carrinhas Mercedes Classe V', name: 'Mercedes Classe V', desc: 'Até 7 passageiros. Grupos, famílias, delegações empresariais.' },
      { image: '/assets/fleet-vans-grilles.jpg', alt: 'Carrinhas Mercedes Classe V', name: 'Classe V, pronta a partir', desc: 'Mantida em revisão para rotas de longa distância.' },
    ],
    classics: [
      { image: '/assets/classic-mercedes-ponton-wedding-front.jpg', alt: 'Coleção Mercedes clássicos', name: 'Coleção Mercedes clássicos', desc: 'Oito carros vintage para casamentos, eventos e produções.' },
      { image: '/assets/classic-mercedes-sedan-black-street.jpg', alt: 'Mercedes-Benz clássico sedan', name: 'O Stroke Eight', desc: 'Um dos oito — veja a coleção completa em Carros Clássicos.' },
    ],
  },
};

const TABS = {
  en: [
    { key: 'electric', label: 'Electric' },
    { key: 'vans', label: 'Vans' },
    { key: 'classics', label: 'Classics' },
  ],
  pt: [
    { key: 'electric', label: 'Elétricos' },
    { key: 'vans', label: 'Carrinhas' },
    { key: 'classics', label: 'Clássicos' },
  ],
};

export default function FleetTabs({ lang = 'en' }) {
  const [tab, setTab] = useState('electric');

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
        {TABS[lang].map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: '10px 20px',
                border: `1.5px solid ${active ? 'var(--green-600)' : 'rgba(255,255,255,0.3)'}`,
                background: active ? 'var(--green-600)' : 'transparent',
                color: active ? '#fff' : 'var(--stone-200)',
                borderRadius: 'var(--radius-pill)',
                font: '600 14px var(--font-body)',
                cursor: 'pointer',
                transition: 'all 200ms',
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
        {FLEET[lang][tab].map((v) => (
          <div key={v.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(v.image)} alt={v.alt} style={{ width: '100%', height: 190, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }} />
            <div style={{ padding: 18 }}>
              <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 4px' }}>{v.name}</h3>
              <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
