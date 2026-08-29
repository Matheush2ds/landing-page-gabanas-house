import { motion } from 'motion/react';
import { EASE } from '../lib/motion';

/** Cabeçalho padrão das páginas internas — mesma métrica em todas. */
const PageHeader = ({ eyebrow, title, lede, children }) => (
  <motion.header
    className="mx-auto max-w-[92rem] border-b border-gabana-border pb-14 lg:pb-20"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: EASE }}
  >
    <p className="eyebrow mb-6 flex items-center gap-4 text-gabana-gold">
      <span className="rule-x w-10" aria-hidden />
      {eyebrow}
    </p>

    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <h1
        className="font-serif font-light leading-[1] tracking-[-0.03em] text-gabana-cream lg:col-span-7"
        style={{ fontSize: 'clamp(2.6rem, 6.4vw, 5.2rem)' }}
      >
        {title}
      </h1>

      <div className="lg:col-span-4 lg:col-start-9">
        {lede && (
          <p className="text-[1.02rem] leading-[1.75] text-gabana-muted">{lede}</p>
        )}
        {children}
      </div>
    </div>
  </motion.header>
);

export default PageHeader;
