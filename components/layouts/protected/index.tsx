import React from 'react';

import AdminPanelLayout from './AdminPanel';

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
