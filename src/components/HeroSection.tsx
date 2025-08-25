import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t("hero.subtitle")}
            </motion.p>

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
              >
                {t("hero.cta.contact")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-20 blur-xl"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGxhcHRvcCUyMGNvZGluZ3xlbnwxfHx8fDE3NTU5NTY4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Technology Setup"
                className="relative rounded-2xl shadow-2xl max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
