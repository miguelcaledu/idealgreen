import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingContactPulse from '@/components/home/FloatingContactPulse';
import ProposalWizard from '@/components/tailor-made/ProposalWizard';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Tailor-Made Journeys Across Portugal | Idealgreen',
  description:
    'Multi-day private journeys across Portugal — food routes, wine country, the Atlantic coast and family trips. Request a proposal built around your dates.',
};

const ITINERARIES = [
  {
    days: '3 days',
    title: 'Food route, Lisbon to Alentejo',
    body: 'Market stalls in Lisbon, a cheese producer near Évora, and a long lunch on an Alentejo farm.',
    image: '/assets/guests-toast-vineyard.jpg',
    alt: 'Food route through Lisbon and the Alentejo',
  },
  {
    days: '4 days',
    title: 'Wine journey, Lisbon to Douro',
    body: 'Coimbra and Porto on the way north, then two nights among the Douro terraces.',
    image: '/assets/picnic-mateus-viewpoint.jpg',
    alt: 'Wine journey from Lisbon to the Douro',
  },
  {
    days: '5 days',
    title: 'Atlantic Coast',
    body: 'Ericeira, Nazaré, Aveiro and the Costa Verde, following the coast road north.',
    image: '/assets/landscape-cliff-alt.jpg',
    alt: 'Atlantic coast road trip',
  },
  {
    days: '4 days',
    title: 'Portugal for families',
    body: 'Sintra, the Óbidos lagoon and a beach day, paced for children and grandparents alike.',
    image: '/assets/guests-group-toast.jpg',
    alt: 'Portugal for families itinerary',
  },
];

export default function TailorMadePage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--bg-page)', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <NavBar dark />

      <section style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', background: 'var(--green-900)', paddingTop: 120 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 48px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 12 }}>
            Tailor-Made Journeys
          </div>
          <h1 className="ig-hero-heading" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, lineHeight: 1.05, color: '#fff', margin: '0 0 14px', maxWidth: 640 }}>
            Your Portugal, drawn from scratch.
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 600, margin: 0 }}>
            Multi-day routes built around your dates, your interests and who is travelling with you.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 24px' }}>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', margin: 0, maxWidth: 640 }}>
          Multi-day routes built around your dates, your interests and who is travelling with you — not a fixed departure.
        </p>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {ITINERARIES.map((it) => (
            <div key={it.title} style={{ border: '1px solid var(--border-subtle)', overflow: 'hidden', background: '#fff', boxShadow: 'var(--shadow-sm)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(it.image)} alt={it.alt} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }} />
              <div style={{ padding: 22 }}>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--green-700)', fontWeight: 600, marginBottom: 4 }}>{it.days}</div>
                <h3 style={{ font: 'var(--text-h4)', margin: '0 0 8px' }}>{it.title}</h3>
                <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', margin: 0 }}>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProposalWizard />

      <Footer />
      <FloatingContactPulse />
    </div>
  );
}
