
export interface SectionHeadingProps {
  title: string;
}

export interface Link{
    linkedInLink: string;
    XLink: string;
    gitHubLink: string;
    instaLink: string;
}

export interface Profile {
    image: string;
    name: string;
    role: string;
    stacks: string;
    links: Link
}

export interface MemberProfile {
    id: number;
    name: string;
    designation: string;
    image: string;
}

export interface TeamSectionProps {
  faculties: Profile[];
  leaders: Profile[];
  coreMembers: MemberProfile[];
}

export interface Resource {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  author: string;
  link: string;
}