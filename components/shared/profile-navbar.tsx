"use client"
import React, { useState } from 'react'
import { Icons } from './icons'
import { Button, buttonVariants } from '../ui/button'
import { MenuIcon, Search, X } from 'lucide-react'
import Link from 'next/link'
import NavigationMenuComponent from './navs-dropdown'

const ProfileNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='py-4 border-b shadow-md'>
      <section className='section-container flex justify-between items-center'>
        <Link href={'/'}>
          <Icons.logo className='size-12' />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 items-center'>
          <Link href={'/feeds'} className='text-lg font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200'>
            Feeds
          </Link>
          <Link href={'/campaigns'} className='text-lg font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200'>
            Campaigns
          </Link>
        </nav>
        
        <div className='hidden md:flex gap-6 items-center'>
          <div className='hidden lg:inline-block'>
            <Search className="text-[#2F2A33]" />
          </div>
          <Button className='font-bold'>
            Donate or Start Petition
          </Button>
          <Link href={'/profile'} className={buttonVariants({ variant: 'ghost' })}>Profile</Link>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className='md:hidden inline-block cursor-pointer' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </div>
      </section>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className='md:hidden flex flex-col gap-4 bg-white shadow-md py-4 px-6 absolute w-full left-0 top-[60px] z-50'>
          <Link href={'/feeds'} className='text-lg font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200' onClick={() => setMobileMenuOpen(false)}>
            Feeds
          </Link>
          <Link href={'/campaigns'} className='text-lg font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200' onClick={() => setMobileMenuOpen(false)}>
            Campaigns
          </Link>
          <Button className='font-bold w-full' onClick={() => setMobileMenuOpen(false)}>
            Donate or Start Petition
          </Button>
          <Link href={'/profile'} className={buttonVariants({ variant: 'ghost' })} onClick={() => setMobileMenuOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  )
}

export default ProfileNavbar;
