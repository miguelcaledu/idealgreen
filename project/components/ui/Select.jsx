'use client';

import { useEffect, useRef, useState } from 'react';

export default function Select({ label, options, value, onChange, placeholder = 'Select' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div
      ref={ref}
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}
    >
      {label && (
        <span
          style={{
            font: 'var(--text-caption)',
            letterSpacing: 'var(--tracking-caption)',
            textTransform: 'uppercase',
            color: 'var(--stone-400)',
          }}
        >
          {label}
        </span>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: `1.5px solid ${open ? 'var(--green-400)' : 'rgba(255,255,255,0.16)'}`,
          padding: '12px 14px',
          background: '#0c1310',
          font: 'var(--text-body)',
          color: selected ? '#fff' : 'var(--stone-400)',
          cursor: 'pointer',
        }}
      >
        {selected ? selected.label : placeholder}
        <span
          style={{
            fontSize: 10,
            color: 'var(--stone-400)',
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform var(--duration-fast)',
          }}
        >
          ▾
        </span>
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: 4,
            background: '#0f1613',
            border: '1px solid rgba(255,255,255,0.14)',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          {options.map((o) => (
            <div
              key={o.value}
              onClick={() => {
                onChange && onChange(o.value);
                setOpen(false);
              }}
              style={{
                padding: '10px 14px',
                font: 'var(--text-body)',
                cursor: 'pointer',
                background: o.value === value ? 'rgba(255,255,255,0.06)' : 'transparent',
                color: o.value === value ? 'var(--green-300)' : 'var(--stone-100)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = o.value === value ? 'rgba(255,255,255,0.06)' : 'transparent')
              }
            >
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
