import AuthLayout from '@/components/layouts/auth';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function ExternalLayout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}
