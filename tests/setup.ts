import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
  useParams() {
    return { locale: 'en' };
  },
}));

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme() {
    return {
      theme: 'light',
      setTheme: jest.fn(),
      themes: ['light', 'dark', 'system'],
      systemTheme: 'light',
    };
  },
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock translation files
jest.mock('@/i18n/locales/en.json', () => ({
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
  },
  navigation: {
    home: 'Home',
    about: 'About',
  },
}));

jest.mock('@/i18n/locales/vi.json', () => ({
  common: {
    loading: 'Đang tải...',
    error: 'Đã xảy ra lỗi',
  },
  navigation: {
    home: 'Trang chủ',
    about: 'Giới thiệu',
  },
}));

// Global test setup
beforeAll(() => {
  // Setup global test environment
});

afterEach(() => {
  // Cleanup after each test
  jest.clearAllMocks();
});
