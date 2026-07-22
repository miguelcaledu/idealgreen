'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const SERVICES = [
  {
    href: '/transfers',
    kicker: 'Airport Transfers',
    headline: 'Smooth landings, every time.',
    body: 'Your driver tracks your flight and waits with your name — delay or not.',
    image: '/assets/fleet-tesla-hotel-day.jpg',
    alt: 'Tesla Model Y transfer',
  },
  {
    href: '/tours',
    kicker: 'Private Tours',
    headline: 'Portugal, at your pace.',
    body: "Stay longer where you're happy. Skip what doesn't interest you.",
    image: '/assets/tesla-sintra-pena-palace.jpg',
    alt: 'Private tour to Sintra',
  },
  {
    href: '/corporate',
    kicker: 'Business Transfers',
    headline: 'Arrive ready.',
    body: 'Quiet cabin, punctual pickups, monthly invoicing.',
    image: '/assets/fleet-tesla-charging.jpg',
    alt: 'Business transfer fleet',
  },
  {
    href: '/classic-cars',
    kicker: 'Classic Cars',
    headline: 'Timeless arrivals.',
    body: 'A classic Mercedes, decorated for your day.',
    image: '/assets/classic-mercedes-ponton-wedding-front.jpg',
    alt: 'Classic Mercedes for weddings',
  },
  {
    href: '/tailor-made',
    kicker: 'Tailor-Made Journeys',
    headline: 'Built around you.',
    body: 'Tell us the shape of your trip. We plan the roads, the stops, and the pace.',
    image: '/assets/guests-couple-guide.jpg',
    alt: 'Private guide with guests',
  },
];

export default function ServiceCarousel() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const amount = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 32px 96px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <p
          style={{
            font: 'var(--text-caption)',
            letterSpacing: 'var(--tracking-caption)',
            textTransform: 'uppercase',
            color: 'var(--green-700)',
            margin: '0 0 12px',
          }}
        >
          What we do
        </p>
        <h2 style={{ font: 'var(--text-h1)', margin: '0 0 16px' }}>Five ways to move through Portugal.</h2>
        <p style={{ font: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: 640, margin: '0 auto' }}>
          One driver, one standard, whichever way you're travelling.
        </p>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginBottom: 16 }}>
        <button
          type="button"
          aria-label="Previous services"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1.5px solid var(--border-default)',
            background: '#fff',
            color: atStart ? 'var(--stone-300)' : 'var(--green-700)',
            fontSize: 18,
            cursor: atStart ? 'default' : 'pointer',
          }}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next services"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1.5px solid var(--border-default)',
            background: '#fff',
            color: atEnd ? 'var(--stone-300)' : 'var(--green-700)',
            fontSize: 18,
            cursor: atEnd ? 'default' : 'pointer',
          }}
        >
          ›
        </button>
      </div>

      <div
        ref={trackRef}
        className="ig-carousel-track"
        role="region"
        aria-label="Our services"
        style={{
          display: 'flex',
          gap: 24,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: 4,
        }}
      >
        {SERVICES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            data-card
            className="ig-service-card"
            style={{
              scrollSnapAlign: 'start',
              flex: '0 0 clamp(240px, 32vw, 280px)',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              border: '1px solid var(--border-subtle)',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
            }}
          >
            <div style={{ overflow: 'hidden', height: 170 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.alt}
                style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ padding: 22 }}>
              <div
                style={{
                  font: 'var(--text-caption)',
                  letterSpacing: 'var(--tracking-caption)',
                  textTransform: 'uppercase',
                  color: 'var(--green-700)',
                  marginBottom: 8,
                }}
              >
                {s.kicker}
              </div>
              <h3 style={{ font: 'var(--text-h4)', margin: '0 0 8px' }}>{s.headline}</h3>
              <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)', margin: '0 0 12px' }}>{s.body}</p>
              <span style={{ font: '600 14px var(--font-body)', color: 'var(--green-700)' }}>Learn more →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
