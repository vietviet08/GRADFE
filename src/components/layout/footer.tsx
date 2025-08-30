import React from 'react';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`border-t bg-gray-50 ${className}`}>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div>
            <h3 className='mb-4 text-lg font-semibold text-gray-900'>GradFE</h3>
            <p className='text-sm text-gray-600'>
              Modern Next.js application with Clean Architecture, TypeScript,
              and Tailwind CSS.
            </p>
          </div>

          <div>
            <h4 className='text-md mb-4 font-medium text-gray-900'>Product</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-md mb-4 font-medium text-gray-900'>Company</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-md mb-4 font-medium text-gray-900'>Support</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Contact
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t pt-8 text-center text-sm text-gray-600'>
          <p>&copy; 2025 GradFE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
