import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Private Fátima Tour, Full Day | Idealgreen',
  description: 'Private full-day Fátima tour by Mercedes V-Class — the Sanctuary, Batalha Monastery, Nazaré and Óbidos. €300 total per vehicle.',
};

const ITINERARY = [
  { time: '08:00', title: 'Pickup in Lisbon', body: 'Your driver collects you from your hotel or address.' },
  { time: '09:30', title: 'Fátima Sanctuary', body: 'The basilicas and the site of the 1917 apparitions.' },
  { time: '11:30', title: 'Batalha Monastery', body: 'A UNESCO World Heritage Gothic monastery, en route to the coast.' },
  { time: '13:00', title: 'Lunch in Nazaré', body: 'Overlooking the beach, at a spot your driver knows.' },
  { time: '14:30', title: 'Sítio viewpoint, Nazaré', body: 'The clifftop viewpoint above the famous big-wave beach.' },
  { time: '16:00', title: 'Óbidos', body: 'The walled medieval town, on foot.' },
  { time: '18:00', title: 'Drop-off in Lisbon', body: 'Return to your hotel or address.' },
];

export default function TourFatimaFullDayPage() {
  return (
    <TourDetail
      title="Fátima, full day"
      altHref="/tour-fatima-full-day-pt"
      intro="The Sanctuary, a Gothic monastery, and the Atlantic coast, all in one day from Lisbon."
      itinerary={ITINERARY}
      adaptNote="The itinerary adapts to you — more time at the Sanctuary, or an earlier stop in Nazaré for the beach."
      driverTip="Your driver usually suggests a seafood restaurant in Nazaré, overlooking the beach."
      price="€300"
      duration="8 hours"
      maxPassengers="7"
      vehicle="Mercedes V-Class"
    />
  );
}
