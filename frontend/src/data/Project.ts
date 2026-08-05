import mockstreetImage from "@/assets/mockstreet.png";
import neuralNetworkImage from "@/assets/NeuralNetwork.png";
import labUndergradsImage from "@/assets/LabUndergrads.jpg";
import dcPodiumImage from "@/assets/DcPodium.jpg";
import headshotImage from "@/assets/Headshot.jpg";
import quantHubLogo from "@/assets/QuantHubLogo.jpg";
import type { ProjectInterface, ProjectTechInterface } from "@/utils/Types";

export const projects: ProjectInterface[] = [
	{
		id: "mockstreet-exchange",
		title: "Mockstreet Exchange",
		image: mockstreetImage,
		description:
			"A simulated trading platform that helps everyday users gain hands-on experience building and managing a stock portfolio without risking real money.",
		date: "2024 - 2025",
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
		date: "2024",
		links: {
			production: "https://numbers-beige.vercel.app/",
			github: "https://github.com/CalebErickson21/Numbers-CNN",
			details: "/projects/neural-network",
		},
		tech: {
			concepts: ["CNNs", "Backpropagation", "Gradient Descent"],
			stack: ["Python", "NumPy", "TypeScript", "React"],
		},
		infrastructure: [
			"Training runs locally in Python/NumPy; trained weights are exported for the web demo.",
			"Interactive digit prediction demo is served on Vercel.",
		],
		lessonsLearned: [
			"Implementing backprop by hand makes optimizer and activation choices much clearer.",
			"Visualizing training loss early catches learning-rate mistakes.",
			"A thin demo UI helps communicate research work to non-ML audiences.",
		],
		featured: true,
		relatedProjectIds: ["mockstreet-exchange"],
	},
	{
		id: "portfolio-site",
		title: "Personal Portfolio",
		image: headshotImage,
		description:
			"Placeholder — this portfolio site showcasing experience, projects, and skills with a dark/light theme and route-based detail dialogs.",
		date: "2025 - Present",
		links: {
			github: "https://github.com/CalebErickson21",
			details: "/projects/portfolio-site",
		},
		tech: {
			concepts: ["Design Systems", "Accessibility", "Responsive Layout"],
			stack: ["TypeScript", "React", "Tailwind", "Vite"],
		},
		infrastructure: [
			"Placeholder — static SPA built with Vite and deployed to a CDN.",
			"Placeholder — content lives in typed data modules for easy updates without CMS overhead.",
		],
		lessonsLearned: [
			"Placeholder — shared surface styles keep cards and dialogs visually consistent.",
			"Route-driven dialogs give shareable deep links without leaving the list page.",
			"Typed content modules beat scattered hardcoded copy.",
		],
		relatedProjectIds: ["mockstreet-exchange"],
	},
	{
		id: "cast-storytelling",
		title: "CAST Storytelling Platform",
		image: labUndergradsImage,
		description:
			"Placeholder — full-stack data storytelling platform with automated clickstream analysis used across university courses.",
		date: "2025 - 2026",
		links: {
			production: "https://cast-storystudio.com/",
			details: "/projects/cast-storytelling",
		},
		tech: {
			concepts: ["Data Storytelling", "Clickstream Analysis", "EdTech"],
			stack: ["Python", "Django", "TypeScript", "React", "Tailwind"],
		},
		infrastructure: [
			"Placeholder — Django backend with React frontend, deployed for classroom use.",
			"Placeholder — clickstream events are collected and summarized for instructors.",
		],
		lessonsLearned: [
			"Placeholder — designing for classroom workflows requires clear instructor vs student roles.",
			"Automated analysis only helps when the UI surfaces insights quickly.",
			"Reliability matters more than feature depth when real courses depend on the tool.",
		],
		relatedProjectIds: ["knowledge-graph-rag"],
	},
	{
		id: "knowledge-graph-rag",
		title: "Knowledge Graph RAG Pipeline",
		image: dcPodiumImage,
		description:
			"Placeholder — autonomous pipeline integrating federal datasets into a large knowledge graph with a RAG framework to reduce hallucinations.",
		date: "2025 - 2026",
		links: {
			details: "/projects/knowledge-graph-rag",
		},
		tech: {
			concepts: ["RAG", "Knowledge Graphs", "Vector Embeddings", "LLMs"],
			stack: ["Python", "FastAPI", "Azure", "Docker"],
		},
		infrastructure: [
			"Placeholder — containerized Python services on Azure with vector stores for retrieval.",
			"Placeholder — FastAPI layer exposing query endpoints to clients.",
		],
		lessonsLearned: [
			"Placeholder — graph quality upstream has a bigger impact than prompt tweaks alone.",
			"Reranking and evaluation loops are required to measure hallucination reduction.",
			"Documenting data lineage keeps multi-dataset pipelines maintainable.",
		],
		relatedProjectIds: ["cast-storytelling"],
	},
	{
		id: "course-enrollment-scraper",
		title: "Course Enrollment Scraper",
		image: quantHubLogo,
		description:
			"Placeholder — Dockerized web scraper that extracted University of Alabama course enrollment data across multiple semesters into a searchable SQL database.",
		date: "Aug 2025 - Dec 2025",
		links: {
			details: "/projects/course-enrollment-scraper",
		},
		tech: {
			concepts: ["Web Scraping", "ETL", "Market Research"],
			stack: ["Python", "Selenium", "Docker", "SQL"],
		},
		infrastructure: [
			"Placeholder — Selenium scrapers run in Docker.",
			"Placeholder — records are normalized and loaded into a relational database for searchable enrollment analysis.",
		],
		lessonsLearned: [
			"Placeholder — defensive parsing and retries are mandatory against fragile HTML.",
			"Normalizing subjects and sections early simplifies downstream queries.",
			"Dockerizing scrapers makes reruns reproducible across machines.",
		],
		relatedProjectIds: ["portfolio-site"],
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
