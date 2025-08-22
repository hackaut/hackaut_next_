import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import TeamSection from "./components/our-team-seaction";

export default function Home() {
  
  return (
    <div className="w-full h- full flex flex-col justify-center items-center gap-16">
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturesSection />
      <TeamSection />

      <div className="h-full"></div>
    </div>
  );
}
