import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Footer from './components/Footer.jsx';

// Páginas principales
import Home from './pages/Home.jsx';
import QueVer from './pages/QueVer.jsx';
import Notificaciones from './pages/Notificaciones.jsx';
import NoticiasEventos from './pages/NoticiasEventos.jsx';

// Páginas de navegación (¿Qué ver?)
import CentroHistorico from './pages/quever/CentroHistorico.jsx';
import TierraDeVinos from './pages/quever/TierraDeVinos.jsx';
import RutaReligiosa from './pages/quever/RutaReligiosa.jsx';
import FeriasYFestividades from './pages/quever/FeriasYFestividades.jsx';
import RutaDeLaGarnacha from './pages/quever/RutaDeLaGarnacha.jsx';
import Haciendas from './pages/quever/Haciendas.jsx';

// Páginas del Centro Histórico
import AntiguaEstacion from './pages/centrohistorico/AntiguaEstacion.jsx';
import ArchivoHistorico from './pages/centrohistorico/ArchivoHistorico.jsx';
import CasaDeMadera from './pages/centrohistorico/CasaDeMadera.jsx';
import MonumentoALaVendimia from './pages/centrohistorico/MonumentoALaVendimia.jsx';
import MuralDePresidencia from './pages/centrohistorico/MuralDePresidencia.jsx';
import MuseoDeCasa from './pages/centrohistorico/MuseoDeCasa.jsx';
import ParqueInfantil from './pages/centrohistorico/ParqueInfantil.jsx';
import PlazaPrincipal from './pages/centrohistorico/PlazaPrincipal.jsx';
import Reloj from './pages/centrohistorico/Reloj.jsx';

// Páginas de Tierra de Vinos
import BodegasOrigen from './pages/tierradevino/BodegasOrigen.jsx';
import HaciendaDeLetras from './pages/tierradevino/HaciendaDeLetras.jsx';
import RanchoUbuntu from './pages/tierradevino/RanchoUbuntu.jsx';
import HRealDePlata from './pages/tierradevino/HRealDePlata.jsx';
import SegundaParte from './pages/tierradevino/SegundaParte.jsx';
import VinaLasCruces from './pages/tierradevino/VinaLasCruces.jsx';
import VinicolaElAguaje from './pages/tierradevino/VinicolaElAguaje.jsx';
import VinicolaElSarmiento from './pages/tierradevino/VinicolaElSarmiento.jsx';
import VinicolaSantaElena from './pages/tierradevino/VinicolaSantaElena.jsx';

// Páginas de Haciendas
import HaciendaSantiago from './pages/Haciendas/Santiago.jsx';
import HaciendaElMezquite from './pages/Haciendas/ElMezquite.jsx';
import HaciendaGarabato from './pages/Haciendas/Garabato.jsx';

// Páginas de Ruta Religiosa
import InmaculadaConcepcion from './pages/rutareligiosa/InmaculadaConcepcion.jsx';
import ParroquiaDeGuadalupe from './pages/rutareligiosa/ParroquiaDeGuadalupe.jsx';
import TemploDelSagradoCorazon from './pages/rutareligiosa/TemploDelSagradoCorazon.jsx';
import TemploDeNtraSenoraDelRefugio from './pages/rutareligiosa/TemploDeNtraSenoraDelRefugio.jsx';

// Paginas de Ferias y Festividades
import DiaDeMuertos from './pages/feriasyfestividades/DiaDeMuertos.jsx';

// ScrollToTop
import ScrollToTop from './hooks/scrollToTop.jsx';
import AutoInstaller from './components/AutoInstaller.jsx';
import InstallPWAButton from './components/InstallPWAButton.jsx';
import NotificationPermissionButton from './components/NotificationPermissionButton.jsx';


// Estilos globales
import './styles/globals.css';

function App() {
  return (
    <Router>
      {/* Auto-scroll al cambiar de ruta (window scroll).
          Si usas un contenedor scrollable, pasa targetSelector.
          <ScrollToTop targetSelector=".app-content" smooth /> */}
      <ScrollToTop smooth />
      {/* 1) Auto-installer: escucha ?autoinstall=true y dispara el prompt */}


      <div className="app-layout">
        <main
          className="main-content"
          style={{
            position: 'relative', // para overlay absoluto
            backgroundImage: 'url("/assents/imagenes/FondoPagina/FondoPaginaAc.svg")',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% auto',
            width: '100%',
            height: '100%',
          }}
        >

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quever" element={<QueVer />} />
            <Route path="/notificaciones" element={<Notificaciones />} />
            <Route path="/noticias" element={<NoticiasEventos />} />
            <Route path="/quever/centrohistorico" element={<CentroHistorico />} />
            <Route path="/quever/tierradevinos" element={<TierraDeVinos />} />
            <Route path="/quever/rutareligiosa" element={<RutaReligiosa />} />
            <Route path="/quever/feriasyfestividades" element={<FeriasYFestividades />} />
            <Route path="/quever/rutadelagarnacha" element={<RutaDeLaGarnacha />} />
            <Route path="/quever/haciendas" element={<Haciendas />} />


            {/* Centro Histórico */}
            <Route path="/quever/centrohistorico/antiguaestacion" element={<AntiguaEstacion />} />
            <Route path="/quever/centrohistorico/archivohistorico" element={<ArchivoHistorico />} />
            <Route path="/quever/centrohistorico/casademadera" element={<CasaDeMadera />} />
            <Route path="/quever/centrohistorico/monumentoalavendimia" element={<MonumentoALaVendimia />} />
            <Route path="/quever/centrohistorico/muraldepresidencia" element={<MuralDePresidencia />} />
            <Route path="/quever/centrohistorico/museodecasa" element={<MuseoDeCasa />} />
            <Route path="/quever/centrohistorico/parqueinfantil" element={<ParqueInfantil />} />
            <Route path="/quever/centrohistorico/plazaprincipal" element={<PlazaPrincipal />} />
            <Route path="/quever/centrohistorico/reloj" element={<Reloj />} />

            {/* Tierra de Vinos */}
            <Route path="/quever/tierradevinos/bodegasorigen" element={<BodegasOrigen />} />
            <Route path="/quever/tierradevinos/haciendadeletras" element={<HaciendaDeLetras />} />
            <Route path="/quever/tierradevinos/ranchoubuntu" element={<RanchoUbuntu />} />
            <Route path="/quever/tierradevinos/realdeplata" element={<HRealDePlata />} />
            <Route path="/quever/tierradevinos/segundaparte" element={<SegundaParte />} />
            <Route path="/quever/tierradevinos/vinedolascruces" element={<VinaLasCruces />} />
            <Route path="/quever/tierradevinos/vinicolaelaguaje" element={<VinicolaElAguaje />} />
            <Route path="/quever/tierradevinos/vinicolaelsarmiento" element={<VinicolaElSarmiento />} />
            <Route path="/quever/tierradevinos/vinicolasantaelena" element={<VinicolaSantaElena />} />

            {/* Haciendas */}
            <Route path="/quever/haciendas/haciendadesantiago" element={<HaciendaSantiago />} />
            <Route path="/quever/haciendas/haciendadeelmezquite" element={<HaciendaElMezquite />} />
            <Route path="/quever/haciendas/haciendadegarabato" element={<HaciendaGarabato />} />

            {/* Ruta Religiosa */}
            <Route path="/quever/rutareligiosa/capilladelainmaculadaconcepcion" element={<InmaculadaConcepcion />} />
            <Route path="/quever/rutareligiosa/parroquiadeguadalupe" element={<ParroquiaDeGuadalupe />} />
            <Route path="/quever/rutareligiosa/templodelsagradocorazon" element={<TemploDelSagradoCorazon />} />
            <Route path="/quever/rutareligiosa/templodenuestrasenoradelrefugio" element={<TemploDeNtraSenoraDelRefugio />} />

            {/* Ferias y Festividades */}
            <Route path="/quever/feriasyfestividades/diademuertos" element={<DiaDeMuertos />} />

            {/* más rutas aquí */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
