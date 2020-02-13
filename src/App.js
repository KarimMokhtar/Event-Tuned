import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from "./components/featured";
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
function App() {
  return (
    <div className="App" >
      <Header />
      <Featured />
      <VenueNfo />
      <Highlights />
      <Pricing />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
