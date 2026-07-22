export default function ElectricFleetIndicator({ percent = 100 }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 12px',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--stone-50)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-600)' }} />
      <span style={{ font: '500 13px var(--font-body)', color: 'var(--text-secondary)' }}>
        {percent >= 100 ? 'Fully electric fleet' : `${percent}% electric fleet`}
      </span>
    </div>
  );
}
