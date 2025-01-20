import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { NavBar } from '@/components/ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className='w-full p-4 space-y-4'>
        <NavBar />
        {children}
      </main>
    </SidebarProvider>
  );
}
