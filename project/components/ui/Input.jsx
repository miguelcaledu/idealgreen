'use client';

import { useState } from 'react';

export default function Input({ label, placeholder, value, onChange, error, helper, type = 'text' }) {
  const [focus, setFocus] = useState(false);
  const borderColor = error ? 'var(--error-500)' : focus ? 'var(--green-600)' : 'var(--border-default)';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          border: `1.5px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          background: '#fff',
          boxShadow: focus ? 'var(--shadow-focus)' : 'none',
          transition: 'border-color var(--duration-fast),box-shadow var(--duration-fast)',
        }}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ border: 'none', outline: 'none', flex: 1, font: 'var(--text-body)', color: 'var(--text-primary)', background: 'transparent' }}
        />
      </div>
      {error ? (
        <span style={{ font: 'var(--text-body-sm)', color: 'var(--error-600)' }}>{error}</span>
      ) : helper ? (
        <span style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{helper}</span>
      ) : null}
    </label>
  );
}
