import { motion } from 'motion/react';
import { FaWhatsapp, FaInstagram, FaArrowRightLong, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { OPTIMA, optimaContact } from '../data/site';
import { EASE } from '../lib/motion';

/** Assinatura da agência. Fica no fim do rodapé, depois de todo o conteúdo
 *  da casa, para não disputar atenção com o CTA de reserva. */
const BuiltBy = () => (
  <motion.aside
    aria-label={`Site desenvolvido pela ${OPTIMA.name}`}
    className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-8 backdrop-blur-md lg:px-10 lg:py-9"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, ease: EASE }}
  >
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-gabana-gold/50 to-transparent"
    />

    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
      <div className="min-w-0">
        <p className="eyebrow mb-4 flex items-center gap-4 text-gabana-gold/80">
          <span className="rule-x w-8" aria-hidden />
          Site feito pela
        </p>

        <a
          href={OPTIMA.site}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-baseline gap-3 font-serif text-3xl font-light leading-none tracking-tight text-gabana-cream transition-colors duration-300 hover:text-gabana-gold lg:text-4xl"
        >
          Optima <span className="italic text-gabana-gold">Sistemas</span>
          <FaArrowUpRightFromSquare
            aria-hidden
            className="translate-y-px text-[0.6rem] text-gabana-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-gabana-gold"
          />
        </a>

        <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-gabana-muted">
          {OPTIMA.pitch}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {OPTIMA.services.map((service) => (
            <li
              key={service}
              className="eyebrow rounded-full border border-white/10 px-4 py-2 text-gabana-muted"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex shrink-0 flex-col items-start gap-5 lg:items-end">
        <a
          href={optimaContact()}
          target="_blank"
          rel="noreferrer"
          className="group relative isolate inline-flex items-center justify-center gap-3.5 overflow-hidden rounded-full bg-white/[0.07] px-8 py-4 font-sans text-[0.6rem] font-medium uppercase tracking-[0.28em] text-gabana-cream ring-1 ring-white/18 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:ring-gabana-gold/50 active:translate-y-0"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-3 top-0 -z-10 h-[42%] rounded-b-[100%] rounded-t-full bg-[linear-gradient(to_bottom,rgba(255,255,255,.22),transparent)] blur-[3px]"
          />
          <FaWhatsapp aria-hidden className="text-base" />
          Falar com a Optima
          <FaArrowRightLong
            aria-hidden
            className="text-[0.7rem] transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end">
          <a
            href={OPTIMA.site}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-gabana-muted/80 transition-colors duration-300 hover:text-gabana-cream"
          >
            {OPTIMA.siteLabel}
          </a>
          <span aria-hidden className="h-3 w-px bg-white/15" />
          <a
            href={OPTIMA.instagram}
            target="_blank"
            rel="noreferrer"
            className="eyebrow flex items-center gap-2 text-gabana-muted/80 transition-colors duration-300 hover:text-gabana-cream"
          >
            <FaInstagram aria-hidden className="text-sm" />
            @optima_sistemas
          </a>
        </div>
      </div>
    </div>
  </motion.aside>
);

export default BuiltBy;
