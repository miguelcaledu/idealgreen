import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingContactPulse from '@/components/home/FloatingContactPulse';
import RouteCard from '@/components/ui/RouteCard';
import RoutesExplorer from '@/components/transfers/RoutesExplorer';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Private Airport Transfer Lisbon | Idealgreen',
  description: 'Private Lisbon airport transfer from €40, meet & greet, door-to-door. Point-to-point routes across Portugal, priced per vehicle.',
};

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
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--bg-page)', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <NavBar dark />

      <section style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', background: 'var(--green-900)', paddingTop: 120 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 48px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 12 }}>
            Airport & Private Transfers
          </div>
          <h1 className="ig-hero-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.05, color: '#fff', margin: '0 0 14px', maxWidth: 640 }}>
            Smooth landings, every time.
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 520, margin: 0 }}>
            Your driver waits at arrivals with your name — even if the flight is late.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24 }}>
          <div style={{ border: '1px solid var(--border-subtle)', padding: 24, background: '#fff' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-700)' }}>€40</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', marginTop: 6 }}>Lisbon airport to central Lisbon, per vehicle</div>
          </div>
          <div style={{ border: '1px solid var(--border-subtle)', padding: 24, background: '#fff' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-700)' }}>+€20</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', marginTop: 6 }}>Night supplement, 22:00–07:00</div>
          </div>
          <div style={{ border: '1px solid var(--border-subtle)', padding: 24, background: '#fff' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-700)' }}>€15</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', marginTop: 6 }}>Per extra hour of waiting time</div>
          </div>
        </div>
        <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 16 }}>
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
          <h2 style={{ font: 'var(--text-h3)', margin: '0 0 14px' }}>Meet & greet, not a shared shuttle</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FEATURES.map((f) => (
              <li key={f} style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', paddingLeft: 20, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--green-700)' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ background: 'var(--green-900)', padding: '64px 32px' }}>
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
        <h2 style={{ font: 'var(--text-h2)', margin: '0 0 8px' }}>Frequent routes</h2>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', margin: '0 0 28px' }}>Booked most often, from Lisbon.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FREQUENT_ROUTES.map((r) => (
            <RouteCard key={r.to} from="Lisbon" to={r.to} price={r.price} duration={r.duration} href="/contact" />
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 32px 80px' }}>
        <RoutesExplorer />
      </section>

      <Footer />
      <FloatingContactPulse />
    </div>
  );
}
