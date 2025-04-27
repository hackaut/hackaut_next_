import React from "react";
import { TeamCard } from "@/app/components/TeamCard";
import { teamDetails,slideData } from "@/app/components/teamdetails"; 
import Carousel from "@/components/ui/Carousel";
export default function TeamPage() {
    return(
    <>
     <div className="w-full flex flex-col justify-center items-center gap-16  ">
     <div className=" w-full max-w-[1152px] mt-24 px-6 py-5 bg-white/40  dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300/60 dark:border-white/20 shadow-md transition-all duration-300">
     <h1 className="text-6xl font-extrabold text-[#0077B6] mb-4 ">OUR TEAM</h1>
     <p className="font-bold text-xl mb-10">Meet our team, which aims at cultivating, drilling & growing our community to enrich & prosper the overall tech culture, be a member and contribute to be include in our team.</p>
    <section className="text-center"><p className="inline-block text-xxl px-3 py-px font-semibold text-white uppercase rounded-full bg-[#0077B6] mb-8">Faculties</p>
    <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.SaikatBasu.name} role="Principal Advisor (HOD of CSE)" stack="ML, IOT, Cryptography" images={teamDetails.SaikatBasu.image}/>
          <TeamCard name={teamDetails.JoySamadder.name} role="Chairman" stack="IoT, Full Stack Development, Web Analytics, Cybersecurity" images={teamDetails.JoySamadder.image}/>
    </div>
    </section>
    <section className="text-center"><p className="inline-block text-xxl px-3 py-px font-semibold text-white uppercase rounded-full bg-[#0077B6] mb-8">Leaders</p>
    <div className="flex flex-wrap gap-16 justify-center mb-20">
          <TeamCard name={teamDetails. Sougata.name} role="President" stack="Golang,Python,ML" images={teamDetails.Sougata.image}/>
          <TeamCard name={teamDetails.Ishita.name} role="Vice President" stack="AI,Python,Javascript" images={teamDetails.Ishita.image}/>
          <TeamCard name={teamDetails.Achintya.name} role="General Secretary" stack="Java,Kotlin,Flutter" images={teamDetails.Achintya.image}/>
          <TeamCard name={teamDetails.Taha.name} role="Secretary" stack="JavaScript,Design" images={teamDetails.Taha.image}/>
    </div>
    </section>
    <section className="text-center overflow-hidden"><p className="inline-block text-xxl px-3 font-semibold text-white uppercase rounded-full bg-[#0077B6] mb-10 ">Core Members</p>
    <Carousel slides={slideData } />
    </section>
    </div>
    <div className="w-[90px] h-[10px] bg-[#0077B6] dark:bg-[#0077B6]/70 "/>
    </div>
    </>
  )}