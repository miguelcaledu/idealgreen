import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import CarsGrid from '@/components/classic-cars/CarsGrid';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Classic Cars & Events | Vintage Mercedes for Weddings | Idealgreen',
  description:
    'Vintage Mercedes-Benz cars for weddings, private events, tours and productions in Portugal. Eight cars, driver included, decoration on request.',
};

const USES = [
  { title: 'Weddings', body: 'Church to venue, decorated to your colours.' },
  { title: 'Private events', body: 'Anniversaries, birthdays, arrivals that are part of the occasion.' },
  { title: 'Tours', body: 'A slower way to see Lisbon or Sintra, in the car itself.' },
  { title: 'Productions', body: 'Photo and film shoots, with the car as part of the set.' },
];

export default function ClassicCarsPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar altHref="/classic-cars-pt" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/classic-mercedes-ponton-wedding-front.jpg')}
          alt="Vintage black Mercedes-Benz decorated for a wedding outside a church"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'saturate(1.08) contrast(1.06)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(46,26,20,0.9) 0%,rgba(14,21,18,0.25) 55%,rgba(14,21,18,0.45) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 16 }}>
            Idealgreen Classic Cars
          </div>
          <h1 style={{ font: 'italic 500 3.75rem/1.08 var(--font-classic)', color: '#fff', margin: '0 0 18px', maxWidth: 680 }}>
            Arrive the way the day deserves to begin
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 520, margin: 0 }}>
            Weddings, private events, tours and film productions — eight vintage Mercedes-Benz cars, each with a driver.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>
        <h2 style={{ font: 'var(--text-h2)', color: 'var(--stone-100)', margin: '0 0 28px' }}>What we do with them</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {USES.map((u) => (
            <div key={u.title}>
              <h3 style={{ font: 'var(--text-h4)', margin: '0 0 6px', color: 'var(--green-300)' }}>{u.title}</h3>
              <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CarsGrid />

      <section style={{ background: '#0f1613', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: 'var(--stone-100)', margin: '0 0 16px' }}>Sustainability here means something different</h2>
          <p style={{ font: 'var(--text-body)', color: 'var(--stone-300)', maxWidth: 640, margin: 0 }}>
            These cars are not electric, and we do not present them as if they were. Their case is preservation — keeping a well-built car running for sixty years, rather than building a new one. Repairable, maintained, and driven rarely enough to last another sixty.
          </p>
        </div>
      </section>

      <DarkFooter />
      <WhatsAppButton />
    </div>
  );
}
