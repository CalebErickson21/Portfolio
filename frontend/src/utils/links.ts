import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const navigation = [
	{ label: "Home", dest: "/", end: true },
	{ label: "About", dest: "/about" },
	{ label: "Experience", dest: "/experience" },
	{ label: "Projects", dest: "/projects" },
	{ label: "Contact", dest: "/contact" },
];

export const socialLinks = [
	{
		label: "GitHub",
		href: "https://github.com/caleberickson21",
		icon: FaGithub,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/-caleb-erickson",
		icon: FaLinkedin,
	},
	{
		label: "Email",
		href: "mailto:caleberickson01@gmail.com",
		icon: Mail,
	},
] as const;
