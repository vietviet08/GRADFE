/**
 * Internationalization configuration and utilities
 */

export type Locale = 'en' | 'vi';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'vi'];

export interface TranslationResources {
  common: Record<string, string | Record<string, string>>;
}

/**
 * Get translation resources for a locale
 */
export async function getTranslations(
  locale: Locale
): Promise<TranslationResources> {
  try {
    const common = await import(`./locales/${locale}/common.json`);
    return {
      common: common.default,
    };
  } catch (error) {
    console.warn(`Failed to load translations for locale: ${locale}`, error);
    // Fallback to default locale
    if (locale !== defaultLocale) {
      return getTranslations(defaultLocale);
    }
    throw error;
  }
}

/**
 * Simple translation function
 * @param key - Translation key (e.g., 'common.loading')
 * @param translations - Translation resources
 * @param params - Parameters for interpolation
 * @returns Translated string
 */
export function t(
  key: string,
  translations: TranslationResources,
  params?: Record<string, string | number>
): string {
  const keys = key.split('.');
  let value: unknown = translations;

  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  let result = typeof value === 'string' ? value : key;

  // Simple parameter interpolation
  if (params) {
    Object.entries(params).forEach(([param, val]) => {
      result = result.replace(new RegExp(`{{${param}}}`, 'g'), String(val));
    });
  }

  return result;
}

/**
 * Get locale from pathname
 */
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/');
  const potentialLocale = segments[1];

  if (locales.includes(potentialLocale as Locale)) {
    return potentialLocale as Locale;
  }

  return defaultLocale;
}

/**
 * Remove locale from pathname
 */
export function removeLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (locale === defaultLocale) return pathname;

  return pathname.replace(`/${locale}`, '') || '/';
}

/**
 * Add locale to pathname
 */
export function addLocaleToPathname(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) return pathname;

  const cleanPathname = removeLocaleFromPathname(pathname);
  return `/${locale}${cleanPathname}`;
}
