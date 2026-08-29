import Seo from '../components/Seo';
import Hero from '../components/Hero';
import TheHouse from '../components/TheHouse';
import HorizontalGallery from '../components/HorizontalGallery';
import HouseTour from '../components/HouseTour';
import Amenities from '../components/Amenities';
import Nearby from '../components/Nearby';
import Location from '../components/Location';
import ReviewsSection from '../components/ReviewsSection';
import StayInfo from '../components/StayInfo';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';

const Home = () => (
  <>
    <Seo
      description="Casa inteira em Caldas Novas para até 15 pessoas: 3 suítes com ar-condicionado, 4 banheiros, piscina climatizada, churrasqueira integrada à cozinha e garagem para 3 carros. Reserva direta com o anfitrião."
      path="/"
    />
    <Hero />
    <TheHouse />
    <HorizontalGallery />
    <HouseTour />
    <Amenities />
    <Nearby />
    <Location />
    <ReviewsSection />
    <StayInfo />
    <Faq />
    <FinalCta />
  </>
);

export default Home;
