import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingContactPulse from '@/components/home/FloatingContactPulse';
import ToursGrid from '@/components/tours/ToursGrid';

export const metadata = {
  title: 'Private Tours in Portugal | Sintra, Fátima, Évora, Algarve | Idealgreen',
  description:
    'Private Sintra tours, Fátima day trips, Évora and Algarve tours by car — total price per vehicle, knowledgeable drivers, flexible itineraries.',
};

export default function ToursPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--bg-page)', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <NavBar dark />

      <section style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', background: 'var(--green-900)', paddingTop: 120 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 48px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 12 }}>
            Private Tours
          </div>
          <h1 className="ig-hero-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.05, color: '#fff', margin: '0 0 14px', maxWidth: 640 }}>
            Portugal, at your pace.
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 600, margin: 0 }}>
            One vehicle, one driver, your schedule. Prices are total per vehicle, not per person.
          </p>
        </div>
      </section>

      <ToursGrid />

      <Footer />
      <FloatingContactPulse />
    </div>
  );
}
