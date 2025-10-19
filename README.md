# 🐾 Smart Pet Diary

Uma landing page moderna e responsiva para o aplicativo Smart Pet Diary - o primeiro diário inteligente que prevê a saúde do seu pet através de inteligência artificial e rastreamento GPS.

## 📋 Sobre o Projeto

O Smart Pet Diary é uma solução completa para cuidados com pets que combina:

- **🤖 Inteligência Artificial Preventiva**: Análise preditiva da saúde do seu pet
- **🏥 Cuidado 24/7**: Monitoramento contínuo e alertas em tempo real
- **🔒 100% Seguro**: Dados protegidos com criptografia de ponta
- **📍 Rastreamento GPS**: Localização precisa em tempo real com precisão de 3 metros

## ✨ Funcionalidades

### Landing Page
- Design responsivo e moderno
- Animações suaves e interativas
- Suporte a múltiplos idiomas (Português/Inglês)
- Seções otimizadas para conversão:
  - Hero com CTAs destacados
  - Como funciona (passo a passo)
  - Por que escolher (benefícios)
  - Depoimentos de clientes
  - FAQ completo
  - CTA final

### Recursos Técnicos
- Tema pet-friendly com animações de pegadas e corações
- Otimização para SEO
- Performance otimizada
- Compatibilidade cross-browser

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Utilities**: clsx, tailwind-merge

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para executar localmente

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/smart-pet-diary.git
cd smart-pet-diary
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run check` - Verifica tipos TypeScript

## 🌐 Deploy na Vercel

### Deploy Automático
1. Faça push do código para o GitHub
2. Conecte o repositório na Vercel
3. A Vercel detectará automaticamente as configurações do Vite
4. O deploy será feito automaticamente

### Deploy Manual
```bash
npm run build
npx vercel --prod
```

### Configurações da Vercel
O projeto inclui um arquivo `vercel.json` com configurações otimizadas para SPA.

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── HowItWorks.tsx  # Como funciona
│   ├── WhyChoose.tsx   # Por que escolher
│   ├── Testimonials.tsx # Depoimentos
│   ├── FAQ.tsx         # Perguntas frequentes
│   └── Footer.tsx      # Rodapé
├── contexts/           # Contextos React
│   └── LanguageContext.tsx # Gerenciamento de idiomas
├── pages/              # Páginas
│   └── Home.tsx        # Página principal
├── hooks/              # Hooks customizados
├── lib/                # Utilitários
└── assets/             # Recursos estáticos
```

## 🎨 Personalização

### Cores e Tema
As cores principais podem ser ajustadas no arquivo `tailwind.config.js`:
- Azul: `#2563eb` (primary)
- Verde: `#16a34a` (secondary)
- Gradientes personalizados para CTAs

### Idiomas
Adicione novos idiomas editando o arquivo `src/contexts/LanguageContext.tsx`.

## 📈 Performance e SEO

- Lazy loading de componentes
- Otimização de imagens
- Meta tags configuradas
- Sitemap automático
- Estrutura semântica HTML5

## 🔒 Segurança

- Nenhuma credencial exposta no código
- Dependências auditadas (0 vulnerabilidades)
- Headers de segurança configurados
- Validação de entrada implementada

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Email**: suporte@smartpetdiary.com
- **Website**: [smartpetdiary.com](https://smartpetdiary.com)
- **Chat**: Suporte 24/7 disponível

---

Desenvolvido com ❤️ para pets e seus tutores
