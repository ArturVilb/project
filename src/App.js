import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import Tour from './routes/Tour/Tour';
import Merch from './routes/Merch/Merch';
import Music from './routes/Music/Music';
import BuyTickets from './routes/BuyTickets/BuyTickets';

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/buy-tickets" element={<BuyTickets />} />
        </Routes>
    </>
  );
}

export default App;