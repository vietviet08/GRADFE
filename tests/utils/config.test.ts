import { config } from '@/lib/config';

describe('Config', () => {
  it('should have correct app name', () => {
    expect(config.app.name).toBe('GradFE');
  });

  it('should have correct default locale', () => {
    expect(config.i18n.defaultLocale).toBe('en');
  });

  it('should have correct supported locales', () => {
    expect(config.i18n.locales).toEqual(['en', 'vi']);
  });

  it('should have API configuration', () => {
    expect(config.api.baseUrl).toBeDefined();
    expect(config.api.timeout).toBeGreaterThan(0);
  });
});
