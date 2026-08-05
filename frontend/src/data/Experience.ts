import cgiLogo from "@/assets/CgiLogo.jpg";
import alabamaLogo from "@/assets/AlabamaLogo.png";
import quantHubLogo from "@/assets/QuantHubLogo.jpg";
import type { ExperienceInterface, ExperienceTechInterface } from "@/utils/Types";

export const experiences: ExperienceInterface[] = [
	{
		id: "cgi-internship",
		title: "Software Engineer Intern",
		company: "CGI",
		date: "June 2026 - July 2026",
		featured: true,
		icon: cgiLogo,
		description:
			"Collaborate with a 10-person intern team delivering a new version of CGI's internal promotion-tracking application. Worked across 3 2-week Agile sprints including requirements gathering, implementation, QA, and client feedback, while also leading one sprint as Scrum Master.",
		tech: {
			concepts: ["Agile", "Scrum", "Client Consulting"],
			stack: ["SQL", "C#", ".NET", "Typescript", "React", "Tailwind"],
		},
		highlights: [
			"Collaborated with a 10-person intern team to develop a new version of an internal promotion-tracking application used by approximately 2,000 CGI partners across the Southern United States.",
			"Served as Scrum Master during Sprint 2 of three two-week Agile sprints, increasing backlog completion from approximately 56% to 90% despite an approximately 80% larger backlog by clarifying acceptance criteria, eliminating duplicate work, and establishing development standards.",
			"Implemented role-based access control for 3 user types following the principle of least privilege, retrieving role data from an internal company API and enforcing permissions through protected frontend routes and backend authorization middleware.",
		],
	},
	{
		id: "ai-research-internship",
		title: "AI Research Intern",
		company: "Alabama AI Institute",
		date: "April 2025 - Present",
		featured: true,
		note: "Paused June - July 2026 for CGI internship",
		icon: alabamaLogo,
		description:
			"Contribute across three applied AI research projects in the SAIL (Sensor Automated Intelligent Learning) Lab. Built data pipelines, RAG systems, and full-stack tools used in university courses, and presented project work at a national kickoff in Washington, D.C.",
		tech: {
			concepts: ["AI Agents", "LLMs", "RAG", "Knowledge Graphs", "Vector Embeddings"],
			stack: [
				"Azure",
				"Docker",
				"Python",
				"FastAPI",
				"Django",
				"Typescript",
				"React",
				"Tailwind",
			],
		},
		tenure: [
			{ label: "Active", range: "Aug 2025 - May 2026" },
			{ label: "Paused", range: "Jun 2026 - Jul 2026" },
			{ label: "Active", range: "Aug 2026 - Present" },
		],
		highlights: [
			"Built an autonomous pipeline integrating five federal datasets into a 50,000-node knowledge graph and developed a RAG framework using vector embeddings, NLP, LLMs, and reranking techniques that reduced hallucinations by 38%.",
			"Engineered a full-stack data storytelling platform with automated clickstream analysis used across 6 UA and UMBC courses by approximately 75 university students.",
			"Presented the OKN project demo at its Year 3 NSF kickoff event in Washington, D.C. to government stakeholders.",
		],
		productionLinks: [
			{
				label: "CAST Story Studio",
				url: "https://cast-storystudio.com/",
			},
		],
	},
	{
		id: "quanthub-industry-project",
		title: "Software Industry Project",
		company: "QuantHub",
		date: "August 2025 - December 2025",
		note: "Concurrent with AI Research Internship at the Alabama AI Institute",
		icon: quantHubLogo,
		description:
			"Built an automated web-scraping pipeline for University of Alabama course enrollment data using Python and Selenium. Processed course sections across multiple semesters, normalized the results into a searchable relational database, and conducted market research to identify high-impact opportunities for incorporating QuantHub's AI lessons into university programs.",
		tech: {
			concepts: ["Web Scraping"],
			stack: ["Python", "Selenium", "Docker", "SQL"],
		},
		highlights: [
			"Built a Dockerized web scraper that extracted enrollment data from 41,467 course sections across five semesters at the University of Alabama.",
			"Normalized 14,083 course records spanning 153 academic subjects and loaded them into a fully searchable SQL relational database.",
			"Conducted university market research to identify curriculum areas where QuantHub's AI lessons could be effectively integrated.",
		],
	},
];

export const getExperienceById = (id: string): ExperienceInterface | undefined =>
	experiences.find((experience) => experience.id === id);

export const getFeaturedExperiences = (): ExperienceInterface[] =>
	experiences.filter((experience) => experience.featured);

/** Flat pill list for timeline cards - concepts first, then stack */
export const getExperienceTechTags = (tech?: ExperienceTechInterface): string[] => [
	...(tech?.concepts ?? []),
	...(tech?.stack ?? []),
];
