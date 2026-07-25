import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import FleetTabs from '@/components/about/FleetTabs';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Sobre a Idealgreen | Transfers e Tours Privados desde 2022',
  description:
    'A Idealgreen é uma equipa pequena em Queijas, Oeiras, a fazer transfers e tours privados em Portugal desde 2022 — conheça o Jorge e a frota.',
};

export default function AboutPtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/about" />

      <section style={{ position: 'relative', height: '64vh', minHeight: 460, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/driver-profile.jpg')}
          alt="Jorge, fundador e motorista"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', filter: 'saturate(1.05) contrast(1.06) brightness(0.85)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.92) 0%,rgba(14,21,18,0.2) 55%,rgba(14,21,18,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 64px', width: '100%', boxSizing: 'border-box' }}>
          <h1 style={{ font: '600 3.5rem/1.06 var(--font-display)', color: '#fff', margin: 0 }}>Uma equipa pequena, em Queijas</h1>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 24px' }}>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: 0, maxWidth: 640 }}>
          A Idealgreen começou em 2022. Continua pequena o suficiente para que quem responde à sua mensagem seja, muitas vezes, quem o conduz.
        </p>
      </section>

      <section className="ig-about-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px 72px', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 48, alignItems: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/driver-profile.jpg')}
          alt="Jorge, fundador e motorista, junto ao Mercedes Classe V"
          style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }}
        />
        <div>
          <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 10 }}>
            Conheça o Jorge
          </div>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 16px' }}>Fundador, e ainda quem conduz na maioria dos dias</h2>
          <p style={{ font: 'var(--text-body)', color: 'var(--stone-300)', margin: '0 0 14px', maxWidth: 520 }}>
            O Jorge começou a Idealgreen com um carro em 2022. Continua a fazer a maioria dos transfers de aeroporto e tours a Sintra, e é por isso
            que as respostas neste site vêm de alguém que já conduziu as rotas — não de um call center a ler um guião.
          </p>
          <p style={{ font: 'var(--text-body)', color: 'var(--stone-300)', margin: 0, maxWidth: 520 }}>
            Ser pequeno significa menos carros, mas também significa o mesmo motorista na recolha no aeroporto e no tour dois dias depois, e uma
            resposta direta no WhatsApp em vez de uma fila.
          </p>
        </div>
      </section>

      <section style={{ background: '#0f1613', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 28px' }}>A frota</h2>
          <FleetTabs lang="pt" />
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.1)' }}>
            <div style={{ width: '100%', height: '100%', background: 'var(--green-500)' }} />
          </div>
          <span style={{ font: '600 13px var(--font-body)', color: 'var(--green-300)' }}>100% elétrico</span>
        </div>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '16px 0 16px' }}>Porquê &quot;green&quot;</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
          <div>
            <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 8px' }}>Veículos elétricos</h3>
            <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>
              Cada carro de transfer e tour é um Tesla Model Y, carregado durante a noite em hotéis parceiros.
            </p>
          </div>
          <div>
            <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 8px' }}>Rotas eficientes</h3>
            <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>
              Um veículo a servir várias reservas por dia, planeado para evitar viagens de regresso vazias sempre que possível.
            </p>
          </div>
          <div>
            <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 8px' }}>Veículos de longa vida</h3>
            <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>
              Os Mercedes clássicos são mantidos para durar décadas, em vez de substituídos.
            </p>
          </div>
        </div>
      </section>

      <DarkFooter lang="pt" />
      <WhatsAppButton />
    </div>
  );
}
