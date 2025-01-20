import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

type Store = {
  id: number;
  name: string;
  location: string;
  soldItems: number;
};

// Sample data for stores
const stores: Store[] = Array(5).fill({
  id: 1,
  name: 'Queen Sheba Mart',
  location: 'Washington DC',
  soldItems: 2.8,
});

export default function Top5Stores() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          Top 5 Stores
          <button className='text-sm text-rose-500'>View All</button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className='h-[300px]'>
          {stores.map((store, index) => (
            <div
              key={index}
              className='flex items-center justify-between p-4 border-b last:border-b-0'
            >
              <div className='flex items-center gap-4'>
                <Icon
                  icon='material-symbols:store'
                  className='w-8 h-8 text-gray-500'
                />
                <div>
                  <p className='font-medium'>{store.name}</p>
                  <p className='text-sm text-gray-500'>{store.location}</p>
                </div>
              </div>
              <div>
                <p className='font-bold'>{store.soldItems}k</p>
                <p className='text-sm text-gray-500'>Sold Items</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
