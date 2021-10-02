import React from 'react';
import Index from './pages/Index';
import Header from './components/Header/Header';
import ConnexionButtons from './components/ConnexionButtons/ConnexionButtons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ConnexionButtons />
      <Index />
    </div>
  );
}

export default App;
