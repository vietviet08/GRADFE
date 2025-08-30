import { ApiResponse } from '@/types';

/**
 * HTTP Client class for API requests
 */
class HttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Set authorization token
   */
  setAuthToken(token: string) {
    this.defaultHeaders.Authorization = `Bearer ${token}`;
  }

  /**
   * Remove authorization token
   */
  removeAuthToken() {
    delete this.defaultHeaders.Authorization;
  }

  /**
   * Make HTTP request
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError({
          message: errorData.message || 'Request failed',
          statusCode: response.status,
          details: errorData,
        });
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      throw new ApiError({
        message: 'Network error',
        statusCode: 0,
        details: { originalError: error },
      });
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const searchParams = params ? new URLSearchParams(params) : '';
    const url = searchParams ? `${endpoint}?${searchParams}` : endpoint;

    return this.request<T>(url, {
      method: 'GET',
    });
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }
}

/**
 * API Error class
 */
export class ApiError extends Error {
  public statusCode: number;
  public details?: Record<string, unknown>;

  constructor({
    message,
    statusCode,
    details,
  }: {
    message: string;
    statusCode: number;
    details?: Record<string, unknown>;
  }) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

// Create and export HTTP client instance
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
export const httpClient = new HttpClient(baseURL);

/**
 * Response wrapper type guard
 */
export function isApiResponse<T>(data: unknown): data is ApiResponse<T> {
  return (
    typeof data === 'object' &&
    data !== null &&
    'status' in data &&
    'timestamp' in data
  );
}
