import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingBar from '@/components/home/BookingBar';
import ServiceRows from '@/components/home/ServiceRows';
import ProcessSteps from '@/components/home/ProcessSteps';
import RouteLines from '@/components/home/RouteLines';
import CorporateCallout from '@/components/home/CorporateCallout';
import Testimonials from '@/components/home/Testimonials';
import CountUp from '@/components/home/CountUp';
import { asset } from '@/lib/basePath';

const HOTELS = ['Hotel da Baixa', 'Wine & Books Lisboa Hotel', 'Blue Liberdade Hotel', 'Onyria Quinta da Marinha Golf', 'The Yeatman'];

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar />

      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '90px 0 100px', boxSizing: 'border-box' }}>
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
                <div style={{ font: '500 44px var(--font-display)', color: 'var(--green-300)' }}>
                  <CountUp to={100} suffix="%" />
                </div>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 6 }}>electric transfer &amp; tour fleet</div>
              </div>
              <div>
                <div style={{ font: '500 44px var(--font-display)', color: 'var(--green-300)' }}>
                  <CountUp to={8} />
                </div>
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

      <DarkFooter />
      <WhatsAppButton />
    </div>
  );
}
