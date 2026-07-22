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
            color: 'var(--text-muted)',
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
          border: `1.5px solid ${open ? 'var(--green-600)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          background: '#fff',
          font: 'var(--text-body)',
          color: selected ? 'var(--text-primary)' : 'var(--text-muted)',
          cursor: 'pointer',
        }}
      >
        {selected ? selected.label : placeholder}
        <span
          style={{
            fontSize: 10,
            color: 'var(--text-muted)',
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
            background: '#fff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
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
                background: o.value === value ? 'var(--green-50)' : 'transparent',
                color: o.value === value ? 'var(--green-700)' : 'var(--text-primary)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--stone-100)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = o.value === value ? 'var(--green-50)' : 'transparent')
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
