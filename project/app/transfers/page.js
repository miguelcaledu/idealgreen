import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import RouteCard from '@/components/ui/RouteCard';
import RoutesExplorer from '@/components/transfers/RoutesExplorer';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Private Airport Transfer Lisbon | Idealgreen',
  description: 'Private Lisbon airport transfer from €40, meet & greet, door-to-door. Point-to-point routes across Portugal, priced per vehicle.',
};

const FOOTER_ROUTES = [
  { label: 'Lisbon–Porto · €370', href: '/transfers' },
  { label: 'Lisbon–Faro · €315', href: '/transfers' },
  { label: 'Lisbon–Sintra · €45', href: '/transfers' },
  { label: 'Lisbon–Évora · €190', href: '/transfers' },
  { label: 'Lisbon–Fátima · €165', href: '/transfers' },
];

const FREQUENT_ROUTES = [
  { to: 'Porto', price: '€370', duration: '3h' },
  { to: 'Faro', price: '€315', duration: '2h30' },
  { to: 'Portimão', price: '€315', duration: '2h40' },
  { to: 'Seville', price: '€420', duration: '3h30' },
];

const FEATURES = [
  'Your name on a sign at arrivals, no meeting point to find',
  'Luggage carried to the car for you',
  'Your flight is tracked, so a delay does not cost you a fare',
  'Door-to-door — hotel, villa or address, not a taxi rank',
];

export default function TransfersPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar altHref="/transfers-pt" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/tesla-airport-night.jpg')}
          alt="Tesla Model Y waiting at Lisbon airport at night"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.08) brightness(0.85)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.92) 0%,rgba(14,21,18,0.3) 55%,rgba(14,21,18,0.5) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 16 }}>
            Airport &amp; Private Transfers
          </div>
          <h1 style={{ font: '600 4rem/1.02 var(--font-display)', color: '#fff', margin: '0 0 18px', maxWidth: 720 }}>Landings, handled with care.</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 520, margin: 0 }}>
            Your driver waits at arrivals with your name — even if the flight is late.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24 }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 24, background: '#0f1613' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-300)' }}>€40</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', marginTop: 6 }}>Lisbon airport to central Lisbon, per vehicle</div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 24, background: '#0f1613' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-300)' }}>+€20</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', marginTop: 6 }}>Night supplement, 22:00–07:00</div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 24, background: '#0f1613' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-300)' }}>€15</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', marginTop: 6 }}>Per extra hour of waiting time</div>
          </div>
        </div>
        <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 16 }}>
          Prices shown are per vehicle, not per person. Tolls are included in every transfer [CONFIRM]. Child seats are available on request [CONFIRM].
        </p>
      </section>

      <section className="ig-about-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 32px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/tesla-airport-night.jpg')}
          alt="Tesla Model Y waiting at Lisbon airport arrivals"
          style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }}
        />
        <div>
          <h2 style={{ font: 'var(--text-h3)', color: '#fff', margin: '0 0 14px' }}>Meet &amp; greet, not a shared shuttle</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FEATURES.map((f) => (
              <li key={f} style={{ font: 'var(--text-body)', color: 'var(--stone-300)', paddingLeft: 20, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--green-300)' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ background: '#0f1613', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 32px' }}>The right vehicle for the trip</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/assets/fleet-vans-grilles.jpg')} alt="Mercedes V-Class van" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 6px' }}>Mercedes V-Class</h3>
                <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', margin: 0 }}>Up to 7 passengers with luggage. Groups and families.</p>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/assets/fleet-tesla-hotel-day.jpg')} alt="Tesla Model Y" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 6px' }}>Tesla Model Y</h3>
                <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', margin: 0 }}>Up to 4 passengers. Electric, quiet, business-ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 8px' }}>Frequent routes</h2>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: '0 0 28px' }}>Booked most often, from Lisbon.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FREQUENT_ROUTES.map((r) => (
            <RouteCard key={r.to} from="Lisbon" to={r.to} price={r.price} duration={r.duration} href="/contact" />
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 32px 80px' }}>
        <RoutesExplorer />
      </section>

      <DarkFooter routes={FOOTER_ROUTES} />
      <WhatsAppButton />
    </div>
  );
}
