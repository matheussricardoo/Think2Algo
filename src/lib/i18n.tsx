'use client';

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { en } from './locales/en';
import { pt } from './locales/pt';

const translations = { en, pt };

type Language = 'en' | 'pt';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof en;
  challenges: (typeof en.challenges);
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && (storedLang === 'en' || storedLang === 'pt')) {
      return storedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'pt' ? 'pt' : 'en';
  }
  return 'en'; // Default language for server-side rendering
};


export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // Default to 'en' on server and initial client render

  useEffect(() => {
    // This effect runs only on the client, after hydration
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = useMemo(() => translations[language], [language]);
  const challenges = useMemo(() => translations[language].challenges, [language]);

  const value = useMemo(() => ({
     language,
     setLanguage: handleSetLanguage,
     t,
     challenges
  }), [language, t, challenges]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
