import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`border-b bg-white ${className}`}>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='text-xl font-bold text-gray-900'>
          GradFE
        </Link>

        <nav className='hidden items-center space-x-6 md:flex'>
          <Link href='/' className='text-gray-600 hover:text-gray-900'>
            Home
          </Link>
          <Link href='/about' className='text-gray-600 hover:text-gray-900'>
            About
          </Link>
          <Link href='/contact' className='text-gray-600 hover:text-gray-900'>
            Contact
          </Link>
        </nav>

        <div className='flex items-center space-x-4'>
          <button className='text-gray-600 hover:text-gray-900'>Login</button>
        </div>
      </div>
    </header>
  );
}
