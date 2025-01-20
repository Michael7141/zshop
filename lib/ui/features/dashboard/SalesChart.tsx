'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { name: 'Mon', sales: 4000, returns: 400 },
  { name: 'Tue', sales: 3000, returns: 300 },
  { name: 'Wed', sales: 2000, returns: 200 },
  { name: 'Thu', sales: 4000, returns: 400 },
  { name: 'Fri', sales: 3000, returns: 300 },
  { name: 'Sat', sales: 2000, returns: 200 },
  { name: 'Sun', sales: 1000, returns: 100 },
];

const chartConfig = {
  desktop: {
    label: 'sales',
    color: '#AD002D',
  },
  mobile: {
    label: 'returns',
    color: '#FFA5A5',
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <Card className='rounded-lg w-full'>
      <CardHeader>
        <CardTitle className='text-lg'>Sales and Returns Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey='sales'
              stackId='a'
              fill='var(--color-desktop)'
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey='returns'
              stackId='a'
              fill='var(--color-mobile)'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Sales went up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing sales for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
