import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Private Lisbon Tour, Full Day | Idealgreen',
  description: 'Private full-day Lisbon tour by Tesla Model Y — Belém, Alfama, LX Factory and city viewpoints. €165 total per vehicle.',
};

const ITINERARY = [
  { time: '09:00', title: 'Pickup in Lisbon', body: 'Your driver collects you from your hotel or address.' },
  { time: '09:30', title: 'Belém', body: 'Jerónimos Monastery, the Belém Tower, and the original pastel de nata bakery.' },
  { time: '12:00', title: 'Alfama & Castelo de São Jorge', body: 'The oldest quarter, on foot, ending at the castle walls.' },
  { time: '13:30', title: 'Lunch in Alfama', body: 'A stop away from the riverside terraces, at a spot your driver knows.' },
  { time: '15:00', title: 'LX Factory', body: 'A former industrial complex, now studios, shops and murals.' },
  { time: '16:30', title: 'Miradouro viewpoint', body: 'One of the city’s hillside viewpoints over the Tagus, timed for the light.' },
  { time: '18:00', title: 'Drop-off in Lisbon', body: 'Return to your hotel or address.' },
];

export default function TourLisbonFullDayPage() {
  return (
    <TourDetail
      title="Lisbon, full day"
      altHref="/tour-lisbon-full-day-pt"
      intro="The riverside monuments, the old quarters, and the viewpoints locals actually use — at your pace."
      itinerary={ITINERARY}
      adaptNote="The itinerary adapts to you — spend longer in Alfama, or trade a viewpoint for extra time at Belém."
      driverTip="Your driver usually suggests a family-run tasca in Alfama, away from the riverside terraces."
      price="€165"
      duration="8 hours"
      maxPassengers="4"
      vehicle="Tesla Model Y"
    />
  );
}
