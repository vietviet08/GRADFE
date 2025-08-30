'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { Button } from '@/components/ui';
import {
  Locale,
  getLocaleFromPathname,
  getTranslations,
  TranslationResources,
  t,
  defaultLocale,
} from '@/i18n';

interface LocaleAwareNotFoundProps {
  className?: string;
}

export function LocaleAwareNotFound({
  className = '',
}: LocaleAwareNotFoundProps) {
  const params = useParams();
  const pathname = usePathname();
  const [translations, setTranslations] = useState<TranslationResources | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // Get current locale from URL or params with better detection
  const currentLocale =
    (params?.locale as Locale) ||
    getLocaleFromPathname(pathname) ||
    defaultLocale;

  // Create locale-aware links
  const homeLink = currentLocale === 'en' ? '/' : `/${currentLocale}`;
  const contactLink = `${currentLocale === 'en' ? '' : `/${currentLocale}`}/contact`;

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const data = await getTranslations(currentLocale);
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations for not-found page:', error);
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
      // Return fallback text based on key during loading
      const fallbacks: Record<string, string> = {
        'errors.notFound': 'Page Not Found',
        'errors.notFoundDescription':
          "Sorry, we couldn't find the page you're looking for.",
        'common.home': 'Go Home',
        'common.back': 'Go Back',
        'errors.contactSupport': 'If you believe this is a mistake, please',
        'navigation.contact': 'contact support',
      };
      return fallbacks[key] || key;
    }
    return t(key, translations, params);
  };

  if (isLoading) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center ${className}`}
      >
        <div className='flex min-h-[200px] items-center justify-center'>
          <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-primary'></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center ${className}`}
    >
      <div className='max-w-md space-y-6'>
        {/* 404 Icon */}
        <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20'>
          <svg
            className='h-12 w-12 text-red-600 dark:text-red-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className='bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-6xl font-bold text-transparent'>
          404
        </h1>

        {/* Error Message */}
        <div className='space-y-2'>
          <h2 className='text-2xl font-semibold text-foreground'>
            {translate('errors.notFound')}
          </h2>
          <p className='text-muted-foreground'>
            {translate('errors.notFoundDescription')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link href={homeLink}>
            <Button>{translate('common.home')}</Button>
          </Link>
          <Button variant='outline' onClick={() => window.history.back()}>
            {translate('common.back')}
          </Button>
        </div>

        {/* Additional Help */}
        <div className='text-sm text-muted-foreground'>
          <p>
            {translate('errors.contactSupport')}{' '}
            <Link
              href={contactLink}
              className='text-primary underline-offset-4 hover:underline'
            >
              {translate('navigation.contact')}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
