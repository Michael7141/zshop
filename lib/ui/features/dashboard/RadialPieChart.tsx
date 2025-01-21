'use client';
import React from 'react';

import { RadialBar, RadialBarChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const adsData = [
  { name: 'Christmas Ads', value: 35, color: '#22c55e' },
  { name: 'Elsa Kolo', value: 25, color: '#3b82f6' },
  { name: 'Fruits', value: 12, color: '#ef4444' },
  { name: 'Traditional Clothe', value: 20, color: '#f97316' },
  { name: 'Fast Foods', value: 8, color: '#7dd3fc' },
];

const chartData = [
  { browser: 'chrome', visitors: 275, fill: '#22c55e' },
  { browser: 'safari', visitors: 200, fill: '#3b82f6' },
  { browser: 'firefox', visitors: 187, fill: '#ef4444' },
  { browser: 'edge', visitors: 173, fill: '#f97316' },
  { browser: 'other', visitors: 90, fill: '#7dd3fc' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export default function RadialPieChart() {
  return (
    <Card className='w-full max-w-3xl'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          <span>Performing Ads</span>
          <div className='inline-flex items-center px-3 py-1 border rounded-md text-sm'>
            <span className='mr-2'>Dec 1-7</span>
            <svg
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between'>
          {/* Chart Section */}
          <CardContent className='flex-1 pb-0'>
            <ChartContainer
              config={chartConfig}
              className='mx-auto aspect-square max-h-[300px]'
            >
              <RadialBarChart
                data={chartData}
                innerRadius={30}
                outerRadius={90}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel nameKey='browser' />}
                />
                <RadialBar dataKey='visitors' />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>

          {/* Legend Section */}
          <div className='flex flex-col gap-3 pl-8'>
            {adsData.map((item, index) => (
              <div key={index} className='flex items-center gap-2'>
                <div
                  className='w-3 h-3 rounded-sm'
                  style={{ backgroundColor: item.color }}
                />
                <span className='text-sm text-gray-600'>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
