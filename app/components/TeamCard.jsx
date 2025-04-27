import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin ,FaInstagram  } from "react-icons/fa";
export const TeamCard = (props) => {
  return (
   <>
    <div className="max-w-sm rounded-[1.2rem] overflow-hidden shadow-lg border-[#0077B6] border-4 resize-none w-55 dark:bg-gray-800">
    <Image className="inline-block rounded-[2rem] p-3 " src={props.images} alt="person" height={150}  effect="blur"/>
    <div className="px-6">
    <div className="font-bold text-xl">{props.name}</div>
    <p className="text-gray-700 text-base dark:text-gray-100">
     {props.role}<br/>
     {props.stack}
    </p>
  </div> 
  <div className="px-6 pt-4 pb-2 flex justify-center gap-4">
  <div className=" bg-white-200 text-sm font-semibold text-gray-700 mr-2 mb-2 "><a href={props.github} className="text-gray-600 dark:text-white transition-colors duration-300 hover:text-black"><FaGithub size={20}></FaGithub></a></div>
    <div className=" bg-white-200 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={props.linkdin} className="text-gray-600 dark:text-white transition-colors duration-300 hover:text-black"><FaLinkedin size={20}></FaLinkedin></a></div>
    <div className=" bg-white-200 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={props.twiter} className="text-gray-600 dark:text-white transition-colors duration-300 hover:text-black"><FaXTwitter  size={20}></FaXTwitter ></a></div>
    <div className=" bg-white-200 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={props.instragram} className="text-gray-600 dark:text-white transition-colors duration-300 hover:text-black"><FaInstagram  size={20}></FaInstagram ></a></div>
  </div>
</div>
</>
  );
};