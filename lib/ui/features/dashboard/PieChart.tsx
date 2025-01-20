'use client';
import React from 'react';

import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
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
// gourmet kids clothes foods fruits
const chartData = [
  { browser: 'gourmet', visitors: 275, fill: 'var(--color-gourmet)' },
  { browser: 'kids', visitors: 200, fill: 'var(--color-kids)' },
  { browser: 'clothes', visitors: 187, fill: 'var(--color-clothes)' },
  { browser: 'foods', visitors: 173, fill: 'var(--color-foods)' },
  { browser: 'fruits', visitors: 90, fill: 'var(--color-fruits)' },
];
// #3E8533 #FB7E37 #212528 #8AC7FF #FF0000
const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  gourmet: {
    label: 'gourmet',
    color: '#3E8533',
  },
  kids: {
    label: 'kids',
    color: '#FB7E37',
  },
  clothes: {
    label: 'clothes',
    color: '#212528',
  },
  foods: {
    label: 'foods',
    color: '#8AC7FF',
  },
  fruits: {
    label: 'fruits',
    color: '#FF0000',
  },
} satisfies ChartConfig;

export default function CustomPieChart() {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-start pb-0'>
        <CardTitle>Best Performing Categories</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[330px] px-0'
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey='visitors' hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='visitors'
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill='hsla(var(--foreground))'
                  >
                    {payload.visitors}
                  </text>
                );
              }}
              nameKey='browser'
            />
            <ChartLegend
              content={<ChartLegendContent nameKey='browser' />}
              className='grid grid-cols-2'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
