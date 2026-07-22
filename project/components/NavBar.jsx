'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './ui/Button';
import { asset } from '@/lib/basePath';

const SERVICES = [
  { href: '/transfers', label: 'Airport & Private Transfers' },
  { href: '/tours', label: 'Private Tours' },
  { href: '/tailor-made', label: 'Tailor-Made Journeys' },
  { href: '/classic-cars', label: 'Classic Cars & Events' },
];

export default function NavBar({ dark = false, activePage = null, bookingDisabled = false, bookLabel = 'Book now' }) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const getThreshold = () => document.getElementById('ig-hero')?.offsetHeight ?? 560;
    const onScroll = () => setScrolled(window.scrollY >= getThreshold());
    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: scrolled ? 'rgba(14,21,18,0.92)' : dark ? 'rgba(14,21,18,0.35)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'background 300ms ease',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
          position: 'relative',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
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
            borderRadius: 'var(--radius-md)',
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
          <Link
            href="/"
            className="ig-nav-link"
            style={{
              font: activePage === 'home' ? '600 15px var(--font-body)' : '500 15px var(--font-body)',
              color: activePage === 'home' ? 'var(--green-300)' : 'var(--stone-100)',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setServicesOpen((o) => !o)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--stone-100)',
                font: '500 15px var(--font-body)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 0',
              }}
            >
              Our Services
              <span style={{ fontSize: 14, transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}>▾</span>
            </button>
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: 10,
                background: '#fff',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                minWidth: 260,
                overflow: 'hidden',
                opacity: servicesOpen ? 1 : 0,
                transform: servicesOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 200ms ease,transform 200ms ease',
                pointerEvents: servicesOpen ? 'auto' : 'none',
                zIndex: 60,
              }}
            >
              {SERVICES.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="ig-services-item"
                  style={{
                    display: 'block',
                    padding: '14px 18px',
                    font: '500 14px var(--font-body)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: i < SERVICES.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/corporate"
            className="ig-nav-link"
            style={{
              font: activePage === 'corporate' ? '600 15px var(--font-body)' : '500 15px var(--font-body)',
              color: activePage === 'corporate' ? 'var(--green-300)' : 'var(--stone-100)',
              textDecoration: 'none',
            }}
          >
            For Business
          </Link>
          <Link
            href="/faq"
            className="ig-nav-link"
            style={{
              font: activePage === 'faq' ? '600 15px var(--font-body)' : '500 15px var(--font-body)',
              color: activePage === 'faq' ? 'var(--green-300)' : 'var(--stone-100)',
              textDecoration: 'none',
            }}
          >
            FAQ
          </Link>
          <Link
            href="/about"
            className="ig-nav-link"
            style={{
              font: activePage === 'about' ? '600 15px var(--font-body)' : '500 15px var(--font-body)',
              color: activePage === 'about' ? 'var(--green-300)' : 'var(--stone-100)',
              textDecoration: 'none',
            }}
          >
            About
          </Link>
          <Link
            href="/pt"
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: 'var(--radius-pill)',
              color: 'var(--stone-100)',
              font: '600 12px var(--font-body)',
              padding: '6px 12px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            PT
          </Link>
        </nav>
        {bookingDisabled ? (
          <Button variant="ghost" size="md" disabled style={{ color: '#fff' }}>
            {bookLabel}
          </Button>
        ) : (
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="md">
              {bookLabel}
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
