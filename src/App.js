import React from 'react';
import './App.css';
import Game from './components/Game'
import Header from './components/otheroparts/Header'
import Footer from './components/otheroparts/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
