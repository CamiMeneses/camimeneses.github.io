import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

import en from "./locales/en.json";
import es from "./locales/es.json";
import type { Locale } from "./types";

export enum Language {
  EN = "en",
  ES = "es",
}

interface LanguageContextType {
  language: Language;
  t: Locale;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LANGUAGE_KEY = "preferred-language";

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  if (stored === Language.EN || stored === Language.ES) {
    return stored;
  }

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("es")) {
    return Language.ES;
  }

  return Language.EN;
};

const locales: Record<Language, Locale> = {
  [Language.EN]: en,
  [Language.ES]: es,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === Language.EN ? Language.ES : Language.EN));
  }, []);

  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      t: locales[language],
      toggleLanguage,
      setLanguage,
    }),
    [language, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
