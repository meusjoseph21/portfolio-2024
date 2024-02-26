import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EmailSection from "./components/EmailSection";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-primary-900 sm:py-10 px-6 md:px-20 lg:px-40">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <Skills />
          <Experience />
          <EmailSection />
        </div>
      </main>
    </>
  );
}
