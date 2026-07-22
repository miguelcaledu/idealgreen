'use client';

import { useState } from 'react';
import ClassicCarCard from '../ui/ClassicCarCard';
import { asset } from '@/lib/basePath';

const CARS = [
  { title: 'The Ponton', description: '1960s Mercedes-Benz sedan [CONFIRM model/year] · 4 seats · our wedding car, decoration included', price: 'from €250 [CONFIRM]', image: '/assets/classic-mercedes-ponton-wedding-front.jpg' },
  { title: 'The Wedding Fleet', description: 'Two Ponton sedans travelling together [CONFIRM model/year] · 8 seats combined · for larger wedding parties', price: 'from €450 [CONFIRM]', image: '/assets/classic-car-wedding-fleet.jpg' },
  { title: 'The Fintail Estate', description: '1960s Mercedes-Benz estate [CONFIRM model/year] · 5 seats · luggage space for productions', price: 'from €220 [CONFIRM]', image: '/assets/classic-mercedes-wagon-grey.jpg' },
  { title: 'The Stroke Eight', description: '1970s Mercedes-Benz W114 sedan [CONFIRM model/year] · 4 seats · city tours and transfers', price: 'from €200 [CONFIRM]', image: '/assets/classic-mercedes-sedan-black-street.jpg' },
  { title: 'The Coupé', description: 'Mercedes-Benz coupé in blue [CONFIRM model/year] · 2 seats · arrivals and photo productions', price: 'from €200 [CONFIRM]', image: '/assets/classic-mercedes-coupe-blue-side.jpg' },
  { title: 'The W123 Saloon', description: '1980s Mercedes-Benz W123 sedan [CONFIRM model/year] · 4 seats · events and tours', price: 'from €200 [CONFIRM]', image: '/assets/classic-mercedes-sedan-blue-front.jpg' },
  { title: 'The Touring Estate', description: 'Mercedes-Benz estate [CONFIRM model/year] · 5 seats · productions requiring cargo space', price: 'from €220 [CONFIRM]', image: '/assets/classic-mercedes-wagon-rear.jpg' },
  { title: 'The Coupé, in detail', description: 'Black Mercedes-Benz coupé [CONFIRM model/year] · 2 seats · a favourite for close-up shots', price: 'from €200 [CONFIRM]', image: '/assets/classic-mercedes-coupe-black-closeup.jpg' },
];

export default function CarsGrid() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '32px 32px 72px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
        {CARS.map((c) => (
          <div key={c.title} onClick={() => setLightbox(c)} style={{ cursor: 'pointer' }}>
            <ClassicCarCard title={c.title} price={c.price} description={c.description} image={asset(c.image)} />
          </div>
        ))}
      </div>
      <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 16 }}>
        Seats, decoration options and weather policy confirmed at booking for each car [CONFIRM]. All prices are starting prices per booking [CONFIRM].
        Tap a card to view it larger.
      </p>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(14,21,18,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(lightbox.image)} alt={lightbox.title} style={{ maxWidth: '90%', maxHeight: '80vh', objectFit: 'contain', boxShadow: 'var(--shadow-lg)' }} />
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{ position: 'absolute', top: 24, right: 32, background: 'none', border: 'none', color: '#fff', fontSize: 32, cursor: 'pointer', lineHeight: 1 }}
          >
            ×
          </button>
          <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, textAlign: 'center', color: 'var(--stone-100)', font: '500 22px var(--font-display)' }}>
            {lightbox.title}
          </div>
        </div>
      )}
    </section>
  );
}
