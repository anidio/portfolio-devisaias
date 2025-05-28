import Header from "../components/Header";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
        <Header/>
      <div className="max-w-7xl mx-auto px-6 py-24 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-cyan-400">📰 Meu Blog</h1>
        
        <p className="text-lg mb-6">
          Aqui você encontra artigos, dicas e conteúdos sobre programação, tecnologia, robótica e muito mais!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cards de artigos */}
          <div className="bg-[#0f172a] border border-cyan-500 rounded-xl p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2 text-purple-400">🚀 Como começar com React</h2>
            <p className="text-gray-300">
              Um guia simples e direto para quem quer começar no React de forma rápida e eficiente.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-cyan-500 rounded-xl p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2 text-purple-400">🔧 Dicas de produtividade para devs</h2>
            <p className="text-gray-300">
              Pequenas ações que vão te ajudar a ser um desenvolvedor mais produtivo e organizado.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-cyan-500 rounded-xl p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-2 text-purple-400">🤖 Robótica com Arduino</h2>
            <p className="text-gray-300">
              Entenda como começar seus primeiros projetos de automação e robótica usando Arduino e ESP32.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}