import React from "react";
import FeatureBox from "./feature-box";
import { features } from "@/constants/constant";


const FeaturesSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Stripe */}
      <div className="w-[90px] h-[10px] bg-[#0077B6] dark:bg-[#0077B6]/70" />

      {/* Heading */}
      <h2 className="text-5xl font-bold my-20 text-center">Features</h2>

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature) => (
          <FeatureBox
            key={feature.title}
            title={feature.title}
            color={feature.color}
            content={feature.content}
          />
        ))}
      </div>

      {/* Bottom Stripe */}
      <div className="w-[90px] h-[10px] bg-[#0077B6] dark:bg-[#0077B6]/70 mt-12" />
    </div>
  );
};

export default FeaturesSection;
