import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Footer from './components/Footer';
import PWAInstallPrompt from './components/PWAInstallPrompt';

// Páginas principales
import Home from './pages/Home';
import QueVer from './pages/QueVer';
import Notificaciones from './pages/Notificaciones';

// Páginas de navegación (¿Qué ver?)
import CentroHistorico from './pages/quever/CentroHistorico';
import TierraDeVinos from './pages/quever/TierraDeVinos';
import RutaReligiosa from './pages/quever/RutaReligiosa';

// Páginas del Centro Histórico
import AntiguaEstacion from './pages/centrohistorico/AntiguaEstacion';
import ArchivoHistorico from './pages/centrohistorico/ArchivoHistorico';
import CasaDeMadera from './pages/centrohistorico/CasaDeMadera';
import MonumentoALaVendimia from './pages/centrohistorico/MonumentoALaVendimia';
import MuralDePresidencia from './pages/centrohistorico/MuralDePresidencia';
import MuseoDeCasa from './pages/centrohistorico/MuseoDeCasa';
import ParqueInfantil from './pages/centrohistorico/ParqueInfantil';
import PlazaPrincipal from './pages/centrohistorico/PlazaPrincipal';
import Reloj from './pages/centrohistorico/Reloj';

//Paginas de Tierra de Vinos
import BodegasOrigen from './pages/tierradevino/BodegasOrigen';
import HaciendaDeLetras from './pages/tierradevino/HaciendaDeLetras';
import RanchoUbuntu from './pages/tierradevino/RanchoUbuntu';
import HRealDePlata from './pages/tierradevino/HRealDePlata';
import SegundaParte from './pages/tierradevino/SegundaParte';
import VinaLasCruces from './pages/tierradevino/VinaLasCruces';
import VinicolaElAguaje from './pages/tierradevino/VinicolaElAguaje';
import VinicolaElSarmiento from './pages/tierradevino/VinicolaElSarmiento';
import VinicolaSantaElena from './pages/tierradevino/VinicolaSantaElena';

//Paginas de Ruta Religiosa
import InmaculadaConcepcion from './pages/rutareligiosa/InmaculadaConcepcion';
import ParroquiaDeGuadalupe from './pages/rutareligiosa/ParroquiaDeGuadalupe';
import TemploDelSagradoCorazon from './pages/rutareligiosa/TemploDelSagradoCorazon';
import TemploDeNtraSenoraDelRefugio from './pages/rutareligiosa/TemploDeNtraSenoraDelRefugio';

// Estilos globales
import './styles/globals.css';



function App() {
  return (
    <Router>
      <div 
      className="app-layout" 
     >        
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

            {/* Rutas para las páginas del Centro Histórico */}
            <Route path="/quever/centrohistorico/antiguaestacion" element={<AntiguaEstacion />}/>
            <Route path="/quever/centrohistorico/archivohistorico" element={<ArchivoHistorico />}/>
            <Route path="/quever/centrohistorico/casademadera" element={<CasaDeMadera />}/>
            <Route path="/quever/centrohistorico/monumentoalavendimia" element={<MonumentoALaVendimia />}/>
            <Route path="/quever/centrohistorico/muraldepresidencia" element={<MuralDePresidencia />}/>
            <Route path="/quever/centrohistorico/museodecasa" element={<MuseoDeCasa />}/>
            <Route path="/quever/centrohistorico/parqueinfantil" element={<ParqueInfantil />}/>
            <Route path="/quever/centrohistorico/plazaprincipal" element={<PlazaPrincipal />}/>
            <Route path="/quever/centrohistorico/reloj" element={<Reloj />}/>

            {/* Rutas de las paginas de tierra de vinos */}
            <Route path="/quever/tierradevinos/bodegasorigen" element={<BodegasOrigen />}/>
            <Route path="/quever/tierradevinos/haciendadeletras" element={<HaciendaDeLetras />}/>
            <Route path="/quever/tierradevinos/ranchoubuntu" element={<RanchoUbuntu />}/>
            <Route path="/quever/tierradevinos/realdeplata" element={<HRealDePlata />}/>
            <Route path="/quever/tierradevinos/segundaparte" element={<SegundaParte />}/>
            <Route path="/quever/tierradevinos/vinedolascruces" element={<VinaLasCruces />}/>
            <Route path="/quever/tierradevinos/vinicolaelaguaje" element={<VinicolaElAguaje />}/>
            <Route path="/quever/tierradevinos/vinicolaelsarmiento" element={<VinicolaElSarmiento />}/>
            <Route path="/quever/tierradevinos/vinicolasantaelena" element={<VinicolaSantaElena />}/>

            {/* Rutas de las paginas de ruta religiosa */}
            <Route path="/quever/rutareligiosa/capilladelainmaculadaconcepcion" element={<InmaculadaConcepcion />}/>
            <Route path="/quever/rutareligiosa/parroquiadeguadalupe" element={<ParroquiaDeGuadalupe />}/>
            <Route path="/quever/rutareligiosa/templodelsagradocorazon" element={<TemploDelSagradoCorazon />}/>
            <Route path="/quever/rutareligiosa/templodenuestrasenoradelrefugio" element={<TemploDeNtraSenoraDelRefugio />}/>

            {/* Rutas para las páginas de Tierra de Vinos */}
            <Route path="/notificaciones" element={<Notificaciones />}/>
            {/* Aquí agregaremos más rutas */}
          </Routes>
        </main>
        
        <Footer />
        
        {/* PWA Install Prompt */}
        <PWAInstallPrompt />
      </div>
    </Router>
  );
}

export default App;
