import { motion } from 'motion/react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { LINKS, SITE } from '../data/site';
import { openPrefs } from '../lib/prefs';
import { EASE } from '../lib/motion';

const UPDATED = 'agosto de 2026';

const COOKIES = [
  {
    name: 'gh:prefs',
    kind: 'Essencial',
    purpose: 'Guarda a sua escolha sobre cookies para não perguntarmos de novo.',
    life: 'Até você limpar o navegador',
  },
  {
    name: 'gh:visited',
    kind: 'Essencial',
    purpose: 'Marca que a animação de abertura já foi exibida nesta visita.',
    life: 'Até fechar a aba',
  },
  {
    name: '_gcl_au, _ga e similares',
    kind: 'Medição',
    purpose:
      'Google Ads e Google Analytics: contam visitas e identificam de qual anúncio ou busca a pessoa veio.',
    life: 'Até 90 dias',
  },
];

const Section = ({ title, children, delay = 0 }) => (
  <motion.section
    className="border-b border-gabana-border py-10 lg:grid lg:grid-cols-12 lg:gap-12"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay, ease: EASE }}
  >
    <h2 className="mb-5 font-serif text-2xl font-light text-gabana-cream lg:col-span-4 lg:mb-0">
      {title}
    </h2>
    <div className="space-y-4 text-[0.98rem] leading-[1.75] text-gabana-muted lg:col-span-8">
      {children}
    </div>
  </motion.section>
);

const Privacidade = () => (
  <div className="min-h-screen bg-gabana-bg px-6 pb-24 pt-32 lg:px-14 lg:pt-40">
    <Seo
      title="Privacidade"
      description="Como a Gabana’s House trata dados pessoais e cookies, conforme a LGPD (Lei 13.709/2018)."
      path="/privacidade"
    />

    <PageHeader
      eyebrow={`Privacidade · atualizada em ${UPDATED}`}
      title={
        <>
          Seus dados,
          <br />
          <span className="italic text-gabana-gold">em português claro.</span>
        </>
      }
      lede="Este site não tem cadastro, login nem formulário. A conversa acontece no WhatsApp e é lá que os seus dados ficam. Abaixo está tudo o que acontece por aqui."
    />

    <div className="mx-auto max-w-[92rem]">
      <Section title="Quem é responsável">
        <p>
          A {SITE.name} é administrada pela própria família, com o imóvel em{' '}
          {SITE.address.street}, {SITE.address.district}, {SITE.address.city} /{' '}
          {SITE.address.state}.
        </p>
        <p>
          Para qualquer assunto sobre dados pessoais, o canal é o mesmo da
          reserva: o WhatsApp{' '}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-gabana-cream underline decoration-gabana-gold/40 underline-offset-4 transition-colors hover:text-gabana-gold"
          >
            {SITE.phoneDisplay}
          </a>
          . Quem responde é a mesma pessoa que cuida da casa.
        </p>
      </Section>

      <Section title="O que coletamos" delay={0.05}>
        <p>
          <strong className="font-medium text-gabana-cream">Navegação.</strong> Se
          você aceitar os cookies de medição, o Google Ads e o Google Analytics
          registram páginas visitadas, tempo no site, tipo de aparelho, cidade
          aproximada e de qual anúncio ou busca você veio. Nada disso identifica
          você pelo nome.
        </p>
        <p>
          <strong className="font-medium text-gabana-cream">Contato.</strong> Ao
          clicar em qualquer botão de WhatsApp, você é levado para o aplicativo e
          a conversa passa a valer as regras do WhatsApp. Recebemos ali o que você
          nos escrever: normalmente nome, datas e número de pessoas.
        </p>
        <p>
          Não vendemos, alugamos nem compartilhamos esses dados com terceiros além
          dos serviços descritos aqui.
        </p>
      </Section>

      <Section title="Por que coletamos" delay={0.1}>
        <p>
          Para responder pedidos de reserva (execução de contrato, art. 7º, V da
          LGPD) e para entender quais anúncios trazem hóspedes de verdade
          (legítimo interesse, art. 7º, IX; e, no caso dos cookies de medição,
          mediante o seu consentimento, art. 7º, I).
        </p>
      </Section>

      <Section title="Cookies usados" delay={0.15}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gabana-border">
                {['Cookie', 'Tipo', 'Para quê', 'Duração'].map((h) => (
                  <th key={h} className="eyebrow py-3 pr-5 font-medium text-gabana-gold/80">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.name} className="border-b border-gabana-border/60 align-top">
                  <td className="py-4 pr-5 font-mono text-xs text-gabana-cream">{c.name}</td>
                  <td className="py-4 pr-5 text-gabana-cream">{c.kind}</td>
                  <td className="py-4 pr-5">{c.purpose}</td>
                  <td className="py-4 pr-5 whitespace-nowrap">{c.life}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pt-2">
          O mapa da página inicial é do Google e também usa cookies, por isso ele
          só carrega quando você pede.
        </p>
        <button
          type="button"
          onClick={openPrefs}
          className="eyebrow mt-2 rounded-full bg-white/[0.06] px-6 py-3 text-gabana-cream ring-1 ring-white/15 backdrop-blur-md transition-colors duration-300 hover:ring-gabana-gold/40"
        >
          Rever minha escolha
        </button>
      </Section>

      <Section title="Seus direitos" delay={0.2}>
        <p>
          O art. 18 da LGPD garante que você peça, a qualquer momento: confirmação
          de que tratamos seus dados; acesso a eles; correção do que estiver
          errado; anonimização ou exclusão do que for desnecessário; portabilidade;
          informação sobre com quem compartilhamos; e revogação do consentimento.
        </p>
        <p>
          É só mandar mensagem no WhatsApp{' '}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-gabana-cream underline decoration-gabana-gold/40 underline-offset-4 transition-colors hover:text-gabana-gold"
          >
            {SITE.phoneDisplay}
          </a>
          . O prazo legal é de 15 dias. Na prática, respondemos no mesmo dia.
        </p>
      </Section>

      <Section title="Por quanto tempo guardamos" delay={0.25}>
        <p>
          Conversas de WhatsApp ficam no aparelho enquanto a reserva estiver ativa
          e por até 5 anos depois, prazo em que ainda podem ser necessárias para
          questões fiscais ou contratuais. Dados de medição são apagados pelo
          Google conforme a política dele, em até 14 meses.
        </p>
      </Section>

      <Section title="Mudanças nesta política" delay={0.3}>
        <p>
          Se algo mudar, atualizamos esta página e a data no topo. Alterações que
          afetem o uso de cookies fazem o aviso de consentimento aparecer de novo.
        </p>
      </Section>
    </div>
  </div>
);

export default Privacidade;
