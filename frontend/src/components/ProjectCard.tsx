import { Link } from "react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { detailsLinkClass, outlineLinkClass, surfacePanelClass } from "@/utils/Classes";
import type { ProjectInterface } from "@/utils/Types";
import { cn } from "@/lib/utils";

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {
	return (
		<Card
			className={cn(
				"h-full text-text-primary shadow-lg shadow-brand-accent/25",
				surfacePanelClass,
			)}
		>
			<img
				src={project.image}
				alt={project.title}
				className="aspect-video w-full object-cover"
			/>
			<CardHeader>
				<div className="flex items-start justify-between gap-3">
					<CardTitle className="text-lg text-text-primary">{project.title}</CardTitle>
					<p className="shrink-0 text-sm text-text-secondary">{project.date}</p>
				</div>
				<CardDescription className="text-text-secondary">
					{project.description}
				</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto flex flex-wrap gap-2">
				{project.links.production && (
					<a
						href={project.links.production}
						target="_blank"
						rel="noopener noreferrer"
						className={outlineLinkClass}
					>
						<ExternalLink data-icon="inline-start" />
						Live
					</a>
				)}
				{project.links.github && (
					<a
						href={project.links.github}
						target="_blank"
						rel="noopener noreferrer"
						className={outlineLinkClass}
					>
						<FaGithub data-icon="inline-start" />
						GitHub
					</a>
				)}
				<Link to={project.links.details} className={detailsLinkClass}>
					Details
					<ArrowRight data-icon="inline-end" />
				</Link>
			</CardFooter>
		</Card>
	);
};
