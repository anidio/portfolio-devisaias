import About from "../components/About";
import BackgroundGrid from "../components/BackgroundGrid";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#0f172a] to-black">
      <BackgroundGrid />
      <Header />
      <About/>
      <Projects />
      <Skills/>
    </div>
  );
}