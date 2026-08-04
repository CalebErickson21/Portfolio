import { Building2 } from "lucide-react";
import { Link } from "react-router";

import { BlurFade } from "@/components/ui/blur-fade";
import { surfacePanelClass } from "@/utils/Classes";
import { cn } from "@/lib/utils";
import type { ExperienceInterface } from "@/utils/Types";

type ExperienceTimelineItemPropsType = {
	experience: ExperienceInterface;
	isLast?: boolean;
	delay?: number;
};

export const ExperienceTimelineItem = ({
	experience,
	isLast = false,
	delay = 0,
}: ExperienceTimelineItemPropsType) => {
	return (
		<li className="relative flex gap-4 sm:gap-6">
			{/* Timeline rail */}
			<div className="relative flex w-3 shrink-0 flex-col items-center sm:w-4">
				<span
					aria-hidden
					className="z-10 mt-1.5 size-3 shrink-0 rounded-full bg-brand-accent ring-4 ring-background sm:mt-2 sm:size-3.5"
				/>
				{!isLast && (
					<span
						aria-hidden
						className="absolute top-5 bottom-0 w-0.5 bg-brand-accent/40 sm:top-6"
					/>
				)}
			</div>

			{/* Date + card */}
			<BlurFade
				className="min-w-0 flex-1 pb-10 sm:pb-12"
				inView
				direction="up"
				offset={16}
				duration={0.7}
				delay={delay}
			>
				<p className="mb-3 text-sm font-medium text-brand-accent sm:text-base">
					{experience.date}
				</p>

				<Link
					to={`/experience/${experience.id}`}
					className={cn(
						"block rounded-2xl p-5 text-left transition-shadow sm:p-6",
						"shadow-lg shadow-brand-accent/15 hover:shadow-xl hover:shadow-brand-accent/25",
						"ring-1 ring-text-secondary/15 hover:ring-brand-accent/40",
						"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
						surfacePanelClass,
					)}
				>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div className="flex min-w-0 items-start gap-3">
							<div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand-accent/10 text-brand-accent">
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
								<h2 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
									{experience.title}
								</h2>
								<p className="mt-0.5 text-text-secondary">{experience.company}</p>
								{experience.note && (
									<p className="mt-1 text-xs text-text-secondary/80">
										{experience.note}
									</p>
								)}
							</div>
						</div>

						{experience.tech && experience.tech.length > 0 && (
							<ul className="flex flex-wrap gap-2 sm:max-w-[45%] sm:justify-end">
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
					</div>

					<p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
						{experience.summary}
					</p>
				</Link>
			</BlurFade>
		</li>
	);
};
