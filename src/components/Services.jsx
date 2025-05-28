import React from 'react';

const services = [
  {
    title: 'Criação de Sites',
    description: 'Desenvolvimento de sites modernos, responsivos e otimizados para SEO.',
    image: 'https://cdn-icons-png.flaticon.com/512/1497/1497762.png', // Ícone representando criação de sites
  },
  {
    title: 'Landing Pages',
    description: 'Páginas de alta conversão para campanhas e geração de leads.',
    image: 'https://cdn-icons-png.flaticon.com/512/3094/3094384.png', // Ícone representando landing pages
  },
  {
    title: 'Projetos PDV',
    description: 'Soluções digitais para pontos de venda e sistemas personalizados.',
    image: 'https://cdn-icons-png.flaticon.com/512/1804/1804352.png', // Ícone representando projetos PDV
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="glitch w-full flex justify-center text-4xl md:text-5xl font-bold mb-12" data-text="#Serviços">
          #Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center bg-gradient-to-br from-cyan-900/20 to-cyan-400/10 p-6 rounded-lg hover:scale-105 hover:shadow-lg transition-transform"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;