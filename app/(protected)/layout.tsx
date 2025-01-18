import ProtectedLayout from '@/components/layouts/protected';
import AdminPanelLayout from '@/components/layouts/protected/AdminPanel';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function InternalLayout({ children }: Props) {
  // return <ProtectedLayout>{children}</ProtectedLayout>;
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
