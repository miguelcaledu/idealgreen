'use client';

import { useState } from 'react';

export default function Input({ label, placeholder, value, onChange, error, helper, type = 'text' }) {
  const [focus, setFocus] = useState(false);
  const borderColor = error ? 'var(--error-500)' : focus ? 'var(--green-400)' : 'rgba(255,255,255,0.16)';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          border: `1.5px solid ${borderColor}`,
          padding: '12px 14px',
          background: '#0c1310',
          transition: 'border-color var(--duration-fast)',
        }}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ border: 'none', outline: 'none', flex: 1, font: 'var(--text-body)', color: '#fff', background: 'transparent' }}
        />
      </div>
      {error ? (
        <span style={{ font: 'var(--text-body-sm)', color: 'var(--error-600)' }}>{error}</span>
      ) : helper ? (
        <span style={{ font: 'var(--text-body-sm)', color: 'var(--stone-400)' }}>{helper}</span>
      ) : null}
    </label>
  );
}
