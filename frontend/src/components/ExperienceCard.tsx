import { Building2 } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { FeaturedExperience } from "@/utils/Types";

export function ExperienceCard({ experience }: { experience: FeaturedExperience }) {
	return (
		<Card className="bg-surface/80 text-text-primary shadow-lg shadow-brand-accent/25 ring-text-secondary/15 backdrop-blur-sm dark:shadow-brand-accent/20 dark:ring-text-secondary/25">
			<CardHeader className="gap-0">
				<div className="flex items-start gap-3">
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
					<div className="min-w-0 flex-1">
						<div className="flex items-start justify-between gap-3">
							<h3 className="text-lg font-semibold leading-snug text-text-primary">
								{experience.title}
							</h3>
							<p className="shrink-0 text-sm text-text-secondary">{experience.date}</p>
						</div>
						<p className="mt-0.5 text-text-secondary">{experience.company}</p>
						{experience.note && (
							<p className="mt-1 text-xs text-text-secondary/80">{experience.note}</p>
						)}
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<ul className="list-disc space-y-2 pl-5 text-text-secondary marker:text-text-primary">
					{experience.highlights.map((highlight) => (
						<li key={highlight}>{highlight}</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
