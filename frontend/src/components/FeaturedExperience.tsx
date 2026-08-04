import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionLabel } from "@/components/SectionLabel";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { getFeaturedExperiences } from "@/data/Experience";

export const FeaturedExperience = () => {
	const featuredExperiences = getFeaturedExperiences();

	return (
		<section
			id="featured-experience"
			className="w-full px-6 py-8 sm:px-10 lg:px-16 xl:px-24"
			aria-labelledby="featured-experience-heading"
		>
			<div className="text-center">
				<SectionLabel>Featured Experience</SectionLabel>
				<h2
					id="featured-experience-heading"
					className="mt-2 text-3xl font-semibold text-text-primary sm:text-4xl"
				>
					Building Through Experience
				</h2>
				<p className="mt-2 text-md text-text-secondary">
					Turning ideas into reliable, scalable solutions.
				</p>
			</div>

			<div className="mt-10 grid gap-16 md:grid-cols-2">
				{featuredExperiences.map((experience) => (
					<ExperienceCard key={experience.id} experience={experience} />
				))}
			</div>

			<div className="mt-10 flex justify-center">
				<InteractiveHoverButton to="/experience">
					View full experience
				</InteractiveHoverButton>
			</div>
		</section>
	);
};
