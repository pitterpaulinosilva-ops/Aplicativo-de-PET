import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <WhyChoose />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
