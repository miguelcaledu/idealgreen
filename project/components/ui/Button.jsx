'use client';

import { useState } from 'react';

const sizes = {
  sm: { padding: '8px 16px', font: '600 13px/1 var(--font-body)' },
  md: { padding: '12px 22px', font: 'var(--text-button)' },
  lg: { padding: '16px 28px', font: '600 16px/1 var(--font-body)' },
};

const variants = {
  primary: { background: 'var(--green-700)', color: 'var(--text-on-brand)' },
  secondary: { background: 'transparent', color: 'var(--green-700)', borderColor: 'var(--green-700)' },
  ghost: { background: 'transparent', color: 'var(--charcoal-700)', borderColor: 'transparent' },
};

const hoverBg = {
  primary: 'var(--green-800)',
  secondary: 'var(--green-50)',
  ghost: 'var(--stone-100)',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick,
  type = 'button',
  style: styleOverride,
}) {
  const [hover, setHover] = useState(false);

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition:
      'background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)',
    letterSpacing: 'var(--tracking-button)',
    opacity: disabled ? 0.45 : 1,
    ...sizes[size],
  };

  const style = {
    ...base,
    ...variants[variant],
    background: hover && !disabled ? hoverBg[variant] : variants[variant].background,
    ...styleOverride,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      style={style}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {children}
    </button>
  );
}
