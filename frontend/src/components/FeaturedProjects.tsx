import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { getFeaturedProjects } from "@/data/Project";

export const FeaturedProjects = () => {
	const featuredProjects = getFeaturedProjects();

	return (
		<section
			id="featured-projects"
			className="w-full px-6 py-8 sm:px-10 lg:px-16 xl:px-24"
			aria-labelledby="featured-projects-heading"
		>
			<div className="text-center">
				<SectionLabel>Featured Work</SectionLabel>
				<h2
					id="featured-projects-heading"
					className="mt-2 text-3xl font-semibold text-text-primary sm:text-4xl"
				>
					Projects I'm proud of
				</h2>
				<p className="mt-2 text-md text-text-secondary">
					A couple of recent builds I'm proud of! Explore the live apps, source, or full
					write-ups.
				</p>
			</div>

			<div className="mt-10 grid gap-16 md:grid-cols-2">
				{featuredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			<div className="mt-10 flex justify-center">
				<InteractiveHoverButton to="/projects">View all projects</InteractiveHoverButton>
			</div>
		</section>
	);
};
