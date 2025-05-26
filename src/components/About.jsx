import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <section className="w-full py-20 px-6 text-white">
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
          <h2 className="text-4xl font-bold mb-6 neon-text">👾 Sobre Mim</h2>
          <div className="bg-[#0f172a] border border-purple-500 rounded-xl p-8 shadow-lg shadow-purple-500/30">
            <p className="text-lg leading-relaxed">
              Olá, eu sou <span className="text-purple-400 font-bold">@devisaias</span>,
              desenvolvedor apaixonado por tecnologia, robótica, eletrônica e tudo que envolve inovação! 🦾🚀
              <br /><br />
              Tenho experiência com <span className="text-cyan-400">React, Java, Spring Boot e PHP</span>. 
              Entusiasta de hardware, placas eletrônicas e automações usando <span className="text-green-400">Arduino</span>.
              <br /><br />
              Minha missão é criar soluções criativas, eficientes e com aquele toque futurista que eu amo!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
