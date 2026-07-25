import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Private Sintra Tour, Full Day | Idealgreen',
  description: 'Private full-day Sintra tour by Tesla Model Y — Pena Palace, Quinta da Regaleira, Cabo da Roca and Cascais. €180 total per vehicle.',
};

const ITINERARY = [
  { time: '09:00', title: 'Pickup in Lisbon', body: 'Your driver collects you from your hotel or address.' },
  { time: '09:45', title: 'Pena Palace & Park', body: 'The hilltop palace and its gardens, at the top of the Sintra hills.' },
  { time: '12:00', title: 'Quinta da Regaleira', body: 'The initiation well and grottoes, a short walk from the historic centre.' },
  { time: '13:30', title: 'Lunch in Colares', body: 'A stop away from the palace crowds, at a spot your driver knows.' },
  { time: '15:00', title: 'Cabo da Roca', body: 'The westernmost point of mainland Europe.' },
  { time: '16:30', title: 'Cascais coastal drive', body: 'Back to Lisbon along the coast road instead of the motorway.' },
  { time: '18:00', title: 'Drop-off in Lisbon', body: 'Return to your hotel or address.' },
];

export default function TourSintraFullDayPage() {
  return (
    <TourDetail
      title="Sintra, full day"
      altHref="/tour-sintra-full-day-pt"
      intro="The hill towns and coastline west of Lisbon, at a pace that leaves room for the palace queue and a proper lunch."
      itinerary={ITINERARY}
      adaptNote="The itinerary adapts to you — stay longer at the palace you enjoy most, or skip a stop for extra time on the coast."
      driverTip="Your driver usually suggests lunch in Colares or Azenhas do Mar, away from the palace crowds."
      price="€180"
      duration="8 hours"
      maxPassengers="4"
      vehicle="Tesla Model Y"
    />
  );
}
