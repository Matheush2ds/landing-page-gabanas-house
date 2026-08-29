import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa6';
import { LINKS, STAY_RULES } from '../data/site';
import { EASE, rise } from '../lib/motion';
import LiquidButton from './LiquidButton';

const StayInfo = () => (
  <section aria-labelledby="condicoes-titulo" className="bg-gabana-navy py-24 lg:py-36">
    <div className="mx-auto max-w-[92rem] px-6 lg:px-14">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <motion.div className="lg:col-span-5" {...rise()}>
          <p className="eyebrow mb-6 flex items-center gap-4 text-gabana-gold">
            <span className="rule-x w-10" aria-hidden />
            Condições
          </p>
          <h2
            id="condicoes-titulo"
            className="mb-8 font-serif font-light leading-[1.04] tracking-[-0.02em] text-gabana-cream"
            style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)' }}
          >
            Regras da casa,
            <br />
            <span className="italic text-gabana-gold">sem letra miúda.</span>
          </h2>

          <p className="mb-10 text-[1.02rem] leading-[1.75] text-gabana-muted">
            A diária muda conforme a temporada, o número de noites e o tamanho do
            grupo, por isso não publicamos tabela. Mande as datas no WhatsApp e
            respondemos com o valor fechado, sem taxa de plataforma no meio.
          </p>

          <LiquidButton
            href={LINKS.whatsappDates}
            target="_blank"
            rel="noreferrer"
            icon={FaWhatsapp}
          >
            Pedir um orçamento
          </LiquidButton>
        </motion.div>

        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="border-t border-gabana-border">
            {STAY_RULES.map((rule, i) => (
              <motion.div
                key={rule.label}
                className="flex items-baseline justify-between gap-8 border-b border-gabana-border py-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}
              >
                <dt className="eyebrow text-gabana-muted">{rule.label}</dt>
                <dd className="text-right font-serif text-lg font-light text-gabana-cream">
                  {rule.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default StayInfo;
