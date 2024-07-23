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
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface ChartData {
  [key: string]: number | string;
}

interface LineChartProps {
  data: ChartData[];
  xAxisKey: string;
  lineKeys: string[];
  title?: string;
  description?: string;
  content?: string;
}

const SimpleLineChart: React.FC<LineChartProps> = ({
  data,
  xAxisKey,
  lineKeys,
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
          <LineChart
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
            {lineKeys.map((key, index) => (
              <Line
                key={index}
                type='monotone'
                dataKey={key}
                stroke={`hsl(var(--chart-${index + 1}))`}
                fill={`hsl(var(--chart-${index + 1}))`}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='leading-none text-muted-foreground'>{content}</div>
      </CardFooter>
    </Card>
  );
};
export default SimpleLineChart;
