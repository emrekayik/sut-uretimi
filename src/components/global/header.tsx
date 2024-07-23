'use client';

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { canliHayvanData, sutUretimData } from '@/datas/data';

import { Milk, PawPrint } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

export function Header() {
  return (
    <BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem]'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: 'Süt Üretim Miktarları',
    description: '2020-2023 arası süt üretim istatistikleri',
    header: <ToplamSutUretimMiktari />,
    className: 'md:col-span-2',
    icon: <Milk className='h-4 w-4 text-neutral-500' />,
    link: '/veriler/sut-uretim',
  },
  {
    title: 'Canlı Hayvan Sayıları',
    description: '2001-2023 arası canlı hayvan sayıları',
    header: <ToplamHayvanSayisi />,
    className: 'md:col-span-1',
    icon: <PawPrint className='h-4 w-4 text-neutral-500' />,
    link: '/veriler/canli-hayvan',
  },
  /*
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <Clipboard className='h-4 w-4 text-neutral-500' />,
  },
  */
];

function ToplamSutUretimMiktari() {
  return (
    <ChartContainer config={{}} className='min-h-[200px] w-full'>
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

function ToplamHayvanSayisi() {
  return (
    <ChartContainer config={{}} className='min-h-[200px] w-full'>
      <BarChart
        accessibilityLayer
        data={canliHayvanData}
        title='Toplam Hayvan Sayıları'
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='Yıl'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey='Toplam' fill='hsl(var(--chart-1))' radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
