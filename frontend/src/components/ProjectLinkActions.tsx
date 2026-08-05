import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

import { detailsLinkClass, mutedChipClass, outlineLinkClass } from "@/utils/Classes";
import type { ProjectInterface, ProjectLinkValue } from "@/utils/Types";

const PRIVATE_LINK = "private";

const isPrivateLink = (value: ProjectLinkValue) => value === PRIVATE_LINK;

type ProjectLinkActionsPropsType = {
	project: ProjectInterface;
	/** When true, includes the Details action (cards). Dialogs omit it. */
	showDetails?: boolean;
};

export const ProjectLinkActions = ({
	project,
	showDetails = false,
}: ProjectLinkActionsPropsType) => {
	const { production, github, details } = project.links;

	return (
		<>
			{isPrivateLink(production) ? (
				<span className={mutedChipClass}>
					<Lock data-icon="inline-start" />
					Private
				</span>
			) : (
				<a
					href={production}
					target="_blank"
					rel="noopener noreferrer"
					className={outlineLinkClass}
				>
					<ExternalLink data-icon="inline-start" />
					Live
				</a>
			)}
			{isPrivateLink(github) ? (
				<span className={mutedChipClass}>
					<Lock data-icon="inline-start" />
					Private
				</span>
			) : (
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className={outlineLinkClass}
				>
					<FaGithub data-icon="inline-start" />
					GitHub
				</a>
			)}
			{showDetails &&
				(isPrivateLink(details) ? (
					<span className={mutedChipClass}>
						<Lock data-icon="inline-start" />
						Private
					</span>
				) : (
					<Link to={details} className={detailsLinkClass}>
						Details
						<ArrowRight data-icon="inline-end" />
					</Link>
				))}
		</>
	);
};
