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
        background: '#fff',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        textAlign: 'left',
        textDecoration: 'none',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, font: '600 17px var(--font-body)', color: 'var(--text-primary)' }}>
        <span>{from}</span>
        <span style={{ color: 'var(--green-600)' }}>→</span>
        <span>{to}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {duration && <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{duration}</span>}
        <span style={{ font: '600 18px var(--font-display)', color: 'var(--green-700)' }}>{price}</span>
      </div>
    </Link>
  );
}
