import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import RouteCard from '@/components/ui/RouteCard';
import RoutesExplorer from '@/components/transfers/RoutesExplorer';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Transfer Privado de Aeroporto Lisboa | Idealgreen',
  description: 'Transfer privado do aeroporto de Lisboa desde 40€, receção personalizada, porta a porta. Rotas ponto a ponto por Portugal, com preço por veículo.',
};

const FOOTER_ROUTES = [
  { label: 'Lisboa–Porto · €370', href: '/transfers-pt' },
  { label: 'Lisboa–Faro · €315', href: '/transfers-pt' },
  { label: 'Lisboa–Sintra · €45', href: '/transfers-pt' },
  { label: 'Lisboa–Évora · €190', href: '/transfers-pt' },
];

const FREQUENT_ROUTES = [
  { to: 'Porto', price: '€370', duration: '3h' },
  { to: 'Faro', price: '€315', duration: '2h30' },
  { to: 'Portimão', price: '€315', duration: '2h40' },
  { to: 'Sevilha', price: '€420', duration: '3h30' },
];

const FEATURES = [
  'O seu nome numa placa nas chegadas, sem ponto de encontro para procurar',
  'A bagagem é levada até ao carro por si',
  'O seu voo é acompanhado, por isso um atraso não lhe custa a viagem',
  'Porta a porta — hotel, villa ou morada, não uma praça de táxis',
];

export default function TransfersPtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/transfers" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/tesla-airport-night.jpg')}
          alt="Tesla Model Y à espera no aeroporto de Lisboa à noite"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.08) brightness(0.85)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.92) 0%,rgba(14,21,18,0.3) 55%,rgba(14,21,18,0.5) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 16 }}>
            Transfers de Aeroporto e Privados
          </div>
          <h1 style={{ font: '600 4rem/1.02 var(--font-display)', color: '#fff', margin: '0 0 18px', maxWidth: 720 }}>Aterragens tranquilas, sempre.</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 520, margin: 0 }}>
            O seu motorista espera nas chegadas com o seu nome — mesmo que o voo atrase.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24 }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 24, background: '#0f1613' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-300)' }}>€40</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', marginTop: 6 }}>Aeroporto de Lisboa ao centro de Lisboa, por veículo</div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 24, background: '#0f1613' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-300)' }}>+€20</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', marginTop: 6 }}>Suplemento noturno, 22:00–07:00</div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 24, background: '#0f1613' }}>
            <div style={{ font: '600 32px var(--font-display)', color: 'var(--green-300)' }}>€15</div>
            <div style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', marginTop: 6 }}>Por cada hora extra de espera</div>
          </div>
        </div>
        <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)', marginTop: 16 }}>
          Os preços são por veículo, não por pessoa. As portagens estão incluídas em todos os transfers [CONFIRMAR]. Cadeiras de criança disponíveis a pedido [CONFIRMAR].
        </p>
      </section>

      <section className="ig-about-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 32px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/tesla-airport-night.jpg')}
          alt="Tesla Model Y à espera nas chegadas do aeroporto de Lisboa"
          style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }}
        />
        <div>
          <h2 style={{ font: 'var(--text-h3)', color: '#fff', margin: '0 0 14px' }}>Receção personalizada, não um shuttle partilhado</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FEATURES.map((f) => (
              <li key={f} style={{ font: 'var(--text-body)', color: 'var(--stone-300)', paddingLeft: 20, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--green-300)' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ background: '#0f1613', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 32px' }}>O veículo certo para a viagem</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/assets/fleet-vans-grilles.jpg')} alt="Carrinha Mercedes Classe V" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 6px' }}>Mercedes Classe V</h3>
                <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', margin: 0 }}>Até 7 passageiros com bagagem. Grupos e famílias.</p>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/assets/fleet-tesla-hotel-day.jpg')} alt="Tesla Model Y" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.08) contrast(1.05)' }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 6px' }}>Tesla Model Y</h3>
                <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', margin: 0 }}>Até 4 passageiros. Elétrico, silencioso, pronto para negócios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 8px' }}>Rotas frequentes</h2>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: '0 0 28px' }}>As mais reservadas, a partir de Lisboa.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FREQUENT_ROUTES.map((r) => (
            <RouteCard key={r.to} from="Lisboa" to={r.to} price={r.price} duration={r.duration} href="/contact-pt" />
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 32px 80px' }}>
        <RoutesExplorer lang="pt" />
      </section>

      <DarkFooter lang="pt" routes={FOOTER_ROUTES} />
      <WhatsAppButton />
    </div>
  );
}
