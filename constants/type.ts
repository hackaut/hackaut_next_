
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

export interface ProfileRowProps {
    heading: string;
    profiles: Profile[]
}