'use client';

import { Sidebar } from './Sidebar';
import { NavBar } from '@/components/ui/Navbar';

interface Props {
  children: React.ReactNode;
}
export default function AdminPanelLayout({ children }: Props) {
  return (
    <div className='flex h-screen bg-background p-4 gap-4'>
      <Sidebar />
      <div className='flex-1 overflow-auto'>
        <div className='flex flex-col gap-4'>
          <NavBar />
          {children}
        </div>
      </div>
    </div>
  );
}
