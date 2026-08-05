import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectLinkActions } from "@/components/ProjectLinkActions";
import { ProjectMedia } from "@/components/ProjectMedia";
import { ProjectStatusBadge } from "@/components/ProjectStatusBadge";
import { surfacePanelClass } from "@/utils/Classes";
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
			<ProjectMedia project={project} />
			<CardHeader>
				<div className="flex items-start justify-between gap-3">
					<div className="min-w-0 space-y-1.5">
						<CardTitle className="text-lg text-text-primary">{project.title}</CardTitle>
						<ProjectStatusBadge status={project.status} />
					</div>
					<p className="shrink-0 text-sm text-text-secondary">{project.date}</p>
				</div>
				<CardDescription className="text-text-secondary">
					{project.description}
				</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto flex flex-wrap gap-2">
				<ProjectLinkActions project={project} showDetails />
			</CardFooter>
		</Card>
	);
};
