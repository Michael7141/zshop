import { Stats } from '@/lib/ui/features/dashboard/Stats';
import { SalesChart } from '@/lib/ui/features/dashboard/SalesChart';
import { TopProducts } from '@/lib/ui/features/dashboard/TopProducts';
import Welcome from '../../../lib/ui/features/dashboard/Welcome';
import CustomPieChart from '../../../lib/ui/features/dashboard/PieChart';
import RadialPieChart from '../../../lib/ui/features/dashboard/RadialPieChart';
import Top5Stores from '../../../lib/ui/features/dashboard/Top5Stores';
import UserLocationMap from '../../../lib/ui/features/dashboard/UserLocationMap';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                  className='w-80 h-w-80 object-contain'
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='px-5 py-3 rounded-2xl border-border border'>
          <Stats />
        </div>

        <div className='flex w-full gap-4'>
          <SalesChart />
          <TopProducts />
        </div>
        <div className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Best Performing Categories */}
            <CustomPieChart />

            {/* User Location Map */}
            <UserLocationMap />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Top 5 Stores */}
            <Top5Stores />
            {/* Performing Ads */}
            <RadialPieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
