import HomeNavBar from '@/components/home/HomeNavBar';
import BookingBar from '@/components/home/BookingBar';
import ServiceRows from '@/components/home/ServiceRows';
import ProcessSteps from '@/components/home/ProcessSteps';
import RouteLines from '@/components/home/RouteLines';
import CorporateCallout from '@/components/home/CorporateCallout';
import Testimonials from '@/components/home/Testimonials';
import { asset } from '@/lib/basePath';

const HOTELS = ['Hotel da Baixa', 'Wine & Books Lisboa Hotel', 'Blue Liberdade Hotel', 'Onyria Quinta da Marinha Golf', 'The Yeatman'];

const FOOTER_ROUTES = [
  { label: 'Lisbon–Porto · €370', href: '/transfers' },
  { label: 'Lisbon–Faro · €315', href: '/transfers' },
  { label: 'Lisbon–Sintra · €45', href: '/transfers' },
  { label: 'Lisbon–Évora · €190', href: '/transfers' },
  { label: 'Lisbon–Seville', href: '/transfers' },
];

const FOOTER_COMPANY = [
  { label: 'Private Tours', href: '/tours' },
  { label: 'Tailor-Made Journeys', href: '/tailor-made' },
  { label: 'Corporate Mobility', href: '/corporate' },
  { label: 'Classic Cars & Events', href: '/classic-cars' },
  { label: 'About Us', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <HomeNavBar />

      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 0 60px', boxSizing: 'border-box' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/fleet-tesla-hotel-street.jpg')}
          alt="Idealgreen Tesla outside a Lisbon hotel"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', filter: 'saturate(1.1) contrast(1.05) brightness(0.62)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(12,19,16,0.55) 0%,rgba(12,19,16,0.28) 40%,rgba(12,19,16,0.9) 100%)' }} />
        <BookingBar />
      </section>

      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '96px 40px 80px' }}>
        <div style={{ font: 'var(--text-caption)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 32 }}>The idea</div>
        <p style={{ font: '500 3.5rem/1.22 var(--font-display)', color: '#fff', margin: '0 0 40px', letterSpacing: '-0.01em' }}>
          The journey should feel as considered as the destination.
        </p>
        <p style={{ font: '400 1.2rem/1.7 var(--font-body)', color: 'var(--stone-300)', margin: 0, maxWidth: 520 }}>
          Idealgreen designs private travel around you — the road, the pace, the stops. Not a fixed departure, not a shared shuttle.
        </p>
      </section>

      <ServiceRows />

      <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '56px 0', overflow: 'hidden' }}>
        <div className="ig-home-marquee-track" style={{ display: 'flex', gap: 72, alignItems: 'center', width: 'max-content' }}>
          {[...HOTELS, ...HOTELS].map((name, i) => (
            <span key={i} aria-hidden={i >= HOTELS.length ? 'true' : undefined} style={{ font: '500 18px var(--font-body)', color: '#8a938c', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
              {name}
            </span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1320, margin: '0 auto', padding: '104px 40px' }}>
        <div className="ig-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 20 }}>Sustainable fleet</div>
            <h2 style={{ font: '500 3rem/1.14 var(--font-display)', color: '#fff', margin: '0 0 24px', letterSpacing: '-0.01em' }}>Designed for today. Preserved for tomorrow.</h2>
            <p style={{ font: '400 1.15rem/1.7 var(--font-body)', color: 'var(--stone-300)', margin: '0 0 40px', maxWidth: 460 }}>
              A fully electric fleet for everyday journeys, and a fleet of restored classics kept running rather than replaced.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 32 }}>
              <div>
                <div style={{ font: '500 44px var(--font-display)', color: 'var(--green-300)' }}>100%</div>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 6 }}>electric transfer &amp; tour fleet</div>
              </div>
              <div>
                <div style={{ font: '500 44px var(--font-display)', color: 'var(--green-300)' }}>8</div>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 6 }}>restored classics kept on the road</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/fleet-tesla-charging.jpg')} alt="Tesla Model Y charging at a hotel forecourt" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05) brightness(0.92)' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/classic-mercedes-wagon-grey.jpg')} alt="Restored classic Mercedes wagon" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05) brightness(0.92)' }} />
          </div>
        </div>
      </section>

      <ProcessSteps />
      <RouteLines />
      <CorporateCallout />

      <section style={{ background: '#100c0a', padding: '104px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 18 }}>Classic cars &amp; events</div>
            <h2 style={{ font: 'italic 500 3.5rem/1.12 var(--font-classic)', color: '#fff', margin: 0 }}>Timeless journeys.</h2>
          </div>
          <div className="ig-two" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/classic-mercedes-ponton-wedding-front.jpg')} alt="Classic Mercedes decorated for a wedding" style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/assets/classic-mercedes-coupe-black-closeup.jpg')} alt="Classic Mercedes detail" style={{ width: '100%', height: 252, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: 36, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ font: '400 1.1rem/1.65 var(--font-body)', color: 'var(--stone-300)', margin: '0 0 24px' }}>
                  Weddings, anniversaries and private events, in a restored Mercedes from our own collection.
                </p>
                <a href="/classic-cars" style={{ font: '600 15px var(--font-body)', color: 'var(--sand-400)', textDecoration: 'none' }}>
                  See the collection →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section style={{ position: 'relative', minHeight: 560, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/fleet-convoy.jpg')}
          alt="Idealgreen fleet on the road at dusk"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.06) brightness(0.55)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,19,16,0.5)' }} />
        <div style={{ position: 'relative', maxWidth: 720, padding: '120px 40px' }}>
          <h2 style={{ font: '500 4rem/1.06 var(--font-display)', color: '#fff', margin: '0 0 24px', letterSpacing: '-0.015em' }}>Where would you like to go?</h2>
          <p style={{ font: '400 1.2rem/1.6 var(--font-body)', color: 'var(--stone-200)', margin: '0 0 40px' }}>Tell us where the journey begins. We will take care of the rest.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="ig-btn-primary">
              Book a journey
            </a>
            <a href="/tailor-made" className="ig-btn-secondary">
              Request an itinerary
            </a>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0a0f0c', color: 'var(--stone-100)', padding: '80px 40px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="ig-footer-grid" style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/logo-wordmark-white.png')} alt="Idealgreen" style={{ height: 24, marginBottom: 18, display: 'block' }} />
            <p style={{ font: '400 0.95rem/1.6 var(--font-body)', color: 'var(--stone-400)', maxWidth: 280, margin: '0 0 20px' }}>Private journeys through Portugal, designed around you.</p>
            <div style={{ display: 'flex', gap: 18 }}>
              <a href="https://instagram.com/idealgreen_tours" style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
                Instagram
              </a>
              <a href="#" style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
                LinkedIn
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <span style={{ font: 'var(--text-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 4 }}>Popular routes</span>
            {FOOTER_ROUTES.map((r, i) => (
              <a key={i} href={r.href} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', textDecoration: 'none' }}>
                {r.label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <span style={{ font: 'var(--text-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 4 }}>Company</span>
            {FOOTER_COMPANY.map((c) => (
              <a key={c.href} href={c.href} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', textDecoration: 'none' }}>
                {c.label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <span style={{ font: 'var(--text-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 4 }}>Contact</span>
            <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>+351 912 926 688</span>
            <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>info@idealgreen.pt</span>
            <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>
              Rua Cesário Verde 35, Loja BB
              <br />
              2790-491 Queijas, Portugal
            </span>
          </div>
        </div>
        <div style={{ maxWidth: 1320, margin: '48px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, font: 'var(--text-caption)', color: '#8a938c' }}>
          <span>© 2026 Idealgreen · Private tours &amp; transfers since 2022</span>
          <span>Queijas, Oeiras · Lisbon, Portugal</span>
        </div>
      </footer>

      <a
        href="https://wa.me/351912926688"
        target="_blank"
        rel="noopener"
        style={{ position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', background: 'var(--green-700)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.3)', zIndex: 50 }}
      >
        ●
      </a>
    </div>
  );
}
