import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Usuarios } from './components/Usuarios';
import { Home } from './components/Home';


function App() {
  return (
    <div className="App">
        <Header />

        <Home/>
        
        <Usuarios/>
        <Footer />
    </div>
  );
}

export default App;
