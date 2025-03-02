import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="max-w-[800px] mx-auto px-8">
        <Hero />
        <Experience />
        <Projects />
        <About/>
        <Footer />
      </div>
    </>
  );
}
