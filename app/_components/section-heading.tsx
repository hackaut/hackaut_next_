import { SectionHeadingProps } from "@/constants/type";


const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  const capitalizedTitle = title
    .split("")
    .map((ch) => ch.toUpperCase())
    .join("");
  return (
    <div className="font-bold text-8xl font-stretch-50% text-[#3a97c7]">
      {capitalizedTitle}
    </div>
  );
};

export default SectionHeading;
