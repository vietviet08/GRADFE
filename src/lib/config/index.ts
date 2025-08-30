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
  },
  auth: {
    secret: process.env.NEXTAUTH_SECRET,
    url: process.env.NEXTAUTH_URL,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    debug: process.env.NEXT_PUBLIC_ENABLE_DEBUG === 'true',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },
} as const;

/**
 * Environment validation
 */
export function validateEnvironment() {
  const requiredEnvVars = ['NEXTAUTH_SECRET', 'DATABASE_URL'];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  }
}

/**
 * Check if app is in production
 */
export const isProduction = config.app.env === 'production';

/**
 * Check if app is in development
 */
export const isDevelopment = config.app.env === 'development';
