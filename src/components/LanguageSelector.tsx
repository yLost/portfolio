import { motion } from "motion/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useLanguage, Language } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center"
    >
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[140px] bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all duration-300">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <SelectValue placeholder="Language" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-slate-800/95 border-slate-700 backdrop-blur-md">
          <SelectItem 
            value="pt-BR" 
            className="text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 focus:text-cyan-400 focus:bg-slate-700/50 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">🇧🇷</span>
              {t('language.portuguese')}
            </div>
          </SelectItem>
          <SelectItem 
            value="en-US" 
            className="text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 focus:text-cyan-400 focus:bg-slate-700/50 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">🇺🇸</span>
              {t('language.english')}
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
}