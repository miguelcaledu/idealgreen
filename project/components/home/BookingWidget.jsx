'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Select from '../ui/Select';
import DatePicker from '../ui/DatePicker';
import PassengerSelector from '../ui/PassengerSelector';
import Button from '../ui/Button';

const PLACES = ['Lisbon Airport', 'Lisbon', 'Sintra', 'Cascais', 'Porto', 'Faro', 'Évora', 'Fátima', 'Coimbra'];
const PLACE_OPTIONS = PLACES.map((p) => ({ value: p, label: p }));

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
const TOUR_OPTIONS = Object.keys(TOUR_PRICES).map((t) => ({ value: t, label: t }));

export default function BookingWidget() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('transfer');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [tourChoice, setTourChoice] = useState('');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [hours, setHours] = useState(6);
  const [priceShown, setPriceShown] = useState(false);
  const [priceValue, setPriceValue] = useState(0);
  const [priceVehicle, setPriceVehicle] = useState('');
  const rafRef = useRef(null);

  const animatePrice = (target, vehicle) => {
    const start = performance.now();
    const dur = 700;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setPriceValue(Math.round(target * p));
      setPriceVehicle(vehicle);
      setPriceShown(true);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const selectTab = (tab) => {
    setActiveTab(tab);
    setPriceShown(false);
  };

  const handleTourChoice = (v) => {
    setTourChoice(v);
    animatePrice(TOUR_PRICES[v] || 0, 'Total per vehicle');
  };

  const seePrice = () => {
    if (activeTab === 'tour') {
      animatePrice(TOUR_PRICES[tourChoice] || 165, 'Total per vehicle');
    } else if (activeTab === 'transfer') {
      const key = `${pickup || 'Lisbon Airport'}-${dropoff || 'Sintra'}`;
      const price = ROUTE_PRICES[key] || 145;
      const vehicle = adults > 4 ? 'Mercedes V-Class · up to 7 pax' : 'Tesla Model Y · up to 4 pax';
      animatePrice(price, vehicle);
    } else {
      router.push('/contact');
    }
  };

  const tabs = [
    { key: 'transfer', label: 'Transfer' },
    { key: 'tour', label: 'Tour' },
    { key: 'hour', label: 'By the hour' },
  ];

  const ctaLabel = activeTab === 'hour' ? 'Request quote' : 'See price';

  return (
    <section style={{ maxWidth: 920, margin: '-96px auto 0', padding: '0 32px', position: 'relative', zIndex: 20 }}>
      <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
          {tabs.map((tb) => (
            <button
              key={tb.key}
              onClick={() => selectTab(tb.key)}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                padding: '18px 12px',
                font: '600 15px var(--font-body)',
                cursor: 'pointer',
                color: activeTab === tb.key ? 'var(--green-700)' : 'var(--text-secondary)',
                borderBottom: `2px solid ${activeTab === tb.key ? 'var(--green-700)' : 'transparent'}`,
                transition: 'color 200ms,border-color 200ms',
              }}
            >
              {tb.label}
            </button>
          ))}
        </div>
        <div style={{ padding: 28, minHeight: 150 }}>
          {activeTab === 'transfer' && (
            <div className="ig-booking-grid">
              <Select label="Pickup" options={PLACE_OPTIONS} value={pickup} onChange={setPickup} placeholder="Lisbon Airport" />
              <Select label="Drop-off" options={PLACE_OPTIONS} value={dropoff} onChange={setDropoff} placeholder="Sintra" />
              <DatePicker label="Date & time" lang="en" />
              <PassengerSelector adults={adults} children={kids} onAdultsChange={setAdults} onChildrenChange={setKids} />
            </div>
          )}
          {activeTab === 'tour' && (
            <div className="ig-booking-grid">
              <Select label="Tour" options={TOUR_OPTIONS} value={tourChoice} onChange={handleTourChoice} placeholder="Sintra, full day" />
              <DatePicker label="Date & time" lang="en" />
              <PassengerSelector adults={adults} children={kids} onAdultsChange={setAdults} onChildrenChange={setKids} />
            </div>
          )}
          {activeTab === 'hour' && (
            <div className="ig-booking-grid">
              <Select label="Pickup" options={PLACE_OPTIONS} value={pickup} onChange={setPickup} placeholder="Lisbon" />
              <DatePicker label="Date & time" lang="en" />
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)' }}>
                  <span style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Duration: {hours}h
                  </span>
                  <input type="range" min={4} max={10} value={hours} onChange={(e) => setHours(Number(e.target.value))} style={{ width: '100%' }} />
                </label>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <div>
              {priceShown && (
                <>
                  <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 2 }}>
                    {priceVehicle}
                  </div>
                  <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-700)' }}>€{priceValue}</div>
                </>
              )}
            </div>
            <Button variant="primary" size="lg" onClick={seePrice}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
