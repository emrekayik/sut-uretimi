import { cn } from '@/lib/utils';

import { Clipboard, Milk } from 'lucide-react';
import React from 'react';

import { ToplamSutUretimMiktari } from '../data/sut-uretim';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

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
const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);
const items = [
  {
    title: 'Süt Üretim Miktarları',
    description: '2020-2023 arası süt üretim istatistikleri',
    header: <ToplamSutUretimMiktari />,
    className: 'md:col-span-2',
    icon: <Milk className='h-4 w-4 text-neutral-500' />,
    link: '/veriler/sut-uretim',
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