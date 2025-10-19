import React from 'react';
import { Calendar, Brain, FileText, Users, Pill, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Calendar,
      titleKey: 'howItWorks.timeline.title',
      descriptionKey: 'howItWorks.timeline.description',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Brain,
      titleKey: 'howItWorks.ai.title',
      descriptionKey: 'howItWorks.ai.description',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: MapPin,
      titleKey: 'howItWorks.tracking.title',
      descriptionKey: 'howItWorks.tracking.description',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: FileText,
      titleKey: 'howItWorks.reports.title',
      descriptionKey: 'howItWorks.reports.description',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      titleKey: 'howItWorks.sharing.title',
      descriptionKey: 'howItWorks.sharing.description',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Pill,
      titleKey: 'howItWorks.prescriptions.title',
      descriptionKey: 'howItWorks.prescriptions.description',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Globe,
      titleKey: 'howItWorks.bilingual.title',
      descriptionKey: 'howItWorks.bilingual.description',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t(feature.descriptionKey)}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 sm:px-6 py-3 rounded-full shadow-lg">
            <span className="text-gray-600">✨</span>
            <span className="text-gray-700 font-medium text-sm sm:text-base">Tudo isso em uma única plataforma inteligente</span>
            <span className="text-gray-600">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;