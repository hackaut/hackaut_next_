"use client";

import React, { useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { navmenu } from "@/constants/constant";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-[1152px] w-full h-[76px] flex justify-between items-center px-6 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-b-xl shadow-md border border-b-gray-200 dark:border-b-white/20 transition-all duration-300">
        {/* Logo */}
        <div
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={"/logo.png"} width={44} height={44} alt="logo" />
          <span className="font-bold text-[#0077B6] dark:text-[#0077B6]/70 text-xl lg:text-2xl">
            HACKAUT
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-4">
          <ul className="flex items-center gap-x-6 text-gray-800 dark:text-gray-200 font-medium">
            {navmenu.map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer group hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
                onClick={() => router.push(item.href)}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="ml-4">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-x-3">
          <ModeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-white/20">
          <ul className="flex flex-col p-4 gap-4 text-gray-800 dark:text-gray-200 font-medium">
            {navmenu.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
                onClick={() => {
                  router.push(item.href);
                  setMenuOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
