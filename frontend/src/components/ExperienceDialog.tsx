import { Building2 } from "lucide-react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import type { ExperienceInterface } from "@/utils/Types";

type ExperienceDialogPropsType = {
	experience: ExperienceInterface;
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export const ExperienceDialog = ({
	experience,
	open,
	onOpenChange,
}: ExperienceDialogPropsType) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[min(90dvh,40rem)] overflow-y-auto sm:max-w-xl">
				<DialogHeader className="pr-8">
					<div className="flex items-start gap-3">
						<div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand-accent/10 text-brand-accent">
							{experience.icon ? (
								<img
									src={experience.icon}
									alt=""
									className="size-full object-cover"
								/>
							) : (
								<Building2 className="size-5" aria-hidden />
							)}
						</div>
						<div className="min-w-0">
							<DialogTitle className="text-lg font-semibold text-text-primary sm:text-xl">
								{experience.title}
							</DialogTitle>
							<p className="mt-1 text-text-secondary">{experience.company}</p>
							<p className="mt-1 text-sm font-medium text-brand-accent">
								{experience.date}
							</p>
							{experience.note && (
								<p className="mt-1 text-xs text-text-secondary/80">
									{experience.note}
								</p>
							)}
						</div>
					</div>
				</DialogHeader>

				{experience.description && (
					<DialogDescription className="text-sm leading-relaxed text-text-secondary sm:text-base">
						{experience.description}
					</DialogDescription>
				)}

				{experience.tenure && experience.tenure.length > 0 && (
					<div>
						<h3 className="text-sm font-semibold text-text-primary">Tenure</h3>
						<ul className="mt-2 space-y-1.5">
							{experience.tenure.map((segment) => (
								<li
									key={`${segment.label}-${segment.range}`}
									className="flex flex-wrap items-baseline gap-x-2 text-sm text-text-secondary"
								>
									<span className="font-medium text-text-primary">
										{segment.label}
									</span>
									<span className="text-text-secondary/80">{segment.range}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{experience.tech && experience.tech.length > 0 && (
					<ul className="flex flex-wrap gap-2">
						{experience.tech.map((tag) => (
							<li
								key={tag}
								className="rounded-full bg-text-secondary/10 px-2.5 py-1 text-xs text-text-secondary"
							>
								{tag}
							</li>
						))}
					</ul>
				)}

				{experience.highlights.length > 0 && (
					<div>
						<h3 className="text-sm font-semibold text-text-primary">Highlights</h3>
						<ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary marker:text-brand-accent sm:text-base">
							{experience.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
};
