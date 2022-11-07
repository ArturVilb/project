import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Cards />
        <Footer />
    </>
  )
}

export default Home