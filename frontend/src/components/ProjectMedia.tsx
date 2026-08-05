import { Rocket } from "lucide-react";

import type { ProjectInterface } from "@/utils/Types";
import { cn } from "@/lib/utils";

type ProjectMediaPropsType = {
	project: ProjectInterface;
	/** `cover` for card hero; `thumb` for dialog header. */
	variant?: "cover" | "thumb";
	className?: string;
};

export const ProjectMedia = ({
	project,
	variant = "cover",
	className,
}: ProjectMediaPropsType) => {
	const Icon = project.icon ?? Rocket;

	if (project.image) {
		return (
			<img
				src={project.image}
				alt={variant === "cover" ? project.title : ""}
				className={cn(
					variant === "cover"
						? "aspect-video w-full object-cover"
						: "size-full object-cover",
					className,
				)}
			/>
		);
	}

	if (variant === "thumb") {
		return <Icon className={cn("size-7 text-brand-accent", className)} aria-hidden />;
	}

	return (
		<div
			className={cn(
				"flex aspect-video w-full items-center justify-center bg-brand-accent/10",
				className,
			)}
			aria-hidden
		>
			<Icon className="size-16 text-brand-accent sm:size-20" />
		</div>
	);
};
