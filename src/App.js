import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItenListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <img src={'./imagenes/logo.jpeg'} alt='logo empresa' />'
        <Navbar />
        <ItenListContainer greeting='Bievenido a Life Freedom' />        
      </header>
      <Footer/>
      

      
    </div>
  );
}

export default App;
