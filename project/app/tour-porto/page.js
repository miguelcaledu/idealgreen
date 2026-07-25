import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Private Porto Tour, Full Day | Idealgreen',
  description: 'Private full-day Porto tour by Mercedes V-Class from Lisbon — Ribeira, Livraria Lello, and a Port wine cellar. €500 total per vehicle.',
};

const ITINERARY = [
  { time: '07:00', title: 'Pickup in Lisbon', body: 'An early start for the drive north.' },
  { time: '10:00', title: 'Ribeira', body: 'Porto’s riverfront district, on foot.' },
  { time: '11:30', title: 'Livraria Lello', body: 'One of the most photographed bookshops in Europe.' },
  { time: '13:00', title: 'Lunch in Vila Nova de Gaia', body: 'Riverside, looking back across at the Ribeira.' },
  { time: '14:30', title: 'Port wine cellar', body: 'A tasting at one of the historic Port wine lodges.' },
  { time: '16:00', title: 'Dom Luís I Bridge viewpoint', body: 'The upper deck, for the view over both riverbanks.' },
  { time: '17:00', title: 'Return drive to Lisbon', body: 'Arrival back in the evening.' },
];

export default function TourPortoPage() {
  return (
    <TourDetail
      title="Porto"
      altHref="/tour-porto-pt"
      intro="A full day in Porto and Vila Nova de Gaia, driven from Lisbon and back — no train changes."
      itinerary={ITINERARY}
      adaptNote="The itinerary adapts to you — an extra cellar tasting, or more time along the Ribeira."
      driverTip="Your driver usually suggests a riverside restaurant in Vila Nova de Gaia."
      price="€500"
      duration="10 hours"
      maxPassengers="7"
      vehicle="Mercedes V-Class"
    />
  );
}
