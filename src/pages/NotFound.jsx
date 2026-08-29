import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import LiquidButton from '../components/LiquidButton';

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gabana-deep px-6 text-center">
    <Seo title="Página não encontrada" path="/404" noindex />

    <p className="eyebrow mb-7 text-gabana-gold">Erro 404</p>
    <h1
      className="mb-6 font-serif font-light leading-[1.02] tracking-[-0.025em] text-gabana-cream"
      style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)' }}
    >
      Essa porta não abre.
    </h1>
    <p className="mb-12 max-w-md text-[1.02rem] leading-[1.75] text-gabana-muted">
      A página que você procurou não existe mais, ou nunca existiu. As outras
      continuam abertas.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-4">
      <LiquidButton as="link" to="/">
        Ir para a casa
      </LiquidButton>
      <LiquidButton as="link" to="/galeria" variant="glass">
        Ver a galeria
      </LiquidButton>
    </div>
  </div>
);

export default NotFound;
