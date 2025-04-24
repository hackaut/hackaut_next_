import React from "react";
import { TeamCard } from "@/app/components/TeamCard";
import { teamDetails } from "@/app/components/teamdetails"; 
import CarouselDemo from "@/app/components/CarouselDemo";
export default function TeamPage() {
    return(
    <>
     <div className="w-full h- full flex flex-col justify-center items-center gap-16">
     <div className=" w-full max-w-[1152px] mt-24 px-6 py-10 bg-white/40  dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300/60 dark:border-white/20 shadow-md transition-all duration-300">
     <div className="px-2">
     <h1 className="text-6xl font-extrabold text-sky-500 mb-4">OUR TEAM</h1>
     <p className="text-black-700 mb-10">Meet our team, which aims at cultivating, drilling & growing our community to enrich & prosper the overall tech culture, be a member and contribute to be include in our team.</p>
    <section className="text-center"><p className="inline-block text-xxl px-3 py-px font-semibold text-white uppercase rounded-full bg-sky-500 mb-8">Faculties</p>
    <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.SaikatBasu.name} role="Principal Advisor (HOD of CSE)" stack="ML, IOT, Cryptography" images={teamDetails.SaikatBasu.image}/>
          <TeamCard name={teamDetails.JoySamadder.name} role="Chairman" stack="IoT, Full Stack Development, Web Analytics, Cybersecurity" images={teamDetails.JoySamadder.image}/>
    </div>
    </section>
    <section className="text-center"><p className="inline-block text-xxl px-3 py-px font-semibold text-white uppercase rounded-full bg-sky-500 mb-8">Leaders</p>
    <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails. Sougata.name} role="President" stack="Golang,Python,ML" images={teamDetails.Sougata.image}/>
          <TeamCard name={teamDetails.Ishita.name} role="Vice President" stack="AI,Python,Javascript" images={teamDetails.Ishita.image}/>
          <TeamCard name={teamDetails.Achintya.name} role="General Secretary" stack="Java,Kotlin,Flutter" images={teamDetails.Achintya.image}/>
          <TeamCard name={teamDetails.Taha.name} role="Secretary" stack="JavaScript,Design" images={teamDetails.Taha.image}/>
    </div>
    </section>
    <section className="text-center"><p className="inline-block text-xxl px-3 py-px font-semibold text-white uppercase rounded-full bg-sky-500 mb-8">Core Members</p>
    <div className="flex flex-wrap gap-16 justify-center mb-10">
      <CarouselDemo images={teamDetails.Taha.image} />
    </div>
    </section>
    </div>
    </div>
    </div>
    </>
  )}