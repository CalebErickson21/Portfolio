import cgiLogo from "@/assets/CgiLogo.jpg";
import alabamaLogo from "@/assets/AlabamaLogo.png";
import type { ExperienceInterface } from "@/utils/Types";

export const experiences: ExperienceInterface[] = [
	{
		id: "cgi-internship",
		title: "Software Engineer Intern",
		company: "CGI",
		date: "June 2026 – July 2026",
		featured: true,
		icon: cgiLogo,
		summary:
			"Built and shipped features for an internal promotion-tracking app used by ~2,000 partners across the Southern U.S., contributing as both developer and Scrum Master.",
		description:
			"Joined a 10-person intern team delivering a new version of CGI’s internal promotion-tracking application. Worked across Agile ceremonies—requirements, implementation, QA, and client feedback—while also leading one sprint as Scrum Master.",
		tech: ["Agile", "Scrum", "Full-Stack"],
		highlights: [
			"Collaborated with a 10-person intern team to develop a new version of an internal promotion-tracking application used by approximately 2,000 CGI partners across the Southern United States.",
			"Contributed as a developer during 2 of 3 two-week Agile sprints, supporting requirements gathering, implementation, QA testing, client feedback, and iteration.",
			"Served as Scrum Master for 1 sprint, increasing backlog completion from approximately 56% to 90% while the sprint backlog grew by approximately 80%, compared to the previous sprint.",
		],
	},
	{
		id: "ai-research-internship",
		title: "AI Researcher",
		company: "Alabama AI Institute",
		date: "August 2025 – Present",
		featured: true,
		note: "Paused June – July 2026 for CGI internship",
		icon: alabamaLogo,
		summary:
			"Applied AI research across public-data accessibility, education, and disaster preparedness—including a 50k-node knowledge graph and a RAG pipeline that cut hallucinations by 38%.",
		description:
			"Contribute across three applied AI research projects in the SAIL Lab. Built data pipelines, RAG systems, and full-stack tools used in university courses, and presented project work at a national kickoff in Washington, D.C.",
		tech: ["Python", "LLMs", "RAG", "Knowledge Graphs", "Full-Stack"],
		tenure: [
			{ label: "Active", range: "Aug 2025 – May 2026" },
			{ label: "Paused", range: "Jun 2026 – Jul 2026" },
			{ label: "Resumed", range: "Aug 2026 – Present" },
		],
		highlights: [
			"Contributed across three applied AI research projects focused on public-data accessibility, education, and disaster preparedness within the SAIL Lab.",
			"Built an autonomous pipeline integrating five federal datasets into a 50,000-node knowledge graph and developed a RAG framework using vector embeddings, NLP, LLMs, and reranking techniques that reduced hallucinations by 38%.",
			"Engineered a full-stack storytelling platform used across six university courses by approximately 75 users, while also developing AI-driven flood-preparedness workflows and presenting the OKN project demo at its Year 3 kickoff event in Washington, D.C.",
		],
	},
	{
		id: "quanthub-industry-project",
		title: "Software Industry Project",
		company: "QuantHub",
		date: "August 2025 - December 2025",
		featured: false,
		summary:
			"Developed a Dockerized data pipeline that scraped, normalized, and stored university enrollment data while supporting market research on opportunities for integrating AI education into university curricula.",
		description:
			"Built an automated web-scraping pipeline for University of Alabama course enrollment data using Python and Selenium. Processed course sections across multiple semesters, normalized the results into a searchable relational database, and conducted market research to identify high-impact opportunities for incorporating QuantHub's AI lessons into university programs.",
		tech: ["Python", "Selenium", "Docker", "SQL", "Web Scraping"],
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
