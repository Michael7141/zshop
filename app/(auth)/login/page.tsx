'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TitleLogo } from '@/utils/svg';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    router.push('/dashboard');
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password*</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex items-center justify-end'>
              <Link
                href='/forgot-password'
                className='text-sm text-primary hover:underline'
              >
                Forgot my password?
              </Link>
            </div>
            <Button
              type='submit'
              className='w-full bg-primary'
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </Form>
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
