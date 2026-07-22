'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ROUTES = [
  { name: 'Sintra / Cascais', price: 45, vehicleNote: 'Tesla Model Y (up to 4) or Mercedes V-Class (up to 7) [CONFIRM capacity]' },
  { name: 'Colares / Guincho', price: 55, vehicleNote: 'Tesla Model Y (up to 4) or Mercedes V-Class (up to 7) [CONFIRM capacity]' },
  { name: 'Ericeira / Mafra', price: 90, vehicleNote: 'Mercedes V-Class recommended for luggage [CONFIRM capacity]' },
  { name: 'Setúbal / Torres Vedras', price: 95, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
  { name: 'Óbidos / Peniche', price: 135, vehicleNote: 'Mercedes V-Class recommended [CONFIRM capacity]' },
  { name: 'Tróia / Comporta', price: 165, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
  { name: 'Fátima / Nazaré', price: 165, vehicleNote: 'Mercedes V-Class recommended [CONFIRM capacity]' },
  { name: 'Leiria / Tomar', price: 190, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
  { name: 'Évora', price: 190, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
  { name: 'Beja', price: 210, vehicleNote: 'Mercedes V-Class recommended [CONFIRM capacity]' },
  { name: 'Coimbra', price: 250, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
  { name: 'Figueira da Foz', price: 250, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
  { name: 'Portimão / Albufeira', price: 315, vehicleNote: 'Mercedes V-Class recommended for the distance [CONFIRM capacity]' },
  { name: 'Faro', price: 315, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
  { name: 'Porto', price: 370, vehicleNote: 'Tesla Model Y or Mercedes V-Class [CONFIRM capacity]' },
];

export default function RoutesExplorer() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = ROUTES.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
        <div>
          <h2 style={{ font: 'var(--text-h2)', margin: '0 0 8px' }}>All routes from Lisbon</h2>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', margin: 0 }}>Total price per vehicle. Tap a route for vehicle options.</p>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a destination…"
          style={{ border: '1.5px solid var(--border-default)', padding: '12px 16px', font: 'var(--text-body)', minWidth: 220 }}
        />
      </div>
      <div style={{ border: '1px solid var(--border-subtle)', overflow: 'hidden', background: '#fff' }}>
        {filtered.map((r, i) => {
          const open = openIndex === i;
          return (
            <div key={r.name} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
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
                <span style={{ font: '600 16px var(--font-body)', color: 'var(--text-primary)', minWidth: 200 }}>{r.name}</span>
                <span style={{ font: '600 18px var(--font-display)', color: 'var(--green-700)' }}>€{r.price}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>▾</span>
              </button>
              {open && (
                <div style={{ padding: '0 24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>{r.vehicleNote}</span>
                  <button
                    onClick={() => router.push('/contact')}
                    style={{
                      background: 'transparent',
                      color: 'var(--green-700)',
                      border: '1px solid var(--green-700)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '8px 16px',
                      font: '600 13px var(--font-body)',
                      cursor: 'pointer',
                    }}
                  >
                    Book this route
                  </button>
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div style={{ padding: '24px', font: 'var(--text-body)', color: 'var(--text-muted)' }}>No destinations match &quot;{search}&quot;.</div>
        )}
      </div>
    </div>
  );
}
