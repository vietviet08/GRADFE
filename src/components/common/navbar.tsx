'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme';
import { LanguageSwitcher } from '@/components/i18n';
import { useTranslations } from '@/hooks';

interface NavbarProps {
  className?: string;
}

/**
 * Navigation bar component with theme toggle
 */
export function Navbar({ className = '' }: NavbarProps) {
  const { t } = useTranslations();

  return (
    <nav
      className={`border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur dark:border-border ${className}`}
    >
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        {/* Logo */}
        <Link
          href='/'
          className='text-xl font-bold text-foreground transition-colors hover:text-primary'
        >
          GradFE
        </Link>

        {/* Navigation Links */}
        <div className='hidden items-center space-x-6 md:flex'>
          <Link
            href='/'
            className='text-foreground/70 dark:text-foreground/80 text-sm font-medium transition-colors hover:text-foreground dark:hover:text-foreground'
          >
            {t('navigation.home')}
          </Link>
          <Link
            href='/about'
            className='text-foreground/70 dark:text-foreground/80 text-sm font-medium transition-colors hover:text-foreground dark:hover:text-foreground'
          >
            {t('navigation.about')}
          </Link>
          <Link
            href='/docs'
            className='text-foreground/70 dark:text-foreground/80 text-sm font-medium transition-colors hover:text-foreground dark:hover:text-foreground'
          >
            {t('footer.documentation')}
          </Link>
          <Link
            href='/contact'
            className='text-foreground/70 dark:text-foreground/80 text-sm font-medium transition-colors hover:text-foreground dark:hover:text-foreground'
          >
            {t('navigation.contact')}
          </Link>
        </div>

        {/* Right side with language switcher and theme toggle */}
        <div className='flex items-center space-x-2'>
          {/* Mobile menu button (optional) */}
          <button
            className='text-foreground/80 hover:text-foreground md:hidden'
            aria-label='Toggle mobile menu'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
