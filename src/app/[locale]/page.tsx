'use client';

import { ThemeToggle, SimpleThemeToggle } from '@/components/theme';
import { Button } from '@/components/ui';
import { useTranslations } from '@/hooks';

export default function HomePage() {
  const { t } = useTranslations();
  return (
    <div className='container mx-auto px-4 py-16'>
      {/* Hero Section */}
      <section className='mb-16 text-center'>
        <h1 className='to-primary/60 mb-6 bg-gradient-to-r from-primary bg-clip-text text-4xl font-bold text-transparent md:text-6xl'>
          {t('page.hero.title')}
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-xl text-muted-foreground'>
          {t('page.hero.description')}
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Button size='lg'>{t('page.hero.getStarted')}</Button>
          <Button variant='outline' size='lg'>
            {t('page.hero.viewGithub')}
          </Button>
        </div>
      </section>

      {/* Theme Testing Section */}
      <section className='bg-card/50 dark:bg-card/30 mb-16 rounded-lg border border-border py-12'>
        <h2 className='mb-6 text-center text-2xl font-semibold'>
          {t('page.features.themeSwitching')}
        </h2>
        <div className='grid grid-cols-1 gap-8 px-6 md:grid-cols-2'>
          <div className='bg-card/50 dark:bg-card/30 rounded-lg border border-border p-6'>
            <h3 className='mb-4 text-lg font-semibold'>
              {t('page.features.dropdownThemeToggle')}
            </h3>
            <p className='mb-4 text-muted-foreground'>
              {t('page.features.dropdownDescription')}
            </p>
            <ThemeToggle />
          </div>

          <div className='bg-card/50 dark:bg-card/30 rounded-lg border border-border p-6'>
            <h3 className='mb-4 text-lg font-semibold'>
              {t('page.features.simpleThemeToggle')}
            </h3>
            <p className='mb-4 text-muted-foreground'>
              {t('page.features.simpleDescription')}
            </p>
            <SimpleThemeToggle />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='bg-card/30 hover:bg-card/50 dark:bg-card/20 dark:hover:bg-card/30 rounded-lg border border-border p-6 text-center transition-colors dark:border-border'>
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30'>
            <svg
              className='h-6 w-6 text-blue-600 dark:text-blue-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <h3 className='mb-2 text-xl font-semibold'>
            {t('page.features.fastModern')}
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>
            {t('page.features.fastDescription')}
          </p>
        </div>

        <div className='bg-card/30 hover:bg-card/50 dark:bg-card/20 dark:hover:bg-card/30 rounded-lg border border-border p-6 text-center transition-colors dark:border-border'>
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30'>
            <svg
              className='h-6 w-6 text-green-600 dark:text-green-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <h3 className='mb-2 text-xl font-semibold'>
            {t('page.features.typeSafe')}
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>
            {t('page.features.typeDescription')}
          </p>
        </div>

        <div className='bg-card/30 hover:bg-card/50 dark:bg-card/20 dark:hover:bg-card/30 rounded-lg border border-border p-6 text-center transition-colors dark:border-border'>
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30'>
            <svg
              className='h-6 w-6 text-purple-600 dark:text-purple-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              />
            </svg>
          </div>
          <h3 className='mb-2 text-xl font-semibold'>
            {t('page.features.cleanArchitecture')}
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>
            {t('page.features.cleanDescription')}
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className='text-center'>
        <h2 className='mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100'>
          {t('page.features.techStack')}
        </h2>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          <div className='flex flex-col items-center transition-transform hover:scale-105'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800'>
              <span className='text-2xl font-bold text-blue-600'>N</span>
            </div>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
              Next.js
            </span>
          </div>
          <div className='flex flex-col items-center transition-transform hover:scale-105'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800'>
              <span className='text-2xl font-bold text-blue-400'>R</span>
            </div>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
              React
            </span>
          </div>
          <div className='flex flex-col items-center transition-transform hover:scale-105'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800'>
              <span className='text-2xl font-bold text-blue-700'>TS</span>
            </div>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
              TypeScript
            </span>
          </div>
          <div className='flex flex-col items-center transition-transform hover:scale-105'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800'>
              <span className='text-2xl font-bold text-teal-500'>TW</span>
            </div>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
              Tailwind
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
