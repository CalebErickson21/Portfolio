import { Outlet } from "react-router";

import { BlurFade } from "@/components/ui/blur-fade";
import { ExperienceTimelineItem } from "@/components/ExperienceTimelineItem";
import { experiences } from "@/data/Experience";

export const Experience = () => {
	return (
		<section
			className="flex w-full flex-1 flex-col px-6 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-24"
			aria-labelledby="experience-heading"
		>
			<BlurFade delay={0.1} duration={0.7} direction="up" offset={16}>
				<div className="mx-auto max-w-3xl text-center">
					<h1
						id="experience-heading"
						className="text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl"
					>
						Experience
					</h1>
					<p className="mt-3 text-text-secondary sm:text-lg">
						My professional journey and the impact I&apos;ve made along the way.
					</p>
				</div>
			</BlurFade>

			<ol className="mx-auto mt-12 w-full max-w-3xl list-none sm:mt-16">
				{experiences.map((experience, index) => (
					<ExperienceTimelineItem
						key={experience.id}
						experience={experience}
						isLast={index === experiences.length - 1}
						delay={0.08 * index}
					/>
				))}
			</ol>

			<Outlet />
		</section>
	);
};
