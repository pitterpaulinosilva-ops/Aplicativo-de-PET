import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'nav.howItWorks': 'Como Funciona',
    'nav.benefits': 'Benefícios',
    'nav.testimonials': 'Depoimentos',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contato',
    'nav.freeTrial': 'Teste Grátis',
    
    // Hero
    'hero.headline': 'O Primeiro Diário Inteligente que Prevê a Saúde do Seu Pet',
    'hero.subheadline': 'Revolucione o cuidado do seu pet com IA que analisa comportamentos, previne problemas de saúde, rastreia localização em tempo real e conecta toda a família em uma plataforma bilíngue e intuitiva.',
    'hero.cta': 'Comece Grátis Agora',
    'hero.badge.ai': 'IA Preventiva',
    'hero.badge.care': 'Cuidado 24/7',
    'hero.badge.security': '100% Seguro',
    'hero.badge.tracking': 'Rastreamento GPS',
    
    // How It Works
    'howItWorks.title': 'Como Funciona',
    'howItWorks.timeline.title': 'Timeline Visual com Fotos e Eventos',
    'howItWorks.timeline.description': 'Registre momentos especiais, marcos importantes e atividades diárias do seu pet em uma linha do tempo visual e interativa.',
    'howItWorks.ai.title': 'Análise Comportamental com IA',
    'howItWorks.ai.description': 'Nossa inteligência artificial monitora padrões de humor, energia e apetite do seu pet, identificando mudanças sutis que podem indicar problemas de saúde.',
    'howItWorks.tracking.title': 'Rastreamento GPS em Tempo Real',
    'howItWorks.tracking.description': 'Monitore a localização do seu pet 24/7 com GPS de alta precisão. Receba alertas instantâneos se ele sair da área segura e acompanhe seus passeios.',
    'howItWorks.reports.title': 'Relatórios Mensais Automáticos',
    'howItWorks.reports.description': 'Receba relatórios detalhados sobre a saúde e bem-estar do seu pet, com gráficos de tendências e recomendações personalizadas.',
    'howItWorks.sharing.title': 'Compartilhamento com Família/Cuidadores',
    'howItWorks.sharing.description': 'Conecte veterinários, familiares e cuidadores em uma rede colaborativa com permissões personalizadas.',
    'howItWorks.prescriptions.title': 'Gestão de Receituários com Lembretes Inteligentes',
    'howItWorks.prescriptions.description': 'Nunca mais esqueça medicamentos! O sistema gerencia prescrições veterinárias e envia lembretes automáticos.',
    'howItWorks.bilingual.title': 'Suporte Bilíngue: Português e Inglês',
    'howItWorks.bilingual.description': 'Interface completamente traduzida e adaptada para usuários brasileiros e internacionais.',
    
    // Why Choose
    'whyChoose.title': 'Por que Escolher o Smart Pet Diary',
    'whyChoose.aiPrevention.title': 'IA que Previne Problemas de Saúde',
    'whyChoose.aiPrevention.description': 'Nossa tecnologia de ponta analisa milhares de dados comportamentais para detectar padrões anômalos e alertar sobre possíveis problemas de saúde antes que se tornem graves.',
    'whyChoose.tracking.title': 'Rastreamento GPS de Alta Precisão',
    'whyChoose.tracking.description': 'Tenha total tranquilidade sabendo onde seu pet está a qualquer momento. GPS militar com precisão de 3 metros, cercas virtuais personalizáveis e histórico completo de movimentação.',
    'whyChoose.easyUse.title': 'Facilidade para Diversos Usuários',
    'whyChoose.easyUse.description': 'Interface intuitiva projetada para todas as idades e níveis de conhecimento tecnológico. Desde crianças até idosos podem usar facilmente.',
    'whyChoose.dashboard.title': 'Painel Intuitivo',
    'whyChoose.dashboard.description': 'Dashboard limpo e organizado que apresenta as informações mais importantes de forma visual e acessível.',
    'whyChoose.security.title': 'Segurança e Privacidade dos Dados',
    'whyChoose.security.description': 'Seus dados e os do seu pet estão protegidos com criptografia de ponta e servidores seguros. Controle total sobre quem acessa as informações.',
    
    // Testimonials
    'testimonials.title': 'O que Nossos Usuários Dizem',
    'testimonials.owner.name': 'Maria Silva',
    'testimonials.owner.role': 'Tutora de Golden Retriever',
    'testimonials.owner.text': 'O Smart Pet Diary salvou a vida do meu Thor! A IA detectou uma mudança no apetite que eu nem havia notado. Levei ao veterinário e descobrimos um problema digestivo no início. Hoje ele está 100% recuperado!',
    'testimonials.vet.name': 'Dr. Carlos Mendes',
    'testimonials.vet.role': 'Veterinário',
    'testimonials.vet.text': 'Como veterinário, o Smart Pet Diary revolucionou minha prática. Os relatórios detalhados dos tutores me ajudam a fazer diagnósticos mais precisos e acompanhar a evolução dos tratamentos de forma muito mais eficiente.',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.question1.question': 'Como a IA funciona para analisar meu pet?',
    'faq.question1.answer': 'Nossa inteligência artificial utiliza algoritmos avançados de machine learning para analisar padrões comportamentais, comparando com milhares de dados de pets similares. Ela identifica desvios sutis em humor, energia e apetite que podem indicar problemas de saúde precocemente.',
    'faq.question2.question': 'Meus dados estão seguros na plataforma?',
    'faq.question2.answer': 'Absolutamente! Utilizamos criptografia de ponta a ponta, servidores seguros certificados e cumprimos rigorosamente a LGPD. Você tem controle total sobre seus dados e pode excluí-los a qualquer momento. Nunca compartilhamos informações pessoais com terceiros.',
    'faq.question3.question': 'Posso usar em diferentes dispositivos?',
    'faq.question3.answer': 'Sim! O Smart Pet Diary funciona perfeitamente em smartphones, tablets e computadores. Seus dados ficam sincronizados automaticamente entre todos os dispositivos, permitindo acesso completo onde quer que você esteja.',
    'faq.tracking.question': 'Como funciona o rastreamento GPS do meu pet?',
    'faq.tracking.answer': 'Utilizamos tecnologia GPS militar com precisão de até 3 metros. O dispositivo é leve, à prova d\'água e tem bateria de 7 dias. Você pode criar cercas virtuais personalizadas e receber alertas instantâneos no seu celular se o pet sair da área segura.',
    'faq.ai.question': 'Como a IA funciona para analisar meu pet?',
    'faq.ai.answer': 'Nossa inteligência artificial utiliza algoritmos avançados de machine learning para analisar padrões comportamentais, comparando com milhares de dados de pets similares. Ela identifica desvios sutis em humor, energia e apetite que podem indicar problemas de saúde precocemente.',
    'faq.security.question': 'Meus dados estão seguros na plataforma?',
    'faq.security.answer': 'Absolutamente! Utilizamos criptografia de ponta a ponta, servidores seguros certificados e cumprimos rigorosamente a LGPD. Você tem controle total sobre seus dados e pode excluí-los a qualquer momento.',
    'faq.devices.question': 'Posso usar em diferentes dispositivos?',
    'faq.devices.answer': 'Sim! O Smart Pet Diary funciona perfeitamente em smartphones, tablets e computadores. Seus dados ficam sincronizados automaticamente entre todos os dispositivos.',
    
    // Final CTA
    'finalCta.title': 'Comece Grátis Agora e Transforme o Cuidado do Seu Pet!',
    'finalCta.subtitle': 'Teste por 30 dias sem compromisso e descubra como a tecnologia pode revolucionar a saúde do seu companheiro.',
    'finalCta.button': 'Iniciar Teste Gratuito',
    'finalCta.guarantee1': 'Garantia de Satisfação de 30 Dias',
    'finalCta.guarantee2': 'Suporte Dedicado 24/7',
    'finalCta.guarantee3': 'Dados Seguros e Privados',
    'finalCta.noCard': 'Sem necessidade de cartão de crédito',
    
    // Testimonials (Updated)
    'testimonials.testimonial1.name': 'Maria Silva',
    'testimonials.testimonial1.location': 'São Paulo, SP',
    'testimonials.testimonial1.text': 'O Smart Pet Diary salvou a vida do meu Thor! A IA detectou uma mudança no apetite que eu nem havia notado. Levei ao veterinário e descobrimos um problema digestivo no início. Hoje ele está 100% recuperado!',
    'testimonials.testimonial2.name': 'Dr. Carlos Mendes',
    'testimonials.testimonial2.location': 'Rio de Janeiro, RJ',
    'testimonials.testimonial2.text': 'Como veterinário, o Smart Pet Diary revolucionou minha prática. Os relatórios detalhados dos tutores me ajudam a fazer diagnósticos mais precisos e acompanhar a evolução dos tratamentos de forma muito mais eficiente.',
    
    // Footer
    'footer.support': 'Suporte Dedicado 24/7',
    'footer.supportText': 'Nossa equipe especializada está sempre disponível para ajudar você e seu pet. Suporte técnico em português via chat, email e telefone, com tempo de resposta médio de 2 horas.',
  },
  en: {
    // Header
    'nav.howItWorks': 'How It Works',
    'nav.benefits': 'Benefits',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.freeTrial': 'Free Trial',
    
    // Hero
    'hero.headline': 'The First Smart Diary That Predicts Your Pet\'s Health',
    'hero.subheadline': 'Revolutionize your pet care with AI that analyzes behaviors, prevents health issues, tracks real-time location, and connects your entire family on an intuitive bilingual platform.',
    'hero.cta': 'Start Free Now',
    'hero.badge.ai': 'Preventive AI',
    'hero.badge.care': '24/7 Care',
    'hero.badge.security': '100% Secure',
    'hero.badge.tracking': 'GPS Tracking',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.timeline.title': 'Visual Timeline with Photos and Events',
    'howItWorks.timeline.description': 'Record special moments, important milestones, and daily activities of your pet in a visual and interactive timeline.',
    'howItWorks.ai.title': 'AI Behavioral Analysis',
    'howItWorks.ai.description': 'Our artificial intelligence monitors your pet\'s mood, energy, and appetite patterns, identifying subtle changes that may indicate health problems.',
    'howItWorks.tracking.title': 'Real-Time GPS Tracking',
    'howItWorks.tracking.description': 'Monitor your pet\'s location 24/7 with high-precision GPS. Receive instant alerts if they leave the safe area and track their walks.',
    'howItWorks.reports.title': 'Automatic Monthly Reports',
    'howItWorks.reports.description': 'Receive detailed reports about your pet\'s health and well-being, with trend charts and personalized recommendations.',
    'howItWorks.sharing.title': 'Family/Caregiver Sharing',
    'howItWorks.sharing.description': 'Connect veterinarians, family members, and caregivers in a collaborative network with customized permissions.',
    'howItWorks.prescriptions.title': 'Smart Prescription Management with Reminders',
    'howItWorks.prescriptions.description': 'Never forget medications again! The system manages veterinary prescriptions and sends automatic reminders.',
    'howItWorks.bilingual.title': 'Bilingual Support: Portuguese and English',
    'howItWorks.bilingual.description': 'Completely translated and adapted interface for Brazilian and international users.',
    
    // Why Choose
    'whyChoose.title': 'Why Choose Smart Pet Diary',
    'whyChoose.aiPrevention.title': 'IA That Prevents Health Problems',
    'whyChoose.aiPrevention.description': 'Our cutting-edge technology analyzes thousands of behavioral data points to detect anomalous patterns and alert about possible health issues before they become serious.',
    'whyChoose.tracking.title': 'High-Precision GPS Tracking',
    'whyChoose.tracking.description': 'Have complete peace of mind knowing where your pet is at any time. Military-grade GPS with 3-meter precision, customizable virtual fences, and complete movement history.',
    'whyChoose.easyUse.title': 'Easy for Diverse Users',
    'whyChoose.easyUse.description': 'Intuitive interface designed for all ages and technology knowledge levels. From children to seniors can use it easily.',
    'whyChoose.dashboard.title': 'Intuitive Dashboard',
    'whyChoose.dashboard.description': 'Clean and organized dashboard that presents the most important information visually and accessibly.',
    'whyChoose.security.title': 'Data Security and Privacy',
    'whyChoose.security.description': 'Your data and your pet\'s are protected with end-to-end encryption and secure servers. Full control over who accesses information.',
    
    // Testimonials
    'testimonials.title': 'What Our Users Say',
    'testimonials.testimonial1.name': 'Maria Silva',
    'testimonials.testimonial1.location': 'São Paulo, SP',
    'testimonials.testimonial1.text': 'Smart Pet Diary saved my Thor\'s life! The AI detected an appetite change I hadn\'t even noticed. I took him to the vet and we discovered a digestive problem early. Today he\'s 100% recovered!',
    'testimonials.testimonial2.name': 'Dr. Carlos Mendes',
    'testimonials.testimonial2.location': 'Rio de Janeiro, RJ',
    'testimonials.testimonial2.text': 'As a veterinarian, Smart Pet Diary revolutionized my practice. The detailed reports from pet owners help me make more accurate diagnoses and monitor treatment progress much more efficiently.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.question1.question': 'How does the AI work to analyze my pet?',
    'faq.question1.answer': 'Our artificial intelligence uses advanced machine learning algorithms to analyze behavioral patterns, comparing with thousands of data from similar pets. It identifies subtle deviations in mood, energy, and appetite that may indicate health problems early.',
    'faq.question2.question': 'Is my data safe on the platform?',
    'faq.question2.answer': 'Absolutely! We use end-to-end encryption, certified secure servers, and strictly comply with GDPR. You have full control over your data and can delete it at any time.',
    'faq.question3.question': 'Can I use it on different devices?',
    'faq.question3.answer': 'Yes! Smart Pet Diary works perfectly on smartphones, tablets, and computers. Your data stays automatically synchronized across all devices.',
    'faq.tracking.question': 'How does my pet\'s GPS tracking work?',
    'faq.tracking.answer': 'We use military-grade GPS technology with up to 3-meter precision. The device is lightweight, waterproof, and has a 7-day battery life. You can create custom virtual fences and receive instant alerts on your phone if your pet leaves the safe area.',
    'faq.ai.question': 'How does the AI work to analyze my pet?',
    'faq.ai.answer': 'Our artificial intelligence uses advanced machine learning algorithms to analyze behavioral patterns, comparing with thousands of data from similar pets. It identifies subtle deviations in mood, energy, and appetite that may indicate health problems early.',
    'faq.security.question': 'Is my data safe on the platform?',
    'faq.security.answer': 'Absolutely! We use end-to-end encryption, certified secure servers, and strictly comply with GDPR. You have full control over your data and can delete it at any time.',
    'faq.devices.question': 'Can I use it on different devices?',
    'faq.devices.answer': 'Yes! Smart Pet Diary works perfectly on smartphones, tablets, and computers. Your data stays automatically synchronized across all devices.',
    
    // Final CTA
    'finalCta.title': 'Start Free Now and Transform Your Pet Care!',
    'finalCta.subtitle': 'Try for 30 days with no commitment and discover how technology can revolutionize your companion\'s health.',
    'finalCta.button': 'Start Free Trial',
    'finalCta.guarantee1': '30-Day Satisfaction Guarantee',
    'finalCta.guarantee2': '24/7 Dedicated Support',
    'finalCta.guarantee3': 'Secure and Private Data',
    'finalCta.noCard': 'Try for 30 days with no commitment - No credit card required',
    'finalCta.guarantee': '30-Day Satisfaction Guarantee',
    'finalCta.guaranteeText': 'Try Smart Pet Diary risk-free! If you\'re not completely satisfied within 30 days, we\'ll refund 100% of your investment.',
    
    // Footer
    'footer.support': '24/7 Dedicated Support',
    'footer.supportText': 'Our specialized team is always available to help you and your pet. Technical support in Portuguese and English via chat, email, and phone, with an average response time of 2 hours.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};