import React, { useRef } from 'react';
import './App.css';
import './css/google-fonts.css';
import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Projects from './components/Projects';
import Introduction from './components/Introduction';
import videoFile from './assets/videos/PatydeCancha.mp4';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';

function App() {
  const videoRef = useRef(null);

  return (
    <div className="App bg-slate-300">
      <Introduction />
      <video className="fondo-video absolute top-0 left-0 w-full h-full object-cover blur-sm" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
      <Header videoRef={videoRef} style={{ zIndex: 2 }} />
      <Presentacion videoRef={videoRef} style={{ zIndex: 2 }} />

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
