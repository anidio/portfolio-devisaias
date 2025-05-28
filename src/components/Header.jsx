
import { FaGithub, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md bg-black border-b border-cyan-500">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <img src="/dev2.png" alt="" className="h-16 w-auto animate-pulse drop-shadow-[0_0_15px_cyan]" />
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-cyan-400">Home</Link>
          <Link to="/blog" className="text-gray-300 hover:text-cyan-400">Meu Blog</Link>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400">Projetos</a>
          <a href="#contact" className="text-gray-300 hover:text-cyan-400">Contato</a>
        </nav>
        <div className="flex space-x-4">
          <FaGithub className="text-cyan-400 hover:text-purple-500 cursor-pointer" />
          <FaYoutube className="text-cyan-400 hover:text-purple-500 cursor-pointer" />
          <FaInstagram className="text-cyan-400 hover:text-purple-500 cursor-pointer" />
          <FaTiktok className="text-cyan-400 hover:text-purple-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
