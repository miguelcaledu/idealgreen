'use client';

import { useState } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/basePath';

const TOURS = {
  en: [
    { title: 'Lisbon, half day', price: '€125', duration: '4 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/fleet-tesla-hotel-day.jpg', href: '/contact', cat: 'half' },
    { title: 'Lisbon, full day', price: '€165', duration: '8 hours', maxPassengers: 4, vehicle: 'Tesla Model Y', image: '/assets/fleet-tesla-iberostar.jpg', href: '/tour-lisbon-full-day', cat: 'full' },
    { title: 'Sintra, half day', price: '€130', duration: '4 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/fleet-vans-pines.jpg', href: '/contact', cat: 'half' },
    { title: 'Sintra, full day', price: '€180', duration: '8 hours', maxPassengers: 4, vehicle: 'Tesla Model Y', image: '/assets/tesla-sintra-pena-palace.jpg', href: '/tour-sintra-full-day', cat: 'full' },
    { title: 'Fátima, half day', price: '€220', duration: '5 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/guests-couple-guide.jpg', href: '/contact', cat: 'half' },
    { title: 'Fátima, full day', price: '€300', duration: '8 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/guests-toast-vineyard.jpg', href: '/tour-fatima-full-day', cat: 'full' },
    { title: 'Nazaré & Óbidos', price: '€310', duration: '8 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/guests-group-toast.jpg', href: '/contact', cat: 'multi' },
    { title: 'Mafra & Nazaré', price: '€310', duration: '8 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/picnic-mateus-viewpoint.jpg', href: '/contact', cat: 'multi' },
    { title: 'Évora', price: '€300', duration: '8 hours', maxPassengers: 4, vehicle: 'Tesla Model Y', image: '/assets/fleet-vans-service.jpg', href: '/contact', cat: 'full' },
    { title: 'Porto', price: '€500', duration: '10 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/fleet-convoy.jpg', href: '/tour-porto', cat: 'multi' },
    { title: 'Algarve: Portimão & Lagos', price: '€500', duration: '10 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/service-picnic-detail.jpg', href: '/contact', cat: 'multi' },
    { title: 'Algarve: Estói & Tavira', price: '€500', duration: '10 hours', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/landscape-cliff-alt.jpg', href: '/contact', cat: 'multi' },
  ],
  pt: [
    { title: 'Lisboa, meio dia', price: '€125', duration: '4 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/fleet-tesla-hotel-day.jpg', href: '/contact-pt', cat: 'half' },
    { title: 'Lisboa, dia inteiro', price: '€165', duration: '8 horas', maxPassengers: 4, vehicle: 'Tesla Model Y', image: '/assets/fleet-tesla-iberostar.jpg', href: '/tour-lisbon-full-day-pt', cat: 'full' },
    { title: 'Sintra, meio dia', price: '€130', duration: '4 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/fleet-vans-pines.jpg', href: '/contact-pt', cat: 'half' },
    { title: 'Sintra, dia inteiro', price: '€180', duration: '8 horas', maxPassengers: 4, vehicle: 'Tesla Model Y', image: '/assets/tesla-sintra-pena-palace.jpg', href: '/tour-sintra-full-day-pt', cat: 'full' },
    { title: 'Fátima, meio dia', price: '€220', duration: '5 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/guests-couple-guide.jpg', href: '/contact-pt', cat: 'half' },
    { title: 'Fátima, dia inteiro', price: '€300', duration: '8 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/guests-toast-vineyard.jpg', href: '/tour-fatima-full-day-pt', cat: 'full' },
    { title: 'Nazaré e Óbidos', price: '€310', duration: '8 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/guests-group-toast.jpg', href: '/contact-pt', cat: 'multi' },
    { title: 'Mafra e Nazaré', price: '€310', duration: '8 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/picnic-mateus-viewpoint.jpg', href: '/contact-pt', cat: 'multi' },
    { title: 'Évora', price: '€300', duration: '8 horas', maxPassengers: 4, vehicle: 'Tesla Model Y', image: '/assets/fleet-vans-service.jpg', href: '/contact-pt', cat: 'full' },
    { title: 'Porto', price: '€500', duration: '10 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/fleet-convoy.jpg', href: '/tour-porto-pt', cat: 'multi' },
    { title: 'Algarve: Portimão e Lagos', price: '€500', duration: '10 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/service-picnic-detail.jpg', href: '/contact-pt', cat: 'multi' },
    { title: 'Algarve: Estói e Tavira', price: '€500', duration: '10 horas', maxPassengers: 7, vehicle: 'Mercedes V-Class', image: '/assets/landscape-cliff-alt.jpg', href: '/contact-pt', cat: 'multi' },
  ],
};

const COPY = {
  en: {
    intro:
      'Our drivers are knowledgeable about the places you visit — licensed guiding is a separate, regulated profession in Portugal, and can be arranged on request.',
    filters: [
      { key: 'all', label: 'All' },
      { key: 'half', label: 'Half day' },
      { key: 'full', label: 'Full day' },
      { key: 'multi', label: 'Multi-region' },
    ],
    upTo: 'up to',
  },
  pt: {
    intro:
      'Os nossos motoristas conhecem bem os locais que visita — o guia turístico licenciado é uma profissão regulada e distinta em Portugal, e pode ser organizado a pedido.',
    filters: [
      { key: 'all', label: 'Todos' },
      { key: 'half', label: 'Meio dia' },
      { key: 'full', label: 'Dia inteiro' },
      { key: 'multi', label: 'Multi-região' },
    ],
    upTo: 'até',
  },
};

export default function ToursGrid({ lang = 'en' }) {
  const t = COPY[lang];
  const [filter, setFilter] = useState('all');
  const tours = TOURS[lang];
  const visible = filter === 'all' ? tours : tours.filter((tour) => tour.cat === filter);

  return (
    <>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 32px 8px' }}>
        <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', margin: '0 0 24px', maxWidth: 640 }}>{t.intro}</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {t.filters.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  padding: '10px 18px',
                  border: `1.5px solid ${active ? 'var(--green-600)' : 'rgba(255,255,255,0.28)'}`,
                  background: active ? 'var(--green-700)' : 'transparent',
                  color: active ? '#fff' : 'var(--stone-200)',
                  borderRadius: 999,
                  font: '600 14px var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          {visible.map((tour) => (
            <Link
              key={tour.title}
              href={tour.href}
              style={{ border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden', background: '#0f1613', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(tour.image)} alt="" style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ font: 'var(--text-h4)', color: '#fff' }}>{tour.title}</span>
                  <span style={{ font: '600 22px var(--font-display)', color: 'var(--green-300)' }}>{tour.price}</span>
                </div>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)' }}>
                  {tour.duration} · {t.upTo} {tour.maxPassengers} · {tour.vehicle}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
