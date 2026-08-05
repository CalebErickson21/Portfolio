import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ProjectLinkActions } from "@/components/ProjectLinkActions";
import { ProjectMedia } from "@/components/ProjectMedia";
import { ProjectStatusBadge } from "@/components/ProjectStatusBadge";
import { getRelatedProjects } from "@/data/Project";
import { detailsLinkClass } from "@/utils/Classes";
import type { ProjectInterface } from "@/utils/Types";

type ProjectDialogPropsType = {
	project: ProjectInterface;
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogPropsType) => {
	const relatedProjects = getRelatedProjects(project);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[85vh] w-full gap-0 overflow-hidden bg-surface p-0 text-text-primary sm:max-w-3xl">
				<div className="max-h-[85vh] space-y-6 overflow-y-auto px-6 py-6 pr-14">
					<DialogHeader>
						<div className="flex items-start gap-3">
							<div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand-accent/10">
								<ProjectMedia project={project} variant="thumb" />
							</div>
							<div className="min-w-0">
								<div className="flex flex-wrap items-center gap-2">
									<DialogTitle className="text-lg font-semibold text-text-primary sm:text-xl">
										{project.title}
									</DialogTitle>
									<ProjectStatusBadge status={project.status} />
								</div>
								<p className="mt-1 text-sm font-medium text-text-secondary">
									{project.date}
								</p>
							</div>
						</div>
					</DialogHeader>

					<div className="flex flex-wrap gap-2">
						<ProjectLinkActions project={project} />
					</div>

					{project.description && (
						<DialogDescription className="text-sm leading-relaxed text-text-secondary sm:text-base">
							{project.description}
						</DialogDescription>
					)}

					{(project.tech?.concepts?.length || project.tech?.stack?.length) && (
						<div className="space-y-4">
							{project.tech?.concepts && project.tech.concepts.length > 0 && (
								<div>
									<h3 className="text-sm font-semibold text-text-primary">
										Concepts
									</h3>
									<ul className="mt-2 flex flex-wrap gap-2">
										{project.tech.concepts.map((tag) => (
											<li
												key={tag}
												className="rounded-full bg-text-secondary/10 px-2.5 py-1 text-xs text-text-secondary"
											>
												{tag}
											</li>
										))}
									</ul>
								</div>
							)}
							{project.tech?.stack && project.tech.stack.length > 0 && (
								<div>
									<h3 className="text-sm font-semibold text-text-primary">
										Stack
									</h3>
									<ul className="mt-2 flex flex-wrap gap-2">
										{project.tech.stack.map((tag) => (
											<li
												key={tag}
												className="rounded-full bg-text-secondary/10 px-2.5 py-1 text-xs text-text-secondary"
											>
												{tag}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					)}

					{project.infrastructure.length > 0 && (
						<div>
							<h3 className="text-sm font-semibold text-text-primary">
								Infrastructure
							</h3>
							<ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary marker:text-brand-accent sm:text-base">
								{project.infrastructure.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					)}

					{project.lessonsLearned.length > 0 && (
						<div>
							<h3 className="text-sm font-semibold text-text-primary">
								Lessons Learned
							</h3>
							<ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary marker:text-brand-accent sm:text-base">
								{project.lessonsLearned.map((lesson) => (
									<li key={lesson}>{lesson}</li>
								))}
							</ul>
						</div>
					)}

					{relatedProjects.length > 0 && (
						<div>
							<h3 className="text-sm font-semibold text-text-primary">
								Related Projects
							</h3>
							<ul className="mt-3 flex flex-wrap gap-2">
								{relatedProjects.map((related) => (
									<li key={related.id}>
										<Link
											to={`/projects/${related.id}`}
											className={detailsLinkClass}
										>
											{related.title}
											<ArrowRight data-icon="inline-end" />
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};
