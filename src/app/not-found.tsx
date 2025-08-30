'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center'>
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
            Page Not Found
          </h2>
          <p className='text-muted-foreground'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The
            page might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link href='/'>
            <Button>Go Home</Button>
          </Link>
          <Button variant='outline' onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>

        {/* Additional Help */}
        <div className='text-sm text-muted-foreground'>
          <p>
            If you believe this is a mistake, please{' '}
            <Link
              href='/contact'
              className='text-primary underline-offset-4 hover:underline'
            >
              contact support
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
