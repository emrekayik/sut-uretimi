'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from 'recharts';

interface ChartData {
  [key: string]: number | string;
}

interface BarChartProps {
  data: ChartData[];
  xAxisKey: string;
  barKeys: string[];
  title?: string;
  description?: string;
  content?: string;
}

const SimpleBarChart: React.FC<BarChartProps> = ({
  data,
  xAxisKey,
  barKeys,
  title,
  description,
  content,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className='chart'>
          <BarChart
            accessibilityLayer
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            {barKeys.map((key, index) => (
              <Bar
                key={index}
                type='monotone'
                dataKey={key}
                stroke={`hsl(var(--chart-${index + 1}))`}
                fill={`hsl(var(--chart-${index + 1}))`}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='leading-none text-muted-foreground'>{content}</div>
      </CardFooter>
    </Card>
  );
};
export default SimpleBarChart;
