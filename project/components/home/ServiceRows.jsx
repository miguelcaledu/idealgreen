import Link from 'next/link';
import { asset } from '@/lib/basePath';

const SERVICES = {
  en: [
    { num: '01', href: '/transfers', label: 'Airport Transfers', headline: 'Landings, handled with care.', body: 'Your driver tracks your flight and waits with your name — delay or not.', image: '/assets/tesla-airport-night.jpg', alt: 'Tesla at Lisbon airport' },
    { num: '02', href: '/tours', label: 'Private Tours', headline: 'Portugal, at your pace.', body: "Stay longer where you're happy. Skip what doesn't interest you.", image: '/assets/tesla-sintra-pena-palace.jpg', alt: 'Private tour to Sintra' },
    { num: '03', href: '/tailor-made', label: 'Tailor-Made Journeys', headline: 'Built around your itinerary.', body: 'Multi-day routes across Portugal, planned around what matters to you.', image: '/assets/picnic-mateus-viewpoint.jpg', alt: 'Scenic viewpoint stop' },
    { num: '04', href: '/corporate', label: 'Business Transfers', headline: 'Arrive ready.', body: 'Quiet cabin, punctual pickups, monthly invoicing for teams.', image: '/assets/fleet-tesla-charging.jpg', alt: 'Corporate fleet' },
    { num: '05', href: '/classic-cars', label: 'Classic Cars', headline: 'Timeless arrivals.', body: 'A restored Mercedes from our own collection, decorated for your day.', image: '/assets/classic-mercedes-ponton-wedding-front.jpg', alt: 'Classic Mercedes for weddings' },
  ],
  pt: [
    { num: '01', href: '/transfers-pt', label: 'Transfers de Aeroporto', headline: 'Chegadas tratadas com cuidado.', body: 'O seu motorista acompanha o voo e espera com o seu nome — haja ou não atraso.', image: '/assets/tesla-airport-night.jpg', alt: 'Tesla no aeroporto de Lisboa' },
    { num: '02', href: '/tours-pt', label: 'Tours Privados', headline: 'Portugal, ao seu ritmo.', body: 'Fique mais tempo onde gosta. Salte o que não lhe interessa.', image: '/assets/tesla-sintra-pena-palace.jpg', alt: 'Tour privado a Sintra' },
    { num: '03', href: '/tailor-made-pt', label: 'Viagens à Medida', headline: 'Feitas à volta do seu itinerário.', body: 'Rotas de vários dias por Portugal, planeadas em torno do que lhe importa.', image: '/assets/picnic-mateus-viewpoint.jpg', alt: 'Paragem num miradouro' },
    { num: '04', href: '/corporate-pt', label: 'Transfers Empresariais', headline: 'Chegue preparado.', body: 'Cabina silenciosa, recolhas pontuais, faturação mensal para equipas.', image: '/assets/fleet-tesla-charging.jpg', alt: 'Frota empresarial' },
    { num: '05', href: '/classic-cars-pt', label: 'Carros Clássicos', headline: 'Chegadas intemporais.', body: 'Um Mercedes restaurado da nossa coleção, decorado para o seu dia.', image: '/assets/classic-mercedes-ponton-wedding-front.jpg', alt: 'Mercedes clássico para casamentos' },
  ],
};

const COPY = {
  en: { title: 'Services', tagline: 'Five ways to travel', view: 'View →' },
  pt: { title: 'Serviços', tagline: 'Cinco formas de viajar', view: 'Ver →' },
};

export default function ServiceRows({ lang = 'en' }) {
  const t = COPY[lang];
  return (
    <section style={{ maxWidth: 1320, margin: '0 auto', padding: '0 40px' }}>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', padding: '32px 0 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16 }}>
        <h2 style={{ font: '500 2.5rem/1.1 var(--font-display)', color: '#fff', margin: 0 }}>{t.title}</h2>
        <span style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone-400)' }}>{t.tagline}</span>
      </div>
      {SERVICES[lang].map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="ig-srow"
          style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1.1fr 340px', gap: 40, alignItems: 'center', padding: '36px 0', borderTop: '1px solid rgba(255,255,255,0.14)', textDecoration: 'none', color: 'inherit' }}
        >
          <div style={{ font: '500 1.5rem var(--font-display)', color: 'var(--green-400)' }}>{s.num}</div>
          <div>
            <div style={{ font: 'var(--text-caption)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 10 }}>{s.label}</div>
            <h3 style={{ font: '500 2rem/1.12 var(--font-display)', color: '#fff', margin: 0 }}>{s.headline}</h3>
          </div>
          <p style={{ font: '400 1rem/1.6 var(--font-body)', color: 'var(--stone-300)', margin: 0, maxWidth: 360 }}>{s.body}</p>
          <div className="ig-srow-media" style={{ height: 190, overflow: 'hidden', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(s.image)} alt={s.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.08) contrast(1.05) brightness(0.9)' }} />
            <div className="ig-view" style={{ position: 'absolute', bottom: 14, right: 14, color: '#fff', font: '500 14px var(--font-body)' }}>{t.view}</div>
          </div>
        </Link>
      ))}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }} />
    </section>
  );
}
