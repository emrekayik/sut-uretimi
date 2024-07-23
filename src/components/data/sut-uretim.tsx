'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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
        <Bar dataKey='toplam' fill='hsl(var(--chart-1))' radius={4} />
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
        <Bar dataKey='inek' stackId='a' fill='hsl(var(--chart-1))' />
        <Bar dataKey='manda' stackId='a' fill='hsl(var(--chart-2))' />
        <Bar dataKey='koyun' stackId='a' fill='hsl(var(--chart-3))' />
        <Bar dataKey='keci' stackId='a' fill='hsl(var(--chart-4))' />
      </BarChart>
    </ChartContainer>
  );
}



export function Tablo() {
  return (
    <Table className='table-auto'>
      <TableCaption>Süt Üretim Miktarları Tablosu</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Yıl</TableHead>
          <TableHead>Toplam</TableHead>
          <TableHead>İnek</TableHead>
          <TableHead>Manda</TableHead>
          <TableHead>Koyun</TableHead>
          <TableHead>Keçi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sutUretimData.map((data) => (
          <TableRow key={data.yil}>
            <TableCell className='font-medium'>{data.yil}</TableCell>
            <TableCell>{data.toplam}</TableCell>
            <TableCell>{data.inek}</TableCell>
            <TableCell>{data.manda}</TableCell>
            <TableCell>{data.koyun}</TableCell>
            <TableCell>{data.keci}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
