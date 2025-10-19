import React from 'react';
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  const guarantees = [
    {
      icon: Shield,
      textKey: 'finalCta.guarantee1',
      color: 'text-green-600',
    },
    {
      icon: Clock,
      textKey: 'finalCta.guarantee2',
      color: 'text-blue-600',
    },
    {
      icon: Heart,
      textKey: 'finalCta.guarantee3',
      color: 'text-red-600',
    },
  ];

  return (
    <section id="final-cta" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full -translate-x-32 sm:-translate-x-48 -translate-y-32 sm:-translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full translate-x-32 sm:translate-x-48 translate-y-32 sm:translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-white/3 rounded-full -translate-x-24 sm:-translate-x-32 -translate-y-24 sm:-translate-y-32"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <div className="text-center text-white mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            {t('finalCta.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-4">
            {t('finalCta.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="mb-8 sm:mb-12">
            <button className="group bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center max-w-sm mx-auto">
              <span>{t('finalCta.button')}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-blue-100 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
              {t('finalCta.noCard')}
            </p>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm sm:text-base">
                  {t(guarantee.textKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 bg-white/10 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-4 rounded-xl sm:rounded-2xl border border-white/20 max-w-full overflow-hidden">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">⭐</span>
              <span className="text-white font-medium text-sm sm:text-base">4.9/5 estrelas</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🐾</span>
              <span className="text-white font-medium text-sm sm:text-base">+10k pets</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🔒</span>
              <span className="text-white font-medium text-sm sm:text-base">LGPD Compliant</span>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-yellow-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow-lg text-sm sm:text-base max-w-full">
            <span>⚡</span>
            <span className="text-center">Oferta especial: Teste grátis por 30 dias</span>
            <span>⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;