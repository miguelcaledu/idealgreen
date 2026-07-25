'use client';

import { useState } from 'react';
import Select from '../ui/Select';
import Input from '../ui/Input';
import DatePicker from '../ui/DatePicker';
import Button from '../ui/Button';

const COPY = {
  en: {
    tabs: [
      { key: 'all', label: 'All' },
      { key: 'tours', label: 'Tours' },
      { key: 'transfers', label: 'Transfers' },
    ],
    serviceOptions: [
      { value: 'transfer', label: 'Airport / Private Transfer' },
      { value: 'tour', label: 'Private Tour' },
      { value: 'tailor-made', label: 'Tailor-Made Journey' },
      { value: 'corporate', label: 'Corporate Mobility' },
      { value: 'classic', label: 'Classic Cars & Events' },
    ],
    serviceType: 'Service type',
    servicePlaceholder: 'Select a service',
    route: 'Route or tour',
    routePlaceholder: 'e.g. Lisbon Airport to Sintra, or Sintra full day',
    dateTime: 'Date & time',
    adults: 'Adults',
    children: 'Children',
    luggage: 'Luggage (bags)',
    luggagePlaceholder: 'e.g. 3 large, 2 small',
    childSeats: 'Child seats',
    childSeatsPlaceholder: 'e.g. 1 infant seat',
    flightNumber: 'Flight number (for transfers)',
    flightNumberPlaceholder: 'e.g. TP1234',
    fullName: 'Full name',
    fullNamePlaceholder: 'Your name',
    email: 'Email',
    phone: 'Phone (with country code)',
    phonePlaceholder: '+44 7700 900000',
    notes: 'Notes (optional)',
    notesPlaceholder: 'Anything else we should know',
    submit: 'Send request',
  },
  pt: {
    tabs: [
      { key: 'all', label: 'Todos' },
      { key: 'tours', label: 'Tours' },
      { key: 'transfers', label: 'Transfers' },
    ],
    serviceOptions: [
      { value: 'transfer', label: 'Transfer de Aeroporto / Privado' },
      { value: 'tour', label: 'Tour Privado' },
      { value: 'tailor-made', label: 'Viagem à Medida' },
      { value: 'corporate', label: 'Mobilidade Empresarial' },
      { value: 'classic', label: 'Carros Clássicos e Eventos' },
    ],
    serviceType: 'Tipo de serviço',
    servicePlaceholder: 'Selecione um serviço',
    route: 'Rota ou tour',
    routePlaceholder: 'ex.: Aeroporto de Lisboa a Sintra, ou Sintra dia inteiro',
    dateTime: 'Data e hora',
    adults: 'Adultos',
    children: 'Crianças',
    luggage: 'Bagagem (malas)',
    luggagePlaceholder: 'ex.: 3 grandes, 2 pequenas',
    childSeats: 'Cadeiras de criança',
    childSeatsPlaceholder: 'ex.: 1 cadeira de bebé',
    flightNumber: 'Número de voo (para transfers)',
    flightNumberPlaceholder: 'ex.: TP1234',
    fullName: 'Nome completo',
    fullNamePlaceholder: 'O seu nome',
    email: 'Email',
    phone: 'Telefone (com indicativo do país)',
    phonePlaceholder: '+44 7700 900000',
    notes: 'Notas (opcional)',
    notesPlaceholder: 'Algo mais que devamos saber',
    submit: 'Enviar pedido',
  },
};

export default function BookingForm({ lang = 'en' }) {
  const t = COPY[lang];
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
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {t.tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: 'none',
                border: 'none',
                padding: '10px 18px',
                font: '600 15px var(--font-body)',
                cursor: 'pointer',
                color: active ? 'var(--green-300)' : 'var(--stone-300)',
                borderBottom: `2px solid ${active ? 'var(--green-500)' : 'transparent'}`,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Select label={t.serviceType} options={t.serviceOptions} value={serviceType} onChange={setServiceType} placeholder={t.servicePlaceholder} />
        <Input label={t.route} placeholder={t.routePlaceholder} value={route} onChange={(e) => setRoute(e.target.value)} />
        <DatePicker label={t.dateTime} lang={lang} />
        <div className="ig-booking-grid">
          <Input label={t.adults} type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
          <Input label={t.children} type="number" value={kids} onChange={(e) => setKids(e.target.value)} />
        </div>
        <div className="ig-booking-grid">
          <Input label={t.luggage} placeholder={t.luggagePlaceholder} value={luggage} onChange={(e) => setLuggage(e.target.value)} />
          <Input label={t.childSeats} placeholder={t.childSeatsPlaceholder} value={childSeats} onChange={(e) => setChildSeats(e.target.value)} />
        </div>
        <Input label={t.flightNumber} placeholder={t.flightNumberPlaceholder} value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
        <div className="ig-booking-grid">
          <Input label={t.fullName} placeholder={t.fullNamePlaceholder} value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <Input label={t.email} placeholder="you@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Input label={t.phone} placeholder={t.phonePlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Input label={t.notes} placeholder={t.notesPlaceholder} value={notes} onChange={(e) => setNotes(e.target.value)} />
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            window.location.href = 'https://wa.me/351912926688';
          }}
        >
          {t.submit}
        </Button>
      </div>
    </div>
  );
}
