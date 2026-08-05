import {
	Boxes,
	BrainCircuit,
	ChartNoAxesCombined,
	CodeXml,
	Dumbbell,
	Guitar,
	Trophy,
} from "lucide-react";

import headshot from "@/assets/Headshot.jpg";
import dcPodium from "@/assets/DcPodium.jpg";
import graduation from "@/assets/Graduation.jpeg";
import labUndergrads from "@/assets/LabUndergrads.jpg";
import type { EducationInterface, HobbyInterface, PillarInterface } from "@/utils/Types";

export const aboutIntro = [
	"I'm a software engineer who enjoys building thoughtful products, from polished interfaces to reliable backend systems. I care about clarity, craft, and shipping work that holds up in the real world.",
	"Outside of code, I'm usually training, playing intramural sports, practicing guitar, or building side projects that satisfy my curiosity.",
] as const;

export const pillars: PillarInterface[] = [
	{
		icon: BrainCircuit,
		title: "AI Researcher",
		description:
			"I build RAG pipelines, knowledge graphs, and applied AI systems that turn research into practical solutions.",
	},
	{
		icon: CodeXml,
		title: "Full-Stack Builder",
		description:
			"I develop reliable, user-focused applications across frontend, backend, cloud, and AI technologies.",
	},
	{
		icon: ChartNoAxesCombined,
		title: "BI Strategist",
		description:
			"With a CS & MBA dual degree, I combine technical execution with business strategy to build solutions designed for real-world impact.",
	},
];

export const education: EducationInterface[] = [
	{
		degree: "B.S. in Computer Science",
		school: "The University of Alabama",
		dates: "2023 - 2026",
		gpa: "4.0 / 4.0",
	},
	{
		degree: "M.S. in Business Administration",
		school: "The University of Alabama",
		dates: "2023 - 2027",
		concentration: "Cybersecurity",
		gpa: "4.0 / 4.0",
	},
];

export const courses: string[] = [
	"Capstone Computing",
	"Reinforcement Learning",
	"Foundations of Machine Learning",
	"Advanced Data Analytics",
	"Algorithm Design and Analysis",
	"Operating Systems",
	"Data Structures and Algorithms",
	"Advanced Statistical Design",
	"Linear Algebra",
	"Global Business",
	"Managerial Economics",
	"Concepts of Financial and Managerial Accounting",
	"Leadership and Ethics",
];

export const hobbies: HobbyInterface[] = [
	{
		icon: Dumbbell,
		title: "Fitness & Endurance",
		description: "Lifting, running, and training for endurance events like triathlons.",
	},
	{
		icon: Trophy,
		title: "Intramural Sports",
		description: "Competing in football, basketball, and softball with friends.",
	},
	{
		icon: Guitar,
		title: "Playing Guitar",
		description: "Learning songs, improving my technique, and playing in my free time.",
	},
	{
		icon: Boxes,
		title: "Side Projects",
		description: "Building tools, applications, and experiments beyond school and work.",
	},
];

export const aboutGallery = [
	{
		src: headshot,
		alt: "Caleb Erickson",
		className: "translate-y-3 -rotate-1",
		delay: 0.2,
	},
	{
		src: graduation,
		alt: "Graduation at the University of Alabama",
		className: "-translate-y-1 rotate-2",
		delay: 0.4,
	},
	{
		src: labUndergrads,
		alt: "Lab undergrads presenting research poster",
		className: "translate-y-1 -rotate-2",
		delay: 0.55,
	},
	{
		src: dcPodium,
		alt: "At the USPTO podium in Washington, D.C. at the OKN AI Year 3 Kickoff",
		className: "-translate-y-4 rotate-1",
		delay: 0.7,
	},
] as const;

export const aboutHeadshot = {
	src: headshot,
	alt: "Caleb Erickson",
} as const;
