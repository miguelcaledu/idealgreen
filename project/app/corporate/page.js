import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingContactPulse from '@/components/home/FloatingContactPulse';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TrustBar from '@/components/ui/TrustBar';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Corporate Mobility in Portugal | Idealgreen',
  description:
    'Private corporate transport in Lisbon and Portugal — punctual, discreet, invoiced. Electric premium fleet for companies, embassies, law firms and hotels.',
};

const FEATURES = [
  { title: 'Punctuality', body: 'Flights and schedules tracked, drivers briefed the day before.' },
  { title: 'Discretion', body: 'No branding on the vehicle interior, no small talk unless you start it.' },
  { title: 'Invoicing', body: 'Monthly billing on account, one invoice for all your trips.' },
  { title: 'A quiet cabin to work', body: 'Wi-Fi on request, a silent electric motor between meetings.' },
  { title: 'Account management', body: 'One contact for recurring bookings, not a new driver brief every time.' },
  { title: 'Electric, premium fleet', body: 'Tesla Model Y for executives, V-Class for delegations.' },
];

const PARTNER_STOPS = [
  { image: '/assets/fleet-tesla-charging.jpg', alt: 'Tesla Model Y charging at Wine & Books Lisboa Hotel', name: 'Wine & Books Lisboa Hotel', body: 'Overnight charging arranged directly with the hotel.' },
  { image: '/assets/fleet-tesla-iberostar.jpg', alt: 'Tesla Model Y at The Yeatman, Porto', name: 'The Yeatman, Porto/Gaia', body: 'The same standing arrangement, extended to Porto engagements.' },
];

export default function CorporatePage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--green-900)', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <NavBar dark activePage="corporate" />

      <section style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', background: 'var(--green-900)', paddingTop: 120 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 48px', width: '100%', boxSizing: 'border-box' }}>
          <h1 className="ig-page-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.1, color: '#fff', margin: '0 0 14px', maxWidth: 600 }}>
            Corporate Mobility
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-200)', maxWidth: 520, margin: 0 }}>
            Ground transport that shows up on time and stays out of the way — for teams, events and recurring accounts.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 32px' }}>Built for the way companies actually travel</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: 'var(--text-primary)', margin: '0 0 32px' }}>Where our cars already park</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {PARTNER_STOPS.map((s) => (
              <div key={s.name} style={{ background: 'var(--bg-surface-sunken)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(s.image)} alt={s.alt} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }} />
                <div style={{ padding: 18 }}>
                  <h3 style={{ font: 'var(--text-h4)', margin: '0 0 4px' }}>{s.name}</h3>
                  <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <TrustBar partners={['Hotel da Baixa', 'Wine & Books Lisboa', 'Blue Liberdade', 'Onyria Quinta da Marinha', 'The Yeatman']} />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 12px' }}>Request a corporate account</h2>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: '0 0 32px' }}>
          Tell us your typical routes and volume — we set up an account and a standing rate.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, textAlign: 'left', background: '#fff', padding: 32, border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="ig-booking-grid">
            <Input label="Company name" placeholder="Your company" />
            <Input label="Contact email" placeholder="you@company.com" type="email" />
          </div>
          <Input label="Typical monthly volume" placeholder="e.g. 10 airport transfers, 4 city trips" />
          <Link href="/contact" style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
            <Button variant="primary" size="lg">
              Request a corporate account
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingContactPulse />
    </div>
  );
}
