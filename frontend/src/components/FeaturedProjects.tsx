import { Link } from "react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FeaturedProject } from "@/utils/Types";
import mockstreetImage from "@/assets/mockstreet.png";
import neuralNetworkImage from "@/assets/neural-network.png";

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

const outlineLinkClass = cn(
	buttonVariants({ variant: "outline", size: "sm" }),
	"border-text-secondary/30 bg-transparent text-text-primary hover:bg-surface hover:text-text-primary dark:border-text-secondary/40 dark:bg-transparent dark:hover:bg-surface/70",
);

const detailsLinkClass = cn(
	buttonVariants({ variant: "default", size: "sm" }),
	"bg-brand-accent text-white hover:bg-brand-accent/80 dark:text-background dark:hover:bg-brand-accent/70",
);

function ProjectCard({ project }: { project: FeaturedProject }) {
	return (
		<Card className="bg-surface/80 text-text-primary ring-text-secondary/15 backdrop-blur-sm dark:ring-text-secondary/25">
			<img
				src={project.image}
				alt={project.title}
				className="aspect-video w-full object-cover"
			/>
			<CardHeader>
				<CardTitle className="text-lg text-text-primary">{project.title}</CardTitle>
				<CardDescription className="text-text-secondary">
					{project.description}
				</CardDescription>
			</CardHeader>
			<CardFooter className="mt-auto flex flex-wrap gap-2">
				<a
					href={project.links.production}
					target="_blank"
					rel="noopener noreferrer"
					className={outlineLinkClass}
				>
					<ExternalLink data-icon="inline-start" />
					Live
				</a>
				<a
					href={project.links.github}
					target="_blank"
					rel="noopener noreferrer"
					className={outlineLinkClass}
				>
					<FaGithub data-icon="inline-start" />
					GitHub
				</a>
				<Link to={project.links.details} className={detailsLinkClass}>
					Details
					<ArrowRight data-icon="inline-end" />
				</Link>
			</CardFooter>
		</Card>
	);
}

export function FeaturedProjects() {
	return (
		<section
			id="featured-projects"
			className="w-full px-6 py-16 sm:px-10 lg:px-16 xl:px-24"
			aria-labelledby="featured-projects-heading"
		>
			<div className="text-center">
				<p className="text-xl font-medium tracking-wide text-brand-accent">Featured work</p>
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

			<div className="mt-10 grid gap-6 sm:grid-cols-2">
				{featuredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}
