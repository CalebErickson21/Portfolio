import mockstreetImage from "@/assets/mockstreet.png";
import neuralNetworkImage from "@/assets/NeuralNetwork.png";
import headshotImage from "@/assets/Headshot.jpg";
import { Rocket } from "lucide-react";
import type { ProjectInterface, ProjectTechInterface } from "@/utils/Types";

export const projects: ProjectInterface[] = [
	{
		id: "mockstreet-exchange",
		title: "Mockstreet Exchange",
		image: mockstreetImage,
		description:
			"A simulated trading platform that helps everyday people gain hands-on experience building and managing a stock portfolio without risking real money.",
		date: "March 2025",
		links: {
			production: "https://www.mockstreetexchange.com/",
			github: "https://github.com/CalebErickson21/Mockstreeet",
			details: "/projects/mockstreet-exchange",
		},
		tech: {
			concepts: ["Cloud Infrastructure", "FinTech", "Portfolio Simulation", "Real-Time Data"],
			stack: [
				"AWS",
				"PostgreSQL",
				"TypeScript",
				"React",
				"Node.js",
				"Finnhub Stock API",
				"Vercel",
				"Render",
				"Supabase",
			],
		},
		infrastructure: [
			"The application was initially hosted on an AWS EC2 instance with an AWS RDS PostgreSQL database, both secured within an AWS VPC. This provided a traditional, production-style cloud architecture but cost roughly $35 per month.",
			"To reduce costs, I removed the separate RDS instance and ran PostgreSQL in a Docker container directly on the EC2 instance. This simplified the AWS setup, but the remaining hosting cost was still difficult to justify for the project's usage.",
			"I then experimented with a hybrid serverless approach in which AWS Lambda started the EC2 instance on demand and the instance shut down after 30 minutes of inactivity. CloudFront handled incoming requests, checked the instance's health, started it when necessary, and routed traffic once it became available.",
			"I chose not to migrate the entire backend to Lambda because doing so would have required a significant rewrite of the existing Node.js application. Although the hybrid architecture was technically interesting, it introduced more complexity and startup latency than the project warranted.",
			"I ultimately moved to a simpler managed architecture, deploying the React frontend to Vercel, the Node.js backend to Render, and the PostgreSQL database to Supabase. This reduced cost and operational overhead while better matching the project's scale.",
		],

		lessonsLearned: [
			"Working with live market data taught me the importance of refresh strategies, loading states, and keeping client-side data synchronized. Because this was one of my first React projects, I relied heavily on SCSS and did not structure the UI around reusable components as consistently as I would today. In a future iteration, I would use Tailwind CSS and establish a reusable component system earlier in development.",
			"The project reinforced the importance of matching infrastructure complexity to actual product requirements. Building the AWS architecture gave me valuable experience with EC2, RDS, VPC networking, Lambda, CloudFront, and Docker, but I learned that managed platforms are often the better choice until traffic, performance, or security requirements justify a more customized solution.",
			"I gained practical experience with input validation, transactional database operations, and preventing race conditions when multiple requests attempt to update the same portfolio data.",
		],
		featured: true,
	},
	{
		id: "neural-network",
		title: "Number Prediction Neural Network",
		image: neuralNetworkImage,
		description:
			"A convolutional neural network built from scratch to recognize MNIST handwritten digits, using only NumPy and no plug-and-play machine-learning libraries to better understand backpropagation, gradient descent, and neural network mathematics.",
		date: "April 2025",
		links: {
			production: "https://numbers-beige.vercel.app/",
			github: "https://github.com/CalebErickson21/Numbers-CNN",
			details: "/projects/neural-network",
		},
		tech: {
			concepts: [
				"Machine Learning",
				"Convolutional Neural Networks",
				"Backpropagation",
				"Gradient Descent",
			],
			stack: ["Python", "NumPy", "Flask", "TypeScript", "React", "Vite", "Vercel", "Render"],
		},
		infrastructure: [
			"The model is trained locally using Python and NumPy. After training, the learned weights and biases are serialized to a .pkl file so the production application can perform inference without retraining the network.",
			"The React frontend is deployed on Vercel and communicates with a Flask API hosted on Render. These platforms were selected for their free tiers, GitHub-based continuous deployment, and low operational overhead for a lightweight demonstration application.",
		],
		lessonsLearned: [
			"Implementing the forward pass and backpropagation manually gave me a much clearer understanding of how gradients move through each layer of a neural network. Concepts such as the chain rule, activation derivatives, weight updates, and tensor dimensions became far more concrete than they were when using high-level frameworks.",
			"The project showed me how strongly training performance depends on seemingly small design decisions. Learning rate, weight initialization, activation functions, batch size, and numerical stability all had a noticeable effect on whether the model converged, trained slowly, or failed entirely.",
			"Tracking and visualizing loss during training made debugging significantly easier. Unexpected loss curves helped reveal issues such as incorrect gradient calculations, overly aggressive learning rates, and shape mismatches before they produced less obvious accuracy problems.",
			"Separating model training from production inference simplified deployment. Exporting the trained parameters allowed the Flask API to remain lightweight while avoiding the computational cost and inconsistency of retraining the network in production.",
			"Building a web interface reinforced the value of presenting technical work in an accessible format. The interactive demo makes the model easier to understand for users who may not be familiar with neural-network implementation details.",
		],
		featured: true,
	},
	{
		id: "portfolio",
		title: "Personal Portfolio",
		image: headshotImage,
		description:
			"A personal portfolio showcasing my experience, projects, and skills with dark/light themes, shared UI patterns, and route-based detail dialogs.",
		date: "August 2026",
		links: {
			production: "https://caleberickson21.github.io",
			github: "https://github.com/CalebErickson21/portfolio",
			details: "/projects/portfolio",
		},
		tech: {
			concepts: [
				"Design Systems",
				"Component Libraries",
				"Responsive Layout",
				"Accessibility",
				"Theming",
			],
			stack: [
				"TypeScript",
				"React",
				"Tailwind CSS",
				"Vite",
				"shadcn/ui",
				"Magic UI",
				"Aceternity UI",
				"Base UI",
				"Motion",
				"Vercel",
				"GitHub Pages",
			],
		},
		infrastructure: [
			"The site is a multipage React frontend built with Vite. There is no backend or database. Experience, projects, and skills data live in typed TypeScript data modules that are easy to update without redeploying content infrastructure.",
			"The application itself is hosted on Vercel, with continuous deployment from GitHub keeping releases simple as the site evolves.",
			"GitHub Pages provides a clean, GitHub-associated public URL that redirects visitors to the Vercel deployment. That keeps the shareable link tied to my GitHub identity while Vercel handles the actual hosting.",
			"Shared styling tokens, surface-panel utilities, and reusable dialog/card primitives keep pages visually consistent while still allowing each section to have its own layout.",
		],
		lessonsLearned: [
			"Reusable components early on — shared cards, dialogs, and surface styles — made new pages much faster to build.",
			"Component libraries work best as a foundation. Customizing shadcn/ui, Magic UI, and Aceternity UI kept development fast without looking generic.",
			"Clean design decisions mattered as much as the code: clear section purpose, consistent hierarchy, and less visual clutter.",
			"Typed data modules made content updates a data change instead of a UI rewrite.",
		],
	},
	{
		id: "launchpad",
		title: "Launchpad",
		icon: Rocket,
		description:
			"A career-networking and application-tracking platform for managing recruiters, companies, job opportunities, applications, deadlines, and professional connections in one place.",
		date: "August 2026",
		status: "in-progress",
		links: {
			details: "/projects/launchpad",
		},
		tech: {
			concepts: [
				"Application Tracking",
				"Career Networking",
				"Graph-Based Recommendations",
				"University Career Services",
			],
			stack: ["TypeScript", "React", "Tailwind CSS", "Python", "FastAPI", "Graph Database"],
		},
		infrastructure: [
			"React frontend with Tailwind CSS providing dashboards for managing applications, job opportunities, companies, recruiters, deadlines, and professional connections.",
			"FastAPI backend exposing REST endpoints for career data, user relationships, application activity, and related metadata.",
			"Graph database modeling relationships among students, recruiters, companies, job postings, and applications to support network analysis and personalized recommendations.",
			"Graph algorithms designed to help students discover peers applying to similar positions, view opportunities within their network, and identify potential professional connections.",
			"Planned integration with The University of Alabama Career Center to connect students with university career resources, events, employers, and job opportunities.",
			"Production hosting, authentication, privacy controls, and database infrastructure are still being evaluated as the core tracking and networking workflows stabilize.",
		],
		lessonsLearned: [
			"Representing students, recruiters, companies, jobs, and applications as connected entities makes relationship-based discovery more natural than relying exclusively on relational tables.",
			"Defining application statuses as an explicit state machine simplifies filtering, reminders, analytics, and visual pipeline management.",
			"Keeping FastAPI schemas aligned with frontend TypeScript types reduces data-contract drift while rapidly iterating on interconnected features.",
			"University integrations require careful planning around data ownership, authentication, privacy, and compatibility with existing career-service systems.",
			"Networking recommendations must prioritize relevance, consent, and user control rather than exposing all available application activity.",
		],
	},
];

export const getProjectById = (id: string): ProjectInterface | undefined =>
	projects.find((project) => project.id === id);

export const getFeaturedProjects = (): ProjectInterface[] =>
	projects.filter((project) => project.featured);

export const getRelatedProjects = (project: ProjectInterface): ProjectInterface[] =>
	(project.relatedProjectIds ?? [])
		.map((id) => getProjectById(id))
		.filter((related): related is ProjectInterface => related !== undefined);

export const getProjectTechTags = (tech?: ProjectTechInterface): string[] => [
	...(tech?.concepts ?? []),
	...(tech?.stack ?? []),
];
