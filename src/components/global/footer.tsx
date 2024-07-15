'use client';

import { cn } from '@/lib/utils';

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'text-center lg:text-left bg-background/80 border-t-2 border-border',
        className
      )}
    >
      <div className='p-4 text-center text-surface text-primary'>
        2024 -{' '}
        <a
          href='https://github.com/emrekayik'
          className='text-destructive hover:text-primary'
        >
          Emre Kayık
        </a>{' '}
        tarafından geliştirilmiştir.
      </div>
    </footer>
  );
}
