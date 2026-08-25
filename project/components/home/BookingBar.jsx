'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
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
  en: {
    'Lisbon, half day': 125,
    'Lisbon, full day': 165,
    'Sintra, half day': 130,
    'Sintra, full day': 180,
    'Fátima, half day': 220,
    'Fátima, full day': 300,
    'Évora, full day': 300,
    'Porto, full day': 500,
  },
  pt: {
    'Lisboa, meio dia': 125,
    'Lisboa, dia inteiro': 165,
    'Sintra, meio dia': 130,
    'Sintra, dia inteiro': 180,
    'Fátima, meio dia': 220,
    'Fátima, dia inteiro': 300,
    'Évora, dia inteiro': 300,
    'Porto, dia inteiro': 500,
  },
};

const COPY = {
  en: {
    kicker: 'Private mobility · Portugal · since 2022',
    title: 'Portugal, travelled differently.',
    tabs: [
      { key: 'transfer', label: 'Transfer' },
      { key: 'hour', label: 'By the hour' },
      { key: 'tour', label: 'Private tour' },
    ],
    pickup: 'Pickup location',
    dropoff: 'Drop-off location',
    addressPlaceholder: 'Address, airport, hotel…',
    dateTime: 'Date & time',
    tour: 'Tour',
    chooseTour: 'Choose a tour',
    duration: 'Duration',
    hoursSuffix: 'hours',
    viewOptions: 'View options',
    requestQuote: 'Request quote',
    vehicleLabel: 'Tesla Model Y · up to 4 pax',
    totalPerVehicle: 'Total per vehicle',
    contactHref: '/contact',
    selectRouteError: 'Please select a pickup and drop-off location.',
    selectTourError: 'Please choose a tour.',
  },
  pt: {
    kicker: 'Mobilidade privada · Portugal · desde 2022',
    title: 'Portugal, viajado de outra forma.',
    tabs: [
      { key: 'transfer', label: 'Transfer' },
      { key: 'hour', label: 'À hora' },
      { key: 'tour', label: 'Tour privado' },
    ],
    pickup: 'Local de recolha',
    dropoff: 'Destino',
    addressPlaceholder: 'Morada, aeroporto, hotel…',
    dateTime: 'Data e hora',
    tour: 'Tour',
    chooseTour: 'Escolha um tour',
    duration: 'Duração',
    hoursSuffix: 'horas',
    viewOptions: 'Ver opções',
    requestQuote: 'Pedir orçamento',
    vehicleLabel: 'Tesla Model Y · até 4 pax',
    totalPerVehicle: 'Total por veículo',
    contactHref: '/contact-pt',
    selectRouteError: 'Por favor selecione um local de recolha e um destino.',
    selectTourError: 'Por favor escolha um tour.',
  },
};

export default function BookingBar({ lang = 'en' }) {
  const t = COPY[lang];
  const tourPrices = TOUR_PRICES[lang];
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('transfer');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [tourChoice, setTourChoice] = useState('');
  const [hours, setHours] = useState(6);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState('');

  const selectTab = (key) => {
    setActiveTab(key);
    setPrice(null);
    setError('');
  };

  const viewOptions = () => {
    if (activeTab === 'tour') {
      if (!tourChoice) {
        setError(t.selectTourError);
        setPrice(null);
        return;
      }
      setError('');
      setPrice({ value: tourPrices[tourChoice] || 165, vehicle: t.totalPerVehicle });
    } else if (activeTab === 'transfer') {
      if (!pickup || !dropoff) {
        setError(t.selectRouteError);
        setPrice(null);
        return;
      }
      setError('');
      const key = `${pickup}-${dropoff}`;
      setPrice({ value: ROUTE_PRICES[key] || 145, vehicle: t.vehicleLabel });
    } else {
      router.push(t.contactHref);
    }
  };

  return (
    <div style={{ position: 'relative', maxWidth: 1320, margin: 'auto auto 0', padding: '0 40px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', top: -60 }}>
      <div style={{ font: 'var(--text-caption)', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 26, textAlign: 'center' }}>
        {t.kicker}
      </div>
      <h1 className="ig-hero-title" style={{ font: "500 5.5rem/0.98 var(--font-display)", color: '#fff', margin: '0 0 40px', letterSpacing: '-0.015em', textAlign: 'center' }}>
        {t.title}
      </h1>

      <div style={{ display: 'inline-flex', gap: 4, background: 'rgba(12,19,16,0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-pill)', padding: 5, marginBottom: 36 }}>
        {t.tabs.map((tab) => (
          <button key={tab.key} className={`ig-bar-tab${activeTab === tab.key ? ' active' : ''}`} onClick={() => selectTab(tab.key)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ width: '100%', background: 'rgba(12,19,16,0.5)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.16)' }}>
        {activeTab === 'transfer' && (
          <div className="ig-bar-panel" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="ig-field" style={{ flex: 1, minWidth: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 12px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>{t.pickup}</span>
              <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
                <option value="">{t.addressPlaceholder}</option>
                {PLACES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 1, minWidth: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 12px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>{t.dropoff}</span>
              <select value={dropoff} onChange={(e) => setDropoff(e.target.value)}>
                <option value="">{t.addressPlaceholder}</option>
                {PLACES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 0.9, minWidth: 180, display: 'flex', justifyContent: 'center', padding: '16px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <DatePicker label={t.dateTime} lang={lang} variant="bar" openUp />
            </div>
            <div className="ig-btn" style={{ display: 'flex', alignItems: 'center', padding: '16px 22px' }}>
              <button className="ig-cta-btn" onClick={viewOptions} style={{ background: 'var(--green-600)', color: '#fff', border: 'none', padding: '16px 30px', font: '600 15px var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {t.viewOptions}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'tour' && (
          <div className="ig-bar-panel" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="ig-field" style={{ flex: 1.3, minWidth: 190, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 12px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>{t.tour}</span>
              <select value={tourChoice} onChange={(e) => setTourChoice(e.target.value)}>
                <option value="">{t.chooseTour}</option>
                {Object.keys(tourPrices).map((tp) => (
                  <option key={tp}>{tp}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 0.9, minWidth: 180, display: 'flex', justifyContent: 'center', padding: '16px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <DatePicker label={t.dateTime} lang={lang} variant="bar" openUp />
            </div>
            <div className="ig-btn" style={{ display: 'flex', alignItems: 'center', padding: '16px 22px' }}>
              <button className="ig-cta-btn" onClick={viewOptions} style={{ background: 'var(--green-600)', color: '#fff', border: 'none', padding: '16px 30px', font: '600 15px var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {t.viewOptions}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'hour' && (
          <div className="ig-bar-panel" style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="ig-field" style={{ flex: 1, minWidth: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 12px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>{t.pickup}</span>
              <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
                <option value="">{t.addressPlaceholder}</option>
                {PLACES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="ig-field" style={{ flex: 0.9, minWidth: 180, display: 'flex', justifyContent: 'center', padding: '16px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <DatePicker label={t.dateTime} lang={lang} variant="bar" openUp />
            </div>
            <div className="ig-field" style={{ flex: 0.6, minWidth: 130, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.14)' }}>
              <span style={{ font: '600 12px var(--font-body)', letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>{t.duration}</span>
              <select value={hours} onChange={(e) => setHours(Number(e.target.value))}>
                {[4, 5, 6, 7, 8, 9, 10].map((h) => (
                  <option key={h} value={h}>
                    {h} {t.hoursSuffix}
                  </option>
                ))}
              </select>
            </div>
            <div className="ig-btn" style={{ display: 'flex', alignItems: 'center', padding: '16px 22px' }}>
              <button className="ig-cta-btn" onClick={viewOptions} style={{ background: 'var(--green-600)', color: '#fff', border: 'none', padding: '16px 30px', font: '600 15px var(--font-body)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {t.requestQuote}
              </button>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.14)' }}
            >
              <span style={{ font: '600 14px var(--font-body)', color: '#e88' }}>{error}</span>
            </motion.div>
          )}
          {price && !error && (
            <motion.div
              key="price"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.14)', display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}
            >
              <span style={{ font: '500 28px var(--font-display)', color: 'var(--green-300)' }}>€{price.value}</span>
              <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)' }}>{price.vehicle}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
