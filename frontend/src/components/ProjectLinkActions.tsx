import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

import { detailsLinkClass, mutedChipClass, outlineLinkClass } from "@/utils/Classes";
import type { ProjectInterface } from "@/utils/Types";

type ProjectLinkActionsPropsType = {
	project: ProjectInterface;
	/** When true, includes the Details route link (cards). Dialogs omit it. */
	showDetails?: boolean;
};

export const ProjectLinkActions = ({
	project,
	showDetails = false,
}: ProjectLinkActionsPropsType) => {
	const isInProgress = project.status === "in-progress";
	const showLiveChip = isInProgress && !project.links.production;
	const showPrivateGithub = !project.links.github;

	return (
		<>
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
			{showLiveChip && (
				<span className={mutedChipClass}>
					<ExternalLink data-icon="inline-start" />
					In Progress
				</span>
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
			{showPrivateGithub && (
				<span className={mutedChipClass}>
					<Lock data-icon="inline-start" />
					Private
				</span>
			)}
			{showDetails && (
				<Link to={project.links.details} className={detailsLinkClass}>
					Details
					<ArrowRight data-icon="inline-end" />
				</Link>
			)}
		</>
	);
};
