import { Link } from "react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { detailsLinkClass, outlineLinkClass } from "@/utils/classes";
import type { FeaturedProject } from "@/utils/Types";

export function ProjectCard({ project }: { project: FeaturedProject }) {
	return (
		<Card className="bg-surface/80 text-text-primary shadow-lg shadow-brand-accent/25 ring-text-secondary/15 backdrop-blur-sm dark:shadow-brand-accent/20 dark:ring-text-secondary/25">
			<img
				src={project.image}
				alt={project.title}
				className="aspect-video w-full object-cover"
			/>
			<CardHeader>
				<CardTitle className="text-lg text-text-primary">{project.title}</CardTitle>
				<CardDescription className="text-text-secondary">
					{project.description}
				</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto flex flex-wrap gap-2">
				<a
					href={project.links.production}
					target="_blank"
					rel="noopener noreferrer"
					className={outlineLinkClass}
				>
					<ExternalLink data-icon="inline-start" />
					Live
				</a>
				<a
					href={project.links.github}
					target="_blank"
					rel="noopener noreferrer"
					className={outlineLinkClass}
				>
					<FaGithub data-icon="inline-start" />
					GitHub
				</a>
				<Link to={project.links.details} className={detailsLinkClass}>
					Details
					<ArrowRight data-icon="inline-end" />
				</Link>
			</CardFooter>
		</Card>
	);
}
