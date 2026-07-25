'use client';

import { useState } from 'react';
import { asset } from '@/lib/basePath';

const CARS = {
  en: [
    { title: 'The Ponton', description: '1960s Mercedes-Benz sedan · 4 seats · our wedding car, decoration included', price: 'from €250', image: '/assets/classic-mercedes-ponton-wedding-front.jpg' },
    { title: 'The Wedding Fleet', description: 'Two Ponton sedans travelling together · 8 seats combined', price: 'from €450', image: '/assets/classic-car-wedding-fleet.jpg' },
    { title: 'The Fintail Estate', description: '1960s Mercedes-Benz estate · 5 seats · luggage space for productions', price: 'from €220', image: '/assets/classic-mercedes-wagon-grey.jpg' },
    { title: 'The Stroke Eight', description: '1970s Mercedes-Benz W114 sedan · 4 seats · city tours and transfers', price: 'from €200', image: '/assets/classic-mercedes-sedan-black-street.jpg' },
    { title: 'The Coupé', description: 'Mercedes-Benz coupé in blue · 2 seats · arrivals and photo productions', price: 'from €200', image: '/assets/classic-mercedes-coupe-blue-side.jpg' },
    { title: 'The W123 Saloon', description: '1980s Mercedes-Benz W123 sedan · 4 seats · events and tours', price: 'from €200', image: '/assets/classic-mercedes-sedan-blue-front.jpg' },
    { title: 'The Touring Estate', description: 'Mercedes-Benz estate · 5 seats · productions requiring cargo space', price: 'from €220', image: '/assets/classic-mercedes-wagon-rear.jpg' },
    { title: 'The Coupé, in detail', description: 'Black Mercedes-Benz coupé · 2 seats · a favourite for close-up shots', price: 'from €200', image: '/assets/classic-mercedes-coupe-black-closeup.jpg' },
  ],
  pt: [
    { title: 'O Ponton', description: 'Sedan Mercedes-Benz dos anos 60 · 4 lugares · o nosso carro de casamento', price: 'a partir de €250', image: '/assets/classic-mercedes-ponton-wedding-front.jpg' },
    { title: 'A Frota de Casamento', description: 'Dois sedans Ponton a viajar juntos · 8 lugares no total', price: 'a partir de €450', image: '/assets/classic-car-wedding-fleet.jpg' },
    { title: 'A Carrinha Fintail', description: 'Carrinha Mercedes-Benz dos anos 60 · 5 lugares', price: 'a partir de €220', image: '/assets/classic-mercedes-wagon-grey.jpg' },
    { title: 'O Stroke Eight', description: 'Sedan Mercedes-Benz W114 dos anos 70 · 4 lugares', price: 'a partir de €200', image: '/assets/classic-mercedes-sedan-black-street.jpg' },
    { title: 'O Coupé', description: 'Coupé Mercedes-Benz em azul · 2 lugares', price: 'a partir de €200', image: '/assets/classic-mercedes-coupe-blue-side.jpg' },
    { title: 'O Sedan W123', description: 'Sedan Mercedes-Benz W123 dos anos 80 · 4 lugares', price: 'a partir de €200', image: '/assets/classic-mercedes-sedan-blue-front.jpg' },
    { title: 'A Carrinha Touring', description: 'Carrinha Mercedes-Benz · 5 lugares', price: 'a partir de €220', image: '/assets/classic-mercedes-wagon-rear.jpg' },
    { title: 'O Coupé, em detalhe', description: 'Coupé Mercedes-Benz preto · 2 lugares', price: 'a partir de €200', image: '/assets/classic-mercedes-coupe-black-closeup.jpg' },
  ],
};

const NOTE = {
  en: 'Seats, decoration options and weather policy confirmed at booking for each car [CONFIRM]. All prices are starting prices per booking [CONFIRM]. Tap a card to view it larger.',
  pt: 'Lugares, opções de decoração e política em caso de chuva confirmados na reserva para cada carro [CONFIRMAR]. Todos os preços são a partir de, por reserva [CONFIRMAR]. Toque num cartão para o ver maior.',
};

export default function CarsGrid({ lang = 'en' }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '32px 32px 72px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
        {CARS[lang].map((c) => (
          <button
            key={c.title}
            onClick={() => setLightbox(c)}
            style={{ cursor: 'pointer', background: 'var(--green-700)', border: 'none', overflow: 'hidden', textAlign: 'left', padding: 0, fontFamily: 'var(--font-body)', color: '#fff' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(c.image)} alt={c.title} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 16 }}>
              <div style={{ font: '600 16px var(--font-display)' }}>{c.title}</div>
              <div style={{ font: 'var(--text-body-sm)', opacity: 0.85, margin: '4px 0' }}>{c.description}</div>
              <div style={{ font: '600 15px var(--font-display)' }}>{c.price}</div>
            </div>
          </button>
        ))}
      </div>
      <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 16 }}>{NOTE[lang]}</p>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(14,21,18,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(lightbox.image)} alt={lightbox.title} style={{ maxWidth: '90%', maxHeight: '80vh', objectFit: 'contain', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
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
