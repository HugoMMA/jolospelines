import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Store = () => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* First Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white px-16 py-16 md:p-32 min-h-[70vh] flex items-center"
          >
            <div>
              <h1 className="text-4xl font-display text-[#95B949] mb-8">Piensos 100% naturales</h1>
              
              <p className="text-gray-600 mb-6">
                En <span className="text-primary font-semibold">Jo los Pelines</span> creemos que nuestras mascotas merecen lo mejor. Por eso, te presentamos nuestro <span className="text-[#95B949] font-semibold">pienso de alta calidad Amanova</span>:
              </p>

              <img 
                src="/images/pienso amanova.png"
                alt="Piensos Amanova"
                className="w-full mb-8 rounded-lg shadow-xl"
              />

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#95B949] mb-2">¿Por qué es mejor?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span><span className="text-primary font-semibold">100% natural:</span> Elaborado con las carnes frescas más finas e ingredientes 100% naturales para una alimentación más sabrosa y saludable.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span><span className="text-primary font-semibold">Máxima calidad:</span> Comida preparada por un equipo de expertos nutricionistas y veterinarios.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span><span className="text-primary font-semibold">Máximo cuidado en la preparación:</span> Cocinando carnes y pescados frescos a baja temperatura y en su propio caldo para mantener los beneficios nutricionales y obtener un aroma y sabor delicioso.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span><span className="text-primary font-semibold">Sin harinas cárnicas ni carnes deshidratadas.</span></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span><span className="text-primary font-semibold">Monoproteico y de alta concentración:</span> Con una sola fuente de proteína (sólo pollo, sólo salmón, sólo cordero, etc.) en alta concentración para minimizar las posibilidades de alergias e intolerancias alimentarias.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span><span className="text-primary font-semibold">Precio competitivo:</span> No más caro que piensos de menor calidad.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600 mt-6">
                  Entra y solicita tu muestra gratuita. Y si a tu mascota no le encanta, te llevas el de siempre.
                </p>

                <div className="text-center mt-8">
                  <h2 className="text-4xl font-fancy text-primary mb-2">Amor a cada bocado</h2>
                  <p className="text-xl font-display text-[#95B949]">porque nuestra mascota merece lo mejor</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Empty block for desktop */}
          <div className="hidden md:block" />
          {/* Empty block for mobile */}
          <div className="h-[300px] md:hidden" />

          {/* Empty block for desktop */}
          <div className="hidden md:block" />

          {/* Second Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white px-16 py-16 md:p-32 min-h-[70vh] flex items-center"
          >
            <div>
              <h2 className="text-4xl font-display mb-4">
                En nuestra <span className="text-primary">tienda</span>, todo para tu <span className="text-primary">mascota</span>
              </h2>

              <div className="space-y-8 mt-8">
                <section>
                  <h3 className="text-2xl font-display text-[#95B949] mb-4">Para su <span className="font-bold">cuidado</span></h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Cepillos especiales</li>
                    <li>Collares antiparasitarios</li>
                    <li>Piensos</li>
                    <li>Snacks cárnicos</li>
                    <li>Anti bolas y anti comezón</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-display text-[#95B949] mb-4">Para su <span className="font-bold">descanso</span></h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Camas</li>
                    <li>Casitas</li>
                    <li>Mantitas</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-display text-[#95B949] mb-4">Para su <span className="font-bold">aseo</span></h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Champús con esencias vegetales, de sílice, perfumados</li>
                    <li>Acondicionadores</li>
                    <li>Mascarillas</li>
                    <li>Limpia patitas</li>
                    <li>Bolsitas recoge caca / líquido limpia pipís</li>
                    <li>Pañales y toallas de entrenamiento</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-display text-[#95B949] mb-4">Para <span className="font-bold">jugar</span></h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Pelotas</li>
                    <li>Huesos</li>
                    <li>Nudos</li>
                    <li>Tiradores</li>
                    <li>Cuerdas</li>
                    <li>Látex</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-display text-[#95B949] mb-4">Para <span className="font-bold">pasear</span></h3>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Collares y arneses</li>
                    <li>Correas</li>
                    <li>Cinturones seguridad para coche</li>
                    <li>Bandanas</li>
                    <li>Identificadores</li>
                    <li>Ropita (<span className="text-primary font-bold">¡nueva línea artesanal mexicana!</span>)</li>
                    <li>Impermeables</li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Third Content Area */}
        <div className="bg-white px-16 py-16 md:p-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-display mb-4">
              Y si no lo tenemos, <span className="text-primary">te lo traemos</span>
            </h2>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Store;