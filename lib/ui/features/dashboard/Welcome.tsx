import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Plus } from 'lucide-react';
import React from 'react';

export default function Welcome() {
  return (
    <Card className='rounded-lg p-0'>
      <CardContent className='px-8 pt-8 xl:pb-0'>
        <div className='flex items-start justify-between'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-4xl font-semibold flex items-center gap-2'>
                Good Morning,
                <Icon
                  icon='tdesign:wave-bye-filled'
                  className='w-12 text-[#AF7E57]'
                />
              </h1>
              <h2 className='text-4xl font-medium'>Amanuel Desalegn</h2>
            </div>
            <p className='text-2xl text-gray-500 w-[70%]'>
              Here&apos;s What Happening On Your Store Today. See The Statistics
              At Once.
            </p>
            <Button className='bg-primary hover:bg-primary/90 text-white text-base gap-2'>
              <Plus className='h-5 w-5' />
              Add New Products
            </Button>
          </div>
          <div className='w-1/2 flex items-end justify-end'>
            <img
              src='apps.png'
              alt='Store illustration'
              className='w-80 h-w-80 object-contain'
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
