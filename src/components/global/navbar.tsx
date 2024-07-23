'use client';

import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { ModeToggle } from '../mode-toggle';

export default function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className='relative w-full flex items-center justify-center'>
      <div
        className={cn(
          'fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 space-x-6',
          className
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className='relative rounded-full boder border-border bg-background shadow-xl flex justify-center p-6'
              onClick={() => {
                router.push('/');
              }}
            >
              SÜİ
            </TooltipTrigger>
            <TooltipContent>
              <p>Süt Üretimi İstatistikleri</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item='Veriler'>
            <div className='flex flex-col space-y-4 text-sm'>
              <HoveredLink href='/veriler/sut-uretim'>
                Süt Üretim Miktarları
              </HoveredLink>
              <HoveredLink href='/veriler/canli-hayvan'>
                Canlı Hayvan Sayıları
              </HoveredLink>
              <HoveredLink href='/veriler/et-uretim'>
                Et Üretim Miktarları
              </HoveredLink>
              <HoveredLink href='/veriler/hayvansal-urun'>
                Hayvansal Ürün Miktarları
              </HoveredLink>
              <HoveredLink href='/veriler/kesilen-hayvan'>
                Kesilen Hayvan Sayıları
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item='Hakkında'>
            <div className='flex flex-col space-y-4 text-sm'>
              <HoveredLink href='/hakkinda'>Proje Hakkında</HoveredLink>
              <HoveredLink href='/hakkinda/veri'>Veri Hakkında</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <ModeToggle />
      </div>
    </div>
  );
}
