import React, { useState } from 'react';
import { Button, Input } from '@/components/ui';
import { LoginCredentials } from '@/types';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
  loading?: boolean;
}

export function LoginForm({ onSubmit, loading = false }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors: Partial<LoginCredentials> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    await onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof LoginCredentials]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <Input
          label='Email'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder='Enter your email'
          required
        />
      </div>

      <div>
        <Input
          label='Password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder='Enter your password'
          required
        />
      </div>

      <Button
        type='submit'
        className='w-full'
        loading={loading}
        disabled={loading}
      >
        Sign In
      </Button>
    </form>
  );
}
