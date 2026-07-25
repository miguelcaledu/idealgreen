import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingBar from '@/components/home/BookingBar';
import ServiceRows from '@/components/home/ServiceRows';
import ProcessSteps from '@/components/home/ProcessSteps';
import RouteLines from '@/components/home/RouteLines';
import CorporateCallout from '@/components/home/CorporateCallout';
import Testimonials from '@/components/home/Testimonials';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Transfers e Tours Privados em Portugal | Idealgreen',
  description: 'Transfers privados de aeroporto, tours à medida e uma frota elétrica em todo o Portugal. Viagens privadas por Portugal, pensadas para si.',
};

const HOTELS = ['Hotel da Baixa', 'Wine & Books Lisboa Hotel', 'Blue Liberdade Hotel', 'Onyria Quinta da Marinha Golf', 'The Yeatman'];

export default function HomePagePt() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/" />

      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 0 60px', boxSizing: 'border-box' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/fleet-tesla-hotel-street.jpg')}
          alt="Tesla da Idealgreen à porta de um hotel em Lisboa"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', filter: 'saturate(1.1) contrast(1.05) brightness(0.62)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(12,19,16,0.55) 0%,rgba(12,19,16,0.28) 40%,rgba(12,19,16,0.9) 100%)' }} />
        <BookingBar lang="pt" />
      </section>

      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '96px 40px 80px' }}>
        <div style={{ font: 'var(--text-caption)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 32 }}>A ideia</div>
        <p style={{ font: '500 3.5rem/1.22 var(--font-display)', color: '#fff', margin: '0 0 40px', letterSpacing: '-0.01em' }}>
          A viagem deve ser tão cuidada como o destino.
        </p>
        <p style={{ font: '400 1.2rem/1.7 var(--font-body)', color: 'var(--stone-300)', margin: 0, maxWidth: 520 }}>
          A Idealgreen desenha viagens privadas à sua volta — a estrada, o ritmo, as paragens. Sem partidas fixas, sem transfers partilhados.
        </p>
      </section>

      <ServiceRows lang="pt" />

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
            <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 20 }}>Frota sustentável</div>
            <h2 style={{ font: '500 3rem/1.14 var(--font-display)', color: '#fff', margin: '0 0 24px', letterSpacing: '-0.01em' }}>Pensada para hoje. Preservada para amanhã.</h2>
            <p style={{ font: '400 1.15rem/1.7 var(--font-body)', color: 'var(--stone-300)', margin: '0 0 40px', maxWidth: 460 }}>
              Uma frota totalmente elétrica para o dia a dia e uma frota de clássicos restaurados mantidos em circulação, em vez de substituídos.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 32 }}>
              <div>
                <div style={{ font: '500 44px var(--font-display)', color: 'var(--green-300)' }}>100%</div>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 6 }}>frota elétrica de transfers e tours</div>
              </div>
              <div>
                <div style={{ font: '500 44px var(--font-display)', color: 'var(--green-300)' }}>8</div>
                <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 6 }}>clássicos restaurados em circulação</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/fleet-tesla-charging.jpg')} alt="Tesla Model Y a carregar no acesso de um hotel" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05) brightness(0.92)' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/classic-mercedes-wagon-grey.jpg')} alt="Carrinha Mercedes clássica restaurada" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05) brightness(0.92)' }} />
          </div>
        </div>
      </section>

      <ProcessSteps lang="pt" />
      <RouteLines lang="pt" />
      <CorporateCallout lang="pt" />

      <section style={{ background: '#100c0a', padding: '104px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--sand-400)', marginBottom: 18 }}>Carros clássicos e eventos</div>
            <h2 style={{ font: 'italic 500 3.5rem/1.12 var(--font-classic)', color: '#fff', margin: 0 }}>Viagens intemporais.</h2>
          </div>
          <div className="ig-two" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/classic-mercedes-ponton-wedding-front.jpg')} alt="Mercedes clássico decorado para um casamento" style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/assets/classic-mercedes-coupe-black-closeup.jpg')} alt="Pormenor de um Mercedes clássico" style={{ width: '100%', height: 252, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: 36, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ font: '400 1.1rem/1.65 var(--font-body)', color: 'var(--stone-300)', margin: '0 0 24px' }}>
                  Casamentos, aniversários e eventos privados, num Mercedes restaurado da nossa coleção.
                </p>
                <a href="/classic-cars-pt" style={{ font: '600 15px var(--font-body)', color: 'var(--sand-400)', textDecoration: 'none' }}>
                  Ver a coleção →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials lang="pt" />

      <section style={{ position: 'relative', minHeight: 560, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/fleet-convoy.jpg')}
          alt="Frota Idealgreen na estrada ao anoitecer"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.06) brightness(0.55)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,19,16,0.5)' }} />
        <div style={{ position: 'relative', maxWidth: 720, padding: '120px 40px' }}>
          <h2 style={{ font: '500 4rem/1.06 var(--font-display)', color: '#fff', margin: '0 0 24px', letterSpacing: '-0.015em' }}>Para onde quer ir?</h2>
          <p style={{ font: '400 1.2rem/1.6 var(--font-body)', color: 'var(--stone-200)', margin: '0 0 40px' }}>Diga-nos onde começa a viagem. Tratamos do resto.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact-pt" className="ig-btn-primary">
              Reservar uma viagem
            </a>
            <a href="/tailor-made-pt" className="ig-btn-secondary">
              Pedir um itinerário
            </a>
          </div>
        </div>
      </section>

      <DarkFooter lang="pt" />
      <WhatsAppButton />
    </div>
  );
}
