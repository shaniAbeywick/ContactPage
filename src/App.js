import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      
     <Navbar/>  {/* Navbar section */}
     <Hero/>     {/* hero section */}
     <Contact/>  {/* contact form section */}
     <Map/>     {/* map section */}
     <Footer/>   {/* footer section */}
    </div>
  );
}

export default App;
