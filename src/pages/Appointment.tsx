import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, MapPin, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Footer from '../components/Footer';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [location, setLocation] = useState('');
  const [animalTypes, setAnimalTypes] = useState<string[]>([]);
  
  const handleAnimalTypeChange = (type: string) => {
    setAnimalTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h1 className="text-4xl font-display text-[#95B949] mb-8 text-center">Reserva tu Cita</h1>
          
          <form className="space-y-6">
            {/* Location Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Ubicación
              </label>
              <div className="flex space-x-4">
                {['Alaquás', 'Torrent'].map((loc) => (
                  <label key={loc} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="location"
                      value={loc}
                      checked={location === loc}
                      onChange={(e) => setLocation(e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <span>{loc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Animal Type Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tipo de Mascota</label>
              <div className="flex space-x-4">
                {['Perro', 'Gato', 'Otros'].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={animalTypes.includes(type)}
                      onChange={() => handleAnimalTypeChange(type)}
                      className="text-primary focus:ring-primary"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Email o
                  <Phone className="w-5 h-5 mx-2 text-primary" />
                  Teléfono
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Service and Date Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                Servicio Deseado
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Fecha y Hora
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                className="datepicker-input"
                placeholderText="Selecciona fecha y hora"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                Notas Adicionales (Opcional)
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-300"
            >
              Reservar Cita
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;