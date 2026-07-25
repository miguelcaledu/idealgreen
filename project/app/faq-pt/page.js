import DarkNavBar from '@/components/DarkNavBar';
import DarkFooter from '@/components/DarkFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQAccordion from '@/components/ui/FAQAccordion';

export const metadata = {
  title: 'FAQ | Idealgreen Transfers e Tours Privados',
  description:
    'Respostas sobre atrasos de voos, cadeiras de criança, bagagem, animais, pagamento, cancelamento, acessibilidade e mais, para os transfers e tours privados da Idealgreen.',
};

const FAQ_ITEMS = [
  { question: 'O meu voo está atrasado. Isso custa-me a viagem?', answer: 'Não. Acompanhamos o seu voo, e o motorista ajusta a hora de recolha à aterragem real, não à prevista.' },
  { question: 'Fornecem cadeira de criança?', answer: "Sim, a pedido no momento da reserva. Diga-nos a idade da criança para levarmos o tamanho certo [CONFIRMAR: eventual custo extra]." },
  { question: 'Qual é o limite de bagagem?', answer: 'O Tesla Model Y leva confortavelmente 2–3 malas grandes; o Mercedes Classe V leva bastante mais. Diga-nos o número de malas na reserva.' },
  { question: 'Posso viajar com um animal?', answer: 'Animais pequenos numa transportadora são bem-vindos na maioria das rotas — avise-nos com antecedência [CONFIRMAR: eventuais restrições].' },
  { question: 'Como pago?', answer: 'Cartão online na reserva, ou transferência bancária para contas empresariais [CONFIRMAR opções].' },
  { question: 'Qual é a política de cancelamento?', answer: 'Cancelamento gratuito até 24 horas antes da recolha; alterações mais próximas da hora são tratadas caso a caso [CONFIRMAR].' },
  { question: 'Que línguas falam os vossos motoristas?', answer: 'Inglês, português e espanhol. Outras línguas a pedido [CONFIRMAR disponibilidade].' },
  { question: 'O veículo é acessível para mobilidade reduzida?', answer: 'O Mercedes Classe V tem uma altura de entrada baixa e portas largas; diga-nos as suas necessidades específicas.' },
  { question: 'Quantos passageiros cabem em cada veículo?', answer: 'Tesla Model Y: até 4. Mercedes Classe V: até 7. Os carros clássicos variam consoante o modelo.' },
  { question: 'Fazem transfers à noite?', answer: 'Sim, com um suplemento de €20 entre as 22:00 e as 07:00.' },
  { question: 'As portagens estão incluídas no preço?', answer: 'Sim, as portagens estão incluídas no preço indicado para transfers e tours [CONFIRMAR].' },
  { question: 'Quanto tempo de espera está incluído?', answer: 'As recolhas no aeroporto incluem uma margem de espera nas chegadas; a espera extra é de €15 por hora.' },
  { question: 'Posso personalizar o itinerário de um tour?', answer: 'Sim — cada tour adapta-se a si. Diga ao motorista no próprio dia, ou indique-nos as suas prioridades na reserva.' },
  { question: 'Qual é a diferença entre um motorista e um guia?', answer: 'Os nossos motoristas conhecem bem os locais que visita, mas o guia turístico licenciado é uma profissão regulada e distinta. Podemos organizar um guia a pedido.' },
];

export default function FaqPtPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#0c1310', color: 'var(--stone-100)', overflowX: 'hidden' }}>
      <DarkNavBar lang="pt" altHref="/faq" />

      <section style={{ position: 'relative', height: 320, display: 'flex', alignItems: 'center', background: 'var(--green-900)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px 0', width: '100%', boxSizing: 'border-box' }}>
          <h1 style={{ font: '600 3rem/1.1 var(--font-display)', color: '#fff', margin: '0 0 12px' }}>Perguntas frequentes</h1>
          <p style={{ font: 'var(--text-body-lg)', color: 'var(--stone-200)', margin: 0 }}>
            Se a sua pergunta não estiver aqui, envie-nos mensagem no WhatsApp e respondemos diretamente.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '56px 32px 80px' }}>
        <FAQAccordion items={FAQ_ITEMS} />
      </section>

      <DarkFooter lang="pt" />
      <WhatsAppButton />
    </div>
  );
}
