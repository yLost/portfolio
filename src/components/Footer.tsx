import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      id="footer"
      className="bg-gradient-to-t from-slate-900 to-black border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t("footer.title")}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            {t("footer.subtitle")}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="mailto:fernandopovinsky@hotmail.com"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-12 py-4 text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              {t("footer.cta")}
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-800 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
              Fernando Povinski
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/fernando-povinsky/"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yLost"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:fernandopovinsky@hotmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>
          <div className="mt-8 text-gray-500 text-sm">{t("footer.rights")}</div>
        </motion.div>
      </div>
    </footer>
  );
}
