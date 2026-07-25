import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProposalWizard from '@/components/tailor-made/ProposalWizard';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Viagens à Medida por Portugal | Idealgreen',
  description:
    'Viagens privadas de vários dias por Portugal — rotas gastronómicas, região vinícola, costa atlântica e viagens em família. Peça uma proposta feita à volta das suas datas.',
};

const ITINERARIES = [
  {
    days: '3 dias',
    title: 'Rota gastronómica, Lisboa ao Alentejo',
    body: 'Bancas de mercado em Lisboa, um produtor de queijo perto de Évora e um almoço demorado numa quinta do Alentejo.',
    image: '/assets/guests-toast-vineyard.jpg',
    alt: 'Rota gastronómica por Lisboa e o Alentejo',
  },
  {
    days: '4 dias',
    title: 'Viagem de vinhos, Lisboa ao Douro',
    body: 'Coimbra e Porto a caminho do norte, depois duas noites entre os socalcos do Douro.',
    image: '/assets/picnic-mateus-viewpoint.jpg',
    alt: 'Viagem de vinhos de Lisboa ao Douro',
  },
  {
    days: '5 dias',
    title: 'Costa Atlântica',
    body: 'Ericeira, Nazaré, Aveiro e a Costa Verde, seguindo a estrada da costa para norte.',
    image: '/assets/landscape-cliff-alt.jpg',
    alt: 'Viagem pela costa atlântica',
  },
  {
    days: '4 dias',
    title: 'Portugal para famílias',
    body: 'Sintra, a lagoa de Óbidos e um dia de praia, ao ritmo de crianças e avós.',
    image: '/assets/guests-group-toast.jpg',
    alt: 'Itinerário Portugal para famílias',
  },
];

export default function TailorMadePtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/tailor-made" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/guests-couple-guide.jpg')}
          alt="Casal com o seu motorista a planear a rota do dia"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.08) brightness(0.85)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.92) 0%,rgba(14,21,18,0.25) 55%,rgba(14,21,18,0.45) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 16 }}>
            Viagens à Medida
          </div>
          <h1 style={{ font: '600 4rem/1.02 var(--font-display)', color: '#fff', margin: '0 0 18px', maxWidth: 720 }}>O seu Portugal, desenhado de raiz.</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 600, margin: 0 }}>
            Rotas de vários dias construídas à volta das suas datas, dos seus interesses e de quem viaja consigo.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 24px' }}>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: 0, maxWidth: 640 }}>
          Rotas de vários dias construídas à volta das suas datas, dos seus interesses e de quem viaja consigo — não uma partida fixa.
        </p>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {ITINERARIES.map((it) => (
            <div key={it.title} style={{ border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', background: '#0f1613' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(it.image)} alt={it.alt} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }} />
              <div style={{ padding: 22 }}>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--green-300)', fontWeight: 600, marginBottom: 4 }}>{it.days}</div>
                <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 8px' }}>{it.title}</h3>
                <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProposalWizard lang="pt" />

      <DarkFooter lang="pt" />
      <WhatsAppButton />
    </div>
  );
}
