import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-8 my-8"
        >
          <h1 className="text-4xl font-display text-primary mb-8">Aviso Legal</h1>
          <p className="text-gray-600 mb-4">El contenido se añadirá próximamente.</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;