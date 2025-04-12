import React from "react";

interface FeatureBoxProps {
  title: string;
  color: string;
  content: string;
}

const FeatureBox = ({ title, color, content }: FeatureBoxProps) => {
  return (
    <div className="relative w-[275px] h-[290px] bg-[#f5f5f5] dark:bg-[#001d30b3] rounded-xl border border-blue-500 dark:border-[#0077B6]/70 pt-16 px-8 shadow-md flex flex-col items-start transition-colors">
      
      <div
        className="absolute -top-8 left-14 transform -translate-x-1/2 w-20 h-20 rounded-full shadow-md"
        style={{ backgroundColor: color }}
      />

      <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
      <p className="text-md text-muted-foreground dark:text-gray-300 mt-2 leading-relaxed">
        {content}
      </p>
      <a
        href="#"
        className="mt-4 text-sm font-semibold text-black dark:text-white underline hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        Learn more
      </a>
    </div>
  );
};

export default FeatureBox;
