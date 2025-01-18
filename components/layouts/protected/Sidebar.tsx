import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  ListOrdered,
  Users,
  Megaphone,
  Building2,
  FileBarChart,
  MessageSquare,
  Truck,
  Settings,
} from 'lucide-react';
import { TitleLogo } from '@/utils/svg';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Category', href: '/category', icon: ListOrdered },
  { name: 'Orders', href: '/orders', icon: ListOrdered },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Promotions', href: '/promotions', icon: Megaphone },
  { name: 'Business', href: '/business', icon: Building2 },
  {
    name: 'Transaction Report',
    href: '/transaction-report',
    icon: FileBarChart,
  },
  {
    name: 'Feedback & Reviews',
    href: '/feedback-and-reviews',
    icon: MessageSquare,
  },
  { name: 'Delivery Companies', href: '/delivery-companies', icon: Truck },
  { name: 'Configurations', href: '/configurations', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='flex h-full w-64 flex-col border-r border-l border-t border-b bg-white rounded-lg'>
      <div className='p-4'>
        <TitleLogo className='h-12' />
      </div>
      <nav className='flex-1 space-y-1 px-2 py-4'>
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.name} className='relative'>
              {isActive && (
                <div className='absolute -ml-4 left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#AD002D] rounded-r-lg' />
              )}
              <Link
                href={item.href}
                className={cn(
                  'group flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                  isActive
                    ? 'bg-[#AD002D] text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon
                  className={cn(
                    'mr-3 h-5 w-5',
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-gray-500'
                  )}
                  aria-hidden='true'
                />
                {item.name}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
