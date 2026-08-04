import type { LucideIcon } from "lucide-react";

export interface EnvironmentContextInterface {
	screenSize: ScreenSizeType;
	setScreenSize: React.Dispatch<React.SetStateAction<ScreenSizeType>>;
}

// Screen size type
export type ScreenSizeType = "small" | "medium" | "large" | "extra-large";

// Global lucide props
export interface LucidePropsInterface {
	size?: number | string;
	color?: string;
	strokeWidth?: number;
	absoluteStrokeWidth?: boolean;
	[key: string]: any; // Any other SVG attributes
}

export interface FeaturedProjectLinksInterface {
	production: string;
	github: string;
	details: string;
}

export interface FeaturedProjectInterface {
	id: string;
	title: string;
	description: string;
	image: string;
	links: FeaturedProjectLinksInterface;
}

export interface FeaturedExperienceInterface {
	id: string;
	title: string;
	company: string;
	date: string;
	highlights: string[];
	note?: string;
	icon?: string;
}

export interface EducationInterface {
	degree: string;
	school: string;
	dates: string;
	concentration?: string;
	gpa?: string;
}

export interface PillarInterface {
	icon: LucideIcon;
	title: string;
	description: string;
}

export interface HobbyInterface {
	icon: LucideIcon;
	title: string;
	description: string;
}

export type SkillCategoryType = "languages" | "frameworks" | "databases" | "platforms";

export interface SkillInterface {
	id: string;
	label: string;
	category: SkillCategoryType;
	icon?: string;
}
