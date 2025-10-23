import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext.jsx';
import LoadingScreen from '@/components/LoadingScreen.jsx';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Resume from '@/components/Resume.jsx';
import Education from '@/components/Education.jsx';
import TechStack from '@/components/TechStack.jsx';
import Projects from '@/components/Projects.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';
import { featureFlags } from '@/config/app.config.js';
import Certifications from '@/components/Certifications.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Resume />
          <Education />
          <TechStack />
          {featureFlags.showCertifications && <Certifications />}
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
