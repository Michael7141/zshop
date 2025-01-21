'use client';
import Layout from '@/components/layouts/protected/NewSideBar';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
}
export default function InternalLayout({ children }: Props) {
  return (
    <SessionProvider>
      <Layout>{children}</Layout>
    </SessionProvider>
  );
}
