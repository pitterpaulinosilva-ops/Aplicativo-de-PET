import React from 'react';
import { ArrowRight, Heart, Shield, Zap, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 animate-gradient-x"></div>
      
      {/* Floating Pet-themed Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      {/* Floating Paw Prints */}
      <div className="absolute top-20 sm:top-32 right-1/4 text-blue-300 opacity-30 animate-float">
        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM15 9C16.1 9 17 9.9 17 11C17 12.1 16.1 13 15 13C13.9 13 13 12.1 13 11C13 9.9 13.9 9 15 9ZM9 9C10.1 9 11 9.9 11 11C11 12.1 10.1 13 9 13C7.9 13 7 12.1 7 11C7 9.9 7.9 9 9 9Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 sm:bottom-40 left-1/3 text-green-300 opacity-30 animate-float delay-500">
        <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C22.1 9 23 9.9 23 11C23 12.1 22.1 13 21 13C19.9 13 19 12.1 19 11C19 9.9 19.9 9 21 9ZM3 9C4.1 9 5 9.9 5 11C5 12.1 4.1 13 3 13C1.9 13 1 12.1 1 11C1 9.9 1.9 9 3 9ZM15 9C16.1 9 17 9.9 17 11C17 12.1 16.1 13 15 13C13.9 13 13 12.1 13 11C13 9.9 13.9 9 15 9ZM9 9C10.1 9 11 9.9 11 11C11 12.1 10.1 13 9 13C7.9 13 7 12.1 7 11C7 9.9 7.9 9 9 9Z"/>
        </svg>
      </div>
      
      {/* Floating Hearts */}
      <div className="absolute top-1/3 left-10 sm:left-20 text-pink-300 opacity-40 animate-bounce-slow">
        <Heart className="w-4 h-4 sm:w-6 sm:h-6" />
      </div>
      
      <div className="absolute bottom-1/3 right-10 sm:right-20 text-red-300 opacity-40 animate-bounce-slow delay-700">
        <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 animate-fade-in-up">
              {t('hero.headline')}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up delay-200 max-w-2xl mx-auto lg:mx-0">
              {t('hero.subheadline')}
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up delay-300">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">{t('hero.badge.ai')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 animate-pulse delay-200" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">{t('hero.badge.care')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 animate-pulse delay-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">{t('hero.badge.security')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 animate-pulse delay-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">{t('hero.badge.tracking')}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('final-cta')}
              className="group bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center space-x-2 animate-fade-in-up delay-400 animate-pulse-glow w-full sm:w-auto justify-center"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-sm text-gray-500 animate-fade-in-up delay-500">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500 animate-pulse">⭐⭐⭐⭐⭐</span>
                <span className="text-xs sm:text-sm">4.9/5 (2.5k+ avaliações)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm">LGPD Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up delay-600 order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              {/* Main Pet Image */}
              <div className="relative">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20golden%20retriever%20dog%20with%20smartphone%20showing%20health%20app%20interface%2C%20modern%20clean%20background%2C%20professional%20photography%2C%20warm%20lighting&image_size=square_hd"
                  alt="Happy pet with Smart Pet Diary app"
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg animate-bounce">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">IA Ativa</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-blue-600">98%</div>
                    <div className="text-xs text-gray-600">Precisão</div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 h-4 sm:w-8 sm:h-8 bg-blue-300 rounded-full opacity-50"></div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-3 h-3 sm:w-6 sm:h-6 bg-green-300 rounded-full opacity-50"></div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 sm:p-4 shadow-lg">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-red-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;