'use client';

import { useState } from 'react';
import Select from '../ui/Select';
import Input from '../ui/Input';
import DatePicker from '../ui/DatePicker';
import PassengerSelector from '../ui/PassengerSelector';
import Button from '../ui/Button';

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'tours', label: 'Tours' },
  { key: 'transfers', label: 'Transfers' },
];

const SERVICE_OPTIONS = [
  { value: 'transfer', label: 'Airport / Private Transfer' },
  { value: 'tour', label: 'Private Tour' },
  { value: 'tailor-made', label: 'Tailor-Made Journey' },
  { value: 'corporate', label: 'Corporate Mobility' },
  { value: 'classic', label: 'Classic Cars & Events' },
];

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState('all');
  const [serviceType, setServiceType] = useState('');
  const [route, setRoute] = useState('');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [luggage, setLuggage] = useState('');
  const [childSeats, setChildSeats] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, borderBottom: '1px solid var(--border-subtle)' }}>
        {TABS.map((t) => {
          const active = activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                background: 'none',
                border: 'none',
                padding: '10px 18px',
                font: '600 15px var(--font-body)',
                cursor: 'pointer',
                color: active ? 'var(--green-700)' : 'var(--text-secondary)',
                borderBottom: `2px solid ${active ? 'var(--green-700)' : 'transparent'}`,
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Select label="Service type" options={SERVICE_OPTIONS} value={serviceType} onChange={setServiceType} placeholder="Select a service" />
        <Input label="Route or tour" placeholder="e.g. Lisbon Airport to Sintra, or Sintra full day" value={route} onChange={(e) => setRoute(e.target.value)} />
        <DatePicker label="Date & time" lang="en" />
        <PassengerSelector adults={adults} children={kids} onAdultsChange={setAdults} onChildrenChange={setKids} />
        <div className="ig-booking-grid">
          <Input label="Luggage (bags)" placeholder="e.g. 3 large, 2 small" value={luggage} onChange={(e) => setLuggage(e.target.value)} />
          <Input label="Child seats" placeholder="e.g. 1 infant seat" value={childSeats} onChange={(e) => setChildSeats(e.target.value)} />
        </div>
        <Input label="Flight number (for transfers)" placeholder="e.g. TP1234" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
        <div className="ig-booking-grid">
          <Input label="Full name" placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <Input label="Email" placeholder="you@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Input label="Phone (with country code)" placeholder="+44 7700 900000" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Input label="Notes (optional)" placeholder="Anything else we should know" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            window.location.href = 'https://wa.me/351912926688';
          }}
        >
          Send request
        </Button>
      </div>
    </div>
  );
}
