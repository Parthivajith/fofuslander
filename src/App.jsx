import React from 'react';
import './App.css'; // Import your global CSS
import Navbar from './navbar'; // Ensure correct file name
import AboutSection from './AboutSection';
import ScrollableCardRow from './ScrollableCardRow'; // Import the new component
import HighlightsSection from './HighlightsSection';
import ServicesSection from './ServicesSection';
import LargeCard from './LargeCard';
import ProductCards from './ProductCards';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <ProductCards></ProductCards>
      <HighlightsSection></HighlightsSection>
      <LargeCard></LargeCard>
      <ServicesSection></ServicesSection>
      <Footer></Footer>

    </>
  );
}

export default App;
