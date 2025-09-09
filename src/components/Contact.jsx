import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="glitch text-4xl md:text-5xl font-bold mb-8" data-text="#Contato">
          #Contato
        </h2>

        <p className="text-gray-300 mb-12">
          Tem um projeto em mente? Entre em contato! Bora tirar sua ideia do papel. 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Mail className="text-cyan-400 w-8 h-8 mb-2" />
            <p className="text-white">isaias.reng@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="text-cyan-400 w-8 h-8 mb-2" />
            <p className="text-white">(81) 9 8501-6424</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-cyan-400 w-8 h-8 mb-2" />
            <p className="text-white">Olinda - PE, Brasil</p>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/anidio" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/isaiasroberto/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://instagram.com/devisaias" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
