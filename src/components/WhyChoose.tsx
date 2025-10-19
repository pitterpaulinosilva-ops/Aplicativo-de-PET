import React from 'react';
import { Shield, Users, BarChart3, Lock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChoose: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      titleKey: 'whyChoose.aiPrevention.title',
      descriptionKey: 'whyChoose.aiPrevention.description',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      stats: '98% precisão',
    },
    {
      icon: MapPin,
      titleKey: 'whyChoose.tracking.title',
      descriptionKey: 'whyChoose.tracking.description',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      stats: 'Precisão 3m',
    },
    {
      icon: Users,
      titleKey: 'whyChoose.easyUse.title',
      descriptionKey: 'whyChoose.easyUse.description',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      stats: 'Todas as idades',
    },
    {
      icon: BarChart3,
      titleKey: 'whyChoose.dashboard.title',
      descriptionKey: 'whyChoose.dashboard.description',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      stats: 'Interface limpa',
    },
    {
      icon: Lock,
      titleKey: 'whyChoose.security.title',
      descriptionKey: 'whyChoose.security.description',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      stats: 'LGPD Compliant',
    },
  ];

  return (
    <section id="why-choose" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Descubra por que milhares de tutores confiam no Smart Pet Diary para cuidar da saúde dos seus pets
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 ${benefit.bgColor} rounded-full opacity-10 transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
                
                {/* Icon and Stats */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${benefit.color} text-white text-xs sm:text-sm font-medium rounded-full shadow-md`}>
                    {benefit.stats}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {t(benefit.descriptionKey)}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-4 sm:mt-6 overflow-hidden">
                  <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${benefit.color} rounded-full transition-all duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">10k+</div>
              <div className="text-blue-100 text-sm sm:text-base">Pets Monitorados</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm sm:text-base">Precisão da IA</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm sm:text-base">Monitoramento</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100 text-sm sm:text-base">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;