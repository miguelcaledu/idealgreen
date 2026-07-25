'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ROUTES = {
  en: [
    { name: 'Sintra / Cascais', price: 45, vehicleNote: 'Tesla Model Y (up to 4) or Mercedes V-Class (up to 7)' },
    { name: 'Colares / Guincho', price: 55, vehicleNote: 'Tesla Model Y (up to 4) or Mercedes V-Class (up to 7)' },
    { name: 'Ericeira / Mafra', price: 90, vehicleNote: 'Mercedes V-Class recommended for luggage' },
    { name: 'Setúbal / Torres Vedras', price: 95, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
    { name: 'Óbidos / Peniche', price: 135, vehicleNote: 'Mercedes V-Class recommended' },
    { name: 'Tróia / Comporta', price: 165, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
    { name: 'Fátima / Nazaré', price: 165, vehicleNote: 'Mercedes V-Class recommended' },
    { name: 'Leiria / Tomar', price: 190, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
    { name: 'Évora', price: 190, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
    { name: 'Beja', price: 210, vehicleNote: 'Mercedes V-Class recommended' },
    { name: 'Coimbra', price: 250, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
    { name: 'Figueira da Foz', price: 250, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
    { name: 'Portimão / Albufeira', price: 315, vehicleNote: 'Mercedes V-Class recommended for the distance' },
    { name: 'Faro', price: 315, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
    { name: 'Porto', price: 370, vehicleNote: 'Tesla Model Y or Mercedes V-Class' },
  ],
  pt: [
    { name: 'Sintra / Cascais', price: 45, vehicleNote: 'Tesla Model Y (até 4) ou Mercedes Classe V (até 7)' },
    { name: 'Colares / Guincho', price: 55, vehicleNote: 'Tesla Model Y (até 4) ou Mercedes Classe V (até 7)' },
    { name: 'Ericeira / Mafra', price: 90, vehicleNote: 'Mercedes Classe V recomendado para bagagem' },
    { name: 'Setúbal / Torres Vedras', price: 95, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
    { name: 'Óbidos / Peniche', price: 135, vehicleNote: 'Mercedes Classe V recomendado' },
    { name: 'Tróia / Comporta', price: 165, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
    { name: 'Fátima / Nazaré', price: 165, vehicleNote: 'Mercedes Classe V recomendado' },
    { name: 'Leiria / Tomar', price: 190, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
    { name: 'Évora', price: 190, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
    { name: 'Beja', price: 210, vehicleNote: 'Mercedes Classe V recomendado' },
    { name: 'Coimbra', price: 250, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
    { name: 'Figueira da Foz', price: 250, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
    { name: 'Portimão / Albufeira', price: 315, vehicleNote: 'Mercedes Classe V recomendado para a distância' },
    { name: 'Faro', price: 315, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
    { name: 'Porto', price: 370, vehicleNote: 'Tesla Model Y ou Mercedes Classe V' },
  ],
};

const COPY = {
  en: {
    heading: 'All routes from Lisbon',
    sub: 'Total price per vehicle. Tap a route for vehicle options.',
    searchPlaceholder: 'Search a destination…',
    book: 'Book this route',
    noMatch: (search) => `No destinations match "${search}".`,
    contactHref: '/contact',
  },
  pt: {
    heading: 'Todas as rotas a partir de Lisboa',
    sub: 'Preço total por veículo. Toque numa rota para ver opções de veículo.',
    searchPlaceholder: 'Procurar um destino…',
    book: 'Reservar esta rota',
    noMatch: (search) => `Nenhum destino corresponde a "${search}".`,
    contactHref: '/contact-pt',
  },
};

export default function RoutesExplorer({ lang = 'en' }) {
  const t = COPY[lang];
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = ROUTES[lang].filter((r) => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
        <div>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 8px' }}>{t.heading}</h2>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: 0 }}>{t.sub}</p>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t.searchPlaceholder}
          style={{ border: '1.5px solid rgba(255,255,255,0.16)', padding: '12px 16px', font: 'var(--text-body)', minWidth: 220, background: 'transparent', color: '#fff' }}
        />
      </div>
      <div style={{ border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', background: '#0f1613' }}>
        {filtered.map((r, i) => {
          const open = openIndex === i;
          return (
            <div key={r.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '18px 24px',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ font: '600 16px var(--font-body)', color: 'var(--stone-100)', minWidth: 200 }}>{r.name}</span>
                <span style={{ font: '600 18px var(--font-display)', color: 'var(--green-300)' }}>€{r.price}</span>
                <span style={{ fontSize: 12, color: 'var(--stone-400)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>▾</span>
              </button>
              {open && (
                <div style={{ padding: '0 24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>{r.vehicleNote}</span>
                  <button
                    onClick={() => router.push(t.contactHref)}
                    style={{
                      background: 'transparent',
                      color: 'var(--green-300)',
                      border: '1.5px solid var(--green-400)',
                      padding: '8px 16px',
                      font: '600 13px var(--font-body)',
                      cursor: 'pointer',
                    }}
                  >
                    {t.book}
                  </button>
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div style={{ padding: '24px', font: 'var(--text-body)', color: 'var(--stone-400)' }}>{t.noMatch(search)}</div>
        )}
      </div>
    </div>
  );
}
