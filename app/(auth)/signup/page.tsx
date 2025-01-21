'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { TitleLogo } from '@/utils/svg';
import Link from 'next/link';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupForm = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred during signup');
      }
    } catch (error) {
      setError('An error occurred during signup');
    }
  };

  return (
    <div className='w-full gap-20 flex flex-col items-center justify-center'>
      <div className='flex justify-center'>
        <TitleLogo className='h-12' />
      </div>
      <div className='flex flex-col gap-7'>
        <h1 className='text-2xl font-bold text-primary tracking-tight text-start'>
          Welcome
        </h1>
        <p className='text-sm text-muted-foreground text-start'>
          Please enter your credentials to create your account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <Input type='text' placeholder='Name' {...register('name')} />
            {errors.name && (
              <p className='text-red-500'>{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input type='email' placeholder='Email' {...register('email')} />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              type='password'
              placeholder='Password'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <Button type='submit' className='w-full'>
            Sign Up
          </Button>
        </form>
        <div className='text-center space-x-2'>
          <span className='text-sm text-muted-foreground'>
            Already have an account?
          </span>
          <Link href='/login' className='text-sm text-primary hover:underline'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
