import { Stats } from '@/lib/ui/features/dashboard/Stats';
import { SalesChart } from '@/lib/ui/features/dashboard/SalesChart';
import { TopProducts } from '@/lib/ui/features/dashboard/TopProducts';
import Welcome from '../../../lib/ui/features/dashboard/Welcome';
import CustomPieChart from '../../../lib/ui/features/dashboard/PieChart';
import RadialPieChart from '../../../lib/ui/features/dashboard/RadialPieChart';
import Top5Stores from '../../../lib/ui/features/dashboard/Top5Stores';
import UserLocationMap from '../../../lib/ui/features/dashboard/UserLocationMap';

export default function Dashboard() {
  return (
    <div className='flex flex-1 overflow-auto w-full'>
      <div className='flex flex-col gap-4 w-full'>
        <Welcome />

        <div className='px-5 py-3 rounded-2xl border-border bg-white border'>
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
