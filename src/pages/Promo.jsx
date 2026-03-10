import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGoogle, FaWhatsapp, FaGift, FaCircleExclamation } from 'react-icons/fa6';
import confetti from 'canvas-confetti';

const Promo = () => {
  const [step, setStep] = useState(1);
  const googleLink = "https://g.page/r/Cci94VmYDpB8EBE/review"; 
  const whatsappNumber = "5564992415277";

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleReviewClick = () => {
    window.open(googleLink, '_blank');
    setStep(2);
  };

  const handleGenerateVoucher = () => {
    confetti({ 
      particleCount: 200, 
      spread: 90, 
      origin: { y: 0.5 }, 
      colors: ['#D4AF37', '#ffffff', '#8A7B66'],
      disableForReducedMotion: true
    });
    setStep(3);
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center relative overflow-hidden py-32 px-6">
      <Helmet>
        <title>Resgatar Prêmio | Gabana's House</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-lg w-full text-center relative z-10">
        
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#1A1A1A] border border-[#333] mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <FaGift className="text-4xl text-[#D4AF37]" />
        </div>

        {step === 1 && (
          <div className="transition-all duration-700 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Um presente<br/>para você.</h2>
            <p className="text-[#A39D98] text-lg mb-10 leading-relaxed">Avalie sua estadia no Google e desbloqueie <strong className="text-white font-normal">10% OFF</strong> na sua próxima reserva conosco.</p>
            
            <button 
              onClick={handleReviewClick} 
              className="w-full flex items-center justify-center gap-4 bg-white text-[#1A1A1A] px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#F0F0F0] transition-colors shadow-xl"
            >
              <FaGoogle className="text-xl text-[#4285F4]" /> Avaliar no Google
            </button>
            <p className="text-xs text-[#5C5C5C] font-bold uppercase tracking-widest mt-8">Leva menos de 1 minuto</p>
          </div>
        )}

        {step === 2 && (
          <div className="transition-all duration-700 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Obrigado!</h2>
            <p className="text-[#A39D98] text-lg mb-10 leading-relaxed">Sua opinião é fundamental. Clique abaixo para emitir o seu voucher exclusivo.</p>
            
            <button 
              onClick={handleGenerateVoucher} 
              className="w-full bg-[#D4AF37] text-[#1A1A1A] px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#b5952f] transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
            >
              Emitir meu Voucher
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="transition-all duration-700 animate-fade-in">
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">Parabéns!</h2>
            <p className="text-[#A39D98] mb-10">O seu desconto foi ativado.</p>

            <div className="bg-[#141414] border border-[#2C2C2C] p-10 relative overflow-hidden shadow-2xl mb-10 group hover:border-[#D4AF37]/50 transition-colors duration-500">
              <div className="absolute inset-0 border-2 border-dashed border-[#D4AF37]/20 m-2 pointer-events-none"></div>
              
              <span className="block text-[10px] text-[#8A7B66] uppercase tracking-[0.3em] mb-4 font-bold relative z-10">Código Exclusivo</span>
              <strong className="text-5xl md:text-6xl font-serif text-white tracking-wider block mb-4 relative z-10 drop-shadow-lg">GABANA10</strong>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] relative z-10">Válido até {new Date().getFullYear() + 1}</span>
            </div>

            <div className="text-left bg-[#111] border border-[#222] p-8 mb-10">
              <strong className="text-white flex items-center gap-3 mb-4 text-sm uppercase tracking-widest">
                <FaCircleExclamation className="text-[#D4AF37] text-lg" /> Regras de Uso
              </strong>
              <ul className="space-y-3 text-sm text-[#A39D98] leading-relaxed">
                <li className="flex gap-3"><span className="text-[#D4AF37]">•</span> Válido por 1 ano a partir da emissão.</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">•</span> Uso único (1 vez) por CPF/Hóspede.</li>
                <li className="flex gap-3"><span className="text-[#D4AF37]">•</span> Válido apenas para reservas diretas via WhatsApp (não aplicável em plataformas).</li>
              </ul>
            </div>

            <a 
              href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Acabei%20de%20avaliar%20no%20Google%20e%20ganhei%20o%20cupom%20GABANA10%20para%20minha%20pr%C3%B3xima%20reserva%20direta.`}
              target="_blank" rel="noreferrer"
              className="w-full flex items-center justify-center gap-4 bg-[#25D366] text-white px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#1DA851] transition-colors shadow-lg"
            >
              <FaWhatsapp className="text-2xl" /> Validar com Anfitrião
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promo;