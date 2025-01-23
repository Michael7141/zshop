'use client';

import { Bell, MessageSquare, Search, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { UserNav } from './UserNav';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between bg-white p-4 border rounded-lg w-full',
        className
      )}
    >
      <div className='relative w-auto md:w-96 pr-2'>
        <Search className='absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500' />
        <Input
          placeholder='Search'
          className='pl-8 bg-gray-50 border-none shadow-[0_0_0_1px_rgb(0,0,0,0.05)]'
        />
      </div>
      <div className='flex items-center gap-2 md:gap-4'>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-gray-100 shadow-[0_0_0_1px_rgb(0,0,0,0.05)]'
        >
          <MessageSquare className='h-5 w-5 text-gray-500' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-gray-100 relative shadow-[0_0_0_1px_rgb(0,0,0,0.05)]'
        >
          <Bell className='h-5 w-5 text-gray-500' />
          <span className='absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-gray-100 shadow-[0_0_0_1px_rgb(0,0,0,0.05)]'
        >
          <Settings className='h-5 w-5 text-gray-500' />
        </Button>
        <div className='flex flex-1 items-center justify-end'>
          <UserNav />
        </div>
      </div>
    </div>
  );
}
