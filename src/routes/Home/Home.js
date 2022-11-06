import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import Cards from '../../components/cards/Cards';


const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Cards />
    </>
  )
}

export default Home