import ProtectedLayout from '@/components/layouts/protected';
import AdminPanelLayout from '@/components/layouts/protected/AdminPanel';
import Layout from '@/components/layouts/protected/NewSideBar';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function InternalLayout({ children }: Props) {
  // return <ProtectedLayout>{children}</ProtectedLayout>;  return <AdminPanelLayout>{children}</AdminPanelLayout>;

  return <Layout>{children}</Layout>;
}
