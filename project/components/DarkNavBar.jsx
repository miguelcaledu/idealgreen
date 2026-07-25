'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { asset } from '@/lib/basePath';

const LINKS = {
  en: [
    { href: '/transfers', label: 'Airport & Private Transfers' },
    { href: '/tours', label: 'Private Tours' },
    { href: '/corporate', label: 'Corporate' },
    { href: '/classic-cars', label: 'Classic Cars' },
    { href: '/about', label: 'About' },
  ],
  pt: [
    { href: '/transfers-pt', label: 'Transfers de Aeroporto e Privados' },
    { href: '/tours-pt', label: 'Tours Privados' },
    { href: '/corporate-pt', label: 'Empresas' },
    { href: '/classic-cars-pt', label: 'Carros Clássicos' },
    { href: '/about-pt', label: 'Sobre' },
  ],
};

export default function DarkNavBar({ lang = 'en', altHref = '/pt' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = LINKS[lang];
  const bookHref = lang === 'pt' ? '/contact-pt' : '/contact';
  const bookLabel = lang === 'pt' ? 'Reservar' : 'Book Journey';
  const altLabel = lang === 'pt' ? 'EN' : 'PT';
  const homeHref = lang === 'pt' ? '/pt' : '/';

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
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, position: 'relative' }}>
        <Link href={homeHref} style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/assets/logo-wordmark-white.png')} alt="Idealgreen" style={{ height: 26, display: 'block' }} />
        </Link>
        <button
          className="ig-nav-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: '1px solid rgba(255,255,255,0.35)',
            color: 'var(--stone-100)',
            width: 40,
            height: 40,
            fontSize: 18,
            cursor: 'pointer',
          }}
        >
          {mobileOpen ? '×' : '☰'}
        </button>
        <nav
          className={`ig-nav-links${mobileOpen ? ' ig-nav-links-open' : ''}`}
          onClick={(e) => {
            if (e.target.closest('a')) setMobileOpen(false);
          }}
        >
          {links.map((l) => (
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
            href={altHref}
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
            {altLabel}
          </Link>
        </nav>
        <Link href={bookHref} className="ig-btn-primary">
          {bookLabel}
        </Link>
      </div>
    </header>
  );
}
