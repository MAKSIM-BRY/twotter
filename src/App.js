import React from 'react';
import Index from './pages/Index';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const connected = useSelector((state) => state.connexionData.connected);
  return (
    <div className="App">
      <Header />
      <Index connected={connected} />
    </div>
  );
}

export default App;
