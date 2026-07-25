import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ToursGrid from '@/components/tours/ToursGrid';
import { asset } from '@/lib/basePath';

export const metadata = {
  title: 'Tours Privados em Portugal | Sintra, Fátima, Évora, Algarve | Idealgreen',
  description:
    'Tours privados a Sintra, viagens de dia a Fátima, tours a Évora e ao Algarve de carro — preço total por veículo, motoristas conhecedores, itinerários flexíveis.',
};

const FOOTER_ROUTES = [
  { label: 'Lisboa–Porto · €370', href: '/transfers-pt' },
  { label: 'Lisboa–Faro · €315', href: '/transfers-pt' },
  { label: 'Lisboa–Sintra · €45', href: '/transfers-pt' },
  { label: 'Lisboa–Évora · €190', href: '/transfers-pt' },
];

export default function ToursPtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/tours" />

      <section style={{ position: 'relative', height: '78vh', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/tesla-sintra-pena-palace.jpg')}
          alt="Veículo de tour privado a chegar ao Palácio da Pena, Sintra"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.1) contrast(1.08) brightness(0.85)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(14,21,18,0.92) 0%,rgba(14,21,18,0.25) 55%,rgba(14,21,18,0.45) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 32px 72px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ font: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 16 }}>
            Tours Privados
          </div>
          <h1 style={{ font: '600 4rem/1.02 var(--font-display)', color: '#fff', margin: '0 0 18px', maxWidth: 720 }}>Portugal, ao seu ritmo.</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-100)', maxWidth: 600, margin: 0 }}>
            Um veículo, um motorista, o seu horário. Os preços são totais por veículo, não por pessoa.
          </p>
        </div>
      </section>

      <ToursGrid lang="pt" />

      <DarkFooter lang="pt" routes={FOOTER_ROUTES} />
      <WhatsAppButton />
    </div>
  );
}
