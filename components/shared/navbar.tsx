"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Icons } from './icons'
import { Button, buttonVariants } from '../ui/button'
import { MenuIcon, Search, X } from 'lucide-react'
import Link from 'next/link'
import NavigationMenuComponent from './navs-dropdown'
import { ActionDropdown } from './nav-action-dropdown'

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Add scroll listener to toggle blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 border-b shadow-md sticky top-0 z-50 transition-all ${
        isScrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <section className='section-container flex justify-between items-center'>
        <Link href={'/'}>
          <Icons.logo className='size-10' />
        </Link>
        
        <div className='hidden lg:inline-block'>
          <NavigationMenuComponent />
        </div>
        
        <div className='hidden md:flex gap-6 items-center'>
          <div className='hidden lg:inline-block'>
            <Search className="text-[#2F2A33]" />
          </div>
          <ActionDropdown />
          <Link href={'/login'} className={buttonVariants({ variant: 'ghost' })}>Log in</Link>
        {/* Mobile Menu Icon */}
        <div className='md:hidden inline-block cursor-pointer' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </div>
        </div>
        
      </section>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div ref={menuRef} className='md:hidden flex flex-col gap-4 bg-white shadow-md py-4 px-6 absolute w-full left-0 top-[60px] z-50'>
          <Button className='font-bold w-full' onClick={() => setMobileMenuOpen(false)}>
            Donate or Start Petition
          </Button>
          <Link href={'/login'} className={buttonVariants({ variant: 'ghost' })} onClick={() => setMobileMenuOpen(false)}>Log in</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;