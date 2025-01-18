import React from 'react';

import AdminPanelLayout from './AdminPanel';
import SidebarProvider from '@/providers/sidebar/SidebarProvider';

interface Props {
  children: React.ReactNode;
}
export default function ProtectedLayout({ children }: Props) {
  return (
    // <SidebarProvider>
    <AdminPanelLayout>{children}</AdminPanelLayout>
    // </SidebarProvider>
  );
}
