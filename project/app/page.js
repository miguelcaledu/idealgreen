import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BookingWidget from '@/components/home/BookingWidget';
import StatsCounters from '@/components/home/StatsCounters';
import ServiceCarousel from '@/components/home/ServiceCarousel';
import Testimonials from '@/components/home/Testimonials';
import RouteLines from '@/components/home/RouteLines';
import FloatingContactPulse from '@/components/home/FloatingContactPulse';
import ElectricFleetIndicator from '@/components/ui/ElectricFleetIndicator';
import { asset } from '@/lib/basePath';

const HOTELS = ['Hotel da Baixa', 'Wine & Books Lisboa Hotel', 'Blue Liberdade Hotel', 'Onyria Quinta da Marinha Golf', 'The Yeatman'];

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--bg-page)', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <NavBar />

      <section id="ig-hero" style={{ position: 'relative', minHeight: 560, height: '80vh', maxHeight: 720, display: 'flex', alignItems: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/landscape-cliff-alt.jpg')}
          alt="Portuguese Atlantic coast at golden hour"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 65%',
            filter: 'saturate(1.15) contrast(1.08) brightness(0.9)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg,rgba(15,42,26,0.75) 0%,rgba(14,21,18,0.55) 45%,rgba(14,21,18,0.92) 100%)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px', width: '100%', boxSizing: 'border-box' }}>
          <h1
            className="ig-hero-heading ig-reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              lineHeight: 1.02,
              color: '#fff',
              margin: '0 0 16px',
              letterSpacing: 'var(--tracking-display)',
            }}
          >
            Your driver awaits.
          </h1>
          <p className="ig-reveal" style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 520, margin: 0, animationDelay: '120ms' }}>
            Private transfers and tours across Portugal — electric fleet, local knowledge, door to door.
          </p>
        </div>
      </section>

      <BookingWidget />
      <StatsCounters />
      <ServiceCarousel />

      <section style={{ background: 'var(--green-900)', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 48px', textAlign: 'center' }}>Sit back. You&apos;re expected.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {[
              { image: asset('/assets/tesla-airport-night.jpg'), alt: 'Driver waiting at arrivals', title: 'Met by name', body: 'Your driver is at arrivals before you are.' },
              { image: asset('/assets/fleet-vans-pines.jpg'), alt: 'Mercedes V-Class interior room', title: 'Room to relax', body: 'Space for the whole family — child seats on request.' },
              { image: asset('/assets/driver-profile.jpg'), alt: 'Jorge, driver and founder', title: 'A local up front', body: 'Ask where to eat. Jorge knows.' },
            ].map((card, i) => (
              <div
                key={card.title}
                className="ig-reveal"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.alt} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.1) contrast(1.05)' }} />
                <div style={{ padding: 22 }}>
                  <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 8px' }}>{card.title}</h3>
                  <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', margin: 0 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section style={{ padding: '56px 0', background: 'var(--stone-100)', overflow: 'hidden' }}>
        <div className="ig-marquee-track" style={{ display: 'flex', gap: 64, alignItems: 'center', width: 'max-content' }}>
          {[...HOTELS, ...HOTELS].map((name, i) => (
            <span
              key={i}
              aria-hidden={i >= HOTELS.length ? 'true' : undefined}
              style={{ font: '600 20px var(--font-body)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
        <div>
          <ElectricFleetIndicator percent={100} />
          <p style={{ font: 'var(--text-h3)', margin: '16px 0 0', maxWidth: 560 }}>
            Electric where it counts: our Teslas charge across Portugal and Spain. Our classics are kept alive, not thrown away.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/assets/fleet-tesla-charging.jpg')}
            alt="Tesla Model Y charging at a hotel forecourt"
            style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/assets/classic-mercedes-ponton-wedding-front.jpg')}
            alt="Classic Mercedes-Benz"
            style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }}
          />
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface-sunken)', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 40, alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/assets/driver-profile.jpg')}
            alt="Jorge, founder and driver"
            style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }}
          />
          <div>
            <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
              Meet Jorge
            </div>
            <h2 style={{ font: 'var(--text-h3)', margin: '0 0 12px' }}>Founder, and still the one driving most days</h2>
            <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', margin: '0 0 16px', maxWidth: 520 }}>
              Jorge still takes most of the airport runs himself, and knows which village square is worth the extra ten minutes.
            </p>
            <a href="/about" style={{ font: '600 15px var(--font-body)', color: 'var(--green-700)', textDecoration: 'none' }}>
              Read the full story →
            </a>
          </div>
        </div>
      </section>

      <RouteLines />
      <Footer />
      <FloatingContactPulse />
    </div>
  );
}
