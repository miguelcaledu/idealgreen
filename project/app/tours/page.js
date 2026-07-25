import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ToursGrid from '@/components/tours/ToursGrid';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Private Tours in Portugal | Sintra, Fátima, Évora, Algarve | Idealgreen',
  description:
    'Private Sintra tours, Fátima day trips, Évora and Algarve tours by car — total price per vehicle, knowledgeable drivers, flexible itineraries.',
};

const FOOTER_ROUTES = [
  { label: 'Lisbon–Porto · €370', href: '/transfers' },
  { label: 'Lisbon–Faro · €315', href: '/transfers' },
  { label: 'Lisbon–Sintra · €45', href: '/transfers' },
  { label: 'Lisbon–Évora · €190', href: '/transfers' },
];

export default function ToursPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar altHref="/tours-pt" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/tesla-sintra-pena-palace.jpg')}
          alt="Private tour vehicle arriving at Pena Palace, Sintra"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.08) brightness(0.85)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.92) 0%,rgba(14,21,18,0.25) 55%,rgba(14,21,18,0.45) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 16 }}>
            Private Tours
          </div>
          <h1 style={{ font: '600 4rem/1.02 var(--font-display)', color: '#fff', margin: '0 0 18px', maxWidth: 720 }}>Portugal, at your pace.</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 600, margin: 0 }}>
            One vehicle, one driver, your schedule. Prices are total per vehicle, not per person.
          </p>
        </div>
      </section>

      <ToursGrid />

      <DarkFooter routes={FOOTER_ROUTES} />
      <WhatsAppButton />
    </div>
  );
}
