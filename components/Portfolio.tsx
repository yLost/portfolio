"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";

import en from "../languages/en.json";
import ptBr from "../languages/pt_br.json";

type Language = "pt" | "en";
type ProjectName = keyof typeof ptBr.projects;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const translations = { pt: ptBr, en };

type Project = {
  name: ProjectName;
  image: string;
  tech: string;
  link?: string;
  storeLink?: string;
  status?: string;
  featured?: boolean;
  app?: boolean;
};
const projects: Project[] = [
  {
    name: "Wipsie",
    image: "https://wipsie.acomerce.net/static/images/wipsie-illustration.webp",
    tech: "Next.js · NestJS · PostgreSQL · RabbitMQ",
    link: "https://wipsie.acomerce.net",
    featured: true,
  },
  {
    name: "Ranke",
    image: "https://ranke.com.br/img/mainDashboard.png",
    tech: "React · NestJS · Redis · Docker",
    link: "https://ranke.com.br",
    featured: true,
  },
  {
    name: "FindYou",
    image: `${basePath}/assets/findyou_pic.png`,
    tech: "React Native · NestJS · MongoDB · Redis",
    link: "https://findyouapp.com.br",
    storeLink: "https://play.google.com/store/apps/details?id=com.ylost.findyou&hl=pt_BR",
  },
  {
    name: "Shine",
    image: `${basePath}/assets/shine_pic.png`,
    tech: "Angular · NestJS · PostgreSQL · Docker",
    link: "https://shine.help",
  },
  {
    name: "Grupo Coletti",
    image: `${basePath}/assets/website1.png`,
    tech: "WordPress · PHP · CSS",
    link: "https://grupocoletti.com.br",
  },
  {
    name: "Metta Impermeabilização",
    image: `${basePath}/assets/website2.png`,
    tech: "WordPress · PHP · CSS",
    link: "https://mettaimpermeabilizacao.com.br/",
  },
  {
    name: "EnterCity",
    image: `${basePath}/assets/website3.png`,
    tech: "Next.js · Node.js · PostgreSQL",
    link: "https://entercity.club/",
  },
  {
    name: "Minha Tampa",
    image: `${basePath}/assets/app-minha-tampa.png`,
    tech: "React Native · Expo · NestJS · Redis",
    link: "https://play.google.com/store/apps/details?id=com.ylost.minhatampa&hl=pt_BR",
    app: true,
  },
  {
    name: "Connect Gym",
    image: `${basePath}/assets/app-connect-gym.png`,
    tech: "React Native · Expo · NestJS · WebSocket",
    link: "https://play.google.com/store/apps/details?id=com.ylost.connectgym&hl=pt_BR",
    app: true,
  },
];
const stack = [
  { label: "frontend", items: ["React", "Next.js", "Angular", "Svelte", "TypeScript"] },
  { label: "backend", items: ["Node.js", "NestJS", "PHP", "C#", "Java"] },
  {
    label: "dataCloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "GCP", "Docker"],
  },
  { label: "mobile", items: ["React Native", "Flutter"] },
] as const;

export default function Portfolio({ initialLanguage = "pt" }: { initialLanguage?: Language }) {
  const language = initialLanguage;
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="wordmark"
          href="#top"
          aria-label={language === "pt" ? "Início" : "Home"}
          onClick={closeMenu}
        >
          FP<span>.</span>
        </a>
        <nav
          id="main-navigation"
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}
        >
          {["sobre", "projetos", "experiencia"].map((id, i) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {t.nav[i]}
            </a>
          ))}
          <a className="nav-contact" href="mailto:fernandopovinsky@hotmail.com">
            {t.contact} <ArrowUpRight size={15} />
          </a>
        </nav>
        <div className="header-actions">
          <Link
            className="language"
            href={language === "pt" ? "/en/" : "/br/"}
            hrefLang={language === "pt" ? "en" : "pt-BR"}
            aria-label={language === "pt" ? "View in English" : "Ver em português"}
          >
            {language === "pt" ? "EN" : "PT"}
          </Link>
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={
              menuOpen
                ? language === "pt"
                  ? "Fechar menu"
                  : "Close menu"
                : language === "pt"
                  ? "Abrir menu"
                  : "Open menu"
            }
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="top">
        <section className="hero" id="sobre">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> {t.eyebrow}
            </p>
            <h1>
              {t.titleA}
              <br />
              <em>{t.titleB}</em>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#projetos">
                {t.seeWork} <ArrowDown size={17} />
              </a>
              <p>
                <span className="status-dot" /> {t.availability}
              </p>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-number">
              07<span>+</span>
            </div>
            <img
              src={`${basePath}/assets/myself.png`}
              alt="Fernando Povinski, full stack developer"
              width="640"
              height="960"
              fetchPriority="high"
            />
            <p>{t.years}</p>
          </div>
        </section>
        <section className="projects section" id="projetos">
          <div className="section-head">
            <div>
              <p className="kicker">{t.projectsKicker}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <p>{t.projectsIntro}</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`${project.featured ? "project-card featured" : "project-card"}${project.app ? " app" : ""}`}
                key={project.name}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={
                      language === "pt"
                        ? `Prévia do projeto ${project.name}`
                        : `${project.name} project preview`
                    }
                    loading="lazy"
                    decoding="async"
                  />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.visit}: ${project.name}`}
                    >
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
                <div className="project-meta">
                  <p>{t.projects[project.name].type}</p>
                  <p>{project.tech}</p>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{t.projects[project.name].description}</p>
                <div className="project-actions">
                  {project.link ? (
                    <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                      {project.app ? t.store : t.visit} <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="text-link project-status">{project.status}</span>
                  )}
                  {project.storeLink && (
                    <a
                      className="text-link"
                      href={project.storeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.store} <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="approach section">
          <div className="approach-intro">
            <p className="kicker">{t.aboutKicker}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>
          <div className="principles">
            {t.principles.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="experience section" id="experiencia">
          <div className="experience-copy">
            <p className="kicker">{t.stackKicker}</p>
            <h2>{t.stackTitle}</h2>
            <p>{t.stackText}</p>
          </div>
          <div className="stack-list">
            {stack.map(({ label, items }) => (
              <div className="stack-row" key={label}>
                <h3>{t.stackLabels[label]}</h3>
                <p>{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer id="contato">
        <div className="footer-main">
          <p className="kicker">{t.footerKicker}</p>
          <h2>{t.footerTitle}</h2>
          <p>{t.footerText}</p>
          <a href="mailto:fernandopovinsky@hotmail.com">
            {t.email} <ArrowUpRight />
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Fernando Povinski · {t.rights}
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/fernando-povinsky/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a href="https://github.com/yLost" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="mailto:fernandopovinsky@hotmail.com" aria-label="E-mail">
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
