import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import InputDiceType from './components/InputDiceType/InputDiceType';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <InputDiceType />
      <Footer />
    </div>
  );
}

export default App;
