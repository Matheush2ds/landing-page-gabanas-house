import { useState } from 'react';
import { motion } from 'motion/react';
import { FaLocationDot, FaMap, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SITE } from '../data/site';
import { readPrefs } from '../lib/prefs';
import { EASE } from '../lib/motion';

const { address } = SITE;

/**
 * O pin só aparece quando a busca resolve para um ponto exato. Endereço e
 * plus code o Google às vezes interpreta como região e devolve o mapa sem
 * marcador — por isso a consulta vai em coordenada, que sempre crava o pin.
 */
const point = `${address.lat},${address.lng}`;
const embedSrc = `https://maps.google.com/maps?q=${point}&hl=pt-BR&t=m&z=17&output=embed`;
const externalSrc = `https://www.google.com/maps/search/?api=1&query=${point}`;

const Location = () => {
  // O embed do Google grava cookies. Sem consentimento, ele só entra a pedido.
  const [loaded, setLoaded] = useState(() => readPrefs()?.analytics === true);

  return (
    <section aria-labelledby="mapa-titulo" className="bg-gabana-bg pb-24 lg:pb-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-14">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.95, ease: EASE }}
        >
          <h2 id="mapa-titulo" className="sr-only">
            Localização no mapa
          </h2>

          <span
            className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full border border-gabana-gold/25 lg:block"
            aria-hidden
          />

          <div className="relative h-[380px] overflow-hidden bg-gabana-card lg:h-[520px]">
            {loaded ? (
              <iframe
                className="h-full w-full opacity-90 grayscale-[30%] contrast-[1.05]"
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa com a localização da Gabana’s House em Caldas Novas"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-6 px-8 text-center">
                <FaMap aria-hidden className="text-3xl text-gabana-gold/60" />
                <p className="max-w-sm text-sm leading-relaxed text-gabana-muted">
                  O mapa é carregado do Google e grava cookies no seu navegador.
                  Ele só aparece se você quiser.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setLoaded(true)}
                    className="eyebrow rounded-full bg-[linear-gradient(160deg,var(--color-gabana-gold-soft),var(--color-gabana-gold)_46%,#a8873f)] px-7 py-3.5 text-gabana-deep shadow-[0_1px_0_rgba(255,255,255,.5)_inset,0_-2px_6px_rgba(80,58,12,.3)_inset,0_8px_20px_-8px_rgba(201,168,76,.5)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Carregar o mapa
                  </button>
                  <a
                    href={externalSrc}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow flex items-center gap-3 rounded-full bg-white/[0.06] px-7 py-3.5 text-gabana-cream ring-1 ring-white/15 backdrop-blur-md transition-colors duration-300 hover:ring-gabana-gold/40"
                  >
                    Abrir no Google Maps
                    <FaArrowUpRightFromSquare aria-hidden className="text-[0.65rem]" />
                  </a>
                </div>
              </div>
            )}

            <address className="absolute inset-x-0 bottom-0 flex items-center gap-4 border-t border-gabana-border bg-gabana-deep/92 px-6 py-4 not-italic backdrop-blur-xs">
              <FaLocationDot aria-hidden className="shrink-0 text-xl text-gabana-gold" />
              <div>
                <p className="text-sm font-medium leading-tight text-gabana-cream">
                  {address.street}
                </p>
                <p className="mt-0.5 text-xs text-gabana-muted">
                  {address.district}, {address.city} / {address.state}
                </p>
              </div>
            </address>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
