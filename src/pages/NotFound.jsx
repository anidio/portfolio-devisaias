import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="w-full min-h-screen px-6 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página não encontrada 🫠</p>
        <Link to="/" className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-800 transition">
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}