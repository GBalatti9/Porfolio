import React from 'react';
import './css/FullScreenAnimation.css';
import './App.css';
import './css/google-fonts.css';
import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Projects from './components/Projects';
import videoFile from './assets/videos/MadMenOpeningCreditsHD.mp4';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';
import FullscreenAnimation from './components/FullScreenAnimation';

function App() {
  return (
    <div className="App bg-slate-400">
      <FullscreenAnimation />
      <video className="fondo-video absolute top-0 left-0 w-full h-full object-cover blur-sm" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="header-container">
        <Header />
      </div>
      <div className="presentacion-container">
        <Presentacion />
      </div>

      <section id="proyectos">
        <Projects />
      </section>

      <section id="sobre-mi">
        <SobreMi />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
