export default function TrustBar({ reviewScore, reviewCount, since, partners = [] }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 24,
        padding: '20px 0',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {reviewScore && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: 'var(--sand-500)' }}>★★★★★</span>
          <span style={{ font: '600 14px var(--font-body)', color: 'var(--text-primary)' }}>{reviewScore} / 5</span>
          {reviewCount && <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>({reviewCount} Google reviews)</span>}
        </div>
      )}
      {since && <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>Private tours & transfers since {since}</div>}
      {partners.length > 0 && (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          {partners.map((p, i) => (
            <span key={i} style={{ font: '600 13px var(--font-body)', color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
