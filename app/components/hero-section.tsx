import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center h-[564px] w-[1152px] mt-24 px-6 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/30 dark:border-white/20 transition-all duration-300">
      
      <div className="w-[404px] h-[305px] flex flex-col justify-between px-2">
        <div className="flex flex-col items-start">
          <span className="font-extrabold text-6xl leading-[1.1] text-black dark:text-white">
            HACKAUT
          </span>
          <span className="text-4xl tracking-tight font-bold text-gray-800 dark:text-gray-100 leading-snug mt-1">
            Official Club of <span className="text-[#0077B6]">MAKAUT</span>
          </span>
        </div>
        <div className="text-muted-foreground text-lg font-medium mt-4 tracking-tight leading-relaxed dark:text-gray-300">
          Cultivates innovation, fosters skill development, and encourages
          collaboration, creating a vibrant community of tech enthusiasts. Join
          us today.
        </div>
        <div className="flex h-[55px] w-[353px] justify-between items-center mt-4">
          <Button
            className="h-full w-[160px] bg-[#0077B6] dark:bg-[#0077B6]/70 hover:bg-[#005f94] dark:hover:bg-[#0077B6]/90 text-xl text-white transition-all"
            variant={"default"}
          >
            Join Us
          </Button>
          <Button
            className="h-full w-[160px] text-xl bg-transparent border-2 border-[#0077B6] dark:border-[#0077B6]/70 text-[#0077B6] dark:text-[#0077B6]/70 hover:bg-[#0077B6]/10 dark:hover:bg-[#0077B6]/20 transition-all"
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
