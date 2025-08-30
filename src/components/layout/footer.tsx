'use client';

import React from 'react';
import { useTranslations } from '@/hooks';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const { t } = useTranslations();

  return (
    <footer className={`border-t bg-gray-50 ${className}`}>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div>
            <h3 className='mb-4 text-lg font-semibold text-gray-900'>GradFE</h3>
            <p className='text-sm text-gray-600'>{t('footer.description')}</p>
          </div>

          <div>
            <h4 className='text-md mb-4 font-medium text-gray-900'>
              {t('footer.quickLinks')}
            </h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('page.features.fastModern')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('footer.components')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('footer.documentation')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-md mb-4 font-medium text-gray-900'>
              {t('footer.company')}
            </h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('navigation.blog')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-md mb-4 font-medium text-gray-900'>
              {t('footer.support')}
            </h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('footer.helpCenter')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  {t('footer.community')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t pt-8 text-center text-sm text-gray-600'>
          <p>&copy; 2025 GradFE. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
