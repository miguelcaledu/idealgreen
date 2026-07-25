import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';

const COPY = {
  en: {
    allTours: '← All tours',
    itinerary: 'Suggested itinerary',
    included: 'Included',
    notIncluded: 'Not included',
    includedItems: ['✓ Driver and vehicle for the full day', '✓ Fuel, tolls and parking'],
    notIncludedItems: ['– Palace and monument tickets', '– Meals', '– Licensed guide (can be arranged on request)'],
    total: 'total per vehicle',
    duration: 'Duration:',
    maxPassengers: 'Max passengers:',
    vehicle: 'Vehicle:',
    languages: 'Languages:',
    languagesValue: 'English, Portuguese, Spanish',
    cancellation: 'Free cancellation up to 24 hours before the tour [CONFIRM].',
    cta: 'Check availability',
    allToursHref: '/tours',
    contactHref: '/contact',
  },
  pt: {
    allTours: '← Todos os tours',
    itinerary: 'Itinerário sugerido',
    included: 'Incluído',
    notIncluded: 'Não incluído',
    includedItems: ['✓ Motorista e veículo para o dia inteiro', '✓ Combustível, portagens e estacionamento'],
    notIncludedItems: ['– Bilhetes de palácios e monumentos', '– Refeições', '– Guia licenciado (pode ser organizado a pedido)'],
    total: 'total por veículo',
    duration: 'Duração:',
    maxPassengers: 'Máx. passageiros:',
    vehicle: 'Veículo:',
    languages: 'Idiomas:',
    languagesValue: 'Inglês, Português, Espanhol',
    cancellation: 'Cancelamento gratuito até 24 horas antes do tour [CONFIRMAR].',
    cta: 'Ver disponibilidade',
    allToursHref: '/tours-pt',
    contactHref: '/contact-pt',
  },
};

export default function TourDetail({ lang = 'en', altHref, title, intro, itinerary, adaptNote, driverTip, price, duration, maxPassengers, vehicle }) {
  const t = COPY[lang];
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang={lang} altHref={altHref} />

      <section style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', background: '#0f1613', paddingTop: 120 }}>
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 40px', width: '100%', boxSizing: 'border-box' }}>
          <a href={t.allToursHref} style={{ font: '600 13px var(--font-body)', color: 'var(--stone-100)', textDecoration: 'none' }}>
            {t.allTours}
          </a>
          <h1 style={{ font: '600 2.75rem/1.1 var(--font-display)', color: '#fff', margin: '10px 0 0' }}>{title}</h1>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 32px 80px', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 48, alignItems: 'start' }}>
        <div>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: '0 0 32px', maxWidth: 560 }}>{intro}</p>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 24px' }}>{t.itinerary}</h2>
          <div>
            {itinerary.map((stop, i) => (
              <div key={stop.time} style={{ display: 'flex', gap: 20, padding: '18px 0', borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ width: 64, flexShrink: 0, font: '600 14px var(--font-body)', color: 'var(--green-300)' }}>{stop.time}</div>
                <div>
                  <h4 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 4px' }}>{stop.title}</h4>
                  <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{stop.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ font: 'var(--text-body)', color: 'var(--stone-200)', marginTop: 8, maxWidth: 520 }}>{adaptNote}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 40 }}>
            <div>
              <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 12px' }}>{t.included}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.includedItems.map((item) => (
                  <li key={item} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-100)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 12px' }}>{t.notIncluded}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.notIncludedItems.map((item) => (
                  <li key={item} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: '24px 0 0' }}>{driverTip}</p>
        </div>

        <div style={{ position: 'sticky', top: 96, border: '1px solid rgba(255,255,255,0.1)', padding: 28, background: '#0f1613' }}>
          <div style={{ font: '600 36px var(--font-display)', color: 'var(--green-300)' }}>{price}</div>
          <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', marginBottom: 18 }}>{t.total}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, font: 'var(--text-body-sm)', color: 'var(--stone-200)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16, marginBottom: 20 }}>
            <div>
              {t.duration} <strong style={{ color: 'var(--stone-100)' }}>{duration}</strong>
            </div>
            <div>
              {t.maxPassengers} <strong style={{ color: 'var(--stone-100)' }}>{maxPassengers}</strong>
            </div>
            <div>
              {t.vehicle} <strong style={{ color: 'var(--stone-100)' }}>{vehicle}</strong>
            </div>
            <div>
              {t.languages} <strong style={{ color: 'var(--stone-100)' }}>{t.languagesValue}</strong>
            </div>
            <div style={{ color: 'var(--stone-400)' }}>{t.cancellation}</div>
          </div>
          <a href={t.contactHref} className="ig-btn-primary" style={{ width: '100%' }}>
            {t.cta}
          </a>
        </div>
      </section>

      <DarkFooter lang={lang} />
      <WhatsAppButton />
    </div>
  );
}
