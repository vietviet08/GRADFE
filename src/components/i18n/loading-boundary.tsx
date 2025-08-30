'use client';

import React from 'react';
import { useTranslationContext } from './translation-provider';

interface LoadingBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * LoadingBoundary component that shows a fallback while translations are loading
 * This prevents the flash of translation keys before the actual translations load
 */
export function LoadingBoundary({ children, fallback }: LoadingBoundaryProps) {
  const { isLoading, translations } = useTranslationContext();

  // Show fallback while loading or if translations are not available
  if (isLoading || !translations) {
    return (
      fallback || (
        <div className='flex min-h-[200px] items-center justify-center'>
          <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-primary'></div>
        </div>
      )
    );
  }

  return <>{children}</>;
}
