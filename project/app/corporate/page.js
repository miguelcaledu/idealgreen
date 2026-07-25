import Link from 'next/link';
import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
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

const HOTELS = ['Hotel da Baixa', 'Wine & Books Lisboa Hotel', 'Blue Liberdade Hotel', 'Onyria Quinta da Marinha Golf', 'The Yeatman', 'Memmo Príncipe Real'];

export default function CorporatePage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar altHref="/corporate-pt" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/fleet-teslas-jkeuropa.jpg')}
          alt="Fleet of Tesla vehicles for corporate accounts"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.05) contrast(1.08) brightness(0.8)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.94) 0%,rgba(14,21,18,0.35) 55%,rgba(14,21,18,0.5) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 16 }}>
            Corporate Mobility
          </div>
          <h1 style={{ font: '600 4rem/1.02 var(--font-display)', color: '#fff', margin: '0 0 18px', maxWidth: 640 }}>Arrive ready.</h1>
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

      <section style={{ background: '#0f1613', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: 'var(--stone-100)', margin: '0 0 32px' }}>Where our cars already park</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {PARTNER_STOPS.map((s) => (
              <div key={s.name} style={{ background: '#0f1613', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(s.image)} alt={s.alt} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }} />
                <div style={{ padding: 18 }}>
                  <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 4px' }}>{s.name}</h3>
                  <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 12px' }}>Request a corporate account</h2>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: '0 0 32px' }}>
          Tell us your typical routes and volume — we set up an account and a standing rate.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, textAlign: 'left', background: '#0f1613', padding: 32, border: '1px solid rgba(255,255,255,0.08)' }}>
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

      <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '56px 0', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', font: '600 11px var(--font-body)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 28 }}>
          Trusted by those who host
        </div>
        <div className="ig-home-marquee-track" style={{ display: 'flex', gap: 72, alignItems: 'center', width: 'max-content' }}>
          {[...HOTELS, ...HOTELS].map((name, i) => (
            <span key={i} aria-hidden={i >= HOTELS.length ? 'true' : undefined} style={{ font: '500 18px var(--font-body)', color: '#8a938c', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
              {name}
            </span>
          ))}
        </div>
      </section>

      <DarkFooter />
      <WhatsAppButton />
    </div>
  );
}
