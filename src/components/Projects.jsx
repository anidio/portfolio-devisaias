export default function Projects() {
  const projects = [
    {
      title: "Portfólio Futurista",
      description: "Meu portfólio pessoal feito com React, Tailwind e animações futuristas.",
      link: "https://seuportifolio.com",
    },
    {
      title: "Controle de Robôs com Arduino",
      description: "Projeto de automação usando Arduino e sensores.",
      link: "https://github.com/seuusuario/arduino-projeto",
    },
    {
      title: "API de Produtos",
      description: "Backend em Spring Boot para gestão de produtos.",
      link: "https://github.com/seuusuario/api-produtos",
    },
    {
      title: "API de Produtos",
      description: "Backend em Spring Boot para gestão de produtos.",
      link: "https://github.com/seuusuario/api-produtos",
    },
    {
      title: "API de Produtos",
      description: "Backend em Spring Boot para gestão de produtos.",
      link: "https://github.com/seuusuario/api-produtos",
    },
    {
      title: "API de Produtos",
      description: "Backend em Spring Boot para gestão de produtos.",
      link: "https://github.com/seuusuario/api-produtos",
    },
  ];

  return (
    <section className="w-full py-20 px-6 text-white" id="projects">
      <h2 className="text-4xl font-bold mb-10 text-center neon-text">
        🚀 Meus Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-cyan-500 rounded-xl p-6 hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-sm mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Ver Projeto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
