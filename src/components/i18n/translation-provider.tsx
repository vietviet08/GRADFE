'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  Locale,
  defaultLocale,
  getTranslations,
  TranslationResources,
  t,
} from '@/i18n';

interface TranslationContextType {
  translations: TranslationResources | null;
  locale: Locale;
  isLoading: boolean;
  t: (key: string, params?: Record<string, string | number>) => string;
  changeLocale: (newLocale: Locale) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
  initialTranslations?: TranslationResources;
}

export function TranslationProvider({
  children,
  initialLocale,
  initialTranslations,
}: TranslationProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<TranslationResources | null>(
    initialTranslations || null
  );
  const [isLoading, setIsLoading] = useState(!initialTranslations);

  const loadTranslations = useCallback(
    async (targetLocale: Locale) => {
      // Don't show loading if we already have translations for this locale
      if (!translations || locale !== targetLocale) {
        setIsLoading(true);
      }

      try {
        const data = await getTranslations(targetLocale);
        setTranslations(data);
        setLocale(targetLocale);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to default locale
        if (targetLocale !== defaultLocale) {
          try {
            const fallbackData = await getTranslations(defaultLocale);
            setTranslations(fallbackData);
            setLocale(defaultLocale);
          } catch (fallbackError) {
            console.error(
              'Failed to load fallback translations:',
              fallbackError
            );
          }
        }
      } finally {
        setIsLoading(false);
      }
    },
    [translations, locale]
  );

  useEffect(() => {
    if (!translations && !isLoading) {
      loadTranslations(initialLocale);
    }
  }, [translations, isLoading, initialLocale, loadTranslations]);

  const translate = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      if (!translations) {
        // Return empty string during loading to avoid flashing keys
        return '';
      }
      return t(key, translations, params);
    },
    [translations]
  );

  const changeLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale !== locale) {
        loadTranslations(newLocale);
      }
    },
    [locale, loadTranslations]
  );

  return (
    <TranslationContext.Provider
      value={{
        translations,
        locale,
        isLoading,
        t: translate,
        changeLocale,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error(
      'useTranslationContext must be used within a TranslationProvider'
    );
  }
  return context;
}
