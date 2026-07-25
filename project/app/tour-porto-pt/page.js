import TourDetail from '@/components/tours/TourDetail';

export const metadata = {
  title: 'Tour Privado ao Porto, Dia Inteiro | Idealgreen',
  description: 'Tour privado de dia inteiro ao Porto em Mercedes V-Class a partir de Lisboa — Ribeira, Livraria Lello e uma cave de Vinho do Porto. €500 total por veículo.',
};

const ITINERARY = [
  { time: '07:00', title: 'Recolha em Lisboa', body: 'Uma partida cedo para a viagem até ao norte.' },
  { time: '10:00', title: 'Ribeira', body: 'O bairro ribeirinho do Porto, a pé.' },
  { time: '11:30', title: 'Livraria Lello', body: 'Uma das livrarias mais fotografadas da Europa.' },
  { time: '13:00', title: 'Almoço em Vila Nova de Gaia', body: 'Junto ao rio, com vista para a Ribeira.' },
  { time: '14:30', title: 'Cave de Vinho do Porto', body: 'Uma prova numa das caves históricas de Vinho do Porto.' },
  { time: '16:00', title: 'Miradouro da Ponte D. Luís I', body: 'O tabuleiro superior, para a vista sobre as duas margens.' },
  { time: '17:00', title: 'Regresso a Lisboa', body: 'Chegada de volta ao final da tarde.' },
];

export default function TourPortoPtPage() {
  return (
    <TourDetail
      lang="pt"
      altHref="/tour-porto"
      title="Porto"
      intro="Um dia inteiro no Porto e em Vila Nova de Gaia, conduzido a partir de Lisboa e de volta — sem mudanças de comboio."
      itinerary={ITINERARY}
      adaptNote="O itinerário adapta-se a si — uma prova extra numa cave, ou mais tempo ao longo da Ribeira."
      driverTip="O motorista costuma sugerir um restaurante junto ao rio em Vila Nova de Gaia."
      price="€500"
      duration="10 horas"
      maxPassengers="7"
      vehicle="Mercedes V-Class"
    />
  );
}
