import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center h-auto lg:h-[564px] w-full max-w-[1152px] mt-24 px-6 py-10 bg-white/40 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300/60 dark:border-white/20 shadow-md transition-all duration-300">
      
      <div className="max-w-[404px] h-auto flex flex-col justify-between px-2">
        <div className="flex flex-col items-start">
          <span className="font-extrabold text-6xl leading-[1.1] text-black dark:text-white">
            HACKAUT
          </span>
          <span className="text-4xl tracking-tight font-bold text-gray-800 dark:text-gray-100 leading-snug mt-1">
            Official Club of <span className="text-[#0077B6]">MAKAUT</span>
          </span>
        </div>
        <div className="text-muted-foreground text-lg font-medium mt-4 tracking-tight leading-relaxed text-gray-700 dark:text-gray-300">
          Cultivates innovation, fosters skill development, and encourages
          collaboration, creating a vibrant community of tech enthusiasts. Join
          us today.
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <Button
            className="h-[55px] w-[160px] bg-[#0077B6] dark:bg-[#0077B6]/70 hover:bg-[#005f94] dark:hover:bg-[#0077B6]/90 text-xl text-white transition-all"
            variant={"default"}
          >
            Join Us
          </Button>
          <Button
            className="h-[55px] w-[160px] text-xl bg-transparent border-2 border-[#0077B6] dark:border-[#0077B6]/70 text-[#0077B6] dark:text-[#0077B6]/70 hover:bg-[#0077B6]/10 dark:hover:bg-[#0077B6]/20 transition-all"
            variant={"outline"}
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="w-[628px] h-[446px] rounded-[20px] border-4 border-[#0077B6] dark:border-[#0077B6]/70 overflow-hidden shadow-lg">
        <Image
          src="/makaut.jpeg"
          width={628}
          height={446}
          alt="makaut_image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;



// shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]