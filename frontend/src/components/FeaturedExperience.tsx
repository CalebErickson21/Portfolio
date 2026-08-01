import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { ExperienceCard } from "@/components/ExperienceCard";
import { detailsLinkClass } from "@/utils/classes";
import type { FeaturedExperience } from "@/utils/Types";
import cgiLogo from "@/assets/CgiLogo.jpg";
import alabamaLogo from "@/assets/AlabamaLogo.png";

const featuredExperiences: FeaturedExperience[] = [
	{
		id: "cgi-internship",
		title: "Software Engineer Intern",
		company: "CGI",
		date: "June 2026 - July 2026",
		icon: cgiLogo,
		highlights: [
			"Collaborated with a 10-person intern team to develop a new version of an internal promotion-tracking application used by approximately 2,000 CGI partners across the Southern United States.",
			"Contributed as a developer during 2 of 3 two-week Agile sprints, supporting requirements gathering, implementation, QA testing, client feedback, and iteration.",
			"Served as Scrum Master for 1 sprint, increasing backlog completion from approximately 56% to 90% while the sprint backlog grew by approximately 80%.",
		],
	},
	{
		id: "ai-research-internship",
		title: "AI Researcher",
		company: "Alabama AI Institute",
		date: "August 2025 - Present",
		note: "Paused June - July 2026 for CGI internship",
		icon: alabamaLogo,
		highlights: [
			"Contributed across three applied AI research projects focused on public-data accessibility, education, and disaster preparedness within the SAIL Lab.",
			"Built an autonomous pipeline integrating five federal datasets into a 50,000-node knowledge graph and developed a RAG framework using vector embeddings, NLP, LLMs, and reranking techniques that reduced hallucinations by 38%.",
			"Engineered a full-stack storytelling platform used across six university courses by approximately 75 users, while also developing AI-driven flood-preparedness workflows and presenting the OKN project demo at its Year 3 kickoff event in Washington, D.C.",
		],
	},
];

export function FeaturedExperience() {
	return (
		<section
			id="featured-experience"
			className="w-full px-6 py-8 sm:px-10 lg:px-16 xl:px-24"
			aria-labelledby="featured-experience-heading"
		>
			<div className="text-center">
				<p className="text-xl font-medium tracking-wide text-brand-accent">
					Featured Experience
				</p>
				<h2
					id="featured-experience-heading"
					className="mt-2 text-3xl font-semibold text-text-primary sm:text-4xl"
				>
					Building Through Experience
				</h2>
				<p className="mt-2 text-md text-text-secondary">
					Turning ideas into reliable, scalable solutions.
				</p>
			</div>

			<div className="mt-10 grid gap-16 md:grid-cols-2">
				{featuredExperiences.map((experience) => (
					<ExperienceCard key={experience.id} experience={experience} />
				))}
			</div>

			<div className="mt-10 flex justify-center">
				<Link to="/experience" className={detailsLinkClass}>
					View full experience
					<ArrowRight data-icon="inline-end" />
				</Link>
			</div>
		</section>
	);
}
