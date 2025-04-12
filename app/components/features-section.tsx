import React from "react";
import FeatureBox from "./feature-box";

const features = [
  {
    title: "Technical Guidance",
    color: "#453C3C",
    content:
      "Technical guidance on DSA, Web Development, AI/ML, cybersecurity & various topics through regular weekly sessions.",
  },
  {
    title: "Soft Skills Development",
    color: "#A1042B",
    content:
      "Enhance your communication & teamwork ability through working in group projects.",
  },
  {
    title: "Hackathons & Contests",
    color: "#1504AE",
    content:
      "Participate in exciting Hackathons and coding contests and compete among each other.",
  },
  {
    title: "Leaderboard",
    color: "#028B12",
    content:
      "Leaderboard & personalized progress tracker with customized suggestions for self-improvement.",
  },
];

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
