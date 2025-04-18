import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Navlinks } from "@/utils/constants";

export default function NavigationMenuComponent() {
  return (
    <NavigationMenu className="text-base">
      <NavigationMenuList>
        {Navlinks.map((navItem) => (
          <NavigationMenuItem key={navItem.id}>
            {navItem.type === "dropdown" ? (
              <>
                <NavigationMenuTrigger className="text-[#2F2A33] font-bold">
                  {navItem.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-6 p-4 md:w-[250px] lg:w-[300px]">
                    {/* Increased gap from 5 to 6 */}
                    {navItem.children?.map((child) => (
                      <ListItem key={child.id} title={child.name} href={child.path}>
                        {child.name}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : navItem.type === "href" ? (
              <Link href={navItem.href || "#"} className="px-3" passHref>
                <NavigationMenuLink className="text-[#2F2A33] font-bold">
                  {navItem.name}
                </NavigationMenuLink>
              </Link>
            ) : navItem.type === "section" ? (
              <a href={navItem.path || "#"} className="text-[#2F2A33] font-bold">
                {navItem.name}
              </a>
            ) : null}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground " +
            className
          }
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
