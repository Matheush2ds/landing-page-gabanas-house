import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FaGoogle, FaWhatsapp, FaTicket, FaArrowRight } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import Seo from '../components/Seo';
import { LINKS } from '../data/site';
import { EASE } from '../lib/motion';
import LiquidButton from '../components/LiquidButton';

const CARD = 'relative border border-gabana-border bg-gabana-bg p-10 text-center lg:p-14';

const Promo = () => {
  const [step, setStep] = useState(1);
  const reduce = useReducedMotion();

  const goToReview = () => {
    window.open(LINKS.googleReview, '_blank', 'noopener,noreferrer');
    setStep(2);
  };

  const generateVoucher = () => {
    if (!reduce) {
      confetti({
        particleCount: 140,
        spread: 95,
        origin: { y: 0.6 },
        colors: ['#c9a84c', '#f1ece3', '#001429'],
        disableForReducedMotion: true,
      });
    }
    setStep(3);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gabana-deep px-6 py-32">
      <Seo title="Benefício para hóspedes" path="/promo" noindex />

      <div
        className="pointer-events-none absolute inset-0 bg-radial-[at_50%_35%] from-gabana-gold/12 to-transparent to-70%"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-lg">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.section
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: EASE }}
              className={CARD}
            >
              <span className="absolute left-1/2 top-0 h-px w-28 -translate-x-1/2 bg-gabana-gold" aria-hidden />

              <FaTicket aria-hidden className="mx-auto mb-9 text-4xl text-gabana-gold/85" />

              <h1 className="mb-5 font-serif text-4xl font-light leading-tight text-gabana-cream lg:text-5xl">
                Um convite
                <br />
                <span className="italic text-gabana-gold">para voltar.</span>
              </h1>
              <p className="mb-11 text-[1.02rem] leading-[1.75] text-gabana-muted">
                Conte no Google como foi a sua estadia e libere{' '}
                <span className="text-gabana-cream">10% de desconto</span> na próxima
                reserva direta.
              </p>

              <LiquidButton as="button" type="button" onClick={goToReview} size="lg" icon={FaGoogle} full>
                Avaliar no Google
              </LiquidButton>
            </motion.section>
          )}

          {step === 2 && (
            <motion.section
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: EASE }}
              className={CARD}
            >
              <span className="absolute left-1/2 top-0 h-px w-28 -translate-x-1/2 bg-gabana-gold" aria-hidden />

              <h1 className="mb-5 font-serif text-4xl font-light leading-tight text-gabana-cream lg:text-5xl">
                Obrigado
                <br />
                <span className="italic text-gabana-gold">de verdade.</span>
              </h1>
              <p className="mb-11 text-[1.02rem] leading-[1.75] text-gabana-muted">
                Avaliação de hóspede é o que mantém a casa cheia. Seu cupom já pode
                ser emitido.
              </p>

              <LiquidButton as="button" type="button" onClick={generateVoucher} size="lg" full>
                Emitir meu cupom
                <FaArrowRight aria-hidden className="ml-1" />
              </LiquidButton>
            </motion.section>
          )}

          {step === 3 && (
            <motion.section
              key="step3"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative bg-gabana-gold p-px"
            >
              <div className="border border-gabana-gold/20 bg-gabana-deep p-10 text-center lg:p-14">
                <p className="eyebrow mb-4 text-gabana-gold">Cupom de hóspede</p>
                <p className="mb-2 font-serif text-5xl tracking-[0.12em] text-gabana-cream lg:text-6xl">
                  GABANA10
                </p>
                <span className="mx-auto my-8 block h-px w-16 bg-gabana-gold/30" aria-hidden />

                <ul className="mb-10 space-y-3.5 text-left text-sm leading-relaxed text-gabana-muted">
                  {[
                    'Vale por 1 ano a partir de hoje.',
                    'Uso único, por hóspede.',
                    'Válido só para reserva direta pelo WhatsApp.',
                    'Não acumula com outras promoções.',
                  ].map((rule) => (
                    <li key={rule} className="flex gap-3">
                      <span aria-hidden className="text-gabana-gold">
                        ✦
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>

                <LiquidButton
                  href={LINKS.whatsappVoucher}
                  target="_blank"
                  rel="noreferrer"
                  variant="whatsapp"
                  size="lg"
                  icon={FaWhatsapp}
                  full
                >
                  Usar o cupom
                </LiquidButton>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Promo;
