/**
 * Application configuration
 */

export const config = {
  app: {
    name: 'GradFE',
    version: '1.0.0',
    description: 'Modern Next.js application with Clean Architecture',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    env: process.env.NEXT_PUBLIC_APP_ENV || 'development',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
    timeout: 30000,
    retries: 3,
  },
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
    sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours
  },
  i18n: {
    defaultLocale: 'en' as const,
    locales: ['en', 'vi'] as const,
  },
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    debug: process.env.NEXT_PUBLIC_ENABLE_DEBUG === 'true',
    newDashboard: process.env.NEXT_PUBLIC_ENABLE_NEW_DASHBOARD === 'true',
    experimentalFeatures:
      process.env.NEXT_PUBLIC_ENABLE_EXPERIMENTAL === 'true',
  },
  ui: {
    itemsPerPage: 20,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    supportedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
    supportedFileTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
  },
  storage: {
    prefix: 'gradfe_',
    version: 'v1',
  },
  seo: {
    titleTemplate: '%s | GradFE',
    defaultTitle: 'GradFE - Modern Next.js Application',
    description:
      'Modern Next.js application with Clean Architecture, TypeScript, and Tailwind CSS',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
      siteName: 'GradFE',
    },
    twitter: {
      handle: '@gradfe',
      site: '@gradfe',
      cardType: 'summary_large_image',
    },
  },
} as const;

/**
 * Environment-specific checks
 */
export const isDevelopment = config.app.env === 'development';
export const isProduction = config.app.env === 'production';
export const isTest = config.app.env === 'test';

/**
 * Feature flag helper
 */
export function isFeatureEnabled(
  feature: keyof typeof config.features
): boolean {
  return config.features[feature];
}

/**
 * Get API URL with path
 */
export function getApiUrl(path: string = ''): string {
  const baseUrl = config.api.baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Get full URL with path
 */
export function getFullUrl(path: string = ''): string {
  const baseUrl = config.app.url;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
