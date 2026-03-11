import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const FAQS = [
  { 
    q: "Quantas pessoas a casa comporta?", 
    a: "Acomodamos confortavelmente até 10 hóspedes, distribuídos em 4 suítes amplas e climatizadas." 
  },
  { 
    q: "A casa possui garagem?", 
    a: "Sim, oferecemos garagem privativa e coberta para até 3 veículos com total segurança." 
  },
  { 
    q: "Animais de estimação são permitidos?", 
    a: "Amamos pets! Animais de pequeno porte são bem-vindos, mediante aviso prévio e taxa de limpeza." 
  },
  { 
    q: "Qual o horário de check-in e check-out?", 
    a: "O horário padrão de check-in é a partir das 14h, e o check-out até as 11h. Porém, somos super flexíveis! Tudo pode ser conversado e ajustado com o anfitrião de acordo com a disponibilidade das datas." 
  }
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-32 px-6 lg:px-12 max-w-4xl mx-auto bg-dark-bg">
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-4">Suporte</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Ficou alguma dúvida?</h2>
        <p className="text-white/60">Tudo o que você precisa saber antes de fazer as malas.</p>
      </div>
      
      <div className="space-y-2">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="border-b border-white/10">
            <button 
              className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <span className={`text-lg font-bold transition-colors duration-300 pr-8 ${openFaq === idx ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                {faq.q}
              </span>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === idx ? 'bg-gold/10' : 'bg-transparent group-hover:bg-white/5'}`}>
                <FaChevronDown className={`text-white/50 transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-gold' : ''}`} />
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-white/70 leading-relaxed font-sans pr-12">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;