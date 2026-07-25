import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Tour Privado a Sintra, Dia Inteiro | Idealgreen',
  description: 'Tour privado de dia inteiro a Sintra em Tesla Model Y — Palácio da Pena, Quinta da Regaleira, Cabo da Roca e Cascais. €180 total por veículo.',
};

const ITINERARY = [
  { time: '09:00', title: 'Recolha em Lisboa', body: 'O seu motorista recolhe-o no hotel ou morada.' },
  { time: '09:45', title: 'Palácio e Parque da Pena', body: 'O palácio no topo da serra de Sintra e os seus jardins.' },
  { time: '12:00', title: 'Quinta da Regaleira', body: 'O poço iniciático e as grutas, a curta distância do centro histórico.' },
  { time: '13:30', title: 'Almoço em Colares', body: 'Uma paragem longe das multidões do palácio, num sítio que o motorista conhece.' },
  { time: '15:00', title: 'Cabo da Roca', body: 'O ponto mais ocidental da Europa continental.' },
  { time: '16:30', title: 'Estrada costeira até Cascais', body: 'Regresso a Lisboa pela estrada da costa em vez da autoestrada.' },
  { time: '18:00', title: 'Regresso em Lisboa', body: 'Regresso ao hotel ou morada.' },
];

export default function TourSintraFullDayPtPage() {
  return (
    <TourDetail
      lang="pt"
      altHref="/tour-sintra-full-day"
      title="Sintra, dia inteiro"
      intro="As vilas serranas e a costa a oeste de Lisboa, a um ritmo que deixa espaço para a fila do palácio e um almoço com calma."
      itinerary={ITINERARY}
      adaptNote="O itinerário adapta-se a si — fique mais tempo no palácio que mais gostar, ou salte uma paragem para mais tempo na costa."
      driverTip="O motorista costuma sugerir almoço em Colares ou Azenhas do Mar, longe das multidões do palácio."
      price="€180"
      duration="8 horas"
      maxPassengers="4"
      vehicle="Tesla Model Y"
    />
  );
}
