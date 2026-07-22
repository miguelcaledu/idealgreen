export default function PriceCard({ title, price, duration, maxPassengers, vehicle, included = [], excluded = [], image, onSelect }) {
  return (
    <div
      style={{
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: '#fff',
        boxShadow: 'var(--shadow-sm)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
      )}
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ font: 'var(--text-h4)', color: 'var(--text-primary)' }}>{title}</span>
          <span style={{ font: '600 22px var(--font-display)', color: 'var(--green-700)' }}>{price}</span>
        </div>
        <div style={{ display: 'flex', gap: 16, font: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>
          <span>{duration}</span>
          <span>Up to {maxPassengers}</span>
          <span>{vehicle}</span>
        </div>
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {included.map((it, i) => (
            <div key={`i${i}`} style={{ font: 'var(--text-body-sm)', color: 'var(--text-primary)' }}>
              ✓ {it}
            </div>
          ))}
          {excluded.map((it, i) => (
            <div key={`e${i}`} style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
              – {it}
            </div>
          ))}
        </div>
        <button
          onClick={onSelect}
          style={{
            marginTop: 4,
            background: 'var(--green-700)',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-pill)',
            padding: '12px 0',
            font: 'var(--text-button)',
            cursor: 'pointer',
          }}
        >
          Check availability
        </button>
      </div>
    </div>
  );
}
