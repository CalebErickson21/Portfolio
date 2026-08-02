import type { LucideIcon } from "lucide-react";

export interface EnvironmentContextInterface {
	screenSize: ScreenSizeType;
	setScreenSize: React.Dispatch<React.SetStateAction<ScreenSizeType>>;
}

// Screen size type
export type ScreenSizeType = "small" | "medium" | "large" | "extra-large";

// Global lucide props
export interface LucideProps {
	size?: number | string;
	color?: string;
	strokeWidth?: number;
	absoluteStrokeWidth?: boolean;
	[key: string]: any; // Any other SVG attributes
}

export interface FeaturedProjectLinks {
	production: string;
	github: string;
	details: string;
}

export interface FeaturedProject {
	id: string;
	title: string;
	description: string;
	image: string;
	links: FeaturedProjectLinks;
}

export interface FeaturedExperience {
	id: string;
	title: string;
	company: string;
	date: string;
	highlights: string[];
	note?: string;
	icon?: string;
}

export interface Education {
	degree: string;
	school: string;
	dates: string;
	concentration?: string;
	gpa?: string;
}

export interface Pillar {
	icon: LucideIcon;
	title: string;
	description: string;
}

export interface Hobby {
	icon: LucideIcon;
	title: string;
	description: string;
}

export type SkillCategory = "languages" | "frameworks" | "databases" | "platforms";

export interface Skill {
	id: string;
	label: string;
	category: SkillCategory;
	icon?: string;
}
