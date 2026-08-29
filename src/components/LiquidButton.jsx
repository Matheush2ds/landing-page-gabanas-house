import { useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * Botão com vidro líquido: brilho especular fixo no topo, relevo 3D
 * e um halo que persegue o cursor. Sem JS de animação — só variáveis CSS,
 * então não pesa nem trava em celular.
 *
 * variant: 'gold' (primário) | 'glass' (secundário) | 'whatsapp'
 * size:    'md' | 'lg'
 * as:      'a' | 'button' | 'link'  (link = React Router)
 */
const VARIANTS = {
  gold: {
    shell:
      'text-gabana-deep [--lq-tint:255_255_255] ' +
      'bg-[linear-gradient(160deg,var(--color-gabana-gold-soft),var(--color-gabana-gold)_46%,#a8873f)] ' +
      'shadow-[0_1px_0_rgba(255,255,255,.55)_inset,0_-2px_6px_rgba(80,58,12,.35)_inset,0_10px_26px_-8px_rgba(201,168,76,.55),0_2px_4px_rgba(4,21,32,.4)] ' +
      'hover:shadow-[0_1px_0_rgba(255,255,255,.7)_inset,0_-2px_6px_rgba(80,58,12,.3)_inset,0_16px_34px_-10px_rgba(201,168,76,.7),0_3px_6px_rgba(4,21,32,.45)]',
  },
  glass: {
    shell:
      'text-gabana-cream [--lq-tint:224_203_164] ' +
      'bg-[linear-gradient(160deg,rgba(255,255,255,.14),rgba(255,255,255,.04)_44%,rgba(255,255,255,.09))] ' +
      'ring-1 ring-white/18 backdrop-blur-md ' +
      'shadow-[0_1px_0_rgba(255,255,255,.28)_inset,0_-1px_4px_rgba(0,0,0,.35)_inset,0_10px_26px_-12px_rgba(0,0,0,.8)] ' +
      'hover:ring-gabana-gold/50 hover:text-white',
  },
  whatsapp: {
    shell:
      'text-white [--lq-tint:255_255_255] ' +
      'bg-[linear-gradient(160deg,#4ce084,#25d366_48%,#12a651)] ' +
      'shadow-[0_1px_0_rgba(255,255,255,.5)_inset,0_-2px_6px_rgba(6,80,40,.4)_inset,0_10px_28px_-8px_rgba(37,211,102,.55)] ' +
      'hover:shadow-[0_1px_0_rgba(255,255,255,.65)_inset,0_-2px_6px_rgba(6,80,40,.35)_inset,0_16px_36px_-10px_rgba(37,211,102,.7)]',
  },
};

const SIZES = {
  md: 'px-8 py-4 text-[0.6rem]',
  lg: 'px-10 py-5 text-[0.66rem] sm:px-12',
};

const LiquidButton = ({
  as = 'a',
  variant = 'gold',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  full = false,
  ...rest
}) => {
  const ref = useRef(null);

  // Move o halo com o ponteiro escrevendo direto no style — sem re-render.
  const track = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--lq-x', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--lq-y', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const reset = () => {
    ref.current?.style.setProperty('--lq-x', '50%');
    ref.current?.style.setProperty('--lq-y', '0%');
  };

  const Tag = as === 'link' ? Link : as;

  return (
    <Tag
      ref={ref}
      onPointerMove={track}
      onPointerLeave={reset}
      className={[
        'group relative isolate inline-flex items-center justify-center gap-3.5 overflow-hidden',
        'rounded-full font-sans font-medium uppercase tracking-[0.28em]',
        'transition-[transform,box-shadow,color] duration-300 ease-out',
        'will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985]',
        'motion-reduce:transform-none motion-reduce:transition-none',
        VARIANTS[variant].shell,
        SIZES[size],
        full ? 'w-full' : '',
        className,
      ].join(' ')}
      style={{ '--lq-x': '50%', '--lq-y': '0%' }}
      {...rest}
    >
      {/* Halo líquido que segue o cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(18rem circle at var(--lq-x) var(--lq-y), rgb(var(--lq-tint) / 0.42), transparent 62%)',
        }}
      />

      {/* Menisco: brilho especular preso na borda de cima */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 top-0 -z-10 h-[42%] rounded-b-[100%] rounded-t-full bg-[linear-gradient(to_bottom,rgba(255,255,255,.30),transparent)] opacity-75 blur-[3px]"
      />

      {/* Sombra líquida no fundo, dá a espessura do vidro */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-[linear-gradient(to_top,rgba(0,0,0,.22),transparent)]"
      />

      {Icon && <Icon aria-hidden className="text-base transition-transform duration-400 group-hover:scale-110" />}
      <span className="relative">{children}</span>
    </Tag>
  );
};

export default LiquidButton;
