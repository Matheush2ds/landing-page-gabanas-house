import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const FAQS = [
  {
    q: 'Quantas pessoas a casa comporta?',
    a: 'Acomodamos confortavelmente até 15 hóspedes, distribuídos em 4 suítes amplas e climatizadas.',
  },
  {
    q: 'A casa possui garagem?',
    a: 'Sim, oferecemos garagem privativa e coberta para até 3 veículos com total segurança.',
  },
  {
    q: 'Animais de estimação são permitidos?',
    a: 'Amamos pets! Animais de pequeno porte são bem-vindos, mediante aviso prévio e taxa de limpeza.',
  },
  {
    q: 'Qual o horário de check-in e check-out?',
    a: 'O horário padrão de check-in é a partir das 14h e o check-out até as 11h. Somos super flexíveis — tudo pode ser ajustado diretamente com o anfitrião conforme disponibilidade.',
  },
];

const easing = [0.22, 1, 0.36, 1];

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-gabana-navy border-t border-gabana-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-16">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: easing }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-5 h-px bg-gabana-gold" />
            <span className="text-gabana-gold text-[10px] font-sans tracking-[0.35em] uppercase">
              Suporte
            </span>
          </div>
          <h2
            className="font-serif text-gabana-cream"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Ficou alguma dúvida?
          </h2>
        </motion.div>

        <div>
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border-b border-gabana-border"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: easing }}
            >
              <button
                className="w-full py-7 flex justify-between items-center text-left group focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span
                  className={`font-serif text-xl pr-8 transition-colors duration-300 ${
                    open === idx ? 'text-gabana-gold' : 'text-gabana-cream group-hover:text-gabana-gold'
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 transition-colors duration-300 text-xs ${
                    open === idx ? 'text-gabana-gold' : 'text-gabana-muted'
                  }`}
                >
                  {open === idx ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: easing }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-gabana-muted font-sans text-sm leading-relaxed pr-10">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
