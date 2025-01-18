import { TitleLogo } from '@/utils/svg';
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className='min-h-screen flex flex-col bg-[#F8F8F8]'>
      {/* Header */}
      <header className='flex justify-between items-center p-4 bg-white'>
        <div>
          <TitleLogo className='h-12' />
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Icon icon='lucide:help-circle' className='h-6 w-6 cursor-pointer' />
          <span className='text-sm text-gray-500'>My cart</span>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1 container mx-auto px-4 py-8 max-w-6xl '>
        <div className='bg-white rounded-3xl shadow-sm overflow-hidden'>
          <div className='flex justify-between'>
            {/* Left side - Image */}
            <div className='w-1/2'>
              <img
                src='sales-person.jpg'
                alt='Zemen Shop Staff'
                className='w-full h-full object-cover rounded-r-3xl'
              />
            </div>

            {/* Right side - Login Form */}
            <div className='w-1/2 p-8 flex items-start justify-center'>
              <div className='flex flex-col justify-center items-center max-w-md'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='py-6 text-center'>
        <p className='text-sm text-gray-500'>
          Copyright © 2024 Zemen Mart | Eaglelion System technology. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
