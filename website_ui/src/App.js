import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';
import NeuButton from './NeuButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
        <NeuButton />
      <Footer />
    </div>
  );
}

export default App;
