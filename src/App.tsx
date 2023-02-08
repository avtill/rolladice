import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import InputDiceType from './components/InputDiceType/InputDiceType';
import Header from './components/Header/Header';
import Result from './components/Result/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
          <Routes>
            <Route path="/" element= {<InputDiceType />} />
            <Route path="/result" element= {<Result />} />
         </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
