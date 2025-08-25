import { FocusCards } from "@/components/ui/focus-cards";
import SectionHeading from "./section-heading";

export function GallerySection() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return (
    <div className="w-full max-w-[1152px] flex flex-col justify-center items-start bg-[#ebf5fa] dark:bg-[#0b1921]/90 px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-2xl gap-y-4 transition-colors duration-300">
      {/* Heading */}
      <SectionHeading title="Gallery" />

      {/* Subtitle */}
      <p className="text-base sm:text-lg tracking-tight px-2 sm:px-4 text-accent-foreground dark:text-gray-300 text-center md:text-left">
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
