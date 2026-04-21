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
    <div>
      <Helmet>
        <title>Gabana's House | Casa de Temporada em Caldas Novas</title>
        <meta
          name="description"
          content="Hospedagem premium em Caldas Novas. Casa inteira com piscina aquecida, área gourmet e conforto absoluto para até 15 pessoas."
        />
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