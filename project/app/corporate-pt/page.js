import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import CorporateForm from '@/components/corporate/CorporateForm';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Mobilidade Empresarial em Portugal | Idealgreen',
  description:
    'Transporte empresarial privado em Lisboa e em Portugal — pontual, discreto, com fatura. Frota elétrica premium para empresas, embaixadas, escritórios de advogados e hotéis.',
};

const FEATURES = [
  { title: 'Pontualidade', body: 'Voos e horários acompanhados, motoristas informados na véspera.' },
  { title: 'Discrição', body: 'Sem marca no interior do veículo, sem conversa a menos que a inicie.' },
  { title: 'Faturação', body: 'Faturação mensal por conta, uma fatura para todas as viagens.' },
  { title: 'Uma cabina silenciosa para trabalhar', body: 'Wi-Fi a pedido, um motor elétrico silencioso entre reuniões.' },
  { title: 'Gestão de conta', body: 'Um único contacto para reservas recorrentes, sem instruir um novo motorista de cada vez.' },
  { title: 'Frota elétrica premium', body: 'Tesla Model Y para executivos, Classe V para delegações.' },
];

const PARTNER_STOPS = [
  { image: '/assets/fleet-tesla-charging.jpg', alt: 'Tesla Model Y a carregar no Wine & Books Lisboa Hotel', name: 'Wine & Books Lisboa Hotel', body: 'Carregamento noturno acertado diretamente com o hotel.' },
  { image: '/assets/fleet-tesla-iberostar.jpg', alt: 'Tesla Model Y no The Yeatman, Porto', name: 'The Yeatman, Porto/Gaia', body: 'O mesmo acordo permanente, alargado aos compromissos no Porto.' },
];

const HOTELS = ['Hotel da Baixa', 'Wine & Books Lisboa Hotel', 'Blue Liberdade Hotel', 'Onyria Quinta da Marinha Golf', 'The Yeatman', 'Memmo Príncipe Real'];

export default function CorporatePtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/corporate" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/fleet-teslas-jkeuropa.jpg')}
          alt="Frota de veículos Tesla para contas empresariais"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.05) contrast(1.08) brightness(0.8)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.94) 0%,rgba(14,21,18,0.35) 55%,rgba(14,21,18,0.5) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 16 }}>
            Mobilidade Empresarial
          </div>
          <h1 style={{ font: '600 4rem/1.02 var(--font-display)', color: '#fff', margin: '0 0 18px', maxWidth: 640 }}>Chegue preparado.</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-200)', maxWidth: 520, margin: 0 }}>
            Transporte terrestre que chega a horas e não atrapalha — para equipas, eventos e contas recorrentes.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 32px' }}>Feito para a forma como as empresas realmente viajam</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#0f1613', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ font: 'var(--text-h2)', color: 'var(--stone-100)', margin: '0 0 32px' }}>Onde os nossos carros já estacionam</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {PARTNER_STOPS.map((s) => (
              <div key={s.name} style={{ background: '#0f1613', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(s.image)} alt={s.alt} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'saturate(1.06) contrast(1.04)' }} />
                <div style={{ padding: 18 }}>
                  <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 4px' }}>{s.name}</h3>
                  <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 12px' }}>Peça uma conta empresarial</h2>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-300)', margin: '0 0 32px' }}>
          Diga-nos as suas rotas e volume habituais — criamos uma conta e uma tarifa fixa.
        </p>
        <CorporateForm lang="pt" />
      </section>

      <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '56px 0', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', font: '600 11px var(--font-body)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone-400)', marginBottom: 28 }}>
          A confiança de quem recebe
        </div>
        <div className="ig-home-marquee-track" style={{ display: 'flex', gap: 72, alignItems: 'center', width: 'max-content' }}>
          {[...HOTELS, ...HOTELS].map((name, i) => (
            <span key={i} aria-hidden={i >= HOTELS.length ? 'true' : undefined} style={{ font: '500 18px var(--font-body)', color: '#8a938c', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
              {name}
            </span>
          ))}
        </div>
      </section>

      <DarkFooter lang="pt" />
      <WhatsAppButton />
    </div>
  );
}
