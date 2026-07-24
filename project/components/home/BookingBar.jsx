'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from '../ui/DatePicker';

const PLACES = ['Lisbon Airport', 'Lisbon', 'Sintra', 'Cascais', 'Porto', 'Faro', 'Évora', 'Fátima', 'Coimbra'];

const ROUTE_PRICES = {
  'Lisbon Airport-Sintra': 45,
  'Lisbon Airport-Cascais': 45,
  'Lisbon Airport-Porto': 370,
  'Lisbon Airport-Faro': 315,
  'Lisbon Airport-Évora': 190,
  'Lisbon Airport-Fátima': 165,
  'Lisbon Airport-Coimbra': 250,
  'Lisbon Airport-Lisbon': 40,
};

const TOUR_PRICES = {
  'Lisbon, half day': 125,
  'Lisbon, full day': 165,
  'Sintra, half day': 130,
  'Sintra, full day': 180,
  'Fátima, half day': 220,
  'Fátima, full day': 300,
  'Évora, full day': 300,
  'Porto, full day': 500,
};

const TABS = [
  { key: 'transfer', label: 'Transfer' },
  { key: 'hour', label: 'By the hour' },
  { key: 'tour', label: 'Private tour' },
];

export default function BookingBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('transfer');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [tourChoice, setTourChoice] = useState('');
  const [hours, setHours] = useState(6);
  const [price, setPrice] = useState(null);

  const selectTab = (key) => {
    setActiveTab(key);
    setPrice(null);
  };

  const viewOptions = () => {
    if (activeTab === 'tour') {
      setPrice({ value: TOUR_PRICES[tourChoice] || 165, vehicle: 'Total per vehicle' });
    } else if (activeTab === 'transfer') {
      const key = `${pickup || 'Lisbon Airport'}-${dropoff || 'Sintra'}`;
      setPrice({ value: ROUTE_PRICES[key] || 145, vehicle: 'Tesla Model Y · up to 4 pax' });
    } else {
      router.push('/contact');
    }
  };

  return (
    <div style={{ position: 'relative', maxWidth: 1320, margin: 'auto auto 0', padding: '0 40px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', top: -60 }}>
      <div style={{ font: 'var(--text-caption)', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 26, textAlign: 'center' }}>
        Private mobility · Portugal · since 2022
      </div>
      <h1 className="ig-hero-title" style={{ font: "500 5.5rem/0.98 var(--font-display)", color: '#fff', margin: '0 0 40px', letterSpacing: '-0.015em', textAlign: 'center' }}>
        Portugal, travelled differently.
      </h1>

      <div style={{ display: 'inline-flex', gap: 4, background: 'rgba(12,19,16,0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-pill)', padding: 5, marginBottom: 36 }}>
        {TABS.map((t) => (
          <button key={t.key} className={`ig-bar-tab${activeTab === t.key ? ' active' : ''}`} onClick={() => selectTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ width: '100%', background: 'rgba(12,19,16,0.5)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.16)' }}>
        {activeTab === 'transfer' && (
          <div className="ig-bar-panel" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="ig-field" style={{ flex: 1, minWidth: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 11px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>Pickup location</span>
              <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
                <option value="">Address, airport, hotel…</option>
                {PLACES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 1, minWidth: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 11px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>Drop-off location</span>
              <select value={dropoff} onChange={(e) => setDropoff(e.target.value)}>
                <option value="">Address, airport, hotel…</option>
                {PLACES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 0.9, minWidth: 180, display: 'flex', justifyContent: 'center', padding: '16px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <DatePicker label="Date & time" lang="en" variant="bar" openUp />
            </div>
            <div className="ig-btn" style={{ display: 'flex', alignItems: 'center', padding: '16px 22px' }}>
              <button className="ig-cta-btn" onClick={viewOptions} style={{ background: 'var(--green-600)', color: '#fff', border: 'none', padding: '16px 30px', font: '600 15px var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                View options
              </button>
            </div>
          </div>
        )}

        {activeTab === 'tour' && (
          <div className="ig-bar-panel" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="ig-field" style={{ flex: 1.3, minWidth: 190, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 11px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>Tour</span>
              <select value={tourChoice} onChange={(e) => setTourChoice(e.target.value)}>
                <option value="">Choose a tour</option>
                {Object.keys(TOUR_PRICES).map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 0.9, minWidth: 180, display: 'flex', justifyContent: 'center', padding: '16px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <DatePicker label="Date & time" lang="en" variant="bar" openUp />
            </div>
            <div className="ig-btn" style={{ display: 'flex', alignItems: 'center', padding: '16px 22px' }}>
              <button className="ig-cta-btn" onClick={viewOptions} style={{ background: 'var(--green-600)', color: '#fff', border: 'none', padding: '16px 30px', font: '600 15px var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                View options
              </button>
            </div>
          </div>
        )}

        {activeTab === 'hour' && (
          <div className="ig-bar-panel" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="ig-field" style={{ flex: 1, minWidth: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 11px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>Pickup location</span>
              <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
                <option value="">Address, airport, hotel…</option>
                {PLACES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 0.9, minWidth: 180, display: 'flex', justifyContent: 'center', padding: '16px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <DatePicker label="Date & time" lang="en" variant="bar" openUp />
            </div>
            <div className="ig-field" style={{ flex: 0.6, minWidth: 130, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 11px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>Duration</span>
              <select value={hours} onChange={(e) => setHours(Number(e.target.value))}>
                {[4, 5, 6, 7, 8, 9, 10].map((h) => (
                  <option key={h} value={h}>
                    {h} hours
                  </option>
                ))}
              </select>
            </div>
            <div className="ig-btn" style={{ display: 'flex', alignItems: 'center', padding: '16px 22px' }}>
              <button className="ig-cta-btn" onClick={viewOptions} style={{ background: 'var(--green-600)', color: '#fff', border: 'none', padding: '16px 30px', font: '600 15px var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                Request quote
              </button>
            </div>
          </div>
        )}

        {price && (
          <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.14)', display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
            <span style={{ font: '500 28px var(--font-display)', color: 'var(--green-300)' }}>€{price.value}</span>
            <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)' }}>{price.vehicle}</span>
          </div>
        )}
      </div>
    </div>
  );
}
