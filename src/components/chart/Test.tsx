'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip as ChartTooltip,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

// Tipleri tanımla
interface ChartData {
  yil: string;
  [key: string]: number | string;
}

interface ComponentProps {
  data: ChartData[];
}

export const Component: React.FC<ComponentProps> = ({ data }) => {
  const keys = ['toplam', 'inek', 'manda', 'koyun', 'keci'];
  const [activeChart, setActiveChart] = React.useState<string>(keys[0]);

  const total = React.useMemo(() => {
    const totals: { [key: string]: number } = {};
    keys.forEach((key) => {
      totals[key] = data.reduce((acc, curr) => acc + (curr[key] as number), 0);
    });
    return totals;
  }, [data, keys]);

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total milk production for the selected category
          </CardDescription>
        </div>
        <div className='flex overflow-x-scroll'>
          {keys.map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
              onClick={() => setActiveChart(key)}
            >
              <span className='text-xs text-muted-foreground'>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              <span className='text-lg font-bold leading-none sm:text-3xl'>
                {total[key].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='yil'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              contentStyle={{ width: '150px' }}
              labelFormatter={(value) => value}
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Component;
