'use client';

import { Bell, MessageSquare, Search, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between bg-white p-4 border rounded-lg',
        className
      )}
    >
      <div className='relative w-96'>
        <Search className='absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500' />
        <Input
          placeholder='Search'
          className='pl-8 bg-gray-50 border-none shadow-[0_0_0_1px_rgb(0,0,0,0.05)]'
        />
      </div>
      <div className='flex items-center gap-4'>
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
        <Button
          size='icon'
          className='bg-[#AD002D] hover:bg-[#AD002D]/90 text-white rounded-full h-8 w-8 shadow-[0_2px_4px_rgb(173,0,45,0.2)]'
        >
          P
        </Button>
      </div>
    </div>
  );
}
