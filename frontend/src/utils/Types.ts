import type { LucideIcon } from "lucide-react";

export interface EnvironmentContextInterface {
	screenSize: ScreenSizeType;
	setScreenSize: React.Dispatch<React.SetStateAction<ScreenSizeType>>;
}

export type ScreenSizeType = "small" | "medium" | "large" | "extra-large";

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

export interface ExperienceTenureInterface {
	label: string;
	range: string;
}

export interface ExperienceProductionLinkInterface {
	label: string;
	url: string;
}

export interface ExperienceTechInterface {
	concepts?: string[];
	stack?: string[];
}

export interface ExperienceInterface {
	id: string;
	title: string;
	company: string;
	date: string;
	summary: string;
	highlights: string[];
	featured: boolean;
	tech?: ExperienceTechInterface;
	note?: string;
	icon?: string;
	description?: string;
	tenure?: ExperienceTenureInterface[];
	productionLinks?: ExperienceProductionLinkInterface[];
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
