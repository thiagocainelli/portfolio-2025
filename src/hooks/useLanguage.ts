import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      setCurrentLanguage(lng);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  const getAvailableLanguages = () => [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  return {
    currentLanguage,
    changeLanguage,
    getAvailableLanguages,
  };
};
