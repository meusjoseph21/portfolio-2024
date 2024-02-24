"use client";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <main className="flex min-h-screen flex-col bg-[#1F271B] py-20 px-20">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <Skills />
          <Experience />
        </div>
      </main>
    </>
  );
}
