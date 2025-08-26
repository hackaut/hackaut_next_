import { FocusCards } from "@/components/ui/focus-cards";
import SectionHeading from "./section-heading";

export function GallerySection() {
  const cards = [
    {
      title: "codeXellence 2k24",
      src: "./codeXellence.jpeg",
    },
    {
      title: "Team 2k24-25",
      src: "./hackaut.png",
    },
    {
      title: "Deep Dive Into Dev",
      src: "./event.jpeg",
    },
    {
      title: "Introductory session",
      src: "./intro.jpeg",
    },
    {
      title: "MAKATHON 2k24",
      src: "./makathon.jpeg",
    },
    {
      title: "Prize Distribution",
      src: "./prize.jpeg",
    },
  ];

  return (
    <div className="w-full max-w-[1152px] flex flex-col justify-center items-start bg-[#ebf5fa] dark:bg-[#0b1921]/90 px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-2xl gap-y-4 transition-colors duration-300">
      {/* Heading */}
      <SectionHeading title="Gallery" />

      {/* Subtitle */}
      <p className="text-base sm:text-lg tracking-tight px-2 sm:px-4 text-accent-foreground dark:text-gray-300 md:text-left">
        Here are some moments from the events that were conducted by us. 
        Let’s make some more of them together.
      </p>

      {/* Cards */}
      <div className="w-full mt-6">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
