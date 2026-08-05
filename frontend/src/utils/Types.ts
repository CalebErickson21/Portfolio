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

export interface ProjectTechInterface {
	concepts?: string[];
	stack?: string[];
}

export interface ProjectLinksInterface {
	production?: string;
	github?: string;
	details: string;
}

export type ProjectStatusType = "in-progress";

export interface ProjectInterface {
	id: string;
	title: string;
	/** Screenshot or cover image. Prefer this when available. */
	image?: string;
	/** Lucide icon used when no image is available (e.g. in-progress projects). */
	icon?: LucideIcon;
	description: string;
	date: string;
	links: ProjectLinksInterface;
	tech: ProjectTechInterface;
	infrastructure: string[];
	lessonsLearned: string[];
	featured?: boolean;
	relatedProjectIds?: string[];
	/** When set, surfaces an in-progress badge; Live is replaced with a status chip if production is omitted. */
	status?: ProjectStatusType;
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
	icon: string;
	date: string;
	description: string;
	tech: ExperienceTechInterface;
	highlights: string[];
	featured?: boolean;
	note?: string;
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
