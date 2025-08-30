import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { ThemeProvider } from '../theme-provider';
import { Navbar } from '@/components/common';
import { Footer } from '@/components/layout';
import { locales, Locale } from '@/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GradFE - Modern Next.js Application',
  description:
    'Modern Next.js application with Clean Architecture, TypeScript, and Tailwind CSS',
  keywords: [
    'nextjs',
    'react',
    'typescript',
    'tailwindcss',
    'clean-architecture',
  ],
  authors: [{ name: 'Your Name', url: 'https://your-website.com' }],
  openGraph: {
    title: 'GradFE - Modern Next.js Application',
    description:
      'Modern Next.js application with Clean Architecture, TypeScript, and Tailwind CSS',
    url: 'https://your-domain.com',
    siteName: 'GradFE',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GradFE',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradFE - Modern Next.js Application',
    description:
      'Modern Next.js application with Clean Architecture, TypeScript, and Tailwind CSS',
    images: ['https://your-domain.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex min-h-screen flex-col bg-background text-foreground'>
            <Navbar />
            <main className='container mx-auto flex-1 px-4 py-8'>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}
