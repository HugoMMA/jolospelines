import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const contentSections = [
    {
      title: "Cuidamos la belleza y el bienestar de tu mascota",
      content: "En nuestros Centros de Estética para Mascotas Jo los Pelines, no sólo brindamos servicios de baño y corte de pelo para tu fiel compañero, ya sea un perro o un gato, sino que también creamos una experiencia que resalta su belleza, carisma y bienestar. Nos enorgullece garantizar que tu mascota se sienta amada y cómoda en cada etapa del proceso.\n\nNuestro enfoque se basa en utilizar los productos más avanzados y especializados para el tipo de pelaje de tu mascota, siempre de las marcas más reconocidas en el cuidado animal. Nuestro equipo de profesionales altamente capacitados en estética y cuidado de mascotas se asegura de que tu amado compañero reciba el tratamiento que se merece, dejándolo radiante y feliz.\n\nEn Jo los Pelines, no sólo cuidamos del aspecto de tu mascota, sino que también nos preocupamos por su bienestar emocional y físico.\n\n¡Confía en nosotros para proporcionar a tu peludo amigo una experiencia excepcional de cuidado y mimos!",
    },
    {
      title: "Especialistas en el cuidado y embellecimiento de mascotas",
      content: "En los Centros de Estética para Mascotas Jo los Pelines somos especialistas en cuidado y embellecimiento de mascotas. Ofrecemos servicios de peluquería canina y felina, brindando un trato amoroso y profesional a cada mascota que llega a nuestro salón. Contamos con una amplia gama de productos de alta calidad, específicos para cada tipo de pelo, y nuestro equipo de peluqueros altamente capacitados y dedicados se asegurarán de que tu mascota se sienta cómoda y feliz durante todo el proceso.\n\nEn Jo los Pelines, somos auténticos expertos en el cuidado y realce de la belleza de tus queridas mascotas. Nuestros servicios de peluquería están diseñados para brindar un trato cariñoso y altamente profesional a cada animal que visita nuestro elegante salón.\n\nNos enorgullece ofrecer una variada selección de productos de la más alta calidad, diseñados específicamente para adaptarse a las necesidades de cada tipo de pelaje. Nuestro equipo de peluqueros, con una formación excepcional y una dedicación inigualable, se asegurará de que tu compañero peludo se sienta completamente a gusto y feliz en todo momento durante el proceso.\n\nEn nuestras peluquerías, no sólo nos encargamos de realzar la apariencia de tu mascota, sino que también velamos por su bienestar emocional y físico. Confía en nosotros para proporcionar a tu amado animal una experiencia única de cuidado y mimarle como se merece.",
    },
  ];

  const stats = [
    {
      value: "15+",
      label: "Años de experiencia"
    },
    {
      value: "10.000+",
      label: "Mascotas atendidas"
    },
    {
      value: "99%",
      label: "Clientes satisfechos"
    }
  ];

  const services = [
    {
      title: "Baños y cortes personalizados",
      content: "En Jo los Pelines, nos especializamos en ofrecer baños y cortes personalizados que se adaptan a las necesidades únicas de cada mascota. Nuestro compromiso con la excelencia nos lleva a emplear únicamente productos de primera categoría que aportan notables beneficios para la piel y el pelaje de tu querida compañera, dejándola con una sensación de limpieza, suavidad y salud inigualables.",
    },
    {
      title: "Tratamientos de belleza",
      content: "En Jo los Pelines, te brindamos una amplia variedad de tratamientos de belleza personalizados para mascotas, que incluyen hidrataciones, mascarillas y terapias especializadas para el pelo seco o dañado, entre otros. Nuestros consumados profesionales en estética canina y felina se dedican con pasión a realzar la belleza de tu mascota, asegurando que luzca radiante y espectacular en todo momento.",
    },
    {
      title: "Corte de uñas y limpieza de oídos",
      content: "Además de nuestros completos servicios de peluquería, ofrecemos el corte de uñas y limpieza de oídos, esenciales para mantener a tu mascota en óptimas condiciones de salud y bienestar. Nuestro equipo altamente capacitado se especializa en llevar a cabo estos procedimientos de manera segura y sin generar ningún tipo de estrés para tu fiel compañero.",
    },
    {
      title: "Productos de alta calidad",
      content: "En Jo los Pelines, disponemos de una extensa gama de productos de la más alta calidad diseñados para el cuidado y bienestar de mascotas. Desde champús y acondicionadores hasta accesorios y juguetes, ofrecemos todo lo que requieres para mantener a tu compañero peludo feliz y saludable en todo momento.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-white">
        {/* Introduction Section */}
        <div 
          className="relative bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white px-12 py-16 md:p-32 min-h-[70vh] flex items-center"
            >
              <div>
                <h2 className="text-3xl font-display text-[#95B949] mb-4">{contentSections[0].title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line mb-8">{contentSections[0].content}</p>
                <Link 
                  to="/cita"
                  className="inline-block px-8 py-3 bg-[#95B949] text-white font-semibold rounded-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110 active:scale-95 relative overflow-hidden group"
                >
                  <span className="relative z-10">PIDE TU CITA</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
            </motion.div>
            
            <div className="hidden md:block" />
            <div className="h-[300px] md:hidden" />
            
            <div className="hidden md:block" />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white px-12 py-16 md:p-32 min-h-[70vh] flex items-center"
            >
              <div>
                <h2 className="text-3xl font-display text-[#95B949] mb-4">{contentSections[1].title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{contentSections[1].content}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-[#95B949] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display text-black">
                Nuestro equipo de expertos atesora una sólida experiencia en el ámbito de la estética y el cuidado de mascotas
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div 
                  className="aspect-[4/3] bg-white/90 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/Patricia_Alaquas.png"
                    alt="Patricia Roccatagliata"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <p className="text-[#382B4D] text-lg mt-2 text-center">Patricia Roccatagliata en Alaquàs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div 
                  className="aspect-[4/3] bg-white/90 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/Loli_Torrent.png"
                    alt="Loli Alonso"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <p className="text-[#382B4D] text-lg mt-2 text-center">Loli Alonso en Torrent</p>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-display text-[#382B4D] mb-2">{stat.value}</p>
                  <p className="text-[#382B4D]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div 
          className="relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white px-12 py-16 md:p-32 min-h-[70vh] flex items-center"
            >
              <div>
                <div className="mb-8">
                  <h3 className="text-[#95B949] text-3xl font-display mb-4">{services[0].title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services[0].content}</p>
                </div>
                <hr className="border-[#95B949] my-8" />
                <div>
                  <h3 className="text-[#95B949] text-3xl font-display mb-4">{services[1].title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services[1].content}</p>
                </div>
              </div>
            </motion.div>

            <div className="hidden md:block" />
            <div className="h-[300px] md:hidden" />

            <div className="hidden md:block" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white px-12 py-16 md:p-32 min-h-[70vh] flex items-center"
            >
              <div>
                <div className="mb-8">
                  <h3 className="text-[#95B949] text-3xl font-display mb-4">{services[2].title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services[2].content}</p>
                </div>
                <hr className="border-[#95B949] my-8" />
                <div>
                  <h3 className="text-[#95B949] text-3xl font-display mb-4">{services[3].title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services[3].content}</p>
                </div>
              </div>
            </motion.div>

            <div className="h-[300px] md:hidden" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white px-12 py-16 md:p-32 min-h-[70vh] flex items-center"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-display text-[#95B949] mb-4">Programa una cita</h2>
                <hr className="border-[#95B949] my-4" />
                <h3 className="text-3xl md:text-4xl font-display text-[#95B949] mb-8">Embellece a tu mascota</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  ¿Quieres que tu mascota luzca radiante y hermosa?
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  ¡Programa una cita con nosotros en cualquiera de nuestros centros y déjanos cuidar de su belleza y bienestar!
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Nuestro equipo de expertos en estética canina y felina se encargará de brindarle a tu mascota el mejor cuidado y tratamiento.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  ¡No esperes más, reserva ahora!
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-gray-600 mb-4">En <span className="text-[#95B949] font-bold">Jo los Pelines Alaquàs</span>, con <span className="text-[#95B949] font-bold">Patricia Roccatagliata</span>:</p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li className="text-gray-600">
                        Llamando o escribiendo un WhatsApp: {' '}
                        <span className="text-primary font-bold">623 96 98 10</span>
                      </li>
                      <li className="text-gray-600">
                        Acercándote a: {' '}
                        <span className="text-primary font-bold">Avda. Miguel Hernández, 22, Alaquàs</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-600 mb-4">En <span className="text-[#95B949] font-bold">Jo los Pelines Torrent</span>, con <span className="text-[#95B949] font-bold">Loli Alonso</span>:</p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li className="text-gray-600">
                        Llamando o escribiendo un WhatsApp: {' '}
                        <span className="text-primary font-bold">622 84 63 61</span>
                      </li>
                      <li className="text-gray-600">
                        Acercándote a: {' '}
                        <span className="text-primary font-bold">C. Sant Fermí, 34, Torrent</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-600 mb-4">Para cualquiera de las dos:</p>
                    <ul className="list-disc pl-4 space-y-2">
                      <li className="text-gray-600">
                        Escribiendo un email a: {' '}
                        <span className="text-primary font-bold">peluqueria@jolospelines.com</span>
                      </li>
                      <li className="text-gray-600">O pulsando el siguiente botón</li>
                    </ul>
                  </div>
                </div>

                <Link 
                  to="/cita"
                  className="inline-block px-8 py-3 bg-[#95B949] text-white font-semibold rounded-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:brightness-110 active:scale-95 relative overflow-hidden group"
                >
                  <span className="relative z-10">PIDE TU CITA</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
            </motion.div>

            <div className="hidden md:block" />
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white">
          <div>
            {/* Map 1 - Alaquàs */}
            <div>
              <h2 className="text-4xl md:text-5xl font-fancy py-8 text-center px-8">
                <span className="text-primary">Jo los Pelines Alaquàs</span>
                <span className="text-gray-700"> con </span>
                <span className="text-[#95B949]">Patricia Roccatagliata</span>
              </h2>
              <div className="w-full h-[70vh]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7326.682400347667!2d-0.4582959235219216!3d39.45824675967073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60511be1e0faa5%3A0xe5ce617a0751cd8d!2sPeluquer%C3%ADa%20canina%20Jo%20los%20Pelines%2C%20S.L.!5e0!3m2!1ses!2sus!4v1732983208345!5m2!1ses!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Map 2 - Torrent */}
            <div className="mt-16">
              <h2 className="text-4xl md:text-5xl font-fancy py-8 text-center px-8">
                <span className="text-primary">Jo los Pelines Torrent</span>
                <span className="text-gray-700"> con </span>
                <span className="text-[#95B949]">Loli Alonso</span>
              </h2>
              <div className="w-full h-[70vh]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6163.063495790105!2d-0.47351705086816875!3d39.43471183663864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6051b743969e79%3A0x60e925262f927976!2zQy8gZGUgU2FudCBGZXJtw60sIDM0LCA0NjkwMCBUb3JyZW50LCBWYWzDqG5jaWEsIEVzcGHDsWE!5e0!3m2!1ses!2sus!4v1732983050118!5m2!1ses!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
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
      </div>
    </>
  );
};

export default Home;