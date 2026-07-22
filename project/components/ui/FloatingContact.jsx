'use client';

import { useState } from 'react';

export default function FloatingContact({ phone = '+351900000000', whatsapp = '351900000000' }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
        fontFamily: 'var(--font-body)',
        zIndex: 50,
      }}
    >
      {open && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            background: '#fff',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            padding: 10,
          }}
        >
          <a
            href={`https://wa.me/${whatsapp}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              font: '500 14px var(--font-body)',
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 14,
              }}
            >
              W
            </span>
            WhatsApp
          </a>
          <a
            href={`tel:${phone}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              font: '500 14px var(--font-body)',
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'var(--green-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 14,
              }}
            >
              ☎
            </span>
            Call us
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--green-700)',
          color: '#fff',
          border: 'none',
          boxShadow: 'var(--shadow-lg)',
          fontSize: 22,
          cursor: 'pointer',
        }}
      >
        {open ? '×' : '●'}
      </button>
    </div>
  );
}
