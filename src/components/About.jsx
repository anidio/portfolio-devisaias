import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <section className="w-full py-20 pt-40 px-6 text-white" id='about' >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2 flex flex-col items-center gap-4">
          <Tilt>
            <div className="relative w-72 h-72 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 overflow-hidden">
              <img
                src="/dev1.png"
                alt="Devisaias Avatar"
                className="w-full h-full object-cover animate-pulse"
              />
              <div className="absolute inset-0 bg-cyan-500 opacity-10 mix-blend-screen rounded-full blur-2xl"></div>
            </div>
          </Tilt>
          <h3 className="text-xl font-semibold text-cyan-400">Isaías Roberto</h3>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 neon-text">👾 Quem eu sou?</h2>
          <div className="bg-[#0f172a] border border-purple-500 rounded-xl p-8 shadow-lg shadow-purple-500/30 text-left">
            <p className="text-lg leading-relaxed">
              Olá, eu sou <span className="text-purple-400 font-bold">Isaías Roberto</span>, 
              um desenvolvedor Full Stack com ênfase em soluções criativas e eficientes. 
              Minha paixão é transformar ideias complexas em aplicações web e APIs robustas que resolvem problemas reais.
              <br /><br />
              Com mais de 5 anos de experiência, sou especialista em <span className="text-cyan-400">React, Java e Spring Boot</span>. 
              Também tenho um grande interesse em hardware e projetos de automação usando tecnologias como <span className="text-green-400">Arduino</span> & <span className="text-yellow-400">ESP32</span>.
              <br /><br />
              Estou sempre em busca de novos desafios, seja para construir um site do zero ou otimizar um sistema existente. Se você tem um projeto que precisa de uma abordagem técnica e criativa, vamos conversar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}