import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import CarsGrid from '@/components/classic-cars/CarsGrid';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Carros Clássicos e Eventos | Mercedes Vintage para Casamentos | Idealgreen',
  description:
    'Carros Mercedes-Benz vintage para casamentos, eventos privados, tours e produções em Portugal. Oito carros, motorista incluído, decoração a pedido.',
};

const USES = [
  { title: 'Casamentos', body: 'Da igreja ao local, decorado com as suas cores.' },
  { title: 'Eventos privados', body: 'Aniversários, festas, chegadas que fazem parte da ocasião.' },
  { title: 'Tours', body: 'Uma forma mais pausada de ver Lisboa ou Sintra, no próprio carro.' },
  { title: 'Produções', body: 'Sessões de fotografia e filmagens, com o carro como parte do cenário.' },
];

export default function ClassicCarsPtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/classic-cars" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/classic-mercedes-ponton-wedding-front.jpg')}
          alt="Mercedes-Benz vintage preto decorado para um casamento à porta de uma igreja"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'saturate(1.08) contrast(1.06)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(46,26,20,0.9) 0%,rgba(14,21,18,0.25) 55%,rgba(14,21,18,0.45) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 16 }}>
            Idealgreen Carros Clássicos
          </div>
          <h1 style={{ font: 'italic 500 3.75rem/1.08 var(--font-classic)', color: '#fff', margin: '0 0 18px', maxWidth: 680 }}>
            Chegue como o dia merece começar
          </h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 520, margin: 0 }}>
            Casamentos, eventos privados, tours e produções de cinema — oito carros Mercedes-Benz vintage, cada um com motorista.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>
        <h2 style={{ font: 'var(--text-h2)', color: 'var(--stone-100)', margin: '0 0 28px' }}>O que fazemos com eles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {USES.map((u) => (
            <div key={u.title}>
              <h3 style={{ font: 'var(--text-h4)', margin: '0 0 6px', color: 'var(--green-300)' }}>{u.title}</h3>
              <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CarsGrid lang="pt" />

      <section style={{ background: '#0f1613', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: 'var(--stone-100)', margin: '0 0 16px' }}>Aqui, sustentabilidade significa algo diferente</h2>
          <p style={{ font: 'var(--text-body)', color: 'var(--stone-300)', maxWidth: 640, margin: 0 }}>
            Estes carros não são elétricos, e não os apresentamos como se fossem. O seu argumento é a preservação — manter um carro bem construído
            a andar durante sessenta anos, em vez de construir um novo.
          </p>
        </div>
      </section>

      <DarkFooter lang="pt" />
      <WhatsAppButton />
    </div>
  );
}
