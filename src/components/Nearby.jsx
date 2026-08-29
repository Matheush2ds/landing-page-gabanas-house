import { motion } from 'motion/react';
import { FaPersonWalking, FaCarSide } from 'react-icons/fa6';
import { NEARBY_DRIVE, NEARBY_WALK } from '../data/site';
import { EASE, rise } from '../lib/motion';

const Group = ({ icon: Icon, title, note, places, delay = 0 }) => (
  <div>
    <div className="mb-6 flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gabana-gold/30 text-gabana-gold">
        <Icon aria-hidden className="text-sm" />
      </span>
      <div>
        <h3 className="eyebrow text-gabana-cream">{title}</h3>
        <p className="mt-1 text-xs text-gabana-muted">{note}</p>
      </div>
    </div>

    <ul className="border-t border-gabana-border">
      {places.map((place, i) => (
        <motion.li
          key={place.name}
          className="group flex items-baseline justify-between gap-6 border-b border-gabana-border py-5 transition-colors duration-500 hover:border-gabana-gold/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: EASE }}
        >
          <span className="min-w-0">
            <span className="block font-serif text-lg font-light text-gabana-cream transition-colors duration-400 group-hover:text-gabana-gold">
              {place.name}
            </span>
            <span className="mt-0.5 block text-sm text-gabana-muted">{place.note}</span>
          </span>
          <span className="shrink-0 font-serif text-lg tabular-nums text-gabana-gold">
            {place.distance}
          </span>
        </motion.li>
      ))}
    </ul>
  </div>
);

const Nearby = () => (
  <section aria-labelledby="arredores-titulo" className="bg-gabana-bg py-24 lg:py-36">
    <div className="mx-auto max-w-[92rem] px-6 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <motion.div className="lg:col-span-6" {...rise()}>
          <p className="eyebrow mb-6 flex items-center gap-4 text-gabana-gold">
            <span className="rule-x w-10" aria-hidden />
            Arredores
          </p>
          <h2
            id="arredores-titulo"
            className="font-serif font-light leading-[1.04] tracking-[-0.02em] text-gabana-cream"
            style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.8rem)' }}
          >
            Você chega, guarda o carro
            <br />
            <span className="italic text-gabana-gold">e vai a pé.</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-[1.02rem] leading-[1.75] text-gabana-muted lg:col-span-5 lg:col-start-8"
          {...rise(0.15)}
        >
          O Itaguaí 1 é rua calma com comércio na esquina. Feira no fim de
          semana, pista de cooper para a caminhada da manhã e clube termal a
          três quarteirões. Distâncias medidas do portão da casa.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-x-16 gap-y-14 lg:mt-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Group
            icon={FaPersonWalking}
            title="A pé"
            note="Sem tirar o carro da garagem"
            places={NEARBY_WALK}
          />
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Group
            icon={FaCarSide}
            title="Minutos de carro"
            note="Para quando quiser sair do bairro"
            places={NEARBY_DRIVE}
            delay={0.1}
          />
          <p className="mt-8 border-l border-gabana-gold/30 pl-5 text-sm leading-relaxed text-gabana-muted">
            Os outros parques (Water Park, di·Roma, Rio Quente) ficam entre 10 e
            30 minutos de carro. Longe de dar para ir a pé, perto de dar para ir
            e voltar no mesmo dia.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Nearby;
