// components/Navbar.tsx
'use client';
import { Icons } from '@/components/shared/icons';
import { UserCircle2, Bell, Home } from 'lucide-react';
import Link from 'next/link';

export default function TimelineNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
        <Icons.logo className='size-[32px]' />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/"><Home className="w-5 h-5" /></Link>
          <Link href="/notifications"><Bell className="w-5 h-5" /></Link>
          <Link href="/me"><UserCircle2 className="w-6 h-6" /></Link>
        </div>
      </div>
    </nav>
  );
}
