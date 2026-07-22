'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PriceCard from '../ui/PriceCard';
import { asset } from '@/lib/basePath';

const INCLUDED = ['Driver, vehicle, fuel & tolls', 'Flexible itinerary'];

const TOURS = [
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
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'half', label: 'Half day' },
  { key: 'full', label: 'Full day' },
  { key: 'multi', label: 'Multi-region' },
];

export default function ToursGrid() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? TOURS : TOURS.filter((t) => t.cat === filter);

  return (
    <>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 32px 8px' }}>
        <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: '0 0 24px', maxWidth: 640 }}>
          Our drivers are knowledgeable about the places you visit — licensed guiding is a separate, regulated profession in Portugal, and can be
          arranged on request.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  padding: '10px 18px',
                  border: `1.5px solid ${active ? 'var(--green-700)' : 'var(--border-default)'}`,
                  background: active ? 'var(--green-700)' : 'transparent',
                  color: active ? '#fff' : 'var(--text-primary)',
                  borderRadius: 'var(--radius-pill)',
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
          {visible.map((t) => (
            <PriceCard
              key={t.title}
              title={t.title}
              price={t.price}
              duration={t.duration}
              maxPassengers={t.maxPassengers}
              vehicle={t.vehicle}
              image={asset(t.image)}
              included={INCLUDED}
              onSelect={() => router.push(t.href)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
