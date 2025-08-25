import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.social.title"),
      description: t("projects.social.description"),
      image:
        "https://wipsie.acomerce.net/static/images/wipsie-illustration.webp",
      technologies: [
        "Next.Js",
        "Node.js",
        "Nest.Js",
        "PostgreSQL",
        "Docker",
        "RabbitMQ",
        "Micro-services",
      ],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
      link: "https://wipsie.acomerce.net",
    },
    {
      title: t("projects.crm.title"),
      description: t("projects.crm.description"),
      image: "https://ranke.com.br/img/mainDashboard.png",
      technologies: [
        "ReactTs",
        "NestJS",
        "Redis",
        "RabbitMQ",
        "Micro-services",
        "Docker",
      ],
      gradient: "from-yellow-500 to-gray-500",
      delay: 0.2,
      link: "https://ranke.com.br",
    },
    {
      title: t("projects.social2.title"),
      description: t("projects.social2.description"),
      image: "/assets/findyou_pic.png",
      technologies: [
        "React Native",
        "Docker",
        "Nest.JS",
        "NextJS",
        "Mongodb",
        "Redis",
        "RabbitMQ",
      ],
      gradient: "from-green-500 to-teal-500",
      delay: 0.3,
      link: "https://findyouapp.com.br",
    },
    {
      title: t("projects.bot.title"),
      description: t("projects.bot.description"),
      image: "/assets/shine_pic.png",
      technologies: ["Angular", "Docker", "Nest.JS", "PostgreSql"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
      link: "https://shine.help",
    },
    {
      title: t("projects.website1.title"),
      description: t("projects.website1.description"),
      image: "/assets/website1.png",
      technologies: ["WordPress", "PHP", "CSS"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
      link: "https://grupocoletti.com.br",
    },
    {
      title: t("projects.website1.title"),
      description: t("projects.website1.description"),
      image: "/assets/website2.png",
      technologies: ["WordPress", "PHP", "CSS"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
      link: "https://mettaimpermeabilizacao.com.br/",
    },
    {
      title: t("projects.website1.title"),
      description: t("projects.website1.description"),
      image: "/assets/website3.png",
      technologies: ["NextJs", "NodeJs", "Express", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
      link: "https://entercity.club/",
    },
  ];

  return (
    <section
      id="projetos"
      className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>

        {/* Animated lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: project.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full">
                <CardContent
                  className="p-0 relative"
                  style={{ height: "100%" }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="aspect-video relative"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="flex space-x-4">
                          {/* <Button
                            size="sm"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t('projects.cta.view')}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            {t('projects.cta.code')}
                          </Button> */}
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 cursor-pointer"
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t("projects.cta.view")}
                          </Button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${project.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: project.delay + 0.5 }}
                    viewport={{ once: true }}
                  />

                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
