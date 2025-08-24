import { ResourceCard } from "./resource-card";
import SectionHeading from "./section-heading";

export const resourcesData = [
  {
    title: "Dissecting JavaScript II",
    subtitle: "",
    description:
      "Second part of the Dissecting JavaScript series, exploring advanced concepts in depth.",
    date: "28 Jun, 2024",
    author: "Ritochit Ghosh",
    link: "/dissecting-javascript-ii",
  },
  {
    title: "Dissecting JavaScript I",
    subtitle: "",
    description:
      "First part of the Dissecting JavaScript series, covering core language features and fundamentals.",
    date: "11 May, 2024",
    author: "Ritochit Ghosh",
    link: "/dissecting-javascript-i",
  },
  {
    title: "Demarking Markdown : Simplifying Text Formatting for Developers",
    subtitle: "",
    description:
      "A practical guide to understanding and leveraging Markdown for documentation and content creation.",
    date: "26 Apr, 2024",
    author: "Ritochit Ghosh",
    link: "/demarking-markdown",
  },
  {
    title: "Tech Journey: A Fresh Start (pt. 1)",
    subtitle: "",
    description:
      "Personal reflections on beginning the journey as a developer and lessons learned in the early phase.",
    date: "15 Dec, 2023",
    author: "Ritochit Ghosh",
    link: "/tech-journey-a-fresh-start",
  },
  {
    title: "Introduction to GenAI - All The Theory You Need To Know",
    subtitle: "",
    description:
      "Comprehensive introduction to Generative AI — history, theory, and core concepts explained for developers.",
    date: "14 Aug, 2025",
    author: "Ritochit Ghosh",
    link: "/introduction-to-genai",
  },
  {
    title: "Introduction to TypeScript : Guide to Static Typing in JavaScript",
    subtitle: "",
    description:
      "Step-by-step guide to TypeScript fundamentals, type safety, and how it enhances JavaScript projects.",
    date: "17 Mar, 2025",
    author: "Ritochit Ghosh",
    link: "/introduction-to-typescript",
  },
  {
    title: "Tech Journey: How I spent my First Year ? 🤔",
    subtitle: "",
    description:
      "Sharing personal experiences and key takeaways from the first year in tech.",
    date: "22 Oct, 2024",
    author: "Ritochit Ghosh",
    link: "/tech-journey-how-i-spent-my-first-year",
  },
];


export const ResourcesSection = () => {
  return (
    <section className="w-full max-w-[1152px] px-6 md:px-12 lg:px-20 py-12 mx-auto">
      {/* Title */}
       <SectionHeading title="Resources" />

      <p className="text-gray-700 dark:text-gray-300 mb-10">
        Here are the blogs wriiten and published by our members. Feel free to check it out! Be a member and contribute towards its enrichment.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourcesData.map((res, i) => (
          <ResourceCard key={i} resource={res} />
        ))}
      </div>
    </section>
  );
};
