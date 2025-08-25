import {
  CheckCircle,
  Cloud,
  Code2,
  Database,
  Smartphone,
  Zap
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t("services.web.title"),
      description: t("services.web.description"),
      features: [
        t("services.web.feature1"),
        t("services.web.feature2"),
        t("services.web.feature3"),
        t("services.web.feature4"),
      ],
      gradient: "from-cyan-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
      features: [
        t("services.mobile.feature1"),
        t("services.mobile.feature2"),
        t("services.mobile.feature3"),
      ],
      gradient: "from-purple-500 to-indigo-600",
      delay: 0.2,
    },
    {
      icon: Cloud,
      title: t("services.cloud.title"),
      description: t("services.cloud.description"),
      features: [
        t("services.cloud.feature1"),
        t("services.cloud.feature2"),
        t("services.cloud.feature3"),
        t("services.cloud.feature4"),
      ],
      gradient: "from-green-500 to-teal-600",
      delay: 0.3,
    },
    {
      icon: Database,
      title: t("services.backend.title"),
      description: t("services.backend.description"),
      features: [
        t("services.backend.feature1"),
        t("services.backend.feature2"),
        t("services.backend.feature3"),
        t("services.backend.feature4"),
      ],
      gradient: "from-orange-500 to-red-600",
      delay: 0.4,
    },
    {
      icon: Zap,
      title: t("services.optimization.title"),
      description: t("services.optimization.description"),
      features: [
        t("services.optimization.feature1"),
        t("services.optimization.feature2"),
        t("services.optimization.feature3"),
        t("services.optimization.feature4"),
      ],
      gradient: "from-yellow-500 to-orange-600",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>

        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
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
            {t("services.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-slate-800/30 border-slate-700 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full">
                <CardContent
                  className="p-8 relative"
                  style={{ height: "100%" }}
                >
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}
                  >
                    <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-xl">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: service.delay + featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {/* <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                      {t("services.cta")}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div> */}

                  {/* Animated border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: service.delay + 0.3 }}
                    viewport={{ once: true }}
                  />

                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-slate-800/20 border-slate-700 backdrop-blur-sm inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t("services.custom.title")}
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                {t("services.custom.description")}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const element = document.querySelector("#footer");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("services.custom.cta")}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
