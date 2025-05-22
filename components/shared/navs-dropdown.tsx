'use client'

import * as React from 'react'
import Link from 'next/link'
import { Navlinks } from '@/utils/constants'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { ChevronDown } from 'lucide-react'

export default function NavigationMenuComponent() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  return (
    <>
      {/* Desktop Nav */}
      <NavigationMenu className="text-base hidden lg:flex flex-col gap-4">
        <NavigationMenuList className="flex gap-6">
          {Navlinks.map((navItem) => (
            <NavigationMenuItem key={navItem.id}>
              {navItem.type === 'dropdown' ? (
                <>
                  <NavigationMenuTrigger className="text-[#2F2A33] font-bold text-base">
                    {navItem.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-6 p-4 md:w-[250px] lg:w-[300px]">
                      {navItem.children?.map((child) => (
                        <ListItem
                          key={child.id}
                          title={child.name}
                          href={child.path}
                        >
                          {child.name}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : navItem.type === 'href' ? (
                <Link href={navItem.href || '#'} className="px-3" passHref>
                  <NavigationMenuLink className="text-[#2F2A33] font-bold">
                    {navItem.name}
                  </NavigationMenuLink>
                </Link>
              ) : navItem.type === 'section' ? (
                <a
                  href={navItem.path || '#'}
                  className="text-[#2F2A33] font-bold"
                >
                  {navItem.name}
                </a>
              ) : null}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Nav */}
      <div className="flex flex-col gap-4 lg:hidden">
        {Navlinks.map((navItem) => (
          <div key={navItem.id} className="border-b pb-2">
            {navItem.type === 'dropdown' ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === navItem.id ? null : navItem.id
                    )
                  }
                  className="w-full flex justify-between items-center text-[#2F2A33] font-bold text-base"
                >
                  {navItem.name}
                  <ChevronDown
                    className={`transition-transform ${
                      openDropdown === navItem.id ? 'rotate-180' : ''
                    }`}
                    size={18}
                  />
                </button>
                {openDropdown === navItem.id && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2">
                    {navItem.children?.map((child) => (
                      <Link
                        href={child.path}
                        key={child.id}
                        className="text-sm text-[#2F2A33] hover:underline"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </ul>
                )}
              </>
            ) : navItem.type === 'href' ? (
              <Link
                href={navItem.href || '#'}
                className="text-[#2F2A33] font-bold"
              >
                {navItem.name}
              </Link>
            ) : navItem.type === 'section' ? (
              <a href={navItem.path || '#'} className="text-[#2F2A33] font-bold">
                {navItem.name}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer ' +
            className
          }
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'