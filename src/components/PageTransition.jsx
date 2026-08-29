import { motion, useReducedMotion } from 'motion/react';
import { EASE } from '../lib/motion';

/** Cortina dourada + fade — troca de página sem recarregar seco. */
const PageTransition = ({ children }) => {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <motion.span
        className="pointer-events-none fixed inset-0 z-[150] origin-bottom bg-gabana-deep"
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      />
      {children}
    </motion.div>
  );
};

export default PageTransition;
