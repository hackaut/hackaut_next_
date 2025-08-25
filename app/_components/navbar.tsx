"use client";

import React from "react";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { navmenu } from "@/constants/constant";
import { useRouter } from "next/navigation";


function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto w-[1152px] h-[76px] flex justify-between items-center px-6 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-b-xl shadow-md border border-b-gray-200 dark:border-b-white/20 transition-all duration-300">
        <div className="flex items-center gap-x-2">
          <Image src={"/logo.svg"} width={44} height={44} alt="logo" />
          <span className="font-bold text-[#0077B6] dark:text-[#0077B6]/70 text-xl lg:text-2xl cursor-pointer" onClick={() => router.push("/")}>
            HACKAUT
          </span>
        </div>

        <div className="flex items-center gap-x-4">
          <ul className="flex items-center gap-x-6 text-gray-800 dark:text-gray-200 font-medium">
            {navmenu.map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer group hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
                onClick={() => router.push(item.href)}
                suppressHydrationWarning
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="ml-4">
            {/* ModeToggle will handle its own focus style */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
