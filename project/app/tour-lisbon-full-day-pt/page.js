import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Tour Privado a Lisboa, Dia Inteiro | Idealgreen',
  description: 'Tour privado de dia inteiro a Lisboa em Tesla Model Y — Belém, Alfama, LX Factory e miradouros da cidade. €165 total por veículo.',
};

const ITINERARY = [
  { time: '09:00', title: 'Recolha em Lisboa', body: 'O seu motorista recolhe-o no hotel ou morada.' },
  { time: '09:30', title: 'Belém', body: 'Mosteiro dos Jerónimos, a Torre de Belém e a pastelaria original do pastel de nata.' },
  { time: '12:00', title: 'Alfama e Castelo de São Jorge', body: 'O bairro mais antigo, a pé, terminando junto às muralhas do castelo.' },
  { time: '13:30', title: 'Almoço em Alfama', body: 'Uma paragem longe dos terraços ribeirinhos, num sítio que o motorista conhece.' },
  { time: '15:00', title: 'LX Factory', body: 'Um antigo complexo industrial, agora estúdios, lojas e murais.' },
  { time: '16:30', title: 'Miradouro', body: 'Um dos miradouros da cidade sobre o Tejo, na hora certa para a luz.' },
  { time: '18:00', title: 'Regresso em Lisboa', body: 'Regresso ao hotel ou morada.' },
];

export default function TourLisbonFullDayPtPage() {
  return (
    <TourDetail
      lang="pt"
      altHref="/tour-lisbon-full-day"
      title="Lisboa, dia inteiro"
      intro="Os monumentos ribeirinhos, os bairros antigos e os miradouros que os locais realmente usam — ao seu ritmo."
      itinerary={ITINERARY}
      adaptNote="O itinerário adapta-se a si — fique mais tempo em Alfama, ou troque um miradouro por mais tempo em Belém."
      driverTip="O motorista costuma sugerir uma tasca familiar em Alfama, longe dos terraços ribeirinhos."
      price="€165"
      duration="8 horas"
      maxPassengers="4"
      vehicle="Tesla Model Y"
    />
  );
}
