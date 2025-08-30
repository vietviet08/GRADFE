'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useMounted } from '@/hooks/use-mounted';

/**
 * Theme Toggle Component
 * Provides a dropdown menu to switch between light, dark, and system themes
 */
export function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();

  if (!mounted) {
    return (
      <Button
        variant='outline'
        size='sm'
        className='w-9 px-0'
        aria-label='Toggle theme'
        disabled
      >
        <Sun className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Loading theme...</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='w-9 px-0'
          aria-label='Toggle theme'
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'bg-accent' : ''}
        >
          <Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'bg-accent' : ''}
        >
          <Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={theme === 'system' ? 'bg-accent' : ''}
        >
          <Monitor className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/**
 * Simple Theme Toggle Button (Alternative)
 * A single button that cycles through themes
 */
export function SimpleThemeToggle() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className='h-[1.2rem] w-[1.2rem]' />;
      case 'dark':
        return <Moon className='h-[1.2rem] w-[1.2rem]' />;
      default:
        return <Monitor className='h-[1.2rem] w-[1.2rem]' />;
    }
  };

  const getAriaLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark theme';
      case 'dark':
        return 'Switch to system theme';
      default:
        return 'Switch to light theme';
    }
  };

  if (!mounted) {
    return (
      <Button
        variant='outline'
        size='sm'
        className='w-9 px-0'
        aria-label='Loading theme...'
        disabled
      >
        <Sun className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Loading theme...</span>
      </Button>
    );
  }

  return (
    <Button
      variant='outline'
      size='sm'
      className='w-9 px-0'
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
    >
      {getIcon()}
      <span className='sr-only'>{getAriaLabel()}</span>
    </Button>
  );
}
