import React from 'react';

const experiences = [
  {
    role: 'Freelancer',
    company: 'Autônomo',
    period: 'Agosto 2025 - atual',
    description:
      'Desenvolvimento de sites, lojas virtuais e sistemas personalizados para pequenos negócios utilizando PHP, WordPress e JavaScript.',
  },
  {
    role: 'Desenvolvedor FullStack',
    company: 'Fcamara (Cliente RaiaDrogasil)',
    period: 'Maio 2022 - Agosto 2025',
    description:
      'Atuei no desenvolvimento de APIs em Java com Spring Boot, integração com microsserviços e automação de processos.',
  },
  {
    role: 'Freelancer',
    company: 'Autônomo',
    period: '2020 - 2022',
    description:
      'Desenvolvimento de sites, lojas virtuais e sistemas personalizados para pequenos negócios utilizando PHP, WordPress e JavaScript.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="glitch w-full flex justify-center text-4xl md:text-5xl font-bold mb-12"
          data-text="#Experiência"
        >
          #Experiência
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-cyan-500 pl-6 hover:scale-[1.02] transition-transform bg-gradient-to-br from-cyan-900/20 to-cyan-400/10 p-6 rounded-md"
            >
              <h3 className="text-xl md:text-2xl text-white font-bold">
                {exp.role} - <span className="text-cyan-400">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-200">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;