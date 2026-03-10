import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/Hero';
import GalleryPreview from '../components/GalleryPreview';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import ReviewsSection from '../components/ReviewsSection';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';

const Home = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#F9F8F6] font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
      <Helmet>
        <title>Gabana's House | Casa de Temporada Boutique em Caldas Novas</title>
        <meta name="description" content="Hospedagem premium em Caldas Novas. Casa inteira com piscina aquecida, área gourmet e conforto absoluto para até 10 pessoas." />
      </Helmet>

      <Hero />
      <GalleryPreview />
      <Amenities />
      <Location />
      <ReviewsSection />
      <Faq />
      <FinalCta />
      
    </div>
  );
};

export default Home;