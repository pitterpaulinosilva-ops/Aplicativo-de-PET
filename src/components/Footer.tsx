import React from 'react';
import { Heart, Mail, Clock, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">Smart Pet Diary</span>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg text-xs sm:text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>LGPD Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg text-xs sm:text-sm">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Português & English</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contato</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">suporte@smartpetdiary.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-300 text-sm sm:text-base">
                      <div>Suporte 24/7</div>
                      <div className="text-xs sm:text-sm text-gray-400">Segunda a Domingo</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Legal</h3>
                <div className="space-y-2 sm:space-y-3">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                    Política de Privacidade
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                    Termos de Uso
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                    LGPD - Lei Geral de Proteção de Dados
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Smart Pet Diary. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm">
              <span>Feito com</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span>para pets e seus tutores</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;