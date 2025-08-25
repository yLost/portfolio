import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Monitor, Server, Smartphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function TechStackSection() {
  const { t } = useLanguage();
  
  const techStacks = [
    {
      icon: Monitor,
      title: t('tech.frontend.title'),
      description: t('tech.frontend.description'),
      gradient: "from-cyan-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: Server,
      title: t('tech.backend.title'),
      description: t('tech.backend.description'),
      gradient: "from-purple-500 to-indigo-600",
      delay: 0.2,
    },
    {
      icon: Smartphone,
      title: t('tech.mobile.title'),
      description: t('tech.mobile.description'),
      gradient: "from-pink-500 to-purple-600",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
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
            {t('tech.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: tech.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                <CardContent className="p-8 text-center relative">
                  {/* Card glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${tech.gradient} p-0.5 mb-6`}
                  >
                    <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-full">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: tech.delay + 0.5 }}
                    viewport={{ once: true }}
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