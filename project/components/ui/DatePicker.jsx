'use client';

import { useState } from 'react';

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
};

const WEEKDAYS = {
  en: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  pt: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
};

const TIME_CHIPS = (() => {
  const times = [];
  for (let h = 0; h <= 23; h++) {
    times.push(`${String(h).padStart(2, '0')}:00`);
    times.push(`${String(h).padStart(2, '0')}:30`);
  }
  return times;
})();

export default function DatePicker({ label, lang = 'en', variant = 'default', openUp = false }) {
  const now = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [selDay, setSelDay] = useState(null);
  const [selMonth, setSelMonth] = useState(null);
  const [selYear, setSelYear] = useState(null);
  const [selTime, setSelTime] = useState(null);

  const pt = lang === 'pt';
  const months = MONTHS[pt ? 'pt' : 'en'];
  const weekdays = WEEKDAYS[pt ? 'pt' : 'en'];
  const today = new Date();
  const firstDow = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDow; i++) {
    cells.push({ key: `blank-${i}`, label: '', disabled: true, cursor: 'default', bg: 'transparent', color: 'transparent', font: 'var(--text-body-sm)', onClick: () => {} });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isPast = new Date(viewYear, viewMonth, d, 23, 59) < today;
    const isSel = selDay === d && selMonth === viewMonth && selYear === viewYear;
    const isToday = d === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
    cells.push({
      key: `day-${d}`,
      label: String(d),
      disabled: isPast,
      cursor: isPast ? 'not-allowed' : 'pointer',
      bg: isSel ? 'var(--green-700)' : 'transparent',
      color: isPast ? 'var(--stone-300)' : isSel ? '#fff' : isToday ? 'var(--green-700)' : 'var(--text-primary)',
      font: isSel || isToday ? '600 14px var(--font-body)' : '400 14px var(--font-body)',
      onClick: () => {
        setSelDay(d);
        setSelMonth(viewMonth);
        setSelYear(viewYear);
      },
    });
  }

  const hasSel = selDay !== null;
  const display = hasSel
    ? `${String(selDay).padStart(2, '0')} ${months[selMonth].slice(0, 3)} ${selYear}${selTime ? ' · ' + selTime : ''}`
    : pt
    ? 'Escolha data e hora'
    : 'Pick a date and time';

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isBar = variant === 'bar';

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: isBar ? 8 : 6, fontFamily: 'var(--font-body)', width: '100%' }}>
      <span
        style={{
          font: isBar ? '600 11px var(--font-body)' : 'var(--text-caption)',
          letterSpacing: isBar ? '0.09em' : 'var(--tracking-caption)',
          textTransform: 'uppercase',
          color: isBar ? 'var(--stone-400)' : 'var(--text-muted)',
        }}
      >
        {label ?? (pt ? 'Data e hora' : 'Date & time')}
      </span>
      <button
        onClick={() => setOpen((o) => !o)}
        type="button"
        style={
          isBar
            ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                border: 'none',
                padding: 0,
                background: 'transparent',
                font: '400 16px var(--font-body)',
                color: '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
              }
            : {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                border: `1.5px solid ${open ? 'var(--green-600)' : 'var(--border-default)'}`,
                padding: '12px 14px',
                background: '#fff',
                font: 'var(--text-body)',
                color: hasSel ? 'var(--text-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                textAlign: 'left',
              }
        }
      >
        <span>{display}</span>
        <span style={{ fontSize: 15, color: isBar ? 'var(--stone-400)' : 'var(--green-700)' }}>▦</span>
      </button>

      <div
        style={{
          position: 'absolute',
          ...(openUp ? { bottom: '100%', marginBottom: 10 } : { top: '100%', marginTop: 6 }),
          left: 0,
          background: '#fff',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 70,
          width: 308,
          maxWidth: '90vw',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : `translateY(${openUp ? 8 : -8}px)`,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 180ms ease,transform 180ms ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
          <button onClick={prevMonth} type="button" style={{ background: 'none', border: 'none', fontSize: 18, color: 'var(--green-700)', cursor: 'pointer', padding: '2px 8px' }}>
            ‹
          </button>
          <div style={{ font: '500 19px var(--font-display)', color: 'var(--text-primary)' }}>
            {months[viewMonth]} {viewYear}
          </div>
          <button onClick={nextMonth} type="button" style={{ background: 'none', border: 'none', fontSize: 18, color: 'var(--green-700)', cursor: 'pointer', padding: '2px 8px' }}>
            ›
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, padding: '10px 12px 4px' }}>
          {weekdays.map((w, i) => (
            <div key={i} style={{ textAlign: 'center', font: 'var(--text-caption)', color: 'var(--text-muted)', padding: '4px 0' }}>
              {w}
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, padding: '0 12px 10px' }}>
          {cells.map((c) => (
            <button
              key={c.key}
              onClick={c.onClick}
              type="button"
              disabled={c.disabled}
              style={{ height: 34, border: 'none', cursor: c.cursor, background: c.bg, color: c.color, font: c.font, borderRadius: 0 }}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '12px 16px' }}>
          <div
            style={{
              font: 'var(--text-caption)',
              letterSpacing: 'var(--tracking-caption)',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 8,
            }}
          >
            {pt ? 'Hora' : 'Time'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, maxHeight: 120, overflowY: 'auto' }}>
            {TIME_CHIPS.map((t) => (
              <button
                key={t}
                onClick={() => setSelTime(t)}
                type="button"
                style={{
                  padding: '8px 0',
                  border: `1.5px solid ${selTime === t ? 'var(--green-700)' : 'var(--border-default)'}`,
                  background: selTime === t ? 'var(--green-700)' : '#fff',
                  color: selTime === t ? '#fff' : 'var(--text-primary)',
                  font: '600 13px var(--font-body)',
                  cursor: 'pointer',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={() => setOpen(false)}
            type="button"
            style={{ background: 'var(--green-700)', color: '#fff', border: 'none', padding: '10px 22px', font: 'var(--text-button)', letterSpacing: 'var(--tracking-button)', cursor: 'pointer' }}
          >
            {pt ? 'Confirmar' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
}
