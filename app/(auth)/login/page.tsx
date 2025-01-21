'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { TitleLogo } from '@/utils/svg';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className='w-full gap-20 flex flex-col items-center justify-center'>
      <div className='flex justify-center'>
        <TitleLogo className='h-12' />
      </div>
      <div className='flex flex-col gap-7'>
        <h1 className='text-2xl font-bold text-primary tracking-tight text-start'>
          Welcome back!
        </h1>
        <p className='text-sm text-muted-foreground text-start'>
          Please enter your credentials to access your account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <Input type='email' placeholder='Email' {...register('email')} />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
          <Input
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
          <div className='flex items-center justify-end'>
            <Link
              href='/forgot-password'
              className='text-sm text-primary hover:underline'
            >
              Forgot my password?
            </Link>
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <Button type='submit' className='w-full bg-primary'>
            Log In
          </Button>
        </form>
        <div className='text-center space-x-2'>
          <span className='text-sm text-muted-foreground'>
            Don&apos;t have an account?
          </span>
          <Link href='/signup' className='text-sm text-primary hover:underline'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
