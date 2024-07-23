'use client';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { Pie, PieChart } from 'recharts';

interface PieChartData {
  [key: string]: number | string;
}

interface SimplePieChartProps {
  data: PieChartData[];
}

const SimplePieChart: React.FC<SimplePieChartProps> = ({ data }) => {
  const dataKeys = data?.length > 0 ? Object.keys(data[0]) : [];
  return (
    <ChartContainer config={{}} className='chart'>
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        {dataKeys.map((key, index) => (
          <Pie
            key={key}
            data={data}
            dataKey={key}
            nameKey={key} // Use the data key as the name
            cx='50%'
            cy='50%'
            innerRadius={70}
            outerRadius={90}
            fill={`hsl(var(--chart-${index + 1}))`}
            label
          />
        ))}
      </PieChart>
    </ChartContainer>
  );
};
export default SimplePieChart;
