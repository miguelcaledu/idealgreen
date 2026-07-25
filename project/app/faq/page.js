import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQAccordion from '@/components/ui/FAQAccordion';

export const metadata = {
  title: 'FAQ | Idealgreen Private Transfers & Tours',
  description:
    'Answers on flight delays, child seats, luggage, pets, payment, cancellation, accessibility and more for Idealgreen private transfers and tours.',
};

const FAQ_ITEMS = [
  { question: 'My flight is delayed. Does that cost me a fare?', answer: 'No. We track your flight, and your driver adjusts pickup time to the actual landing, not the scheduled one.' },
  { question: 'Can you provide a child seat?', answer: "Yes, on request when you book. Let us know the child's age so we bring the right size [CONFIRM: any extra charge]." },
  { question: 'What is the luggage limit?', answer: 'The Tesla Model Y comfortably takes 2–3 large suitcases; the Mercedes V-Class takes considerably more. Tell us your bag count when booking and we match the vehicle.' },
  { question: 'Can I travel with a pet?', answer: 'Small pets in a carrier are welcome on most routes — let us know in advance [CONFIRM: any restrictions or surcharge].' },
  { question: 'How do I pay?', answer: 'Card online at booking, or bank transfer for corporate accounts [CONFIRM: on-the-day cash/card options].' },
  { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 24 hours before pickup; changes closer to the time are handled case by case [CONFIRM exact policy].' },
  { question: 'What languages do your drivers speak?', answer: 'English, Portuguese and Spanish. Other languages on request [CONFIRM availability].' },
  { question: 'Is the vehicle accessible for reduced mobility?', answer: 'The Mercedes V-Class has a low step-in height and wide doors; let us know your specific needs so we can confirm the right vehicle.' },
  { question: 'How many passengers fit in each vehicle?', answer: 'Tesla Model Y: up to 4. Mercedes V-Class: up to 7. Classic cars vary by model — see the Classic Cars page.' },
  { question: 'Do you run transfers at night?', answer: 'Yes, with a €20 supplement between 22:00 and 07:00.' },
  { question: 'Are tolls included in the price?', answer: 'Yes, tolls are included in the quoted price for transfers and tours [CONFIRM].' },
  { question: 'How much waiting time is included?', answer: 'Airport pickups include a waiting allowance for arrivals; beyond that, extra waiting is €15 per hour.' },
  { question: 'Can I customize a tour itinerary?', answer: 'Yes — every tour adapts to you. Tell your driver on the day, or let us know your priorities when booking.' },
  { question: 'What is the difference between a driver and a guide?', answer: 'Our drivers are knowledgeable about the places you visit, but licensed tour guiding is a separate, regulated profession in Portugal. We can arrange a licensed guide on request.' },
];

export default function FaqPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar altHref="/faq-pt" />

      <section style={{ position: 'relative', height: 320, display: 'flex', alignItems: 'center', background: 'var(--green-900)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px 0', width: '100%', boxSizing: 'border-box' }}>
          <h1 style={{ font: '600 3rem/1.1 var(--font-display)', color: '#fff', margin: '0 0 12px' }}>Frequently asked questions</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-200)', margin: 0 }}>
            If your question isn&apos;t here, message us on WhatsApp and we answer directly.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '56px 32px 80px' }}>
        <FAQAccordion items={FAQ_ITEMS} />
      </section>

      <DarkFooter />
      <WhatsAppButton />
    </div>
  );
}
