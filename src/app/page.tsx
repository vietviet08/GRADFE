import { ThemeToggle, SimpleThemeToggle } from '@/components/theme';
import { Button } from '@/components/ui';

export default function HomePage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      {/* Hero Section */}
      <section className='mb-16 text-center'>
        <h1 className='mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold text-transparent md:text-6xl'>
          Welcome to GradFE
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-xl text-muted-foreground'>
          A modern Next.js application built with Clean Architecture,
          TypeScript, Tailwind CSS, and best practices for scalable web
          development.
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Button size='lg'>Get Started</Button>
          <Button variant='outline' size='lg'>
            View on GitHub
          </Button>
        </div>
      </section>

      {/* Theme Testing Section */}
      <section className='mb-16 rounded-lg border border-border bg-card py-12'>
        <h2 className='mb-6 text-center text-2xl font-semibold'>
          Theme Switching
        </h2>
        <div className='grid grid-cols-1 gap-8 px-6 md:grid-cols-2'>
          <div className='rounded-lg border border-border bg-card p-6'>
            <h3 className='mb-4 text-lg font-semibold'>
              Dropdown Theme Toggle
            </h3>
            <p className='mb-4 text-muted-foreground'>
              Choose between light, dark, and system theme modes.
            </p>
            <ThemeToggle />
          </div>

          <div className='rounded-lg border border-border bg-card p-6'>
            <h3 className='mb-4 text-lg font-semibold'>Simple Theme Toggle</h3>
            <p className='mb-4 text-muted-foreground'>
              Quick toggle between light and dark modes.
            </p>
            <SimpleThemeToggle />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='rounded-lg border p-6 text-center'>
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100'>
            <svg
              className='h-6 w-6 text-blue-600'
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
          <h3 className='mb-2 text-xl font-semibold'>Fast & Modern</h3>
          <p className='text-gray-600'>
            Built with Next.js 15, React 19, and optimized for performance with
            Turbopack.
          </p>
        </div>

        <div className='rounded-lg border p-6 text-center'>
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100'>
            <svg
              className='h-6 w-6 text-green-600'
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
          <h3 className='mb-2 text-xl font-semibold'>Type Safe</h3>
          <p className='text-gray-600'>
            Full TypeScript support with strict type checking and excellent
            developer experience.
          </p>
        </div>

        <div className='rounded-lg border p-6 text-center'>
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100'>
            <svg
              className='h-6 w-6 text-purple-600'
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
          <h3 className='mb-2 text-xl font-semibold'>Clean Architecture</h3>
          <p className='text-gray-600'>
            Well-organized project structure following Clean Architecture
            principles.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className='text-center'>
        <h2 className='mb-8 text-3xl font-bold text-gray-900'>
          Built with Modern Technologies
        </h2>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          <div className='flex flex-col items-center'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100'>
              <span className='text-2xl font-bold text-blue-600'>N</span>
            </div>
            <span className='text-sm font-medium'>Next.js</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100'>
              <span className='text-2xl font-bold text-blue-400'>R</span>
            </div>
            <span className='text-sm font-medium'>React</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100'>
              <span className='text-2xl font-bold text-blue-700'>TS</span>
            </div>
            <span className='text-sm font-medium'>TypeScript</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100'>
              <span className='text-2xl font-bold text-teal-500'>TW</span>
            </div>
            <span className='text-sm font-medium'>Tailwind</span>
          </div>
        </div>
      </section>
    </div>
  );
}
