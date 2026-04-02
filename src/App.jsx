import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalNoise from "./components/ui/GlobalNoise";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Philosophy from "./components/sections/Philosophy";
import Protocol from "./components/sections/Protocol";
import FaqSection from "./components/sections/FaqSection";
import CtaSection from "./components/sections/CtaSection";
import LegalPage from "./pages/LegalPage";
import Preloader from "./components/ui/Preloader";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeout = setTimeout(scrollToElement, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
  return (
    <div className="relative min-h-screen selection:bg-[#2F80ED]/30 selection:text-white flex flex-col">
      <GlobalNoise />
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </>
  );
}

export default App;
