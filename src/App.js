import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QueVer from './pages/QueVer';
import CentroHistorico from './pages/CentroHistorico';
import TierraDeVinos from "./pages/TierraDeVinos";
import RutaReligiosa from "./pages/RutaReligiosa";
import AntiguaEstacion from './pages/ExamplePage'
import './styles/globals.css';



function App() {
  return (
    <Router>
      <div 
      className="app-layout" 
     >
        <Header />
        
        <main className="main-content"
         style= {{
          backgroundImage: "url('/assents/imagenes/FondoPagina/FondoPagina.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% auto",
          width: "100%",
          height: "100%"
        }}
        >
          <div style={{
          position: "absolute",
          insert: 0,
          backgroundColor: "rgba(0,0,0,0.6)"
          }}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quever" element={<QueVer />} />
            <Route path="/quever/centrohistorico" element={<CentroHistorico />}/>
            <Route path="/quever/tierradevinos" element={<TierraDeVinos />}/>
            <Route path="/quever/rutareligiosa" element={<RutaReligiosa />}/>
            <Route path="/quever/centrohistorico/antiguaestacion" element={<AntiguaEstacion />}/>
            {/* Aquí agregaremos más rutas */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
