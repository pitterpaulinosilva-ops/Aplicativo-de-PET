import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      questionKey: 'faq.question1.question',
      answerKey: 'faq.question1.answer',
    },
    {
      questionKey: 'faq.question2.question',
      answerKey: 'faq.question2.answer',
    },
    {
      questionKey: 'faq.question3.question',
      answerKey: 'faq.question3.answer',
    },
    {
      questionKey: 'faq.tracking.question',
      answerKey: 'faq.tracking.answer',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl mb-6">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Tire suas dúvidas sobre o Smart Pet Diary
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4 leading-tight">
                  {t(faq.questionKey)}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 transform transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transform transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-blue-200 to-green-200 mb-3 sm:mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {t(faq.answerKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg">
              Nossa equipe está pronta para ajudar você e seu pet
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                <span>📧</span>
                <span className="font-medium">suporte@smartpetdiary.com</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                <span>💬</span>
                <span className="font-medium">Chat 24/7 disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;