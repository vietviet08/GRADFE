'use client';

import { useTranslationContext } from '@/components/i18n';

export function useTranslations() {
  const { t, locale, isLoading } = useTranslationContext();

  return {
    t,
    locale,
    isLoading,
  };
}
