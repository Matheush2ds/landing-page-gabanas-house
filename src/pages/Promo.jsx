import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaWhatsapp, FaTicket, FaArrowRight } from 'react-icons/fa6';
import confetti from 'canvas-confetti';

const GOOGLE_LINK = 'https://g.page/r/Cci94VmYDpB8EBE/review';
const WA_NUMBER = '5564992415277';

const Promo = () => {
  const [step, setStep] = useState(1);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleReviewClick = () => {
    window.open(GOOGLE_LINK, '_blank');
    setStep(2);
  };

  const handleGenerateVoucher = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#C9A84C', '#FFFFFF', '#001429'],
      disableForReducedMotion: true,
    });
    setStep(3);
  };

  return (
    <div className="bg-[#000E1D] min-h-screen flex items-center justify-center relative overflow-hidden py-32 px-6">
      <Helmet>
        <title>Benefício Exclusivo | Gabana's House</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gabana-gold/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-lg w-full relative z-10">
        <AnimatePresence mode="wait">

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gabana-bg border border-white/10 p-12 lg:p-16 text-center relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gabana-gold" />
              
              <FaTicket className="text-5xl text-gabana-gold mx-auto mb-10 opacity-80" />
              
              <h2 className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-6">
                Um convite <br /><span className="italic text-gabana-gold">para voltar.</span>
              </h2>
              <p className="text-gabana-cream/70 text-lg mb-12 font-sans leading-relaxed">
                Compartilhe sua experiência no Google e libere <span className="text-white font-medium">10% de desconto</span> em sua próxima estadia.
              </p>

              <button
                onClick={handleReviewClick}
                className="w-full flex items-center justify-center gap-4 bg-white text-[#001429] px-8 py-5 text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors duration-300"
              >
                <FaGoogle className="text-lg" />
                Avaliar no Google
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gabana-bg border border-white/10 p-12 lg:p-16 text-center relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gabana-gold" />

              <h2 className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-6">
                Nosso muito <br /><span className="italic text-gabana-gold">obrigado.</span>
              </h2>
              <p className="text-gabana-cream/70 text-lg mb-12 font-sans leading-relaxed">
                Sua avaliação nos ajuda a evoluir. Seu voucher está pronto para ser emitido.
              </p>

              <button
                onClick={handleGenerateVoucher}
                className="w-full flex items-center justify-center gap-4 bg-gabana-gold text-[#001429] px-8 py-5 text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500"
              >
                Resgatar Benefício <FaArrowRight />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gabana-gold p-1 relative overflow-hidden"
            >
              <div className="bg-[#000E1D] p-10 lg:p-16 text-center border border-gabana-gold/20">
                <p className="text-gabana-gold text-[10px] font-sans tracking-[0.4em] uppercase mb-4">Acesso Vip</p>
                <h2 className="font-serif text-white text-6xl tracking-widest mb-2">GABANA10</h2>
                <div className="w-16 h-[1px] bg-gabana-gold/30 mx-auto my-8" />
                
                <ul className="text-left text-gabana-cream/70 text-sm font-sans space-y-4 mb-10">
                  <li className="flex gap-3"><span className="text-gabana-gold">✦</span> Válido por 1 ano a partir de hoje.</li>
                  <li className="flex gap-3"><span className="text-gabana-gold">✦</span> Uso único por CPF cadastrado.</li>
                  <li className="flex gap-3"><span className="text-gabana-gold">✦</span> Exclusivo para reservas via WhatsApp.</li>
                </ul>

                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Acabei%20de%20avaliar%20no%20Google%20e%20ganhei%20o%20cupom%20GABANA10%20para%20minha%20pr%C3%B3xima%20reserva%20direta.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-4 bg-[#25D366] text-[#001429] px-8 py-5 text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                  Validar Cupom
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default Promo;