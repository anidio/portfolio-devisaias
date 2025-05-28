import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { slug } = useParams();

  return (
    <section className="w-full min-h-screen px-6 py-20 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 neon-text">📝 {slug.replaceAll('-', ' ')}</h1>

        <div className="bg-[#0f172a] border border-purple-500 rounded-xl p-8 shadow-lg">
          <p className="text-lg leading-relaxed">
            Aqui vai o conteúdo do artigo <span className="text-cyan-400">{slug}</span>.
            <br /><br />
            No futuro, isso será dinâmico vindo do backend ou de um CMS.
          </p>
        </div>
      </div>
    </section>
  );
}