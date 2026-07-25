'use client';

import { useState } from 'react';

export default function FAQAccordion({ items = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ fontFamily: 'var(--font-body)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      {items.map((it, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: '20px 4px',
              cursor: 'pointer',
              textAlign: 'left',
              font: '600 16px var(--font-body)',
              color: 'var(--stone-100)',
            }}
          >
            {it.question}
            <span
              style={{
                fontSize: 18,
                color: 'var(--green-300)',
                transform: open === i ? 'rotate(45deg)' : 'none',
                transition: 'transform var(--duration-fast)',
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 4px 20px', font: 'var(--text-body)', color: 'var(--stone-300)', maxWidth: 640 }}>{it.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
