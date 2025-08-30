import { notFound } from 'next/navigation';
import { ThemeProvider } from '../theme-provider';
import { Navbar } from '@/components/common';
import { Footer } from '@/components/layout';
import { TranslationProvider } from '@/components/i18n';
import { locales, Locale } from '@/i18n';
import { getServerTranslations } from '@/lib/translations';

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

  // Load translations on server-side to prevent delay
  const translations = await getServerTranslations(locale as Locale);

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <TranslationProvider
        initialLocale={locale as Locale}
        initialTranslations={translations}
      >
        <div className='flex min-h-screen flex-col bg-background text-foreground'>
          <Navbar />
          <main className='container mx-auto flex-1 px-4 py-8'>{children}</main>
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
}

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}
