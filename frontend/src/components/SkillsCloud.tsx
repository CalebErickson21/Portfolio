import { Atom } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { IconCloud } from "@/components/ui/icon-cloud";
import { cn } from "@/lib/utils";
import { surfacePanelClass } from "@/utils/Classes";
import type { SkillCategoryType, SkillInterface } from "@/utils/Types";

const skills: SkillInterface[] = [
	// Languages & Web Fundamentals
	{ id: "python", label: "Python", category: "languages", icon: "python" },
	{ id: "cplusplus", label: "C++", category: "languages", icon: "cplusplus" },
	{ id: "c", label: "C", category: "languages", icon: "c" },
	{ id: "csharp", label: "C#", category: "languages", icon: "csharp" },
	{ id: "javascript", label: "JavaScript", category: "languages", icon: "javascript" },
	{ id: "typescript", label: "TypeScript", category: "languages", icon: "typescript" },
	{ id: "sql", label: "SQL", category: "languages" },

	// Frameworks & Libraries
	{ id: "react", label: "React", category: "frameworks", icon: "react" },
	{ id: "fastapi", label: "FastAPI", category: "frameworks", icon: "fastapi" },
	{ id: "django", label: "Django", category: "frameworks", icon: "django" },
	{ id: "dotnet", label: ".NET", category: "frameworks", icon: "dotnet" },
	{ id: "tailwind", label: "Tailwind CSS", category: "frameworks", icon: "tailwindcss" },
	{ id: "pandas", label: "Pandas", category: "frameworks", icon: "pandas" },
	{ id: "numpy", label: "NumPy", category: "frameworks", icon: "numpy" },
	{ id: "scikit-learn", label: "Scikit-learn", category: "frameworks", icon: "scikitlearn" },

	// Databases & Storage
	{ id: "postgresql", label: "PostgreSQL", category: "databases", icon: "postgresql" },
	{
		id: "azure-cosmos-db",
		label: "Azure Cosmos DB",
		category: "databases",
		icon: "azurecosmosdb",
	},
	{
		id: "azure-blob-storage",
		label: "Azure Blob Storage",
		category: "databases",
		icon: "microsoftazure",
	},
	{ id: "aws-rds", label: "AWS RDS", category: "databases", icon: "amazonrds" },
	{ id: "mysql", label: "MySQL", category: "databases", icon: "mysql" },
	{
		id: "sql-server",
		label: "Microsoft SQL Server",
		category: "databases",
		icon: "microsoftsqlserver",
	},
	{ id: "sqlite", label: "SQLite", category: "databases", icon: "sqlite" },
	{ id: "mongodb", label: "MongoDB", category: "databases", icon: "mongodb" },
	{ id: "neo4j", label: "Neo4j", category: "databases", icon: "neo4j" },

	// Cloud, Platforms & Tools
	{ id: "git", label: "Git", category: "platforms", icon: "git" },
	{ id: "github", label: "GitHub", category: "platforms", icon: "github" },
	{ id: "docker", label: "Docker", category: "platforms", icon: "docker" },
	{ id: "aws", label: "AWS", category: "platforms", icon: "amazonaws" },
	{ id: "azure", label: "Microsoft Azure", category: "platforms", icon: "microsoftazure" },
	{ id: "gcp", label: "Google Cloud Platform", category: "platforms", icon: "googlecloud" },
	{ id: "vercel", label: "Vercel", category: "platforms", icon: "vercel" },
	{ id: "render", label: "Render", category: "platforms", icon: "render" },
	{ id: "vite", label: "Vite", category: "platforms", icon: "vite" },
];

const categories: {
	id: SkillCategoryType;
	label: string;
}[] = [
	{ id: "languages", label: "Languages & Fundamentals" },
	{ id: "frameworks", label: "Frameworks & Libraries" },
	{ id: "databases", label: "Databases & Storage" },
	{ id: "platforms", label: "Cloud, Platforms & Tools" },
];

const skillImages = [
	...new Set(
		skills
			.filter((s): s is SkillInterface & { icon: string } => Boolean(s.icon))
			.map((s) => `https://cdn.simpleicons.org/${s.icon}`),
	),
];

export const SkillsCloud = () => {
	return (
		<section
			id="skills"
			className="w-full px-6 py-8 sm:px-10 lg:px-16 xl:px-24"
			aria-labelledby="skills-heading"
		>
			<div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
				{/* Header + accordion */}
				<div className="flex flex-col gap-4 lg:col-span-2">
					<div>
						<div className="flex items-center gap-2.5">
							<Atom className="size-6 text-brand-accent" aria-hidden />
							<h2
								id="skills-heading"
								className="text-2xl font-semibold text-text-primary sm:text-3xl"
							>
								Skills &amp; Technologies
							</h2>
						</div>
						<p className="mt-2 text-text-secondary">
							Tools and technologies I use when building + deploying.
						</p>
					</div>

					<Accordion className={cn("border-transparent", surfacePanelClass)}>
						{categories.map((c) => {
							const categorySkills = skills.filter((s) => s.category === c.id);

							return (
								<AccordionItem
									key={c.id}
									value={c.id}
									className="border-text-secondary/10 data-open:bg-brand-accent/5"
								>
									<AccordionTrigger className="text-text-primary hover:no-underline">
										<span className="flex items-center gap-2">
											<span
												className="size-2.5 shrink-0 rounded-full border-2 border-brand-accent bg-brand-accent/20 transition-colors group-aria-expanded/accordion-trigger:bg-brand-accent"
												aria-hidden
											/>
											{c.label}
										</span>
									</AccordionTrigger>
									<AccordionContent className="text-text-secondary">
										<ul className="flex flex-wrap gap-1.5">
											{categorySkills.map((skill) => (
												<li
													key={skill.id}
													className="rounded-full border border-text-secondary/15 bg-background/70 px-3 py-0.5 text-xs text-text-primary"
												>
													{skill.label}
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>

				{/* Icon cloud */}
				<div className="relative flex items-center justify-center lg:col-span-3 lg:min-h-0">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-[8%] rounded-full bg-brand-accent/15 blur-3xl"
					/>

					<div className="relative w-full max-w-md lg:absolute lg:inset-0 lg:mx-auto lg:flex lg:max-w-none lg:items-center lg:justify-center">
						<div className="w-full lg:aspect-square lg:h-full lg:w-auto lg:max-w-full">
							<IconCloud
								images={skillImages}
								showControl={false}
								size={560}
								iconSize={56}
								className="block h-full w-full [&_canvas]:h-full [&_canvas]:w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
