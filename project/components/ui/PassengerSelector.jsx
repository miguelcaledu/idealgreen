'use client';

function Row({ label, count, onChange, min = 0 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
      <span style={{ font: 'var(--text-body)', color: 'var(--text-primary)' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, count - 1))}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1.5px solid var(--border-default)',
            background: '#fff',
            color: 'var(--green-700)',
            fontSize: 16,
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          –
        </button>
        <span style={{ width: 20, textAlign: 'center', font: '600 15px var(--font-body)' }}>{count}</span>
        <button
          type="button"
          onClick={() => onChange(count + 1)}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1.5px solid var(--green-700)',
            background: 'var(--green-700)',
            color: '#fff',
            fontSize: 16,
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function PassengerSelector({ adults, children, onAdultsChange, onChildrenChange }) {
  return (
    <div
      style={{
        border: '1.5px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: '6px 16px',
        background: '#fff',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Row label="Adults" count={adults} onChange={onAdultsChange} min={1} />
      <div style={{ height: 1, background: 'var(--border-subtle)' }} />
      <Row label="Children" count={children} onChange={onChildrenChange} min={0} />
    </div>
  );
}
