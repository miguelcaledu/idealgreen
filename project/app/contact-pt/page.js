import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import BookingForm from '@/components/contact/BookingForm';

export const metadata = {
  title: 'Reservar um Transfer ou Tour | Contacto Idealgreen',
  description:
    'Reserve um transfer ou tour privado com a Idealgreen. Telefone, WhatsApp, email e a nossa morada em Queijas, Oeiras — resposta em um dia útil.',
};

export default function ContactPtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/contact" />

      <section style={{ background: '#0f1613', padding: '120px 32px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ font: '600 3rem/1.1 var(--font-display)', color: '#fff', margin: '0 0 14px', maxWidth: 640 }}>Reserve um transfer ou tour</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-200)', margin: 0, maxWidth: 640 }}>
            Respondemos em um dia útil, normalmente muito mais rápido no WhatsApp [CONFIRMAR tempo de resposta].
          </p>
        </div>
      </section>

      <section className="ig-contact-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 32px 80px', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 48, alignItems: 'start' }}>
        <BookingForm lang="pt" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 24, background: '#0f1613' }}>
            <h3 style={{ font: 'var(--text-h4)', color: '#fff', margin: '0 0 16px' }}>Contacte-nos diretamente</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>
              <a href="tel:+351912926688" style={{ textDecoration: 'none', color: 'var(--stone-300)' }}>☎ +351 912 926 688</a>
              <a href="https://wa.me/351912926688" style={{ textDecoration: 'none', color: 'var(--stone-300)' }}>WhatsApp: +351 912 926 688</a>
              <a href="mailto:info@idealgreen.pt" style={{ textDecoration: 'none', color: 'var(--stone-300)' }}>info@idealgreen.pt</a>
              <span>
                Rua Cesário Verde 35, Loja BB
                <br />
                2790-491 Queijas, Portugal
              </span>
            </div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
            <iframe
              title="Localização do escritório da Idealgreen"
              src="https://www.google.com/maps?q=Rua+Ces%C3%A1rio+Verde+35,+2790-491+Queijas,+Portugal&output=embed"
              style={{ width: '100%', height: 240, border: 0, display: 'block' }}
            />
          </div>
        </div>
      </section>

      <DarkFooter lang="pt" />
    </div>
  );
}
