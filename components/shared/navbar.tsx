"use client";
import React, { useState, useEffect, useRef } from "react";
import { Icons } from "./icons";
import { Button, buttonVariants } from "../ui/button";
import { MenuIcon, Search, X } from "lucide-react";
import Link from "next/link";
import NavigationMenuComponent from "./navs-dropdown";
import { ActionDropdown } from "./nav-action-dropdown";
import clsx from "clsx";
import { CurrencyDropdown } from "../dropdowns/currency-dropdown";
import { LanguageDropdown } from "../dropdowns/language-dropdown";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "py-4 border-b shadow-md sticky top-0 z-50 transition-all",
        isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-white"
      )}
    >
      <section className="section-container flex justify-between items-center">
        <Link href={"/"}>
          <Icons.logo className="size-10" />
        </Link>

        <div className="hidden lg:inline-block">
          <NavigationMenuComponent />
        </div>

        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex items-center gap-2">
            <LanguageDropdown />
            <CurrencyDropdown />
            <Search className="text-[#2F2A33]" />
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <ActionDropdown />
            <Link
              href={"/login"}
              className={buttonVariants({ variant: "ghost" })}
            >
              Log in
            </Link>
          </div>
          <div className="md:hidden flex">
            <MenuIcon
              className="cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/40 transition-opacity duration-300",
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div
          ref={menuRef}
          className={clsx(
            "fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-lg transition-transform duration-300 p-6",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-between items-center mb-6">
            <Icons.logo className="size-8" />
            <X
              className="cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <LanguageDropdown />
              <CurrencyDropdown />
            </div>
            <NavigationMenuComponent />
            <div className="flex flex-col gap-4 mt-6">
              <ActionDropdown />
              <Link
                href={"/login"}
                className={buttonVariants({ variant: "outline" })}
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
