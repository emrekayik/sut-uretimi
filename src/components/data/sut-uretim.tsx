'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const sutUretimData = [
  {
    yil: '2020',
    toplam: 23503790,
    inek: 21749342,
    manda: 63767,
    koyun: 1101065,
    keci: 589617,
  },
  {
    yil: '2021',
    toplam: 23200306,
    inek: 21370116,
    manda: 63643,
    koyun: 1143762,
    keci: 622785,
  },
  {
    yil: '2022',
    toplam: 21563492,
    inek: 19912135,
    manda: 43589,
    koyun: 1067342,
    keci: 540426,
  },
  {
    yil: '2023',
    toplam: 21481567,
    inek: 19961908,
    manda: 43025,
    koyun: 933576,
    keci: 543058,
  },
];

const SutUretimToplam = {
  toplam: {
    label: 'Toplam',
    color: '#2563eb',
  },
} satisfies ChartConfig;

export function ToplamSutUretimMiktari() {
  return (
    <ChartContainer config={SutUretimToplam} className='min-h-[200px] w-full'>
      <BarChart
        accessibilityLayer
        data={sutUretimData}
        title='Süt Üretim Miktarları'
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='yil'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey='toplam' fill='var(--color-toplam)' radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export function KarsilastirmaliSutUretimMiktari() {
  return (
    <ChartContainer config={SutUretimToplam} className='min-h-[200px] w-full'>
      <BarChart
        accessibilityLayer
        data={sutUretimData}
        title='Süt Üretim Miktarları'
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='yil' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='inek' stackId='a' fill='#8884d8' />
        <Bar dataKey='manda' stackId='a' fill='#82ca9d' />
        <Bar dataKey='koyun' stackId='a' fill='#ffc658' />
        <Bar dataKey='keci' stackId='a' fill='#ffc658' />
      </BarChart>
    </ChartContainer>
  );
}
