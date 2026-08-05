import type { SkillCategoryType, SkillInterface } from "@/utils/Types";

export const skills: SkillInterface[] = [
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
	{ id: "polars", label: "Polars", category: "frameworks", icon: "polars" },
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

export const skillCategories: {
	id: SkillCategoryType;
	label: string;
}[] = [
	{ id: "languages", label: "Languages & Fundamentals" },
	{ id: "frameworks", label: "Frameworks & Libraries" },
	{ id: "databases", label: "Databases & Storage" },
	{ id: "platforms", label: "Cloud, Platforms & Tools" },
];

export const getSkillsByCategory = (category: SkillCategoryType): SkillInterface[] =>
	skills.filter((skill) => skill.category === category);

export const getSkillImages = (): string[] => [
	...new Set(
		skills
			.filter((s): s is SkillInterface & { icon: string } => Boolean(s.icon))
			.map((s) => `https://cdn.simpleicons.org/${s.icon}`),
	),
];
