import { User, LoginCredentials, RegisterData } from '@/types';
import { httpClient } from '@/services';

/**
 * Authentication service
 */
export class AuthService {
  /**
   * Login user
   */
  static async login(
    credentials: LoginCredentials
  ): Promise<{ user: User; token: string }> {
    return httpClient.post('/auth/login', credentials);
  }

  /**
   * Register user
   */
  static async register(
    data: RegisterData
  ): Promise<{ user: User; token: string }> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...registerData } = data;
    return httpClient.post('/auth/register', registerData);
  }

  /**
   * Logout user
   */
  static async logout(): Promise<void> {
    return httpClient.post('/auth/logout');
  }

  /**
   * Get current user
   */
  static async getCurrentUser(): Promise<User> {
    return httpClient.get('/auth/me');
  }

  /**
   * Refresh token
   */
  static async refreshToken(): Promise<{ token: string }> {
    return httpClient.post('/auth/refresh');
  }

  /**
   * Request password reset
   */
  static async requestPasswordReset(email: string): Promise<void> {
    return httpClient.post('/auth/password-reset', { email });
  }

  /**
   * Reset password
   */
  static async resetPassword(
    token: string,
    newPassword: string
  ): Promise<void> {
    return httpClient.post('/auth/password-reset/confirm', {
      token,
      password: newPassword,
    });
  }
}
