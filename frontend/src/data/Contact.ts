import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import resumeFile from "@/assets/downloadables/CalebEricksonResume.pdf";

export type ContactMethodIconType = LucideIcon | IconType;

export interface ContactMethodInterface {
	id: string;
	label: string;
	value: string;
	href?: string;
	download?: string;
	external?: boolean;
	accentValue?: boolean;
	icon: ContactMethodIconType;
}

export const contactIntro = {
	heading: "Let's Work Together",
	subtext: "Have a project in mind or want to connect? I'd love to hear from you.",
} as const;

export const contactEmail = "caleberickson01@gmail.com";

export const contactMethods: ContactMethodInterface[] = [
	{
		id: "email",
		label: "Email",
		value: contactEmail,
		href: `mailto:${contactEmail}`,
		icon: Mail,
	},
	{
		id: "linkedin",
		label: "LinkedIn",
		value: "linkedin.com/in/-caleb-erickson",
		href: "https://www.linkedin.com/in/-caleb-erickson",
		external: true,
		icon: FaLinkedin,
	},
	{
		id: "github",
		label: "GitHub",
		value: "github.com/caleberickson21",
		href: "https://github.com/caleberickson21",
		external: true,
		icon: FaGithub,
	},
	{
		id: "resume",
		label: "Resume",
		value: "Download PDF",
		href: resumeFile,
		download: "Caleb_Erickson_Resume.pdf",
		accentValue: true,
		icon: FileText,
	},
];
