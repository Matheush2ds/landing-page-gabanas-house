import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGoogle, FaWhatsapp, FaGift, FaCircleExclamation } from 'react-icons/fa6';
import confetti from 'canvas-confetti';

const Promo = () => {
  const [step, setStep] = useState(1);
  const googleLink = "https://g.page/r/Cci94VmYDpB8EBE/review"; 
  const whatsappNumber = "5564992415277";

  const handleReviewClick = () => {
    window.open(googleLink, '_blank');
    setStep(2);
  };

  const handleGenerateVoucher = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#ffffff']
    });
    setStep(3);
  };

  return (
    <div className="container-pad" style={{ paddingTop: '120px', minHeight: '80vh', textAlign: 'center' }}>
      <Helmet>
        <title>Resgatar Prêmio | Gabana's House</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        
        <div style={{ fontSize: '3.5rem', color: 'var(--gold)', marginBottom: '20px' }}>
            <FaGift />
        </div>

        {step === 1 && (
          <div className="fade-in-section is-visible">
            <h2>Ganhe 10% OFF</h2>
            <p style={{ marginBottom: '30px' }}>Avalie sua estadia no Google e ganhe desconto na sua próxima reserva direta.</p>
            
            <button 
              onClick={handleReviewClick}
              className="btn-big" 
              style={{ background: '#4285F4', width: '100%', justifyContent: 'center' }}
            >
              <FaGoogle /> Avaliar no Google
            </button>
            <p style={{ fontSize: '0.8rem', marginTop: '15px', opacity: 0.7 }}>É rapidinho! Leva menos de 1 minuto.</p>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in-section is-visible">
            <h2>Obrigado! ⭐</h2>
            <p style={{ marginBottom: '30px' }}>Já enviou sua avaliação? Clique abaixo para liberar seu presente.</p>
            
            <button 
              onClick={handleGenerateVoucher}
              className="btn-big" 
              style={{ background: 'var(--gold)', color: 'black', width: '100%', justifyContent: 'center' }}
            >
              Gerar Meu Voucher
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="fade-in-section is-visible">
            <h2 style={{ color: 'var(--gold)' }}>Parabéns!</h2>
            <p>Seu desconto foi ativado com sucesso.</p>

            {/* O VOUCHER */}
            <div style={{ 
              background: 'linear-gradient(145deg, #222, #1a1a1a)', 
              padding: '30px', 
              border: '2px dashed var(--gold)', 
              borderRadius: '16px',
              margin: '30px 0',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <span style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '2px' }}>Código Promocional</span>
              <strong style={{ fontSize: '2.2rem', letterSpacing: '3px', color: '#fff', display: 'block' }}>GABANA10</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--gold)', marginTop: '10px', display: 'block' }}>Válido até {new Date().getFullYear() + 1}</span>
            </div>

            {/* REGRAS (LETRAS MIÚDAS) */}
            <div style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '15px', 
                borderRadius: '8px', 
                fontSize: '0.8rem', 
                color: '#aaa',
                textAlign: 'left',
                marginBottom: '20px'
            }}>
                <strong style={{color: 'white', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px'}}>
                    <FaCircleExclamation /> Regras de Uso:
                </strong>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    <li>Válido por 1 ano a partir da emissão.</li>
                    <li>Uso único (1 vez) por CPF/Hóspede.</li>
                    <li>Válido <strong>somente</strong> para reservas feitas diretamente no WhatsApp (não aceito em Airbnb/Booking).</li>
                </ul>
            </div>

            <a 
              href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1!%20Acabei%20de%20avaliar%20no%20Google%20e%20ganhei%20o%20cupom%20GABANA10%20para%20minha%20pr%C3%B3xima%20reserva%20direta.`}
              target="_blank"
              rel="noreferrer"
              className="btn-big btn-whatsapp-hero"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FaWhatsapp /> Enviar para Anfitrião
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default Promo;