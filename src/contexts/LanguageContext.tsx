import { createContext, ReactNode, useContext, useState } from "react";

export type Language = "pt-BR" | "en-US";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  "pt-BR": {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.services": "Serviços",
    "nav.contact": "Contato",

    // Hero Section
    "hero.title": "Fullstack Developer para o Futuro Digital",
    "hero.subtitle":
      "Construindo sistemas corporativos, plataformas escaláveis e experiências digitais de alto impacto",
    "hero.cta.portfolio": "Ver Projetos",
    "hero.cta.contact": "Entre em Contato",

    // About Section
    "about.title": "Fullstack Developer",
    "about.subtitle":
      "Desenvolvedor apaixonado por tecnologia e inovação, focado em criar soluções que fazem a diferença. Construindo sistemas corporativos, plataformas escaláveis e experiências digitais de alto impacto",
    "about.content.title": "Experiência & Paixão",
    "about.content.description1":
      "Com mais de 7 anos de experiência no desenvolvimento fullstack, especializo-me em criar aplicações robustas e escaláveis para empresas de todos os tamanhos.",
    "about.content.description2":
      "Minha abordagem combina as melhores práticas de desenvolvimento com tecnologias modernas, sempre priorizando a experiência do usuário e a performance das aplicações.",
    "about.skills.title": "Tecnologias & Ferramentas",
    "about.stats.projects": "Projetos Entregues",
    "about.stats.clients": "Clientes Satisfeitos",
    "about.stats.years": "Anos de Experiência",
    "about.stats.technologies": "Tecnologias Dominadas",

    // Tech Stack Section
    "tech.title": "Stack Tecnológico",
    "tech.subtitle":
      "Expertise em tecnologias modernas para soluções completas e escaláveis",
    "tech.frontend.title": "Frontend Avançado",
    "tech.frontend.description": "React, Next.js, Angular, Svelte",
    "tech.backend.title": "Backend Escalável",
    "tech.backend.description": "Node.js, NestJS, C#, Java, PHP",
    "tech.mobile.title": "Mobile & Cloud",
    "tech.mobile.description": "Flutter, React Native, AWS, GCP, Docker",

    // Services Section
    "services.title": "Serviços Especializados",
    "services.subtitle":
      "Soluções completas em desenvolvimento, desde a concepção até a entrega final",
    "services.web.title": "Desenvolvimento Web",
    "services.web.description":
      "Aplicações web modernas, responsivas e otimizadas para performance.",
    "services.web.feature1": "Sites e aplicações responsivas",
    "services.web.feature2": "E-commerce e plataformas B2B",
    "services.web.feature3": "Progressive Web Apps (PWA)",
    "services.web.feature4": "Otimização de SEO e performance",
    "services.mobile.title": "Aplicativos Mobile",
    "services.mobile.description":
      "Apps híbridos para iOS e Android com alta performance.",
    "services.mobile.feature1": "Apps híbridos com React Native",
    "services.mobile.feature2": "Integração com APIs e serviços",
    "services.mobile.feature3": "Publicação nas app stores",
    "services.cloud.title": "Soluções em Nuvem",
    "services.cloud.description":
      "Infraestrutura escalável e segura na nuvem para seus projetos.",
    "services.cloud.feature1": "Deploy automatizado CI/CD",
    "services.cloud.feature2": "Containerização com Docker",
    "services.cloud.feature3": "Monitoramento e logs",
    "services.cloud.feature4": "Backup e recuperação",
    "services.backend.title": "APIs & Backend",
    "services.backend.description":
      "APIs robustas, seguras e documentadas para suas aplicações.",
    "services.backend.feature1": "APIs RESTful e GraphQL",
    "services.backend.feature2": "Autenticação e autorização",
    "services.backend.feature3": "Integração com terceiros",
    "services.backend.feature4": "Documentação completa",
    "services.optimization.title": "Otimização & Performance",
    "services.optimization.description":
      "Melhoria de performance e otimização de aplicações existentes.",
    "services.optimization.feature1": "Análise de performance",
    "services.optimization.feature2": "Otimização de banco de dados",
    "services.optimization.feature3": "Cache e CDN",
    "services.optimization.feature4": "Refatoração de código",
    "services.cta": "Saiba Mais",
    "services.custom.title": "Projeto Personalizado?",
    "services.custom.description":
      "Precisa de algo específico? Vamos conversar sobre sua ideia e criar uma solução sob medida.",
    "services.custom.cta": "Discutir Projeto",

    // Projects Section
    "projects.title": "Projetos Realizados",
    "projects.subtitle":
      "Soluções inovadoras desenvolvidas para empresas de diversos segmentos, sempre focando em performance, escalabilidade e experiência do usuário",
    "projects.social.title": "Rede Social",
    "projects.social.description":
      "Plataforma de rede social com recursos de interação em tempo real, feed personalizado, integração com APIs externas, E-Commerce",

    "projects.crm.title": "Sistema de CRM",
    "projects.crm.description":
      "Plataforma de gestão de relacionamento com o cliente, com automação de vendas e integração com canais de atendimento.",

    "projects.social2.title": "Rede Social",
    "projects.social2.description":
      "Plataforma de rede social com recursos de interação em tempo real, feed personalizado, integração com APIs externas, mapa para eventos.",

    "projects.bot.title": "Chatbot Inteligente",
    "projects.bot.description":
      "Solução de chatbot para gestão de chats, suporte a múltiplos canais.",

    "projects.website1.title": "Website",
    "projects.website1.description":
      "Desenvolvimento de um website responsivo e otimizado para SEO, com integração a sistemas de gestão de conteúdo.",

    "projects.cta.view": "Ver Projeto",
    "projects.cta.code": "Código",

    // Footer
    "footer.title": "Pronto para transformar sua ideia em realidade?",
    "footer.subtitle":
      "Vamos conversar sobre como posso ajudar a levar seu projeto para o próximo nível",
    "footer.cta": "Fale Comigo",
    "footer.rights":
      "© " +
      new Date().getFullYear() +
      " Fernando Povinski. Todos os direitos reservados.",

    // Language
    "language.portuguese": "Português",
    "language.english": "English",
  },
  "en-US": {
    // Header
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Fullstack Developer for the Digital Future",
    "hero.subtitle":
      "Building enterprise systems, scalable platforms, and high-impact digital experiences",
    "hero.cta.portfolio": "View Projects",
    "hero.cta.contact": "Get in Touch",

    // About Section
    "about.title": "About Me",
    "about.subtitle":
      "Developer passionate about technology and innovation, focused on creating solutions that make a difference",
    "about.content.title": "Experience & Passion",
    "about.content.description1":
      "With over 7 years of experience in fullstack development, I specialize in building robust and scalable applications for companies of all sizes.",
    "about.content.description2":
      "My approach combines best development practices with modern technologies, always prioritizing user experience and application performance.",
    "about.skills.title": "Technologies & Tools",
    "about.stats.projects": "Projects Delivered",
    "about.stats.clients": "Satisfied Clients",
    "about.stats.years": "Years of Experience",
    "about.stats.technologies": "Technologies Mastered",

    // Tech Stack Section
    "tech.title": "Tech Stack",
    "tech.subtitle":
      "Expertise in modern technologies for complete and scalable solutions",
    "tech.frontend.title": "Advanced Frontend",
    "tech.frontend.description": "React, Next.js, Angular, Svelte",
    "tech.backend.title": "Scalable Backend",
    "tech.backend.description": "Node.js, NestJS, C#, Java, PHP",
    "tech.mobile.title": "Mobile & Cloud",
    "tech.mobile.description": "Flutter, React Native, AWS, GCP, Docker",

    // Services Section
    "services.title": "Specialized Services",
    "services.subtitle":
      "Complete development solutions, from concept to final delivery",
    "services.web.title": "Web Development",
    "services.web.description":
      "Modern, responsive, and performance-optimized web applications.",
    "services.web.feature1": "Responsive websites and applications",
    "services.web.feature2": "E-commerce and B2B platforms",
    "services.web.feature3": "Progressive Web Apps (PWA)",
    "services.web.feature4": "SEO and performance optimization",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.description":
      "High-performance hybrid apps for iOS and Android.",
    "services.mobile.feature1": "Hybrid apps with React Native",
    "services.mobile.feature2": "API and service integration",
    "services.mobile.feature3": "App store publishing",
    "services.cloud.title": "Cloud Solutions",
    "services.cloud.description":
      "Scalable and secure cloud infrastructure for your projects.",
    "services.cloud.feature1": "Automated CI/CD deployment",
    "services.cloud.feature2": "Containerization with Docker",
    "services.cloud.feature3": "Monitoring and logs",
    "services.cloud.feature4": "Backup and recovery",
    "services.backend.title": "APIs & Backend",
    "services.backend.description":
      "Robust, secure, and well-documented APIs for your applications.",
    "services.backend.feature1": "RESTful and GraphQL APIs",
    "services.backend.feature2": "Authentication and authorization",
    "services.backend.feature3": "Third-party integrations",
    "services.backend.feature4": "Comprehensive documentation",
    "services.optimization.title": "Optimization & Performance",
    "services.optimization.description":
      "Performance improvement and optimization of existing applications.",
    "services.optimization.feature1": "Performance analysis",
    "services.optimization.feature2": "Database optimization",
    "services.optimization.feature3": "Cache and CDN",
    "services.optimization.feature4": "Code refactoring",
    "services.cta": "Learn More",
    "services.custom.title": "Custom Project?",
    "services.custom.description":
      "Need something specific? Let’s talk about your idea and create a tailored solution.",
    "services.custom.cta": "Discuss Project",

    // Projects Section
    "projects.title": "Completed Projects",
    "projects.subtitle":
      "Innovative solutions developed for companies from various sectors, always focusing on performance, scalability, and user experience",
    "projects.social.title": "Social Network",
    "projects.social.description":
      "Social networking platform with real-time interaction features, personalized feed, external API integrations, and E-Commerce",

    "projects.crm.title": "CRM System",
    "projects.crm.description":
      "Customer relationship management platform with sales automation and integration with support channels.",

    "projects.social2.title": "Social Network",
    "projects.social2.description":
      "Social networking platform with real-time interaction, personalized feed, external API integrations, and event mapping.",

    "projects.bot.title": "Smart Chatbot",
    "projects.bot.description":
      "Chatbot solution for chat management with multi-channel support.",

    "projects.website1.title": "Website",
    "projects.website1.description":
      "Responsive and SEO-optimized website development, integrated with content management systems.",

    "projects.cta.view": "View Project",
    "projects.cta.code": "Code",

    // Footer
    "footer.title": "Ready to turn your idea into reality?",
    "footer.subtitle":
      "Let’s talk about how I can help take your project to the next level",
    "footer.cta": "Contact Me",
    "footer.rights":
      "© " +
      new Date().getFullYear() +
      " Fernando Povinski. All rights reserved.",

    // Language
    "language.portuguese": "Portuguese",
    "language.english": "English",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
