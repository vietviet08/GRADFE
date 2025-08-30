import { notFound } from 'next/navigation';
import { Locale, locales } from '@/i18n';

interface CatchAllPageProps {
  params: Promise<{ locale: string; catch: string[] }>;
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { locale } = await params;

  // Validate locale and trigger not-found for this locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // For any catch-all route within a valid locale, trigger locale-specific not-found
  notFound();
}
