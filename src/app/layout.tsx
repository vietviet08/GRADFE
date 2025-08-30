import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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

// Root layout with html and body tags
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
