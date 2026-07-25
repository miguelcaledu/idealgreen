import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Tour Privado a Fátima, Dia Inteiro | Idealgreen',
  description: 'Tour privado de dia inteiro a Fátima em Mercedes V-Class — o Santuário, Mosteiro da Batalha, Nazaré e Óbidos. €300 total por veículo.',
};

const ITINERARY = [
  { time: '08:00', title: 'Recolha em Lisboa', body: 'O seu motorista recolhe-o no hotel ou morada.' },
  { time: '09:30', title: 'Santuário de Fátima', body: 'As basílicas e o local das aparições de 1917.' },
  { time: '11:30', title: 'Mosteiro da Batalha', body: 'Um mosteiro gótico Património Mundial da UNESCO, a caminho da costa.' },
  { time: '13:00', title: 'Almoço na Nazaré', body: 'Com vista para a praia, num sítio que o motorista conhece.' },
  { time: '14:30', title: 'Miradouro do Sítio, Nazaré', body: 'O miradouro sobre a famosa praia das ondas gigantes.' },
  { time: '16:00', title: 'Óbidos', body: 'A vila medieval amuralhada, a pé.' },
  { time: '18:00', title: 'Regresso em Lisboa', body: 'Regresso ao hotel ou morada.' },
];

export default function TourFatimaFullDayPtPage() {
  return (
    <TourDetail
      lang="pt"
      altHref="/tour-fatima-full-day"
      title="Fátima, dia inteiro"
      intro="O Santuário, um mosteiro gótico e a costa atlântica, tudo num só dia a partir de Lisboa."
      itinerary={ITINERARY}
      adaptNote="O itinerário adapta-se a si — mais tempo no Santuário, ou uma paragem mais cedo na Nazaré para a praia."
      driverTip="O motorista costuma sugerir um restaurante de marisco na Nazaré, com vista para a praia."
      price="€300"
      duration="8 horas"
      maxPassengers="7"
      vehicle="Mercedes V-Class"
    />
  );
}
