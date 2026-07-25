import Link from 'next/link';

export default function RouteCard({ from, to, price, duration, href = '/contact' }) {
  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '18px 22px',
        background: '#0f1613',
        border: '1px solid rgba(255,255,255,0.12)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        textAlign: 'left',
        textDecoration: 'none',
        boxSizing: 'border-box',
        color: 'inherit',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, font: '600 17px var(--font-body)', color: '#fff' }}>
        <span>{from}</span>
        <span style={{ color: 'var(--green-400)' }}>→</span>
        <span>{to}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {duration && <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)' }}>{duration}</span>}
        <span style={{ font: '600 18px var(--font-display)', color: 'var(--green-300)' }}>{price}</span>
      </div>
    </Link>
  );
}
