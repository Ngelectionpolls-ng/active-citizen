"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icons } from "./icons";
import { Button } from "../ui/button";
import { MenuIcon, Search, X, User, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import NavigationMenuComponent from "./navs-dropdown";
import { ActionDropdown } from "./nav-action-dropdown";

const ProfileNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 border-b shadow-md sticky top-0 z-50 transition-all ${
        isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-white"
      }`}
    >
      <section className="section-container flex justify-between items-center">
        <Link href={"/"}>
          <Icons.logo className="size-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href={"/feeds"}
            className="text-base font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200"
          >
            Feeds
          </Link>
          <Link
            href={"/impacts"}
            className="text-base font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200"
          >
            Impacts
          </Link>
          <Link
            href={"/stats"}
            className="text-base font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200"
          >
            Stats
          </Link>
        </nav>

        <div className="hidden md:flex gap-6 items-center">
          <div className="hidden lg:inline-block">
            <Search className="text-[#2F2A33]" />
          </div>
          <ActionDropdown />

          <div className="relative">
            <div
              className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              U
            </div>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
                  <User className="w-4 h-4 text-gray-600" />
                  <Link href="/profile" className="text-gray-800">
                    Profile
                  </Link>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
                  <Settings className="w-4 h-4 text-gray-600" />
                  <Link href="/settings" className="text-gray-800">
                    Settings
                  </Link>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
                  <LogOut className="w-4 h-4 text-gray-600" />
                  <button
                    onClick={() => console.log("Log Out")}
                    className="text-gray-800"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden inline-block cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </div>
      </section>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-white shadow-md py-4 px-6 absolute w-full left-0 top-[60px] z-50">
          <NavigationMenuComponent />

          <Link
            href={"/feeds"}
            className="text-lg font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Feeds
          </Link>
          <Link
            href={"/impacts"}
            className="text-lg font-medium text-[#2F2A33] hover:text-brandgreen transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Impacts
          </Link>

          <Button
            className="font-bold w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate or Start Petition
          </Button>

          {/* Profile Section in Mobile */}
          <div className="relative">
            <div
              className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              U
            </div>
            {profileDropdownOpen && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg z-50">
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
                  <User className="w-4 h-4 text-gray-600" />
                  <Link href="/profile" className="text-gray-800">
                    Profile
                  </Link>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
                  <Settings className="w-4 h-4 text-gray-600" />
                  <Link href="/settings" className="text-gray-800">
                    Settings
                  </Link>
                </div>
                <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
                  <LogOut className="w-4 h-4 text-gray-600" />
                  <button
                    onClick={() => console.log("Log Out")}
                    className="text-gray-800"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ProfileNavbar;
