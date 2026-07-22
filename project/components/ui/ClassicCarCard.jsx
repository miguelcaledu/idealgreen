export default function ClassicCarCard({ title, price, description, image }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--stone-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', fontFamily: 'var(--font-body)' }}>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
      )}
      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ font: 'italic 500 26px var(--font-classic)', color: 'var(--green-700)' }}>{title}</div>
        {description && <div style={{ font: 'var(--text-body-sm)', color: 'var(--charcoal-800)' }}>{description}</div>}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, paddingTop: 12, borderTop: '1px solid var(--stone-200)' }}>
          <span style={{ font: '600 15px var(--font-display)', color: 'var(--green-700)' }}>{price}</span>
          <span
            style={{
              background: 'var(--green-700)',
              color: '#fff',
              border: '1px solid var(--green-400)',
              borderRadius: 'var(--radius-pill)',
              padding: '8px 16px',
              font: 'var(--text-button)',
            }}
          >
            Enquire
          </span>
        </div>
      </div>
    </div>
  );
}
