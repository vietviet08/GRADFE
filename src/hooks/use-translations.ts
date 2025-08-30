'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Locale,
  defaultLocale,
  getTranslations,
  TranslationResources,
  t,
} from '@/i18n';

export function useTranslations() {
  const params = useParams();
  const currentLocale = (params?.locale as Locale) || defaultLocale;
  const [translations, setTranslations] = useState<TranslationResources | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const data = await getTranslations(currentLocale);
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to default locale
        try {
          const fallbackData = await getTranslations(defaultLocale);
          setTranslations(fallbackData);
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [currentLocale]);

  const translate = (
    key: string,
    params?: Record<string, string | number>
  ): string => {
    if (!translations) {
      return key; // Return key if translations not loaded yet
    }
    return t(key, translations, params);
  };

  return {
    t: translate,
    locale: currentLocale,
    isLoading,
  };
}
