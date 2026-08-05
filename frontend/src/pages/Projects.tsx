import { Outlet } from "react-router";

import { BlurFade } from "@/components/ui/blur-fade";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/Project";

export const Projects = () => {
	return (
		<section
			className="flex w-full flex-1 flex-col px-6 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-24"
			aria-labelledby="projects-heading"
		>
			<BlurFade delay={0.1} duration={0.7} direction="up" offset={16}>
				<div className="text-center">
					<h1
						id="projects-heading"
						className="text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl"
					>
						Projects
					</h1>
					<p className="mt-3 text-text-secondary sm:text-lg">
						A selection of projects I've built - each one taught me something new and
						helped me grow as a software engineer.
					</p>
				</div>
			</BlurFade>

			<div className="mt-12 grid w-full grid-cols-1 gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<BlurFade
						key={project.id}
						inView
						direction="up"
						offset={16}
						duration={0.7}
						delay={0.08 * index}
					>
						<ProjectCard project={project} />
					</BlurFade>
				))}
			</div>

			<Outlet />
		</section>
	);
};
