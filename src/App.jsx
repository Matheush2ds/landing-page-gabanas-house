import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';
import PrefsNotice from './components/PrefsNotice';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Reservas from './pages/Reservas';
import Promo from './pages/Promo';
import Privacidade from './pages/Privacidade';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const page = (Component) => (
  <PageTransition>
    <Component />
  </PageTransition>
);

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <ScrollToTop />

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gabana-gold focus:px-5 focus:py-3 focus:text-gabana-deep focus:eyebrow"
      >
        Ir para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo" className="grow">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={page(Home)} />
            <Route path="/galeria" element={page(Galeria)} />
            <Route path="/reservas" element={page(Reservas)} />
            <Route path="/promo" element={page(Promo)} />
            <Route path="/privacidade" element={page(Privacidade)} />
            <Route path="*" element={page(NotFound)} />
          </Routes>
        </AnimatePresence>
      </main>

      <FloatingWhatsApp />
      <PrefsNotice />
      <Footer />
    </div>
  );
}

export default App;
