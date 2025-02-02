import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Store from './pages/Store';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cita" element={<><Navbar /><Appointment /></>} />
          <Route path="/tienda" element={<><Navbar /><Store /></>} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;