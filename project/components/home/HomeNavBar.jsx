'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { asset } from '@/lib/basePath';

const LINKS = [
  { href: '/transfers', label: 'Airport & Private Transfers' },
  { href: '/tours', label: 'Private Tours' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/classic-cars', label: 'Classic Cars' },
  { href: '/about', label: 'About' },
];

export default function HomeNavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: scrolled ? 'rgba(10,15,12,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background 400ms ease',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/assets/logo-wordmark-white.png')} alt="Idealgreen" style={{ height: 26, display: 'block' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36, flexWrap: 'wrap' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="ig-nav-link"
                style={{ font: '500 14px var(--font-body)', color: 'var(--stone-100)', textDecoration: 'none', letterSpacing: '0.02em' }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/pt"
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'var(--stone-100)',
                font: '600 11px var(--font-body)',
                padding: '6px 11px',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                display: 'inline-block',
              }}
            >
              PT
            </Link>
          </nav>
          <Link href="/contact" className="ig-btn-primary">
            Book Journey
          </Link>
        </div>
      </div>
    </header>
  );
}
