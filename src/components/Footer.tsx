import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#95B949]">©Peluquería Jo los Pelines, S.L.</p>
        <p className="text-[#95B949]">Todos los derechos reservados.</p>
        <p>
          <Link to="/aviso-legal" className="text-[#95B949] hover:text-primary transition-colors">Aviso legal</Link>
          {' - '}
          <Link to="/politica-privacidad" className="text-[#95B949] hover:text-primary transition-colors">Política de privacidad</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;