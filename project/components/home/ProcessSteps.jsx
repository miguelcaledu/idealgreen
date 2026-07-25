'use client';

import { useScrollReveal } from './useScrollReveal';

const COPY = {
  en: {
    heading: "Three steps, and you're on the road.",
    steps: [
      { num: '01', title: 'Choose the journey', body: 'A transfer, a tour, or time by the hour — pick pickup, drop-off and date.' },
      { num: '02', title: 'Personalise the service', body: 'Child seats, stops along the way, or a tailor-made itinerary — just ask.' },
      { num: '03', title: 'Travel with confidence', body: 'Your driver confirms by WhatsApp and waits for you, even if the flight is late.' },
    ],
  },
  pt: {
    heading: 'Três passos e está a caminho.',
    steps: [
      { num: '01', title: 'Escolha a viagem', body: 'Um transfer, um tour ou tempo à hora — escolha recolha, destino e data.' },
      { num: '02', title: 'Personalize o serviço', body: 'Cadeiras de criança, paragens pelo caminho ou um itinerário à medida — é só pedir.' },
      { num: '03', title: 'Viaje com confiança', body: 'O motorista confirma por WhatsApp e espera por si, mesmo que o voo atrase.' },
    ],
  },
};

export default function ProcessSteps({ lang = 'en' }) {
  const t = COPY[lang];
  const { ref, revealStyle } = useScrollReveal();

  return (
    <section ref={ref} style={{ maxWidth: 1120, margin: '0 auto', padding: '104px 40px', ...revealStyle }}>
      <h2 style={{ font: '500 3rem/1.14 var(--font-display)', color: '#fff', margin: '0 0 80px', textAlign: 'center', letterSpacing: '-0.01em' }}>{t.heading}</h2>
      <div className="ig-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 56 }}>
        {t.steps.map((s) => (
          <div key={s.num} style={{ borderTop: '1px solid rgba(255,255,255,0.16)', paddingTop: 28 }}>
            <div style={{ font: '500 1.5rem var(--font-display)', color: 'var(--green-400)', marginBottom: 20 }}>{s.num}</div>
            <h3 style={{ font: '500 1.4rem/1.2 var(--font-display)', color: '#fff', margin: '0 0 12px' }}>{s.title}</h3>
            <p style={{ font: '400 0.95rem/1.6 var(--font-body)', color: 'var(--stone-300)', margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
