
import { FaGithub, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-black border-b border-cyan-500">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <img src="/dev.png" alt="" className="h-12 w-auto" />
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-cyan-400">Sobre</a>
          <a href="#projects" className="text-gray-300 hover:text-cyan-400">Projetos</a>
          <a href="#articles" className="text-gray-300 hover:text-cyan-400">Artigos</a>
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
