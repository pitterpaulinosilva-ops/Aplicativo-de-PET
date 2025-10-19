import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">🐾</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-800 truncate">Smart Pet Diary</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              {t('nav.howItWorks')}
            </button>
            <button
              onClick={() => scrollToSection('why-choose')}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              {t('nav.benefits')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              {t('nav.testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              {t('nav.faq')}
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
                className="bg-transparent border-none text-gray-600 focus:outline-none cursor-pointer text-sm"
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
              </select>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('final-cta')}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 xl:px-6 py-2 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm xl:text-base whitespace-nowrap"
            >
              {t('nav.freeTrial')}
            </button>
          </nav>

          {/* Tablet Navigation (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
                className="bg-transparent border-none text-gray-600 focus:outline-none cursor-pointer text-sm"
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
              </select>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('final-cta')}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm whitespace-nowrap"
            >
              {t('nav.freeTrial')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden lg:flex p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden lg:block lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                {t('nav.howItWorks')}
              </button>
              <button
                onClick={() => scrollToSection('why-choose')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                {t('nav.benefits')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                {t('nav.testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                {t('nav.faq')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 py-2 px-2">
                <Globe className="w-4 h-4 text-gray-600" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
                  className="bg-transparent border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none focus:border-blue-500 flex-1"
                >
                  <option value="pt">Português</option>
                  <option value="en">English</option>
                </select>
              </div>

              {/* Mobile CTA Button */}
              <button
                onClick={() => scrollToSection('final-cta')}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center font-medium"
              >
                {t('nav.freeTrial')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;