import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  const { t } = useLanguage();

  const skills = [
    "Node.js",
    "TypeScript",
    "NestJS",
    "PHP",
    "C#",
    "Java",
    "React",
    "Next.js",
    "Svelte",
    "Angular",
    "React Native",
    "Flutter",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "GCP (Cloud Functions, API Gateway, Cloud Storage, PubSub)",
    "AWS (EC2, RDS, Lambda, API Gateway, Amplify)",
    "Docker",
    "CI/CD",
    "WordPress",
    "Ant Design",
    "TDD",
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          style={{ marginTop: "60px" }}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {t("about.title")}
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl">
                    {t("about.subtitle")}
                  </p>
                </motion.div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {t("about.content.title")}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("about.content.description1")}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {t("about.content.description2")}
                </p>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: "40px" }}>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">
                  {t("about.skills.title")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const element = document.querySelector("#projetos");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {t("hero.cta.portfolio")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-3 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    const element = document.querySelector("#footer");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {t("hero.cta.contact")}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <div
            style={{
              height: "500px",
              width: "400px",
              marginLeft: "auto",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-20 blur-xl"
                />
                <Card className="bg-slate-800/30 border-slate-700 overflow-hidden backdrop-blur-sm">
                  <CardContent className="p-0" style={{ paddingBottom: 0 }}>
                    <ImageWithFallback
                      src="/portfolio/assets/myself.png"
                      alt="Professional Developer"
                      className=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
