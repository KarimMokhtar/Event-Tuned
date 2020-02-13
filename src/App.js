import React from 'react';
import { Element } from 'react-scroll';
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
      <Element name="features" >
        <Featured />
      </Element>
      <Element name="venuefo" >
        <VenueNfo />
      </Element>
      <Element name="highlights" >
        <Highlights />
      </Element>
      <Element name="pricing" >
        <Pricing />
      </Element>
      <Element name="location" >
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
