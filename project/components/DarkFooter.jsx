import { asset } from '@/lib/basePath';

const DEFAULT_ROUTES = {
  en: [
    { label: 'Lisbon–Porto · €370', href: '/transfers' },
    { label: 'Lisbon–Faro · €315', href: '/transfers' },
    { label: 'Lisbon–Sintra · €45', href: '/transfers' },
    { label: 'Lisbon–Évora · €190', href: '/transfers' },
    { label: 'Lisbon–Seville', href: '/transfers' },
  ],
  pt: [
    { label: 'Lisboa–Porto · €370', href: '/transfers-pt' },
    { label: 'Lisboa–Faro · €315', href: '/transfers-pt' },
    { label: 'Lisboa–Sintra · €45', href: '/transfers-pt' },
    { label: 'Lisboa–Évora · €190', href: '/transfers-pt' },
    { label: 'Lisboa–Sevilha', href: '/transfers-pt' },
  ],
};

const COMPANY = {
  en: [
    { label: 'Private Tours', href: '/tours' },
    { label: 'Tailor-Made Journeys', href: '/tailor-made' },
    { label: 'Corporate Mobility', href: '/corporate' },
    { label: 'Classic Cars & Events', href: '/classic-cars' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
  pt: [
    { label: 'Tours Privados', href: '/tours-pt' },
    { label: 'Viagens à Medida', href: '/tailor-made-pt' },
    { label: 'Mobilidade Empresarial', href: '/corporate-pt' },
    { label: 'Carros Clássicos e Eventos', href: '/classic-cars-pt' },
    { label: 'Sobre Nós', href: '/about-pt' },
    { label: 'FAQ', href: '/faq-pt' },
  ],
};

const COPY = {
  en: {
    tagline: 'Private journeys through Portugal, designed around you.',
    routes: 'Popular routes',
    company: 'Company',
    contact: 'Contact',
    copyright: '© 2026 Idealgreen · Private tours & transfers since 2022',
  },
  pt: {
    tagline: 'Viagens privadas por Portugal, pensadas para si.',
    routes: 'Rotas populares',
    company: 'Empresa',
    contact: 'Contacto',
    copyright: '© 2026 Idealgreen · Tours e transfers privados desde 2022',
  },
};

export default function DarkFooter({ lang = 'en', routes }) {
  const t = COPY[lang];
  const routeList = routes || DEFAULT_ROUTES[lang];
  const companyList = COMPANY[lang];

  return (
    <footer style={{ background: '#0a0f0c', color: 'var(--stone-100)', padding: '80px 40px 32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="ig-footer-grid" style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/assets/logo-wordmark-white.png')} alt="Idealgreen" style={{ height: 24, marginBottom: 18, display: 'block' }} />
          <p style={{ font: '400 0.95rem/1.6 var(--font-body)', color: 'var(--stone-400)', maxWidth: 280, margin: '0 0 20px' }}>{t.tagline}</p>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="https://instagram.com/idealgreen_tours" style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
              Instagram
            </a>
            <a href="#" style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
              LinkedIn
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          <span style={{ font: 'var(--text-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 4 }}>{t.routes}</span>
          {routeList.map((r, i) => (
            <a key={i} href={r.href} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', textDecoration: 'none' }}>
              {r.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          <span style={{ font: 'var(--text-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 4 }}>{t.company}</span>
          {companyList.map((c) => (
            <a key={c.href} href={c.href} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', textDecoration: 'none' }}>
              {c.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          <span style={{ font: 'var(--text-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 4 }}>{t.contact}</span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>+351 912 926 688</span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>info@idealgreen.pt</span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)' }}>
            Rua Cesário Verde 35, Loja BB
            <br />
            2790-491 Queijas, Portugal
          </span>
        </div>
      </div>
      <div style={{ maxWidth: 1320, margin: '48px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, font: 'var(--text-caption)', color: '#8a938c' }}>
        <span>{t.copyright}</span>
        <span>Queijas, Oeiras · Lisbon, Portugal</span>
      </div>
    </footer>
  );
}
