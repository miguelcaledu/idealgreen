import Link from 'next/link';
import { asset } from '@/lib/basePath';

const ROUTES = [
  { label: 'Lisbon–Porto · €370', href: '/transfers' },
  { label: 'Lisbon–Faro · €315', href: '/transfers' },
  { label: 'Lisbon–Sintra · €45', href: '/transfers' },
  { label: 'Lisbon–Évora · €190', href: '/transfers' },
  { label: 'Lisbon–Fátima · €165', href: '/transfers' },
  { label: 'Lisbon–Seville', href: '/transfers' },
];

const COMPANY = [
  { label: 'Private Tours', href: '/tours' },
  { label: 'Tailor-Made Journeys', href: '/tailor-made' },
  { label: 'Corporate Mobility', href: '/corporate' },
  { label: 'Classic Cars & Events', href: '/classic-cars' },
  { label: 'About Us', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--green-900)', color: 'var(--stone-100)', padding: '64px 32px 28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="ig-footer-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/assets/logo-wordmark-white.png')} alt="Idealgreen" style={{ height: 22, marginBottom: 14, display: 'block' }} />
          <p style={{ font: 'var(--text-body-sm)', color: 'var(--stone-300)', maxWidth: 260, margin: '0 0 16px' }}>
            The private, comfortable and responsible way to discover Portugal.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://instagram.com/idealgreen_tours" style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
              Instagram
            </a>
            <a href="#" style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
              LinkedIn
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          <span style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 2 }}>
            Popular routes
          </span>
          {ROUTES.map((r, i) => (
            <Link key={i} href={r.href} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
              {r.label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          <span style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 2 }}>
            Company
          </span>
          {COMPANY.map((c) => (
            <Link key={c.href} href={c.href} style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)', textDecoration: 'none' }}>
              {c.label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          <span style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 2 }}>
            Contact
          </span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)' }}>+351 912 926 688</span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)' }}>info@idealgreen.pt</span>
          <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-200)' }}>
            Rua Cesário Verde 35, Loja BB
            <br />
            2790-491 Queijas, Portugal
          </span>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: '36px auto 0',
          paddingTop: 18,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 8,
          font: 'var(--text-caption)',
          color: 'var(--stone-400)',
        }}
      >
        <span>© 2026 Idealgreen · Private tours &amp; transfers since 2022</span>
        <span>Queijas, Oeiras · Lisbon, Portugal</span>
      </div>
    </footer>
  );
}
