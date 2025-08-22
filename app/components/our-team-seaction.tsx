import React from 'react'
import SectionHeading from './section-heading'

const TeamSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1152px] flex flex-col justify-center items-start bg-[#ebf5fa]  px-6 py-4 rounded-2xl gap-y-4">
        <SectionHeading title='Our Team' />
        <p className="text-lg tracking-tight px-4 text-accent-foreground">
            Meet our team, which aims at cultivating, drilling & growing our community to enrich & prosper the overall tech culture, be a member and contribute to be included in our team
        </p>
        
    </div>

  )
}

export default TeamSection