import React from 'react';
import { Card } from '@/components/ui/card';

import { Icon } from '@iconify/react/dist/iconify.js';

const stats = [
  {
    name: 'Total Sales',
    value: '$153.2k',
    icon: 'hugeicons:wallet-02',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    name: 'Total Sold Items',
    value: '3.1K',
    icon: 'flowbite:cart-outline',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    name: 'Total Products',
    value: '510',
    icon: 'hugeicons:shopping-basket-03',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    name: 'Total Customer',
    value: '1.2M',
    icon: 'hugeicons:user-group',
    iconBg: 'bg-primary',
    iconColor: 'text-pink-500',
  },
  {
    name: 'Total Stores',
    value: '48',
    icon: 'hugeicons:store-01',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
];

export default function Statses() {
  return (
    <div className='flex flex-wrap justify-between items-center w-full'>
      <div className='flex flex-wrap justify-between gap-4 w-full'>
        {stats.map((stat, index) => (
          <Card
            key={index}
            className='flex justify-center items-center p-5 border-[#000000] border rounded-md flex-1 w-full'
          >
            <div className='flex justify-between text-sm w-full flex-1 p-6'>
              <div className='text-primary flex items-center justify-center p-4 rounded-full border-primary border bg-green-50'>
                <Icon icon={`${stat.icon}`} className='h-6 w-6' />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium text-gray-500'>{stat.name}</p>
                <p className='text-2xl font-semibold'>{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
