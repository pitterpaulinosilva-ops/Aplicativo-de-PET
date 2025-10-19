import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      nameKey: 'testimonials.testimonial1.name',
      locationKey: 'testimonials.testimonial1.location',
      textKey: 'testimonials.testimonial1.text',
      rating: 5,
      petName: 'Max',
      petType: 'Golden Retriever',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20smiling%20middle-aged%20woman%20with%20short%20brown%20hair%20wearing%20casual%20clothing%20holding%20a%20golden%20retriever%20dog%2C%20warm%20lighting%2C%20friendly%20expression%2C%20high%20quality%20photo&image_size=square',
    },
    {
      nameKey: 'testimonials.testimonial2.name',
      locationKey: 'testimonials.testimonial2.location',
      textKey: 'testimonials.testimonial2.text',
      rating: 5,
      petName: 'Luna',
      petType: 'Gato Persa',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20young%20man%20with%20glasses%20and%20beard%20wearing%20a%20casual%20shirt%20holding%20a%20persian%20cat%2C%20modern%20lighting%2C%20confident%20smile%2C%20high%20quality%20photo&image_size=square',
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Veja o que nossos usuários estão dizendo sobre o Smart Pet Diary
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Quote */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-blue-600" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-xs sm:text-sm text-gray-500 font-medium">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic">
                "{t(testimonial.textKey)}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={t(testimonial.nameKey)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                    {t(testimonial.nameKey)}
                  </h4>
                  <p className="text-gray-500 text-sm truncate">
                    {t(testimonial.locationKey)}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full truncate">
                      Tutor de {testimonial.petName} ({testimonial.petType})
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-4 rounded-2xl shadow-lg max-w-full overflow-hidden">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">4.9/5</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="text-gray-700 font-medium text-sm sm:text-base text-center">
              +10.000 pets monitorados
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="text-gray-700 font-medium text-sm sm:text-base text-center">
              98% de satisfação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;