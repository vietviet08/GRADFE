import { Locale, defaultLocale, TranslationResources } from '@/i18n';

/**
 * Load translations on server-side to avoid delay
 * This function runs on the server and pre-loads translations
 */
export async function getServerTranslations(
  locale: Locale
): Promise<TranslationResources> {
  try {
    // Dynamic import for server-side translation loading
    const translations = await import(`@/i18n/locales/${locale}.json`);
    return translations.default as TranslationResources;
  } catch (error) {
    console.warn(
      `Failed to load server translations for locale: ${locale}`,
      error
    );
    // Fallback to default locale
    if (locale !== defaultLocale) {
      try {
        const fallbackTranslations = await import(
          `@/i18n/locales/${defaultLocale}.json`
        );
        return fallbackTranslations.default as TranslationResources;
      } catch (fallbackError) {
        console.error(
          'Failed to load fallback server translations:',
          fallbackError
        );
        throw fallbackError;
      }
    }
    throw error;
  }
}

/**
 * Pre-load translations for static generation
 */
export async function getStaticTranslations(
  locale: Locale
): Promise<TranslationResources> {
  return getServerTranslations(locale);
}
