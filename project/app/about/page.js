import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingContactPulse from '@/components/home/FloatingContactPulse';
import ElectricFleetIndicator from '@/components/ui/ElectricFleetIndicator';
import FleetTabs from '@/components/about/FleetTabs';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'About Idealgreen | Private Transfers & Tours Since 2022',
  description:
    'Idealgreen is a small team based in Queijas, Oeiras, running private transfers and tours in Portugal since 2022 — meet Jorge and the fleet.',
};

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--bg-page)', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <NavBar dark activePage="about" />

      <section style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', background: 'var(--green-900)', paddingTop: 120 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 48px', width: '100%', boxSizing: 'border-box' }}>
          <h1 className="ig-page-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.1, color: '#fff', margin: 0 }}>
            A small team, based in Queijas
          </h1>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 24px' }}>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', margin: 0, maxWidth: 640 }}>
          Idealgreen started in 2022. It is still small enough that the person who answers your message is often the person who drives you.
        </p>
      </section>

      <section className="ig-about-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px 72px', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 48, alignItems: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/driver-profile.jpg')}
          alt="Jorge, founder and driver, beside the Mercedes V-Class"
          style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }}
        />
        <div>
          <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
            Meet Jorge
          </div>
          <h2 style={{ font: 'var(--text-h2)', margin: '0 0 16px' }}>Founder, and still the one driving most days</h2>
          <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', margin: '0 0 14px', maxWidth: 520 }}>
            Jorge started Idealgreen with one car in 2022. He still takes most of the airport runs and Sintra tours himself, which is why the
            answers on this site come from someone who has actually driven the routes — not a call centre reading a script.
          </p>
          <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', margin: 0, maxWidth: 520 }}>
            Being small means fewer cars, but it also means you get the same driver for your airport pickup and your tour two days later, and a
            direct answer on WhatsApp instead of a queue.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--green-900)', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 28px' }}>The fleet</h2>
          <FleetTabs />
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
        <ElectricFleetIndicator percent={100} />
        <h2 style={{ font: 'var(--text-h2)', margin: '16px 0 16px' }}>Why &quot;green&quot;</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
          <div>
            <h3 style={{ font: 'var(--text-h4)', margin: '0 0 8px' }}>Electric vehicles</h3>
            <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>
              Every transfer and tour car is a Tesla Model Y, charged overnight at partner hotels.
            </p>
          </div>
          <div>
            <h3 style={{ font: 'var(--text-h4)', margin: '0 0 8px' }}>Efficient routes</h3>
            <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>
              One vehicle serving several bookings a day, planned to avoid empty return trips where possible.
            </p>
          </div>
          <div>
            <h3 style={{ font: 'var(--text-h4)', margin: '0 0 8px' }}>Long-life vehicles</h3>
            <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>
              The classic Mercedes cars are maintained to run for decades rather than replaced.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactPulse />
    </div>
  );
}
