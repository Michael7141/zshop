import { Stats } from '@/lib/ui/features/dashboard/stats';
import { SalesChart } from '@/lib/ui/features/dashboard/sales-chart';
import { TopProducts } from '@/lib/ui/features/dashboard/top-products';
import Below from './Below';
import Welcome from './Welcome';

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
        <Below />
      </div>
    </div>
  );
}
