import { motion } from 'motion/react';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck, FaPhone } from 'react-icons/fa6';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import LiquidButton from '../components/LiquidButton';
import { LINKS, SITE, STAY_RULES } from '../data/site';
import { EASE } from '../lib/motion';

const PARTNERS = [
  { href: LINKS.airbnb, icon: FaAirbnb, label: 'Airbnb' },
  { href: LINKS.booking, icon: FaCalendarCheck, label: 'Booking.com' },
];

const STEPS = [
  {
    title: 'Mande as datas',
    text: 'Chegada, saída e quantas pessoas. É o suficiente para começarmos.',
  },
  {
    title: 'Recebe o valor',
    text: 'Respondemos com a diária fechada para o período, sem taxa de plataforma.',
  },
  {
    title: 'Confirma a reserva',
    text: 'Sinal via Pix e a data fica bloqueada no seu nome.',
  },
];

const Reservas = () => (
  <div className="min-h-screen bg-gabana-bg px-6 pb-24 pt-32 lg:px-14 lg:pt-40">
    <Seo
      title="Reservas"
      description="Reserve a Gabana’s House direto com o anfitrião pelo WhatsApp, sem taxa de plataforma. Também estamos no Airbnb e no Booking."
      path="/reservas"
    />

    <PageHeader
      eyebrow="Reservas"
      title={
        <>
          Sem formulário.
          <br />
          <span className="italic text-gabana-gold">Só uma conversa.</span>
        </>
      }
      lede="A agenda é nossa, o preço é nosso e quem responde é a gente. Reservar direto sai melhor que por plataforma, e dá para ajustar horário de chegada, berço e detalhes que sistema nenhum aceita."
    />

    <div className="mx-auto grid max-w-[92rem] gap-16 py-16 lg:grid-cols-12 lg:gap-20 lg:py-24">
      <div className="lg:col-span-7">
        <h2 className="eyebrow mb-8 text-gabana-muted">Como funciona</h2>

        <ol className="border-t border-gabana-border">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              className="grid items-baseline gap-x-8 gap-y-2 border-b border-gabana-border py-7 lg:grid-cols-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            >
              <span className="font-serif text-sm tabular-nums text-gabana-gold/70 lg:col-span-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl font-light text-gabana-cream lg:col-span-4">
                {step.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-gabana-muted lg:col-span-7">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <LiquidButton
            href={LINKS.whatsappBooking}
            target="_blank"
            rel="noreferrer"
            size="lg"
            icon={FaWhatsapp}
            className="w-full sm:w-auto"
          >
            Começar pelo WhatsApp
          </LiquidButton>

          <a
            href={`tel:${SITE.phoneIntl}`}
            className="inline-flex items-center gap-3 text-sm text-gabana-muted transition-colors hover:text-gabana-cream"
          >
            <FaPhone aria-hidden className="text-xs" />
            {SITE.phoneDisplay}
          </a>
        </motion.div>
      </div>

      <motion.aside
        className="lg:col-span-4 lg:col-start-9"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      >
        <h2 className="eyebrow mb-8 text-gabana-muted">Antes de reservar</h2>

        <dl className="border-t border-gabana-border">
          {STAY_RULES.map((rule) => (
            <div
              key={rule.label}
              className="flex items-baseline justify-between gap-6 border-b border-gabana-border py-4"
            >
              <dt className="eyebrow text-gabana-muted">{rule.label}</dt>
              <dd className="text-right font-serif text-base font-light text-gabana-cream">
                {rule.value}
              </dd>
            </div>
          ))}
        </dl>

        <h2 className="eyebrow mb-5 mt-12 text-gabana-muted">Também estamos em</h2>
        <ul className="flex flex-col gap-3">
          {PARTNERS.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <LiquidButton
                href={href}
                target="_blank"
                rel="noreferrer"
                variant="glass"
                icon={Icon}
                full
                className="justify-start px-7"
              >
                {label}
              </LiquidButton>
            </li>
          ))}
        </ul>
      </motion.aside>
    </div>
  </div>
);

export default Reservas;
