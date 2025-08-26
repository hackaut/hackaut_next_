import { coreMembersProfile, facultyProfiles, leadersProfile } from "@/constants/constant";
import FeaturesSection from "./_components/features-section";
import HeroSection from "./_components/hero-section";
import TeamSection from "./_components/our-team-seaction";
import ResourceSectionWrapper from "./_components/resource-section-provider";
import { GallerySection } from "./_components/gallery-section";
import ContactUs from "./_components/contact-us";

export default function Home() {
  
  return (
    <div className="w-full h- full flex flex-col justify-center items-center gap-16">
      <HeroSection />
      <FeaturesSection />
      <TeamSection faculties={facultyProfiles} leaders={leadersProfile} coreMembers={coreMembersProfile}/>
      <ResourceSectionWrapper />
      <GallerySection />
      <ContactUs />

      <div className="h-full"></div>
    </div>
  );
}
