'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Locale, locales, defaultLocale } from '@/i18n';
import { useTranslationContext } from './translation-provider';

interface LanguageSwitcherProps {
  className?: string;
}

/**
 * Language switcher component for internationalization
 */
export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { locale: currentLocale, changeLocale } = useTranslationContext();

  const switchLanguage = (locale: Locale) => {
    setIsOpen(false);

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');

    // Add new locale to pathname (skip for default locale)
    const newPath =
      locale === defaultLocale
        ? pathWithoutLocale || '/'
        : `/${locale}${pathWithoutLocale || '/'}`;

    // Set locale cookie for future requests
    document.cookie = `locale=${locale}; path=/; max-age=31536000`; // 1 year

    // Update translations context
    changeLocale(locale);

    // Navigate to new path
    router.push(newPath);
  };

  const getLanguageName = (locale: Locale): string => {
    switch (locale) {
      case 'en':
        return 'English';
      case 'vi':
        return 'Tiếng Việt';
      default:
        return locale;
    }
  };

  const getLanguageFlag = (locale: Locale): string => {
    switch (locale) {
      case 'en':
        return '🇺🇸';
      case 'vi':
        return '🇻🇳';
      default:
        return '🌐';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-foreground/80 dark:text-foreground/90 dark:hover:bg-accent/80 flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
        aria-label='Change language'
        aria-expanded={isOpen}
      >
        <Globe className='h-4 w-4' />
        <span className='hidden sm:inline'>
          {getLanguageFlag(currentLocale)} {getLanguageName(currentLocale)}
        </span>
        <span className='sm:hidden'>{getLanguageFlag(currentLocale)}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 z-10'
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className='dark:border-border/60 absolute right-0 top-full z-20 mt-2 min-w-[160px] rounded-md border bg-popover p-1 shadow-md dark:shadow-lg'>
            {locales.map(locale => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={`dark:hover:bg-accent/80 flex w-full items-center space-x-3 rounded-sm px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                  locale === currentLocale
                    ? 'dark:bg-accent/80 bg-accent text-accent-foreground'
                    : 'text-foreground/80 dark:text-foreground/90'
                }`}
              >
                <span className='text-base'>{getLanguageFlag(locale)}</span>
                <span>{getLanguageName(locale)}</span>
                {locale === currentLocale && (
                  <svg
                    className='ml-auto h-4 w-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
