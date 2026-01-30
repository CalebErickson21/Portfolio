// Home card props
export type HomeCardProps = {
    title: string;
    description: string;
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    route: string;
}

// Project Card Props
export type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    stack: string;
    production: string;
    github: string;
    time: string;
}

// Experience Card Props
export type ExperienceCardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    role: string;
    stack: string;
    production: string;
    expandedCard: number | null;
    setExpandedCard: React.Dispatch<React.SetStateAction<number | null>>;
}

// Publication Dropdown Props
export type PublicationDropdownProps = {
    id: number;
    title: string;
    authors?: string;
    description?: string;
    venue?: string;
    year?: string;
    link?: string;
    expandedPublication: number | null;
    setExpandedPublication: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface EnvironmentContextInterface {
    screenSize: ScreenSizeType;
    setScreenSize: React.Dispatch<React.SetStateAction<ScreenSizeType>>;
};

// Screen size type
export type ScreenSizeType = 'small' | 'medium' | 'large';