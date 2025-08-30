import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme';

interface NavbarProps {
  className?: string;
}

/**
 * Navigation bar component with theme toggle
 */
export function Navbar({ className = '' }: NavbarProps) {
  return (
    <nav
      className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}
    >
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        {/* Logo */}
        <Link href='/' className='text-xl font-bold text-foreground'>
          GradFE
        </Link>

        {/* Navigation Links */}
        <div className='hidden items-center space-x-6 md:flex'>
          <Link
            href='/'
            className='text-foreground/80 transition-colors hover:text-foreground'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='text-foreground/80 transition-colors hover:text-foreground'
          >
            About
          </Link>
          <Link
            href='/docs'
            className='text-foreground/80 transition-colors hover:text-foreground'
          >
            Docs
          </Link>
          <Link
            href='/contact'
            className='text-foreground/80 transition-colors hover:text-foreground'
          >
            Contact
          </Link>
        </div>

        {/* Right side with theme toggle */}
        <div className='flex items-center space-x-4'>
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

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
