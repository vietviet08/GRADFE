import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a valid locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect if there is no locale in the pathname
  const locale = getLocaleFromRequest(request) || defaultLocale;

  // For default locale, don't add prefix to URL
  if (locale === defaultLocale) {
    return NextResponse.next();
  }

  // Redirect to the localized path
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

function getLocaleFromRequest(request: NextRequest): string | undefined {
  // Get locale from cookie
  const localeCookie = request.cookies.get('locale')?.value;
  if (localeCookie && locales.includes(localeCookie as any)) {
    return localeCookie;
  }

  // Get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();

    if (locales.includes(preferredLocale as any)) {
      return preferredLocale;
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
