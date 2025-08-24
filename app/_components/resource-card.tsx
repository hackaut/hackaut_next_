import { Resource } from "@/constants/type";
import { Calendar, User } from "lucide-react";


export const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between">
    {/* Header */}
    <div>
      <h3 className="text-lg font-bold text-[#FFD700] mb-1">{resource.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        {resource.subtitle}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
        {resource.description}
      </p>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between mt-2">
      <div className="text-[11px] text-gray-500 dark:text-gray-400 flex flex-col">
        <span className="flex items-center gap-1">
          <Calendar size={12} /> {resource.date}
        </span>
        <span className="flex items-center gap-1">
          <User size={12} /> {resource.author}
        </span>
      </div>

      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3795c5] hover:bg-[#287aa5] text-white text-xs px-3 py-1.5 rounded-full shadow transition-colors"
      >
        Visit
      </a>
    </div>
  </div>
);
