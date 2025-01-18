import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { ScrollArea } from '@/components/ui/scroll-area';
import RadialPieChart from './RadialPieChart';
import CustomPieChart from './PieChart';

// Types
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

const Below = () => {
  // Sample data for the pie chart
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

  const regionData = {
    US: 75,
    CA: 60,
    MX: 50,
    // Add other regions and values here...
  };

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Best Performing Categories */}
        <CustomPieChart />

        {/* User Location Map */}
        <Card>
          <CardHeader>
            <CardTitle className='flex justify-between items-center'>
              User Location
              <div className='flex gap-4 text-sm'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-rose-500' />
                  <span>High User</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-rose-200' />
                  <span>Low User</span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='w-full h-[300px]'>
              {/* <USAMap customize={mapColors} /> */}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Top 5 Stores */}
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

        {/* Performing Ads */}
        <RadialPieChart />
      </div>
    </div>
  );
};

export default Below;
