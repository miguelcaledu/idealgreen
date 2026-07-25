'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from '../ui/DatePicker';
import Select from '../ui/Select';
import Input from '../ui/Input';
import Button from '../ui/Button';

const COPY = {
  en: {
    heading: 'Request a proposal',
    intro: 'Tell us the shape of the trip — we reply with a day-by-day plan and a total price per vehicle.',
    step1: 'Step 1 of 4 — Dates',
    step2: 'Step 2 of 4 — Group',
    step3: 'Step 3 of 4 — Interests',
    step4: 'Step 4 of 4 — Contact',
    startDate: 'Preferred start date',
    groupSizeLabel: 'Group size',
    groupSizePlaceholder: 'Select group size',
    groupSizeOptions: [
      { value: '2', label: '2 people' },
      { value: '3-4', label: '3–4 people' },
      { value: '5-7', label: '5–7 people' },
      { value: '8+', label: '8 or more' },
    ],
    mobility: 'Mobility needs (optional)',
    mobilityPlaceholder: 'Wheelchair access, reduced walking, etc.',
    interests: 'Interests',
    interestsPlaceholder: 'Food, wine, history, beaches...',
    fullName: 'Full name',
    fullNamePlaceholder: 'Your name',
    email: 'Email',
    back: 'Back',
    continue: 'Continue',
    requestProposal: 'Request a proposal',
    contactHref: '/contact',
    datePickerLang: 'en',
  },
  pt: {
    heading: 'Peça uma proposta',
    intro: 'Diga-nos o formato da viagem — respondemos com um plano dia a dia e um preço total por veículo.',
    step1: 'Passo 1 de 4 — Datas',
    step2: 'Passo 2 de 4 — Grupo',
    step3: 'Passo 3 de 4 — Interesses',
    step4: 'Passo 4 de 4 — Contacto',
    startDate: 'Data de início preferida',
    groupSizeLabel: 'Dimensão do grupo',
    groupSizePlaceholder: 'Selecione a dimensão do grupo',
    groupSizeOptions: [
      { value: '2', label: '2 pessoas' },
      { value: '3-4', label: '3–4 pessoas' },
      { value: '5-7', label: '5–7 pessoas' },
      { value: '8+', label: '8 ou mais' },
    ],
    mobility: 'Necessidades de mobilidade (opcional)',
    mobilityPlaceholder: 'Acesso para cadeira de rodas, mobilidade reduzida, etc.',
    interests: 'Interesses',
    interestsPlaceholder: 'Gastronomia, vinhos, história, praias...',
    fullName: 'Nome completo',
    fullNamePlaceholder: 'O seu nome',
    email: 'Email',
    back: 'Voltar',
    continue: 'Continuar',
    requestProposal: 'Pedir proposta',
    contactHref: '/contact-pt',
    datePickerLang: 'pt',
  },
};

export default function ProposalWizard({ lang = 'en' }) {
  const t = COPY[lang];
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [groupSize, setGroupSize] = useState('');
  const [mobilityNeeds, setMobilityNeeds] = useState('');
  const [interests, setInterests] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const nextLabel = step === 3 ? t.requestProposal : t.continue;

  const nextStep = () => {
    if (step === 3) {
      router.push(t.contactHref);
    } else {
      setStep((s) => Math.min(3, s + 1));
    }
  };
  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  return (
    <section style={{ background: '#0f1613', padding: '72px 32px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: '0 0 8px' }}>{t.heading}</h2>
        <p style={{ font: 'var(--text-body)', color: 'var(--stone-300)', margin: '0 0 32px' }}>{t.intro}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ flex: 1, height: 4, background: i <= step ? 'var(--green-700)' : 'rgba(255,255,255,0.1)', transition: 'background 300ms' }} />
          ))}
        </div>

        <div>
          {step === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--stone-400)' }}>
                {t.step1}
              </div>
              <DatePicker label={t.startDate} lang={t.datePickerLang} />
            </div>
          )}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--stone-400)' }}>
                {t.step2}
              </div>
              <Select label={t.groupSizeLabel} options={t.groupSizeOptions} value={groupSize} onChange={setGroupSize} placeholder={t.groupSizePlaceholder} />
              <Input label={t.mobility} placeholder={t.mobilityPlaceholder} value={mobilityNeeds} onChange={(e) => setMobilityNeeds(e.target.value)} />
            </div>
          )}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--stone-400)' }}>
                {t.step3}
              </div>
              <Input label={t.interests} placeholder={t.interestsPlaceholder} value={interests} onChange={(e) => setInterests(e.target.value)} />
            </div>
          )}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--stone-400)' }}>
                {t.step4}
              </div>
              <div className="ig-booking-grid">
                <Input label={t.fullName} placeholder={t.fullNamePlaceholder} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <Input label={t.email} placeholder="you@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32 }}>
          <Button variant="ghost" size="md" onClick={prevStep} disabled={step === 0}>
            {t.back}
          </Button>
          <Button variant="primary" size="md" onClick={nextStep}>
            {nextLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
