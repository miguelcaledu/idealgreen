'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { saveSubmission } from '@/lib/supabaseClient';

const COPY = {
  en: {
    companyName: 'Company name',
    companyNamePlaceholder: 'Your company',
    contactEmail: 'Contact email',
    volume: 'Typical monthly volume',
    volumePlaceholder: 'e.g. 10 airport transfers, 4 city trips',
    submit: 'Request a corporate account',
    contactHref: '/contact',
  },
  pt: {
    companyName: 'Nome da empresa',
    companyNamePlaceholder: 'A sua empresa',
    contactEmail: 'Email de contacto',
    volume: 'Volume mensal típico',
    volumePlaceholder: 'ex.: 10 transfers de aeroporto, 4 viagens na cidade',
    submit: 'Peça uma conta empresarial',
    contactHref: '/contact-pt',
  },
};

export default function CorporateForm({ lang = 'en' }) {
  const t = COPY[lang];
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [volume, setVolume] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    await saveSubmission('corporate', lang, { companyName, email, volume });
    router.push(t.contactHref);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, textAlign: 'left', background: '#0f1613', padding: 32, border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="ig-booking-grid">
        <Input label={t.companyName} placeholder={t.companyNamePlaceholder} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <Input label={t.contactEmail} placeholder="you@company.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <Input label={t.volume} placeholder={t.volumePlaceholder} value={volume} onChange={(e) => setVolume(e.target.value)} />
      <Button variant="primary" size="lg" onClick={handleSubmit} disabled={submitting} style={{ alignSelf: 'flex-start' }}>
        {t.submit}
      </Button>
    </div>
  );
}
