import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItenListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header>
        <img src={'./imagenes/logo.jpeg'} alt='logo empresa' />'
        <Navbar />
        <ItenListContainer greeting='Bievenido a Life Freedom' />
      </header>
      

      
    </div>
  );
}

export default App;
