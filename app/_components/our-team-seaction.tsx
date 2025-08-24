import React from "react";
import SectionHeading from "./section-heading";
import { TeamSectionProps } from "@/constants/type";
import { ProfileCard } from "./profile-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="text-center">
    <span className="inline-block bg-[#469dcb] dark:bg-[#35799f]/90 text-white px-6 py-3 rounded-full text-base md:text-lg font-medium">
      {label}
    </span>
  </div>
);

const TeamSection: React.FC<TeamSectionProps> = ({
  faculties,
  leaders,
  coreMembers,
}) => {
  return (
    <div className="w-full max-w-[1152px] flex flex-col justify-center items-start bg-[#ebf5fa] dark:bg-[#0b1921]/90 px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-2xl gap-y-4 transition-colors duration-300">
      <SectionHeading title="Our Team" />

      <p className="text-base sm:text-lg tracking-tight px-2 sm:px-4 text-accent-foreground dark:text-gray-300">
        Meet our team, which aims at cultivating, drilling & growing our
        community to enrich & prosper the overall tech culture. Be a member and
        contribute to be included in our team.
      </p>

      <div className="flex flex-col items-center mx-auto gap-y-6 md:gap-y-8">
        {/* Faculties */}
        <SectionLabel label="Faculties" />
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {faculties.map((profile, i) => (
            <ProfileCard key={i} profile={profile} />
          ))}
        </div>

        {/* Leaders */}
        <SectionLabel label="Leaders" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {leaders.map((profile, i) => (
            <ProfileCard key={i} profile={profile} />
          ))}
        </div>

        {/* Core Members */}
        <SectionLabel label="Core Members" />
        <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full px-2">
          <AnimatedTooltip items={coreMembers} />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
