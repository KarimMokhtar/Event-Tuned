import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from "./components/featured";
import VenueNfo from './components/venueNfo';
function App() {
  return (
    <div className="App" style={{height:'1500px',background:'blue'}}>
      <Header />
      <Featured />
      <VenueNfo />
    </div>
  );
}

export default App;
