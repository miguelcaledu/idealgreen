'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from '../ui/DatePicker';
import Select from '../ui/Select';
import Input from '../ui/Input';
import Button from '../ui/Button';

const GROUP_SIZE_OPTIONS = [
  { value: '2', label: '2 people' },
  { value: '3-4', label: '3–4 people' },
  { value: '5-7', label: '5–7 people' },
  { value: '8+', label: '8 or more' },
];

export default function ProposalWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [groupSize, setGroupSize] = useState('');
  const [mobilityNeeds, setMobilityNeeds] = useState('');
  const [interests, setInterests] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const nextLabel = step === 3 ? 'Request a proposal' : 'Continue';

  const nextStep = () => {
    if (step === 3) {
      router.push('/contact');
    } else {
      setStep((s) => Math.min(3, s + 1));
    }
  };
  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  return (
    <section style={{ background: 'var(--bg-surface-sunken)', padding: '72px 32px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2 style={{ font: 'var(--text-h2)', margin: '0 0 8px' }}>Request a proposal</h2>
        <p style={{ font: 'var(--text-body)', color: 'var(--text-secondary)', margin: '0 0 32px' }}>
          Tell us the shape of the trip — we reply with a day-by-day plan and a total price per vehicle.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ flex: 1, height: 4, background: i <= step ? 'var(--green-700)' : 'var(--border-subtle)', transition: 'background 300ms' }} />
          ))}
        </div>

        <div>
          {step === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Step 1 of 4 — Dates
              </div>
              <DatePicker label="Preferred start date" lang="en" />
            </div>
          )}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Step 2 of 4 — Group
              </div>
              <Select label="Group size" options={GROUP_SIZE_OPTIONS} value={groupSize} onChange={setGroupSize} placeholder="Select group size" />
              <Input label="Mobility needs (optional)" placeholder="Wheelchair access, reduced walking, etc." value={mobilityNeeds} onChange={(e) => setMobilityNeeds(e.target.value)} />
            </div>
          )}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Step 3 of 4 — Interests
              </div>
              <Input label="Interests" placeholder="Food, wine, history, beaches..." value={interests} onChange={(e) => setInterests(e.target.value)} />
            </div>
          )}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ font: 'var(--text-caption)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Step 4 of 4 — Contact
              </div>
              <div className="ig-booking-grid">
                <Input label="Full name" placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <Input label="Email" placeholder="you@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32 }}>
          <Button variant="ghost" size="md" onClick={prevStep} disabled={step === 0}>
            Back
          </Button>
          <Button variant="primary" size="md" onClick={nextStep}>
            {nextLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
