import { Profile } from "@/constants/type";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <div className="w-60 rounded-3xl border-4 border-[#3795c5] p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center bg-white dark:bg-gray-900">
      {/* Profile Image */}
      <div className="relative w-[11.5rem]">
        <div className="w-36 h-36 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name Block */}
        <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-900 px-3 py-1 rounded-xl text-[#3795c5] font-bold text-sm leading-tight text-right">
          <div>{firstName.toUpperCase()}</div>
          {lastName && <div>{lastName.toUpperCase()}</div>}
        </div>
      </div>

      {/* Role and Stacks */}
      <div className="flex flex-col justify-end items-end mb-6 w-full text-right pr-1">
        <p className="text-xs text-gray-600 dark:text-gray-400">{profile.role}</p>
        {profile.stacks && (
          <p className="text-xs text-gray-600 dark:text-gray-400">{profile.stacks}</p>
        )}
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-3">
        {profile.links.linkedInLink && (
          <a
            href={profile.links.linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <Linkedin size={16} className="text-gray-600 dark:text-gray-300" />
          </a>
        )}
        {profile.links.XLink && (
          <a
            href={profile.links.XLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <Twitter size={16} className="text-gray-600 dark:text-gray-300" />
          </a>
        )}
        {profile.links.gitHubLink && (
          <a
            href={profile.links.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <Github size={16} className="text-gray-600 dark:text-gray-300" />
          </a>
        )}
        {profile.links.instaLink && (
          <a
            href={profile.links.instaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-pink-900 transition-colors"
          >
            <Instagram size={16} className="text-gray-600 dark:text-gray-300" />
          </a>
        )}
      </div>
    </div>
  );
};
