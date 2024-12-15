import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import LoadScripts from './components/Loadscripts';
import './assets/themify-icons/css/themify-icons.css';
import './assets/css/style.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:lang" element={<LanguageWrapper />} />
        <Route path="*" element={<Navigate to="/cat" />} />
      </Routes>
    </Router>
  );
};

const LanguageWrapper = () => {
  return (
    <LanguageProvider>
      <React.Suspense>
        <div className="App">
          <Header />
          <Navbar />
          <About />
          <Resume />
          <Projects />
          <Footer />
          <LoadScripts />
          {/* Vercel analytics */}
          <Analytics />
          <SpeedInsights />
        </div>
      </React.Suspense>
    </LanguageProvider>
  );
};

// Componentes cargados dinámicamente
const Navbar = React.lazy(() => import('./components/Navbar'));
const About = React.lazy(() => import('./components/About'));
const Resume = React.lazy(() => import('./components/Resume'));
const Projects = React.lazy(() => import('./components/Projects'));
const Footer = React.lazy(() => import('./components/Footer'));
const Header = React.lazy(() => import('./components/Header'));

export default App;
