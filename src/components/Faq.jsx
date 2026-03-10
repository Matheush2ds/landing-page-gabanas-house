import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const FAQS = [
  { 
    q: "Quantas pessoas a casa comporta?", 
    a: "Acomodamos confortavelmente até 10 hóspedes, distribuídos em suítes amplas e climatizadas." 
  },
  { 
    q: "A casa possui garagem?", 
    a: "Sim, oferecemos garagem privativa e coberta para até 3 veículos com total segurança." 
  },
  { 
    q: "Animais de estimação são permitidos?", 
    a: "Amamos pets! Animais de pequeno porte são bem-vindos, mediante aviso prévio." 
  },
  { 
    q: "Qual o horário de check-in e check-out?", 
    a: "O horário padrão de check-in é a partir das 14h, e o check-out até as 11h. Porém, somos super flexíveis! Tudo pode ser conversado e ajustado com o anfitrião de acordo com a disponibilidade das datas." 
  }
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-32 px-6 lg:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif mb-6">Ficou alguma dúvida?</h2>
        <p className="text-[#8A7B66]">Tudo o que você precisa saber antes de fazer as malas.</p>
      </div>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="border-b border-[#2C2C2C]">
            <button 
              className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <span className="text-lg font-bold text-[#F9F8F6] group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
              <FaChevronDown className={`text-[#5C5C5C] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-[#A39D98] leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;