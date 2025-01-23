import { Button } from '@/components/ui/button';

import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { Icon } from '@iconify/react/dist/iconify.js';
import Below from './Below';
import { Stats } from './stats';
import { SalesChart } from './sales-chart';
import { TopProducts } from './top-products';

type Store = {
  id: number;
  name: string;
  location: string;
  soldItems: number;
};

type CategoryData = {
  name: string;
  value: number;
  color: string;
};

const categoryData: CategoryData[] = [
  { name: 'Gourmet Foods', value: 45, color: '#86efac' },
  { name: 'Traditional Clothe', value: 20, color: '#fdba74' },
  { name: 'Fast Foods', value: 15, color: '#93c5fd' },
  { name: 'Kids Book', value: 12, color: '#6b7280' },
  { name: 'Fruits', value: 8, color: '#f87171' },
];

// Sample data for stores
const stores: Store[] = Array(5).fill({
  id: 1,
  name: 'Queen Sheba Mart',
  location: 'Washington DC',
  soldItems: 2.8,
});

// Sample data for performing ads
const adsData = [
  { name: 'Christmas Ads', value: 30, color: '#22c55e' },
  { name: 'Elsa Kolo', value: 25, color: '#3b82f6' },
  { name: 'Fruits', value: 20, color: '#ef4444' },
  { name: 'Traditional Clothe', value: 15, color: '#f97316' },
  { name: 'Fast Foods', value: 10, color: '#7dd3fc' },
];

// Custom map colors for states
const mapColors = {
  CA: '#fce7f3',
  TX: '#fda4af',
  FL: '#f43f5e',
  NY: '#fda4af',
  // Add more states as needed
};
export default function Dashboard() {
  return (
    <div className='flex flex-1 overflow-auto w-full'>
      <div className='flex flex-col gap-4 w-full'>
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
                  Here's What Happening On Your Store Today. See The Statistics
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
                  className='w-80 h-80 object-contain'
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='px-5 py-3 rounded-2xl border-border bg-white border'>
          <Stats />
        </div>

        <div className='flex w-full gap-4'>
          <SalesChart />
          <TopProducts />
        </div>
        <Below />
      </div>
    </div>
  );
}
