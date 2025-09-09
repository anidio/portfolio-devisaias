import React, { useState } from 'react';

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "PDV Bares e Restaurantes",
      description: "Desenvolvi um PDV para controle de vendas, mesas e estoque em bares e restaurantes. Completo com React no frontend e Java/Spring Boot no backend, incluindo gestão de produtos e pagamentos.",
      liveLink: "https://frevo-na-mesa-front.vercel.app/",
      gallery: [
        "/frevo-na-mesa.png",
        "/dev2.png",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+1",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+2"
      ],
    },
    {
      title: "Sistema de Gerenciamento de Tarefas",
      description: "Aplicação web para gerenciar projetos e tarefas, construída com React e API RESTful em PHP.",
      liveLink: null, // Este projeto não tem link ao vivo
      gallery: [
        "/dev2.png",
        "/dev1.png",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+1",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+2"
      ],
    },
    {
      title: "Robô de Automação Residencial",
      description: "Projeto de automação com ESP32 para controlar luzes e sensores, com interface via API.",
      liveLink: null,
      gallery: [
        "/dev1.png",
        "/dev2.png",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+1",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+2"
      ],
    },
    {
      title: "Blog de Tecnologia",
      description: "Um blog pessoal feito com Next.js e Markdown, focado em artigos sobre desenvolvimento.",
      liveLink: "https://seu-blog.com",
      gallery: [
        "/dev2.png",
        "/dev1.png",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+1",
        "https://via.placeholder.com/800x600/0d1a26/00ffff?text=Galeria+Imagem+2"
      ],
    },
  ];

  const projectsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < projectsPerPage; i++) {
      visible.push(projects[(startIndex + i) % projects.length]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section className="w-full py-20 px-6 text-white" id="projects">
      <h2 className="glitch w-full flex justify-center text-4xl md:text-5xl font-bold mb-12" data-text="#Meus Projetos">
        🚀 #Meus Projetos
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center items-stretch gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="flex-1 min-w-0 bg-[#0f172a] border border-cyan-500 rounded-xl shadow-lg shadow-cyan-500/30 overflow-hidden flex flex-col transition-transform hover:scale-[1.02] duration-300 ease-in-out"
            >
              <img
                src={project.gallery[0]}
                alt={project.title}
                className="w-full h-40 object-cover border-b-2 border-cyan-500"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                <p className="text-sm text-gray-300 text-center flex-1">{project.description}</p>
                <button
                  onClick={() => openModal(project)}
                  className="text-cyan-400 hover:text-purple-500 transition-colors mt-4 text-center block"
                >
                  Ver Projeto →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12 p-3 rounded-full bg-cyan-900/50 hover:bg-cyan-900/80 transition-colors backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12 p-3 rounded-full bg-cyan-900/50 hover:bg-cyan-900/80 transition-colors backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Modal Section */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-cyan-500 rounded-xl p-8 max-w-3xl w-full mx-4 shadow-lg shadow-cyan-500/30 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-cyan-400">{selectedProject.title}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">&times;</button>
            </div>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
            
            {selectedProject.liveLink && (
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mb-6 bg-purple-600 rounded-lg hover:bg-purple-800 transition-colors"
              >
                Ver Projeto ao Vivo
              </a>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProject.title} - Imagem ${index + 1}`}
                  className="w-full h-auto rounded-md object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}