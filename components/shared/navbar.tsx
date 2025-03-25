"use client"
import React from 'react'
import { Icons } from './icons'
import { Button } from '../ui/button'
import { MenuIcon, Search } from 'lucide-react'
import Link from 'next/link'
import NavigationMenuComponent from './navs-dropdown'

const Navbar = () => {
  return (
    <nav className='py-4 border-b  shadow-md'>
        <section className='section-container flex justify-between items-center'>
<Link href={'/'} >
    <Icons.logo className='size-12' />
</Link>
<div className='hidden md:inline-block'>
<NavigationMenuComponent />
</div>
<div className='hidden md:flex gap-6 items-center '>
<div className='hidden lg:inline-block'>
    <Search className="text-[#2F2A33]" />
</div>
    <Button className='font-bold'>
        Donate or Start Petition
    </Button>
</div>
<div className='md:hidden inline-block cursor-pointer'>
    <MenuIcon />
</div>
        </section>
    </nav>
  )
}

export default Navbar