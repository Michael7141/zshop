'use client';
import {
  Building2,
  FileBarChart,
  LayoutDashboard,
  ListOrdered,
  Megaphone,
  MessageSquare,
  Package,
  Settings,
  Truck,
  Users,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { TitleLogo } from '@/utils/svg';
import { cn } from '@/lib/utils';

// Menu items.
const items = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Products', url: '/products', icon: Package },
  { title: 'Category', url: '/category', icon: ListOrdered },
  { title: 'Orders', url: '/orders', icon: ListOrdered },
  { title: 'Users', url: '/users', icon: Users },
  { title: 'Promotions', url: '/promotions', icon: Megaphone },
  { title: 'Business', url: '/business', icon: Building2 },
  {
    title: 'Transaction Report',
    url: '/transaction-report',
    icon: FileBarChart,
  },
  {
    title: 'Feedback & Reviews',
    url: '/feedback-and-reviews',
    icon: MessageSquare,
  },
  { title: 'Delivery Companies', url: '/delivery-companies', icon: Truck },
  { title: 'Configurations', url: '/configurations', icon: Settings },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar
      collapsible='icon'
      {...props}
      className='flex h-full w-64 flex-col border-r border-l border-t border-b bg-white rounded-lg'
    >
      <SidebarContent>
        <SidebarHeader>
          <div className='p-4 md:flex hidden'>
            <TitleLogo className='h-12' />
          </div>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <div key={item.title} className='relative'>
                    {isActive && (
                      <div className='absolute -ml-4 left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-lg' />
                    )}
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className={cn(
                            'group flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                            isActive
                              ? 'bg-primary text-white'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          )}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        <SidebarTrigger className='-ml-1' />
      </SidebarFooter>
    </Sidebar>
  );
}
