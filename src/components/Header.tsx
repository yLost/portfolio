import { useState } from "react";
import { Button } from "./ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#sobre", label: t('nav.about') },
    { href: "#servicos", label: t('nav.services') },
    { href: "#projetos", label: t('nav.projects') },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('#')}
          >
            Fernando Povinski
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
            <Button 
              variant="outline" 
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              onClick={() => handleNavClick('#footer')}
            >
              {t('nav.contact')}
            </Button>
            <LanguageSelector />
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <motion.button 
              className="text-cyan-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-slate-700 md:hidden z-50"
            >
              <div className="p-6">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Menu
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cyan-400 p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Mobile navigation */}
                <nav className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-slate-800/50 cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigationItems.length * 0.1 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                      onClick={() => {
                        handleNavClick('#footer');
                      }}
                    >
                      {t('nav.contact')}
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}