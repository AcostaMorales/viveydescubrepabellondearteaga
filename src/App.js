import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QueVer from './pages/QueVer';
//Centro historico
import CentroHistorico from './pages/CentroHistorico';
//Paginas centro historico
import AntiguaEstacion from './pages/AntiguaEstacion';
import ArchivoHistorico from './pages/ArchivoHistorico';
import CasaDeMadera from './pages/CasaDeMadera';

//Tierra de vinos
import TierraDeVinos from "./pages/TierraDeVinos";
import RutaReligiosa from "./pages/RutaReligiosa";
import Notificaciones from "./pages/Notificaciones";

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
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "100% auto",
          width: "100%",
          height: "100%"
        }}
        >
          <div style={{
          position: "absolute",
          insert: 0,
          backgroundColor: "rgba(0,0,0,0.4)"
          }}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quever" element={<QueVer />} />
            <Route path="/quever/centrohistorico" element={<CentroHistorico />}/>
            <Route path="/quever/tierradevinos" element={<TierraDeVinos />}/>
            <Route path="/quever/rutareligiosa" element={<RutaReligiosa />}/>
            <Route path="/quever/centrohistorico/antiguaestacion" element={<AntiguaEstacion />}/>
            <Route path="/quever/centrohistorico/archivohistorico" element={<ArchivoHistorico />}/>
            <Route path="/quever/centrohistorico/casademadera" element={<CasaDeMadera />}/>
            <Route path="/notificaciones" element={<Notificaciones />}/>
            {/* Aquí agregaremos más rutas */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
