import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LoadScripts from './components/Loadscripts';

import './assets/themify-icons/css/themify-icons.css';
import './assets/css/style.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Resume />
      <Projects />
      <Footer />
      <LoadScripts />

    </div>
  );
}

export default App;
