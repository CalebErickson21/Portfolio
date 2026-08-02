import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import type { FeaturedProject } from "@/utils/Types";
import mockstreetImage from "@/assets/mockstreet.png";
import neuralNetworkImage from "@/assets/NeuralNetwork.png";

const featuredProjects: FeaturedProject[] = [
	{
		id: "mockstreet-exchange",
		title: "Mockstreet Exchange",
		description:
			"A simulated trading platform that helps everyday users gain hands-on experience building and managing a stock portfolio without risking real money.",
		image: mockstreetImage,
		links: {
			production: "https://www.mockstreetexchange.com/",
			github: "https://github.com/CalebErickson21/Mockstreeet",
			details: "/projects",
		},
	},
	{
		id: "neural-network",
		title: "Number Prediction Neural Network",
		description:
			"A convolutional neural network built from scratch to recognize MNIST handwritten digits, using only NumPy and no plug-and-play machine-learning libraries to better understand backpropagation, gradient descent, and neural network mathematics.",
		image: neuralNetworkImage,
		links: {
			production: "https://numbers-beige.vercel.app/",
			github: "https://github.com/CalebErickson21/Numbers-CNN",
			details: "/projects",
		},
	},
];

export function FeaturedProjects() {
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
					Projects I&apos;m proud of
				</h2>
				<p className="mt-2 text-md text-text-secondary">
					A couple of recent builds I&apos;m proud of! Explore the live apps, source, or
					full write-ups.
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
}
